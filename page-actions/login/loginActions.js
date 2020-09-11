const { client } = require('nightwatch-api');
const { test_settings } = require('../../nightwatch.conf')
const loginActions = require('../../page-elements/login/loginElements');
const login = client.page.login.loginElements();


const chromedriver = require('chromedriver')



module.exports = {

      
    loginpageVerify: () => {
        return login
                .expect
                .element('@loginpage')
                .to.be.present
                
    },

    emailfield: (email) => {
        return login
                .waitForElementVisible('@emailField',10000)
                .clearValue('@emailField')
                .setValue('@emailField', email);
    },

    passwdfield: (password) => {
        return login
                .waitForElementVisible('@passwdField',10000)
                .clearValue('@passwdField')
                .setValue('@passwdField', password);
    },


    clickSignInButton: () => {
         return login
                  .waitForElementVisible('@loginButton',10000)
                  .click('@loginButton')
                  .pause(2000)
                  
    }


}