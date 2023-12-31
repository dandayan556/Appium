[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/window/set-window.yml)
# Switch to Window

Change focus to another window (Web context only)
[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/window/set-window.yml)
## Example Usage

```java
// Java
driver.switchTo().window("handle");

```

```python
# Python
self.driver.switch_to.window("handle")

```

```javascript
// Javascript
// webdriver.io example
driver.switchToWindow("handle");

// wd example
await driver.window("handle");

```

```ruby
# Ruby
# ruby_lib example
switch_to.window("handle")

# ruby_lib_core example
@driver.switch_to.window("handle")

```

```csharp
// C#
driver.SwitchTo().Window("handle");

```


[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/window/set-window.yml)
## Support

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/window/set-window.yml)
### Appium Server

|Platform|Driver|Platform Versions|Appium Version|Driver Version|
|--------|----------------|------|--------------|--------------|
| iOS | [XCUITest](/docs/en/drivers/ios-xcuitest.md) | None | None | None |
|  | [UIAutomation](/docs/en/drivers/ios-uiautomation.md) | None | None | None |
| Android | [UiAutomator2](/docs/en/drivers/android-uiautomator2.md) | None | None | None |
|  | [Espresso](/docs/en/drivers/android-espresso.md) | None | None | None |
|  | [UiAutomator](/docs/en/drivers/android-uiautomator.md) | None | None | None |
| Mac | [Mac](/docs/en/drivers/mac.md) | None | None | None |
| Windows | [Windows](/docs/en/drivers/windows.md) | None | None | None |


[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/window/set-window.yml)
### Appium Clients

|Language|Support|Documentation|
|--------|-------|-------------|
|[Java](https://github.com/appium/java-client/releases/latest)| All | [seleniumhq.github.io](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/WebDriver.TargetLocator.html#window-java.lang.String-) |
|[Python](https://github.com/appium/python-client/releases/latest)| All | [selenium-python.readthedocs.io](http://selenium-python.readthedocs.io/api.html#selenium.webdriver.remote.webdriver.WebDriver.switch_to_window) |
|[Javascript (WebdriverIO)](http://webdriver.io/index.html)| All |  |
|[Javascript (WD)](https://github.com/admc/wd/releases/latest)| All | [github.com](https://github.com/admc/wd/blob/master/lib/commands.js#L317) |
|[Ruby](https://github.com/appium/ruby_lib/releases/latest)| All | [www.rubydoc.info](https://www.rubydoc.info/gems/selenium-webdriver/Selenium/WebDriver/Remote/W3C/Bridge:switch_to_window) |
|[C#](https://github.com/appium/appium-dotnet-driver/releases/latest)| All | [github.com](https://github.com/SeleniumHQ/selenium/blob/master/dotnet/src/webdriver/Remote/RemoteTargetLocator.cs) |

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/window/set-window.yml)
## HTTP API Specifications

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/window/set-window.yml)
### Endpoint

`POST /session/:session_id/window`

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/window/set-window.yml)
### URL Parameters

|name|description|
|----|-----------|
|session_id|ID of the session to route the command to|

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/window/set-window.yml)
### JSON Parameters

|name|type|description|
|----|----|-----------|
| name | `string` | (For MJSONWP) The window to change focus to |
| handle | `string` | (For W3C) The window to change focus to |

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/window/set-window.yml)
### Response

null

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/window/set-window.yml)
## See Also

* [W3C Specification](https://www.w3.org/TR/webdriver/#dfn-switch-to-window)
* [JSONWP Specification](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidwindow)
