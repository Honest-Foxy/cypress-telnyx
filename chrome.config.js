const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com/',
    pageLoadTimeout: 500000,
    viewportHeight: 720,
    viewportWidth: 1470,
    retries: {
      runMode: 3,
      openMode: 3
    }
  }
});