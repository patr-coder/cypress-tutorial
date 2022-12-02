describe('Data Login checking', function () {

    it('DataDrivenTest', function () {
        cy.fixture("orangehrm2").then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/")

            data.forEach((userData) => {
                cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(userData.username);
                cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(userData.password);
                cy.get('.oxd-button').click();
                cy.wait(5000)
                if (userData.username === 'Admin' && userData.password === 'admin123') {
                    cy.get('.oxd-topbar-header-title').should("have.text", userData.expected);

                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); // logout
                    cy.get("span.oxd-userdropdown-tab").click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); // logout
                } else {
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text', userData.expected);

                }
            });
        })
    })
})