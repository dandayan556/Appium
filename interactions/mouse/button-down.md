[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/interactions/mouse/button-down.yml)
# Button Down

Click and hold the left mouse button at the current mouse coordinates
[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/interactions/mouse/button-down.yml)
## Example Usage

```java
// Java
Actions action = new Actions(driver);
action.moveTo(element);
action.clickAndHold();
action.perform();

```

```python
# Python
actions = ActionChains(driver)
actions.move_to_element(element)
actions.click_and_hold()
actions.perform()

```

```javascript
// Javascript
// webdriver.io example
driver.moveTo(element);
driver.buttonDown();

// wd example
await driver.moveTo(element);
await driver.buttonDown();

```

```ruby
# Ruby
# ruby_lib example
action.move_to(element).click_and_hold.perform

# ruby_lib_core example
@driver.action.move_to(element).click_and_hold.perform

```

```csharp
// C#
Actions action = new Actions(driver);
action.MoveToElement(element);
action.ClickAndHold();
action.Perform();

```

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/interactions/mouse/button-down.yml)
## Description

Note that the next mouse-related command that should follow is buttonup . Any other mouse command (such as click or another call to buttondown) will yield undefined behavior


[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/interactions/mouse/button-down.yml)
## Support

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/interactions/mouse/button-down.yml)
### Appium Server

|Platform|Driver|Platform Versions|Appium Version|Driver Version|
|--------|----------------|------|--------------|--------------|
| iOS | [XCUITest](/docs/en/drivers/ios-xcuitest.md) | None | None | None |
|  | [UIAutomation](/docs/en/drivers/ios-uiautomation.md) | None | None | None |
| Android | [UiAutomator2](/docs/en/drivers/android-uiautomator2.md) | None | None | None |
|  | [Espresso](/docs/en/drivers/android-espresso.md) | None | None | None |
|  | [UiAutomator](/docs/en/drivers/android-uiautomator.md) | None | None | None |
| Mac | [Mac](/docs/en/drivers/mac.md) | ?+ | 1.6.4+ | All |
| Windows | [Windows](/docs/en/drivers/windows.md) | 10+ | 1.6.0+ | All |


[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/interactions/mouse/button-down.yml)
### Appium Clients

|Language|Support|Documentation|
|--------|-------|-------------|
|[Java](https://github.com/appium/java-client/releases/latest)| All | [seleniumhq.github.io](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/interactions/Actions.html#clickAndHold--) |
|[Python](https://github.com/appium/python-client/releases/latest)| All | [selenium-python.readthedocs.io](http://selenium-python.readthedocs.io/api.html#selenium.webdriver.common.action_chains.ActionChains.click_and_hold) |
|[Javascript (WebdriverIO)](http://webdriver.io/index.html)| All |  |
|[Javascript (WD)](https://github.com/admc/wd/releases/latest)| All | [github.com](https://github.com/admc/wd/blob/master/lib/commands.js#L1625) |
|[Ruby](https://github.com/appium/ruby_lib/releases/latest)| All | [www.rubydoc.info](https://www.rubydoc.info/gems/selenium-webdriver/Selenium/WebDriver/ActionBuilder:click_and_hold) |
|[C#](https://github.com/appium/appium-dotnet-driver/releases/latest)| All | [github.com](https://github.com/SeleniumHQ/selenium/blob/master/dotnet/src/webdriver/Interactions/Actions.cs) |

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/interactions/mouse/button-down.yml)
## HTTP API Specifications

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/interactions/mouse/button-down.yml)
### Endpoint

`POST /session/:session_id/buttondown`

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/interactions/mouse/button-down.yml)
### URL Parameters

|name|description|
|----|-----------|
|session_id|ID of the session to route the command to|

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/interactions/mouse/button-down.yml)
### JSON Parameters

|name|type|description|
|----|----|-----------|
| button | `number` | Which button, {LEFT = 0, MIDDLE = 1 , RIGHT = 2}. Defaults to the left mouse button if not specified |

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/interactions/mouse/button-down.yml)
### Response

null

[//]: # (DO NOT EDIT THIS FILE! This is an auto-generated file. Editing for this document happens in /commands-yml/commands/interactions/mouse/button-down.yml)
## See Also

* [JSONWP Specification](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#sessionsessionidbuttondown)
