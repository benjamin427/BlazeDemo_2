const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor')
const userRegistrationForm = require('../pageObjects/Register')

Given("navigate to the registration website", () => {
    cy.navigate_url_register_page()
})
Then("enter information", (datatable => {
    datatable.hashes().forEach(element => {
        userRegistrationForm.userInformationForm(
            element.name, element.company, element.email_address, element.password, element.confirm_password
        )
    })
}))
Then("click the register button", () => {
    cy.Register()
})
