const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://telnyx.com/',
    pageLoadTimeout: 500000,
    viewportHeight: 864,
    viewportWidth: 1536,
    retries: {
      runMode: 3,
      openMode: 3
    }
  }
});