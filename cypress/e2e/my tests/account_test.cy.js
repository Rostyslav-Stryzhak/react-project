describe('Account Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/account');
    });

    it('should display the registration form', () => {
        cy.get('h2').contains('Register').should('be.visible');
        cy.get('form').contains('Register').parent().within(() => {
            cy.get('input[name="username"]').should('be.visible');
            cy.get('input[name="password"]').should('be.visible');
            cy.get('input[name="confirmPassword"]').should('be.visible');
            cy.get('button').contains('Register').should('be.visible');
        });
    });

    it('should display the login form', () => {
        cy.get('h2').contains('Login').should('be.visible');
        cy.get('form').contains('Login').parent().within(() => {
            cy.get('input[name="username"]').should('be.visible');
            cy.get('input[name="password"]').should('be.visible');
            cy.get('button').contains('Login').should('be.visible');
        });
    });

    it('should show error message if passwords do not match', () => {
        cy.get('form').contains('Register').parent().within(() => {
            cy.get('input[name="username"]').type('testuser');
            cy.get('input[name="password"]').type('password123');
            cy.get('input[name="confirmPassword"]').type('wrongpassword');
            cy.get('button').contains('Register').click();
        });
        cy.contains('Passwords do not match').should('be.visible');
    });

    it('should log in and log out successfully', () => {
        cy.get('form').contains('Login').parent().within(() => {
            cy.get('input[name="username"]').type('testuser');
            cy.get('input[name="password"]').type('password123');
            cy.get('button').contains('Login').click();
        });
        cy.contains('Welcome').should('be.visible');
        cy.get('button').contains('Logout').click();
        cy.contains('You have logged out successfully!').should('be.visible');
    });
});
