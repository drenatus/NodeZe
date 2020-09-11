const fs = require('fs');
const path = require('path')
const { setDefaultTimeout, After, AfterAll, BeforeAll, Before} = require('cucumber');
const { createSession, closeSession, startWebDriver, stopWebDriver, client } = require('nightwatch-api');
const reports = require('./reports.js');


setDefaultTimeout(60000);



BeforeAll(async () => {
  await startWebDriver({env: process.env.NIGHTWATCH_ENV});
  await createSession({env: process.env.NIGHTWATCH_ENV});
  
});



Before(function () {


});


After(function (scenario) {
  let shotPath = path.resolve(`./screenshots/${scenario.pickle.name}.png`);
 
  return new Promise((resolve, reject) => {
    client
      .saveScreenshot(shotPath)
      .then((res) => {
        resolve(res)
        return this.attach(fs.readFileSync(shotPath), 'image/png');
        
      })
  }),

  client.execute(
    `localStorage.clear();
    sessionStorage.clear();`
      )
      // .deleteCookies()
      //  .refresh()
      //  .end()   

});


AfterAll(async () => {
  await closeSession();
  await stopWebDriver()
  setTimeout(() => {
    reports.createTestReport();
  }, 1000);
});
