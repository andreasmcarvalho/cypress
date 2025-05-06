const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    supportFile: "cypress/support/e2e.js", // Habilita o arquivo de suporte
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // plugins aqui se necessário
    },
  },
});
