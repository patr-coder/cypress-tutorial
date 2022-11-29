describe("check UI Elements", function(){

    it("Check Radio ButTons", function(){

        // open web site
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get('#female').should('be.visible')
        cy.get('#male').should('be.visible')

        // selecting radio buttons
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')
    })

    it("Checking check boxes Radio", function(){

        // open web site
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of the element
        cy.get('#monday').should('be.visible')

        // Selecting single check box -monday
        cy.get('#monday').check().should('be.checked')

        // Unselecting checkbox
        cy.get('#monday').uncheck().should('not.be.checked')

        //selecting all check boxes 
        cy.get(".form-check-input[type='checkbox']").check().should('be.checked')

        // Unselecting all check boxes
        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //selecting first check box 
        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')

        // selecting last check box 
        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')

    
    })
})