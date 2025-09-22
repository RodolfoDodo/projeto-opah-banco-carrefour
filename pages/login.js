const { I } = inject();

module.exports = {

  campos: {
    email: '~input-email',
    senha: '~input-password'
  },

  botao: {
    login: '~button-LOGIN'
  },

  logarSistema(email, senha) {
    I.click('-android uiautomator:new UiSelector().text(\"󰍂\")')

    I.fillField(this.campos.email, email)
    I.fillField(this.campos.senha, senha)
    I.click(this.botao.login)
  }
}
