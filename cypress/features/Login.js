const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor')
const userLogin = require('../pageObjects/Login')

Given("navigate to the website", () => {
    cy.navigate_url_login_page()
})

Then("enter login credentials", (datatable => {
    datatable.hashes().forEach(element => {
        userLogin.login_credentials(element.email_address, element.password)
    })
}))

Then("click login button", () => {
    cy.login_button();
})
