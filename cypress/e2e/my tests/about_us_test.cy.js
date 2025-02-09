describe('About Us Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/about'); // Замініть шлях, якщо потрібно
    });

    it('should display the about us container', () => {
        cy.get('.about-us-container').should('be.visible');
    });

    it('should contain the correct text', () => {
        cy.get('.about-us-text').should('contain.text', 'We are a small team')
            .and('contain.text', 'Our goal is to cheer you up')
            .and('contain.text', 'Very soon, the first posts');
    });
});
