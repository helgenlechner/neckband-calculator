describe('App', () => {
    it('calculates circular neckband length', () => {
        cy.visit('http://localhost:3000/');

        cy.get('[data-test-id="shape-circle"]')
            .click()
            .should('have.data', 'selected', true);

        cy.get('[data-test-id="neck-band-width"]')
            .type('5');

        cy.get('[data-test-id="seam-allowance"]')
            .type('1');

        cy.get('[data-test-id="circle-diameter"]')
            .type('18');

        cy.get('[data-test-id="result"]')
            .should('have.text', 'The neck band needs to be 55.4cm long, including seam allowances.');
    });

    it('calculates elliptical neckband length', () => {
        cy.visit('http://localhost:3000/');

        cy.get('[data-test-id="shape-ellipse"]')
            .click()
            .should('have.data', 'selected', true);

        cy.get('[data-test-id="neck-band-width"]')
            .type('5');

        cy.get('[data-test-id="seam-allowance"]')
            .type('1');

        cy.get('[data-test-id="ellipse-diameter-one"]')
            .type('18');

        cy.get('[data-test-id="ellipse-diameter-two"]')
            .type('14');

        cy.get('[data-test-id="result"]')
            .should('have.text', 'The neck band needs to be 49.3cm long, including seam allowances.');
    });

    it('resets the form after selecting a different shape', () => {
        cy.visit('http://localhost:3000/');

        cy.get('[data-test-id="shape-ellipse"]')
            .click()
            .should('have.data', 'selected', true);

        cy.get('[data-test-id="neck-band-width"]')
            .type('5');

        cy.get('[data-test-id="seam-allowance"]')
            .type('1');

        cy.get('[data-test-id="ellipse-diameter-one"]')
            .type('18');

        cy.get('[data-test-id="ellipse-diameter-two"]')
            .type('14');

        cy.get('[data-test-id="shape-circle"]')
            .click()

        cy.get('[data-test-id="neck-band-width"]')
            .should('have.value', '');

        cy.get('[data-test-id="seam-allowance"]')
            .should('have.value', '');

        cy.get('[data-test-id="circle-diameter"]')
            .should('have.value', '');

        cy.get('[data-test-id="result"]')
            .should('not.exist');
    });
});
