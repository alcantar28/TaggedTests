import { defineConfig } from 'cypress';
import dotenv from 'dotenv';
import { beforeRunHook } from 'cypress-mochawesome-reporter/lib';

// Load the environment variables from the local .env file
if (process.env.ENV === undefined) {
  dotenv.config({ path: './.env' });
}

export default defineConfig({
  retries: {
    // Configure retry attempts for `cypress run`
    runMode: 4,
    // Configure retry attempts for `cypress open`
    openMode: 4
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      require('cypress-failed-log/on')(on);
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      //We need to specifically fill the config.baseUrl environment variable because it is predefined by Cypress
      config.baseUrl = process.env.BASE_URL;
      //Copy the rest of the environment variables to config.env, so Cypress can access them via Cypress.env()
      config.env = process.env;

      return config;
    }
  }
});
