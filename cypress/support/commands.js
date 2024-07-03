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

Cypress.Commands.add("navigate_url_login_page", () => {
    cy.visit("https://blazedemo.com/login")
    cy.get('a').invoke('attr', 'href').then(href => {
        cy.request(href).its('status').should('eq', 200)
    })
})
Cypress.Commands.add("navigate_url_register_page", () => {
    cy.visit("https://blazedemo.com/register")
    cy.get('a').invoke('attr', 'href').then(href => {
        cy.request(href).its('status').should('eq', 200)
    })
})
Cypress.Commands.add("navigate_url_password_reset", () => {
    cy.visit("https://blazedemo.com/password/reset")
    cy.get('a').invoke('attr', 'href').then(href => {
        cy.request(href).its('status').should('eq', 200)
    })
})
Cypress.Commands.add("dashboard_menu_option_blazedemo", () => {
    cy.contains('BlazeDemo').should('have.text', 'BlazeDemo')
    cy.contains('BlazeDemo').last().click()
})
Cypress.Commands.add("dashboard_menu_option_login", () => {
    cy.contains('Login').should('have.text', 'Login')
    cy.contains('Login').last().click()
})
Cypress.Commands.add('dashboard_menu_option_register', () => {
    cy.contains('Register').should('have.text', 'Register')
    cy.contains('Register').last().click()
})
Cypress.Commands.add("login_button", () => {
    cy.get('[type="submit"]').last().click({force: true})
})
Cypress.Commands.add("remember_me_checkbox", () => {
    cy.contains('Remember Me').should('have.text', 'Remember Me')
    cy.get('[type="checkbox"]').last().click()
})
Cypress.Commands.add("forgot_password_link", () => {
    cy.contains('Forgot Your Password?').should('have.text', 'Forgot Your Password?')
    cy.get('.btn btn-link').parent().click()
})
Cypress.Commands.add("Register", () => {
    cy.get('[type="submit"]').last().click({force: true})
})
Cypress.Commands.add("send_password_reset_link_button", () => {
    cy.get('[type="submit"]').last().click({force: true})
})