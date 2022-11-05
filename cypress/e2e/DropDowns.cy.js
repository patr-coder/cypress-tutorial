ndescribe('handle dropdowns', function(){

    it('Dropdown with select', function(){

        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country')
        .select('Canada')
        .should('have.value','Canada')
    })
    it('Dropdown with select', function(){

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Canada').type('{enter}')
        
        cy.get('#select2-billing_country-container')
        .should('have.text','Canada')     
    })

    it('Dropdown with select', function(){

        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestion-title').contains('Delhi University').click()
    })
    it.only(' Dynamic Dropdown with select', function(){

        cy.visit('https://www.google.com/')
        cy.get("input[name='q']").type('cypress automation')
        // first way to get 
        cy.get('div.wM6W7d>span').should('have.length',11)
        cy.get('div.wM6W7d>span').contains('cypress automation tutorial').click()
        

        // second way to get 

        // cy.get('div.wM6W7d>span').each(($el, index, $list) => {

             // $el is a wrapped jQuery element
        //     if ($el.text() === 'cypress automation') {

        //       cy.wrap($el).click()
        //     } 
        //   })
        cy.get("input[name='q']").should('have.value', 'cypress automation tutorial')
        
    })
    
    
})