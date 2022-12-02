describe('First Test ', function () {
    it('Login', function () {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
        cy.LoginPractice("Peter", "090000000", "peter@me.co.jp", "012345678", "Tokyo bldg 2F-B");

        cy.wait(1000);
        cy.get('#female').should('be.visible')
        cy.get('#male').should('be.visible')

        // selecting radio buttons
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')

        cy.get('#monday').should('be.visible')
        cy.get('#monday').check().should('be.checked');
        cy.get('#wednesday').should('be.visible');
        cy.get('#wednesday').check().should('be.checked');

        cy.get('#friday').should('be.visible');
        cy.get('#friday').check().should('be.checked');

        cy.get('.custom-select').select("Italy");

        cy.get(':nth-child(1) > :nth-child(2) > .custom-control-label').should('be.visible');
        cy.get(':nth-child(1) > :nth-child(2) > .custom-control-label').click();
        cy.get(':nth-child(2) > :nth-child(2) > .custom-control-label').should('be.visible');
        cy.get(':nth-child(2) > :nth-child(2) > .custom-control-label').click();
    })
})