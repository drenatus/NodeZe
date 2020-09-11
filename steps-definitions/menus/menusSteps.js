const { Given, Then, When } = require('cucumber');

const menusActions = require('../../page-actions/menus/menusActions');



Then('clico no produto Brahma Duplo Malte', () => {
    return menusActions.clickfirstOption();
});

Then('clico no botão + 6 un.', () => {
    return menusActions.click6Un();
});

Then('clico em ADICIONAR', () => {
    return menusActions.clickAdd();
});







