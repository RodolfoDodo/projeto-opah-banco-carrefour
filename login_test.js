Feature('login');

const {I, loginPage} = inject()

Scenario('Login Com Sucesso', ({}) => {
    loginPage.logarSistema('lihong1376@uorak.com', 'Dodo@940808')
    I.wait(5)
    I.waitForText('Success');
});

Scenario('Login Com Email Invalido', ({}) => {
    loginPage.logarSistema('texto', 'Dodo@940808')
    I.waitForText('Please enter a valid email address')
});

Scenario('Login Com Senha Invalido', ({}) => {
    loginPage.logarSistema('lihong1376@uorak.com', 'dsf')
    I.waitForText('Please enter at least 8 characters')
});

