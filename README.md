# q-wd.js - A light weight WebDriver/Se2 client for node.js

[admc/q](https://github.com/admc/wd) adapted to use promises from [Q](https://github.com/kriskowal/q)

## Authors

  - Adam Christian ([admc](http://github.com/admc))
  - Ruben Daniels ([javruben](https://github.com/javruben))
  - Peter Braden ([peterbraden](https://github.com/peterbraden))
  - Stuart Knightley ([Stuk](https://github.com/Stuk))

## Usage

```javascript
var webdriver = require("q-wd")

var browser = webdriver.remote();
browser.init({browserName:"firefox"}).then(function() {
  return browser.get("http://www.jelly.io");
}).then(function() {
  return browser.eval("window.location.href");
}).then(function(o) {
  console.log(o);
  return browser.get("http://www.seleniumhq.org");
}).then(function() {
  return browser.quit();
}).then(function() {
  console.log("DONE");
});
```

## Supported Methods

```
  - 'close': Close the browser
  - 'quit': Quit the session
  - 'eval': Eval JS and return the value (takes a code string)
  - 'execute': Eval JS (takes a code string)
  - 'executeAsync': Execute JS in an async way (takes a code string)
  - 'get': Navigate the browser to the provided url (takes a URL)
  - 'setWaitTimeout': Set the implicit wait timeout in milliseonds (takes wait time in ms)
  - 'element': Access an element in the page (takes 'using' and 'value' so ex: 'id', 'idofelement')
  - 'moveTo': Move an element on the page (takes element, xoffset and yoffset'
  - 'scroll': Scroll on an element (takes element, xoffset, yoffset)
  - 'buttonDown': Click and hold the left mouse button down, at the coords of the last moveTo
  - 'buttonUp': Release the left mouse button
  - 'click': Click a mouse button, at the coords of the last moveTo (takes a button param for {LEFT = 0, MIDDLE = 1 , RIGHT = 2})
  - 'doubleClick': Double click a mouse button, same coords as click
  - 'type': Type! (takes an element, a key character, or an array of char keys)
  - 'active': Get the element on the page currently with focus
  - 'keyToggle': Press a keyboard key (takes an element and a key character'
```

## More docs!

WD is simply implementing the Selenium JsonWireProtocol, for more details see the official docs: <a href="http://code.google.com/p/selenium/wiki/JsonWireProtocol">http://code.google.com/p/selenium/wiki/JsonWireProtocol</a>

