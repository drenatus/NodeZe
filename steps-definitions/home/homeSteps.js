const assert = require('assert');
const { Given, Then, When } = require('cucumber');


const homeActions = require('../../page-actions/home/homeActions');


Then('que estou na página inicial do Zé', () => {
    return homeActions.openZeDeliveryHomePage();
});

Then('vejo a mensagem VOCÊ TEM 18 ANOS OU MAIS?', () => {
    return homeActions.verifyUnder18();
});

Then('clico em Sim', () => {
    return homeActions.verifyUnder18clickyes();
});

Then('vejo a página principal do Zé', () => {
    return homeActions.verifyHomePage();
});

Then('clico no botão ENTRAR na Home Page', () => {
    return homeActions.clickSignInButton();
});

Then('sou redirecionado para a Home Page, e vejo a mensagem {string}', (logmsg) => {
    return homeActions.verifyLoggedUser(logmsg);
});


Then('clico na opção CERVEJAS', () => {
    return homeActions.clickBeers();
});

