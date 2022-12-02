// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />   // for cypress commands
/// <reference types="Cypress-Xpath" />  // for xpath commands

Cypress.Commands.add('getIframe', function(iframe){
    return cy.get(iframe)
.its('0.contentDocument.body')
.should('be.visible')
.then(cy.wrap);

})
// import cypress from 'cypress';
import 'cypress-file-upload';
// import { filter } from 'cypress/types/bluebird';

// custom command clicking on link using label 

Cypress.Commands.add('clickLink', (label)=>{
cy.get('a').contains(label).click();
})

//over write contains()
Cypress.Commands.overwrite('contains',(originalFn, subject, filter, text, options = {})=>{
    // determine if a filter argument was passed
    if(typeof text === 'object'){
        options = text
        text = filter
        filter = undefined
    }
    options.matchCase = false

    return originalFn(subject, filter, text, options)
})
// Custom commands for login
Cypress.Commands.add("loginApp", (name,password)=>{

    // demo site : https://demo.nopcommerce.com/
    // cy.get('#Email').type(email);
    // cy.get("#Password").type(password);
    // cy.get("form > .buttons > .button-1").click();

    // masonwork site : http://mason-work.herokuapp.com/user/login"
    cy.get("input[name='username']").type(name);
    cy.get("input[type='password']").type(password);
    cy.get("button[type='submit']").click();

})
Cypress.Commands.add("LoginPractice", (name,number,email,password,address)=>{
    cy.get('#name').type(name);
    cy.get('#phone').type(number);
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#address').type(address);
    cy.get('.card-body > .btn').click();






})


