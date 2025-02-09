describe('Contacts Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/contacts');
    });

    it('should display the contacts container', () => {
        cy.get('.contacts-container').should('be.visible');
    });

    it('should have a title Contact Us', () => {
        cy.get('.contacts-title').should('have.text', 'Contact Us');
    });

    it('should contain contact details', () => {
        cy.get('.contacts-details').should('contain.text', 'If you have any questions')
            .and('contain.text', 'Email')
            .and('contain.text', 'Phone')
            .and('contain.text', 'Social Media');
    });

    it('should have a working email link', () => {
        cy.get('.contact-link[href^="mailto:"]').should('have.attr', 'href', 'mailto:developer@example.com');
    });

    it('should have a working phone link', () => {
        cy.get('.contact-link[href^="tel:"]').should('have.attr', 'href', 'tel:+1234567890');
    });

    it('should have working social media links', () => {
        cy.get('.contact-link[href="https://twitter.com/developer"]').should('be.visible');
        cy.get('.contact-link[href="https://github.com/developer"]').should('be.visible');
    });
});