const { Given, Then, When } = require('cucumber');

const homeActions = require('../../page-actions/home/homeActions');


Then('estou na página do Zé', () => {
    return homeActions.openZeDeliveryHomePage();
});



