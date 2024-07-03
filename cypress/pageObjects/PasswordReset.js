class Password_Recover {
    reset_password(emailAddress) {
        cy.contains('E-Mail Address').should('have.text', 'E-Mail Address')
        cy.get('[type="email"]').type(emailAddress).should('have.value', emailAddress)
    }
}
const recover_reset_password = new Password_Recover()
module.exports = recover_reset_password
