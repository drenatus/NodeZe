const { client } = require('nightwatch-api');
const { test_settings } = require('../../nightwatch.conf')
const vendasElements = require('../../page-elements/home/homeElements');
const home = client.page.home.homeElements();


const chromedriver = require('chromedriver')



module.exports = {

      
     
    openZeDeliveryHomePage: () => {
        return home
                .navigate(test_settings.chrome.webdriver.launch_url)
                // .waitForElementVisible('@body',15000)
                .pause(1000)
    },


}