var webdriver = require("../lib/main")

var browser = webdriver.remote("ondemand.saucelabs.com", 80, "username", "access-key");
browser.init(function() {
  browser.get("http://www.jelly.io", function() {
    browser.eval("window.location.href", function(ao) {
      console.log(o);
      browser.get("http://www.seleniumhq.org", function() {
        browser.quit(function() {
          console.log("DONE");
        })
      })
    })
  })
})
