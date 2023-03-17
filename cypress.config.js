const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //projectId: "93jsp2",
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',
    toConsole: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      url:"10.184.1.72"
  },
  },
});
