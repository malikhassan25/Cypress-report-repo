describe('login Automation Test', () => {
    beforeEach(() => {
        // Visit the Register page before each test
        cy.visit('/login');
    });
    // Test Case for visibility of Input Fields and Sign-Up Button
    it('visibility of Input Fields and Sign-Up Button', () => {
        cy.get('[name="first_name"]').should('be.visible');
        cy.get('[name="last_name"]').should('be.visible');

        cy.get('.btn-submit1').should('be.visible');
    });
});