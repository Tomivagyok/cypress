const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.globalsqa.com',
        supportFile: false,
        specPattern: 'cypress/e2e/**/*.cy.js'
    },
})