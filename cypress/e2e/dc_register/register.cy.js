
import userData from '../../fixtures/userData.json';

describe('Register Automation Test', () => {
    beforeEach(() => {
        // Visit the Register page before each test
        cy.visit('/signup');
    });
    // Test Case for visibility of Input Fields and Sign-Up Button
    it('visibility of Input Fields and Sign-Up Button', () => {
        cy.get('[name="first_name"]').should('be.visible');
        cy.get('[name="last_name"]').should('be.visible');
        cy.get('[type="email"]').should('be.visible');
        cy.get('.onlynumeric').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.get('#password_confirmation').should('be.visible');
        cy.get('.btn-submit1').should('be.visible');
    });

    // Test Case for user Sign-up with valid credentials
    it('User Sign-up with valid credentials', () => {
        const { user_firstname, user_lastname, email, phone_no, password, confirm_password } = userData.users[0];
        // Fill in the Register form with valid credentials
        cy.get('[name="first_name"]').type(user_firstname);
        cy.get('[name="last_name"]').type(user_lastname);
        cy.get('[type="email"]').type(email);
        cy.get('.onlynumeric').type(phone_no);
        cy.get('#password').type(password);
        cy.get('#password_confirmation').type(confirm_password);
        // Click on the Sign-Up button
        cy.get('.btn-submit1').click();
        // Assert that the user is Registered successfully by checking the URL
        cy.url().should('include', '/profile');
    });

    // Test case for submitting form with an invalid email format
    it('Displays Error Message for Invalid Email Format', () => {
        const { user_firstname, user_lastname, email, phone_no, password, confirm_password } = userData.users[1];
        // Fill in the Register form with invalid email format
        cy.get('[name="first_name"]').type(user_firstname);
        cy.get('[name="last_name"]').type(user_lastname);
        cy.get('[type="email"]').type(email);
        cy.get('.onlynumeric').type(phone_no);
        cy.get('#password').type(password);
        cy.get('#password_confirmation').type(confirm_password);
        // Click on the Sign-Up button
        cy.get('.btn-submit1').click();
        // Assertions for error message visibility
        cy.contains('Please enter a valid email address.').should('be.visible');
    });

    // Test case for submitting form with password and confirm password mismatch
    it('Display error message for password mismatch on the sign-up form', () => {
        const { user_firstname, user_lastname, email, phone_no, password, confirm_password } = userData.users[2];
        // Fill in the Register form with password mismatch
        cy.get('[name="first_name"]').type(user_firstname);
        cy.get('[name="last_name"]').type(user_lastname);
        cy.get('[type="email"]').type(email);
        cy.get('.onlynumeric').type(phone_no);
        cy.get('#password').type(password);
        cy.get('#password_confirmation').type(confirm_password);
        // Click on the Sign-Up button
        cy.get('.btn-submit1').click();
        // Assertions for error message visibility
        cy.contains("Confirm password doesn't match with password.").should('be.visible');
    });

    // Test case for user sigup with email already registered
    it('Display error message with email already registered', () => {
        const { user_firstname, user_lastname, email, phone_no, password, confirm_password } = userData.users[3];
        // Fill in the Register form with already registered email
        cy.get('[name="first_name"]').type(user_firstname);
        cy.get('[name="last_name"]').type(user_lastname);
        cy.get('[type="email"]').type(email);
        cy.get('.onlynumeric').type(phone_no);
        cy.get('#password').type(password);
        cy.get('#password_confirmation').type(confirm_password);
        // Click on the Sign-Up button
        cy.get('.btn-submit1').click();
        // Assertions for error message visibility
        cy.contains('The email has already been taken.').should('be.visible');
    });

    // Test case for submitting form with an invalid phone number format
    it('Displays Error Message for Invalid Phone Number Format', () => {
        const { user_firstname, user_lastname, email, phone_no, password, confirm_password } = userData.users[4];
        // Fill in the Register form with invalid phone number format
        cy.get('[name="first_name"]').type(user_firstname);
        cy.get('[name="last_name"]').type(user_lastname);
        cy.get('[type="email"]').type(email);
        cy.get('.onlynumeric').type(phone_no);
        cy.get('#password').type(password);
        cy.get('#password_confirmation').type(confirm_password);
        // Click on the Sign-Up button
        cy.get('.btn-submit1').click();
        // Assertions for error message visibility
        cy.contains('Please enter at least 11 characters.').should('be.visible');
    });

    //Test case for submitting form with missing required fields
    it('Displays Error Message for Incomplete Form Submission', () => {
        const { user_firstname, user_lastname, email, phone_no, password, confirm_password } = userData.users[5];
        // Fill in the Register form with missing required fields
        cy.get('[name="first_name"]').type(user_firstname);
        cy.get('[name="last_name"]').type(user_lastname);
        cy.get('[type="email"]').type(email);
        cy.get('.onlynumeric').clear(phone_no);
        cy.get('#password').type(password);
        cy.get('#password_confirmation').type(confirm_password);
        // Click on the Sign-Up button
        cy.get('.btn-submit1').click();
        // Assertions for error message visibility
        cy.contains('This field is required.').should('be.visible');
    });
}); 
