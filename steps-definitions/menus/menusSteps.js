const { Given, Then, When } = require('cucumber');

const menusActions = require('../../page-actions/menus/menusActions');



Then('clico no card do primeiro produto', () => {
    return menusActions.clickfirstOption();
});


Then('digito {string} no campo de busca de produto', (search) => {
    return menusActions.searchProduct(search);
});

Then('clico no produto pesquisado', () => {
    return menusActions.clickSearchProduct();
});


Then('clico no botão + 6 un.', () => {
    return menusActions.click6Un();
});

Then('clico em ADICIONAR', () => {
    return menusActions.clickAdd();
});







