/// <reference types="cypress" />

require('./commands')

// NOTE: `./index.d.ts` currently extends the global Cypress types and does not define `registerCypressGrep`,
//so the import path is directly pointed to the `support.js` file
import registerCypressGrep from '@cypress/grep/src/support';
registerCypressGrep();
