describe('App', () => {
    it('calculates circular neckband length', () => {
        cy.visit('http://localhost:3000/');

        cy.contains('Circle')
            .click()
            .should('have.data', 'selected', true);

        cy.contains('Neck Band Width')
            .next()
            .find('input')
            .type('5');

        cy.contains('Seam Allowance')
            .next()
            .find('input')
            .type('1');

        cy.contains('Diameter')
            .next()
            .find('input')
            .type('18');

        cy.get('p')
            .last()
            .should('have.text', 'The neck band needs to be 53.8cm long, including seam allowances.');
    });

    it('calculates elliptical neckband length', () => {
        cy.visit('http://localhost:3000/');

        cy.contains('Ellipse')
            .click()
            .should('have.data', 'selected', true);

        cy.contains('Neck Band Width')
            .next()
            .find('input')
            .type('5');

        cy.contains('Seam Allowance')
            .next()
            .find('input')
            .type('1');

        cy.contains('Diameter 1')
            .next()
            .find('input')
            .type('18');

        cy.contains('Diameter 2')
            .next()
            .find('input')
            .type('14');

        cy.get('p')
            .last()
            .should('have.text', 'The neck band needs to be 88.7cm long, including seam allowances.');
    });
});
