const { client } = require('nightwatch-api');
const { test_settings } = require('../../nightwatch.conf')
const vendasElements = require('../../page-elements/venda/vendaElements');


const chromedriver = require('chromedriver')



module.exports = {

      
     
    vendaVerify: () => {
        return classSchedule
                .expect
                .element('@loginpage')
                .to.be.present;
    }


}