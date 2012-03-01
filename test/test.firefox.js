var webdriver = require("../lib/main")

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
