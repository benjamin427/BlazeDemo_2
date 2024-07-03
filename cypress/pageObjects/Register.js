class Register {
    userInformationForm(name, company, emailAddress, password, confirmPassword) {
        cy.contains('Name').should('have.text', 'Name')
        cy.get('#name').type(name).should('have.value', name)
        cy.contains('Company').should('have.text', 'Company')
        cy.get('#company').type(company).should('have.value', company)
        cy.contains('E-Mail Address').should('have.text', 'E-Mail Address')
        cy.get('#email').type(emailAddress).should('have.value', emailAddress)
        cy.contains('Password').should('have.text', 'Password')
        cy.get('#password').type(password).should('have.value', password)
        cy.contains('Confirm Password').should('have.text', 'Confirm Password')
        cy.get('#password-confirm').type(confirmPassword).should('have.value', confirmPassword)
    }
}

const userRegistrationForm = new Register()
module.exports = userRegistrationForm
