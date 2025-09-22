// const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// // turn on headless mode when running with HEADLESS=true environment variable
// // export HEADLESS=true && npx codeceptjs run
// setHeadlessWhen(process.env.HEADLESS);

// // enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
// setCommonPlugins();

// /** @type {CodeceptJS.MainConfig} */
// exports.config = {
//   tests: './*_test.js',
//   output: './output',
//  helpers: {
//   Appium: {
//   //   app: 'bs://34f84d88e810d1748dbd01b1ff0204ea8b0a1e00',
//   //       host: "hub-cloud.browserstack.com",
//   //        port: 4444,
//   //          user: process.env.BROWSERSTACK_USERNAME || 'lucasoliveira_8C6MHt',
//   // key: process.env.BROWSERSTACK_ACCESS_KEY || 'przxsMvybdHGTzckXkpM',
//     app: '/home/usuario/Downloads/android.wdio.native.app.v1.0.8.apk',  // Caminho correto para o APK
//     platform: 'Android',
//     desiredCapabilities: {
//       deviceName: 'emulator-5554',  // Nome do emulador ou dispositivo real
//       platformVersion: '16',  // Versão do Android no dispositivo ou emulador
//       automationName: 'UiAutomator2',  // Nome da automação
//       appPackage: 'com.wdiodemoapp',  // Nome do pacote do aplicativo
//       appActivity: '.MainActivity',  // Atividade principal do app
//       platformName: 'Android',  // Nome da plataforma
//     },
//     basePath: '/wd/hub'
//   }
// },

//   include: {
//     I: './steps_file.js',
//     loginPage: "./pages/login.js",
//   },
//   name: 'projeto'
// }



const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: 'bs://34f84d88e810d1748dbd01b1ff0204ea8b0a1e00',
      host: 'hub.browserstack.com',
      port: 443,
      protocol: 'https',
      user: process.env.BROWSERSTACK_USERNAME || 'lucasoliveira_8C6MHt',
      key: process.env.BROWSERSTACK_ACCESS_KEY || 'przxsMvybdHGTzckXkpM',
      platform: 'Android',
      desiredCapabilities: {
        platformName: 'Android',
        deviceName: 'Samsung Galaxy S22 Ultra',
        platformVersion: '12.0',
        automationName: 'UiAutomator2',
        appPackage: 'com.wdiodemoapp',
        appActivity: '.MainActivity',
        'bstack:options': {
          projectName: 'CodeceptJS Appium Test',
          buildName: 'Build 1',
          sessionName: 'App Launch Test',
          debug: true,
          networkLogs: true
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login.js",
  },
  name: 'projeto'
}