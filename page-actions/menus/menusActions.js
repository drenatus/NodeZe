const { client } = require('nightwatch-api');
const { test_settings } = require('../../nightwatch.conf')
const menuActions = client.page.menus.menuElements();


const chromedriver = require('chromedriver')



module.exports = {

 clickfirstOption: () => {
    return menuActions
             .waitForElementVisible('@firstbeeroption',10000)
             .click('@firstbeeroption')
},

 click6Un: () => {
    return menuActions
            .waitForElementVisible('@addAmount6',10000)
            .click('@addAmount6')
},

clickAdd: () => {
    return menuActions
            .waitForElementVisible('@prodamount',10000)
            .click('@prodamount')
}

}