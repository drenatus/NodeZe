const { client } = require('nightwatch-api');
const { test_settings } = require('../../nightwatch.conf')
const home = client.page.home.homeElements();


const chromedriver = require('chromedriver')



module.exports = {

      
     
    openZeDeliveryHomePage: () => {
        return home
                .navigate(test_settings.chrome.webdriver.launch_url)
                // .waitForElementVisible('@body',15000)
                .pause(1000)
               
    },


    verifyUnder18: () => {
        return home
                 .expect 
                 .element('@under18')
                 .to.be.present
    },

    verifyUnder18clickyes: () => {
        return home
                 .waitForElementVisible('@under18yes',10000)
                 .click('@under18yes') 
                 .pause(2000)
    },

    verifyHomePage: () => {
        return home
                 .waitForElementVisible('@header',10000)
                 .waitForElementVisible('@acceptCookies', 10000)
                 .click('@acceptCookies')
            
    },

    clickSignInButton: () => {
         return home
                 .waitForElementVisible('@signinButton',10000)
                 .click('@signinButton') 
                 .pause(2000)
    },


    verifyLoggedUser: (logmsg) => {
        return home
                .waitForElementPresent('@loggeduser',50000)
                .assert.containsText('@loggeduser', logmsg)
               
                
   },


   clickBeers: () => {
        return home
                .waitForElementVisible('@beersMenu')
                .click('@beersMenu')
                .pause(1000)
   },

   



    


}