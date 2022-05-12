/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-testid attribute.
     * @example cy.getByData('greeting')
     */
    getByData(value: string): Chainable<Element>;
  }
}
