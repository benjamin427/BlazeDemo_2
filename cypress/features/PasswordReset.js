const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor')
const recover_reset_password = require('../pageObjects/PasswordReset')

Given("navigate to the website url", () => {
    cy.navigate_url_password_reset()
})
Then("enter email address", (datatable => {
    datatable.hashes().forEach(element => {
        recover_reset_password.reset_password(element.email_address)
    })
}))
Then("click the password reset link button", () => {
    cy.send_password_reset_link_button()
})
