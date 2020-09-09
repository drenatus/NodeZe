const assert = require('assert');
const { Given, Then, When } = require('cucumber');


const homeActions = require('../../page-actions/home/homeActions');


Then('que estou na página inicial do Zé', () => {
    return homeActions.openZeDeliveryHomePage();
});




