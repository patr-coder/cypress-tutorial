describe('handle tab-s', function () {

    // approach 1
    it('Approach 1', function () {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);
        cy.go('back');
    })

    // Approach2
    it('Approach 2', function () {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example > a').then((e) => {
            let url = e.prop('href');
            cy.visit(url)
        })
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);
        cy.go('back');
    })
})