const { Given, Then, When } = require('cucumber');

const loginActions = require('../../page-actions/login/loginActions');


Then('sou direcionado para a página de Login', () => {
    return loginActions.loginpageVerify();
});


Then('preencho o campo E-MAIL com o email {string}', (email) => {
    return loginActions.emailfield(email);
});

Then('preencho o campo SENHA com a senha {string}', (senha) => {
    return loginActions.passwdfield(senha);
});

Then('clico no botão ENTRAR da pagina de login', () => {
    return loginActions.clickSignInButton();
});