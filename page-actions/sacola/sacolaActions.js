const { client } = require('nightwatch-api');
const { test_settings } = require('../../nightwatch.conf')
const sacola = client.page.sacola.sacolaElements();


const chromedriver = require('chromedriver')



module.exports = {

    modalcheckout: () => {
    return sacola
             .waitForElementVisible('@modalcheckout',10000)
},

    continuecheckout: () => {
    return sacola
             .waitForElementVisible('@finishorder',10000)
             .click('@finishorder')
    },


    cardaddress: () => {
        return sacola
                 .waitForElementVisible('@cardaddress',10000)
    },


    checkpaydelivery: () => {
        return sacola
        .waitForElementVisible('@paydeliverytitle',10000)
        .assert.containsText('@paydeliverytitle', "PAGAMENTO NA ENTREGA")

    },

    clickmoney: () => {
        return sacola
        .waitForElementVisible('@paymentmoney',10000)
        .click('@paymentmoney') 
    },

      verifytotalorder: (totalprice) => {
        return sacola
        .waitForElementVisible('@totalorder',10000)
        .assert.containsText('@totalorder',totalprice)
     }

}