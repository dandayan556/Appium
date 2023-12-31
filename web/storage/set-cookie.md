[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/storage/set-cookie.yml)
# Set Cookie

Set a cookie (Web context only)
[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/storage/set-cookie.yml)
## Example Usage

```java
// Java
driver.manage().addCookie(new Cookie("foo", "bar"));

```

```python
# Python
self.driver.add_cookie({name: 'foo', value: 'bar'})

```

```javascript
// Javascript
// webdriver.io example
driver.setCookies([{
  name: 'myCookie',
  value: 'some content'
}]);

// wd example
let cookies = await driver.setCookie({name: 'foo', value: 'bar'});

```

```ruby
# Ruby
# ruby_lib example
manage.add_cookie(:name => 'foo', :value => 'bar')

# ruby_lib_core example
@driver.manage.add_cookie(:name => 'foo', :value => 'bar')

```

```csharp
// C#
driver.Manage().Cookies.AddCookie(new Cookie("foo", "bar"));

```


[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/storage/set-cookie.yml)
## Support

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/storage/set-cookie.yml)
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


[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/storage/set-cookie.yml)
### Appium Clients

|Language|Support|Documentation|
|--------|-------|-------------|
|[Java](https://github.com/appium/java-client/releases/latest)| All | [seleniumhq.github.io](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/remote/RemoteWebDriver.RemoteWebDriverOptions.html#addCookie-org.openqa.selenium.Cookie-) |
|[Python](https://github.com/appium/python-client/releases/latest)| All | [selenium-python.readthedocs.io](http://selenium-python.readthedocs.io/api.html#selenium.webdriver.remote.webdriver.WebDriver.add_cookie) |
|[Javascript (WebdriverIO)](http://webdriver.io/index.html)| All |  |
|[Javascript (WD)](https://github.com/admc/wd/releases/latest)| All | [github.com](https://github.com/admc/wd/blob/master/lib/commands.js#L1971) |
|[Ruby](https://github.com/appium/ruby_lib/releases/latest)| All | [www.rubydoc.info](https://www.rubydoc.info/gems/selenium-webdriver/Selenium/WebDriver/Manager#add_cookie-instance_method) |
|[C#](https://github.com/appium/appium-dotnet-driver/releases/latest)| All | [github.com](https://github.com/SeleniumHQ/selenium/blob/master/dotnet/src/webdriver/Remote/RemoteCookieJar.cs) |

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/storage/set-cookie.yml)
## HTTP API Specifications

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/storage/set-cookie.yml)
### Endpoint

`POST /session/:sessionId/cookie`

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/storage/set-cookie.yml)
### URL Parameters

|name|description|
|----|-----------|
|session_id|ID of the session to route the command to|

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/storage/set-cookie.yml)
### JSON Parameters

|name|type|description|
|----|----|-----------|
| cookie | `object` | The cookie to add |

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/storage/set-cookie.yml)
### Response

null

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/web/storage/set-cookie.yml)
## See Also

* [W3C Specification](https://www.w3.org/TR/webdriver/#dfn-delete-cookie)
* [JSONWP Specification](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidcookie)
