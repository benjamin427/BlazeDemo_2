class Login {
    login_credentials(emailAddress, password){
        cy.contains('E-Mail Address').should('have.text', 'E-Mail Address')
        cy.get('[type="email"]').type(emailAddress).should('have.value', emailAddress)
        cy.contains('Password').should('have.text', 'Password')
        cy.get('[type="password"]').type(password).should('have.value', password)
    }
}

const userLogin = new Login()
module.exports  = userLogin
