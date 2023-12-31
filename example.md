
# Template

Brief description

## Example Usage

```java
// Java
MobileElement el = driver.findElementByAccessibilityId("SomeId");
el.click();

```

```python
# Python
el = self.driver.find_element_by_accessibility_id('SomeId')
el.click();

```

```javascript
// Javascript
// webdriver.io example
await driver.status();

// wd example
await driver.status();

```

```ruby
# Ruby
# ruby_lib example
# Ruby Code in ruby_lib here

# ruby_lib_core example
# Ruby Code in ruby_lib_core here

```

```csharp
// C#
driver.FindElementById("elementId").Click();

```

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/example.yml)
## Description

An indepth description of what this command does


[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/example.yml)
## Support

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/example.yml)
### Appium Server

|Platform|Driver|Platform Versions|Appium Version|Driver Version|
|--------|----------------|------|--------------|--------------|
| iOS | [XCUITest](/docs/en/drivers/ios-xcuitest.md) | 1.2 to 9.3 | 1.7 to 1.9 | 1.1 to 9.9 |
|  | [UIAutomation](/docs/en/drivers/ios-uiautomation.md) | 1.0 to 9.3 | All | All |
| Android | [UiAutomator2](/docs/en/drivers/android-uiautomator2.md) | 8.0+ | 1.6.0+ | All |
|  | [UiAutomator](/docs/en/drivers/android-uiautomator.md) | 4.3+ | All | All |
| Mac | [Mac](/docs/en/drivers/mac.md) | ?+ | 1.6.4+ | All |


[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/example.yml)
### Appium Clients

|Language|Support|Documentation|
|--------|-------|-------------|
|[Java](https://github.com/appium/java-client/releases/latest)| All | [seleniumhq.github.io](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/WebElement.html#click--) |
|[Python](https://github.com/appium/python-client/releases/latest)| All | [appium.github.io](https://appium.github.io/python-client-sphinx) |
|[Javascript (WebdriverIO)](http://webdriver.io/index.html)| None |  |
|[Javascript (WD)](https://github.com/admc/wd/releases/latest)| None | [github.com](https://github.com/admc/wd/releases) |
|[Ruby](https://github.com/appium/ruby_lib/releases/latest)| All | [github.com](https://github.com/appium/ruby_lib/releases/latest) |
|[C#](https://github.com/appium/appium-dotnet-driver/releases/latest)| None | [github.com](https://github.com/appium/appium) |

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/example.yml)
## HTTP API Specifications

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/example.yml)
### Endpoint

`POST /session/:session_id/element/:element_id/click`

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/example.yml)
### URL Parameters

|name|description|
|----|-----------|
|session_id|ID of the session|
|element_id|ID of the element to blah blah blah|

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/example.yml)
### JSON Parameters

|name|type|description|
|----|----|-----------|
| item | `Object` | Description of Item |
| item.1 | `String` | Item One description |

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/example.yml)
### Response

A generic release label (i.e. "2.0rc3") (`string`)

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/example.yml)
## See Also

* [W3C Specification](https://www.w3.org/TR/webdriver/#element-click)
* [JSONWP Specification](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidelementidclick)
* [Google](http://www.google.com)
