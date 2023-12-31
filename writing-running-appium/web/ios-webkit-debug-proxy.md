## iOS WebKit Debug Proxy

For accessing web views on real iOS device appium uses [ios_webkit_debug_proxy](https://github.com/google/ios-webkit-debug-proxy).

### Installation

#### Using Homebrew

To install the latest tagged version of the ios-webkit-debug-proxy using
Homebrew, run the following commands in the terminal:

 ``` shell
 # The first command is only required if you don't have brew installed.
 $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
 $ brew update
 $ brew install ios-webkit-debug-proxy
 ```

#### Building ios-webkit-debug-proxy from source

Open the command terminal on your linux machine. You can find instructions on how to open the
terminal via your favorite search engine.

```shell
$ cd  ~
$ sudo apt-get install autoconf automake libusb-dev libusb-1.0-0-dev libplist-dev libplist++-dev usbmuxd libtool libimobiledevice-dev
$ git clone https://github.com/google/ios-webkit-debug-proxy.git
$ cd ios-webkit-debug-proxy
$ ./autogen.sh
$ make
$ sudo make install
```

#### Running ios-webkit-debug-proxy

Once installed you can start the proxy with the following command:

```
# Change the udid to be the udid of the attached device and make sure to set the port to 27753
# as that is the port the remote-debugger uses. You can learn how to retrieve the UDID from
# Apple's developer resources.
> ios_webkit_debug_proxy -c 0e4b2f612b65e98c1d07d22ee08678130d345429:27753 -d
```

You can also set the desired capability called `startIWDP` to `true` (see the [desired capabilities docs](/docs/en/writing-running-appium/caps.md)). This will run the above command as a subprocess from within Appium and will set the udid, so you don't have to run `ios_webkit_debug_proxy` yourself anymore. It monitors the proxy for crashes and relaunches when needed.

```
// example desired capabilities
{
  "browserName": "Safari",
  "platformName": "iOS",
  "deviceName": "iPhone 7",
  "automationName": "XCUITest",
  "startIWDP": true,
  "udid": "auto"
}
```

You may also use `ios-webkit-debug-proxy-launcher`, a small script included with the Appium codebase, to launch the
proxy. It monitors the proxy log for errors, and relaunch the proxy
where needed. This is also optional and may help with recent devices:

```
# change the udid
# note, this is run from an Appium repository
> ./bin/ios-webkit-debug-proxy-launcher.js -c 0e4b2f612b65e98c1d07d22ee08678130d345429:27753 -d
```

**NOTE:** the proxy requires the **"web inspector"** to be turned on to
allow a connection to be established. Turn it on by going to **settings >
safari > advanced**.

#### Specifying non-default port

Appium expects `ios-webkit-debug-proxy` to be running on port `27753`. If, for whatever reason,
this needs to be changed, the `webkitDebugProxyPort` desired capability can be
set with the port on which it the proxy is running.
