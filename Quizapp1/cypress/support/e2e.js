// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Test for homepage
it('should display the correct title on the homepage', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h2').contains('Your guided path to programming enlightenment').should('be.visible');
  });

  
  it('should display the correct title on the Account Page', () => {
    cy.visit('http://localhost:3000/account');
    cy.get('h1').contains('Account').should('be.visible');
  });
 
  it('should display the correct title on the Quiz Page', () => {
    cy.visit('http://localhost:3000/quiz-generation');
    cy.get('h1').contains('Quiz Generation Options').should('be.visible');
  });
  
  it('should display the correct instructions on the Quiz Page', () => {
    cy.visit('http://localhost:3000/quiz-generation');
    cy.get('p').contains('Please choose your preferences below to generate your personalized quiz').should('be.visible');
  });