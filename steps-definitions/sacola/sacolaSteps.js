const { Given, Then, When } = require('cucumber');

const sacolaSteps = require('../../page-actions/sacola/sacolaActions');



Then('vejo aberta a modal SACOLA', () => {
    return sacolaSteps.modalcheckout();
});


Then('clico no botão CONTINUAR COMPRA', () => {
    return sacolaSteps.continuecheckout();
});

Then('sou direcionada para a página de CHECKOUT', () => {
    return sacolaSteps.cardaddress();
});

Then('clico no botão SELECIONAR FORMA DE PAGAMENTO', () => {
    return sacolaSteps.continuecheckout();
});

Then('sou direcionado para a PÁGINA DE PAGAMENTO', () => {
    return sacolaSteps.checkpaydelivery();
});

Then('clico na opção DINHEIRO', () => {
    return sacolaSteps.clickmoney();
});

Then('vejo o campo VALOR DO SEU PEDIDO com o total de R$ {string}', (totalprice) => {
    return sacolaSteps.verifytotalorder(totalprice);
});

