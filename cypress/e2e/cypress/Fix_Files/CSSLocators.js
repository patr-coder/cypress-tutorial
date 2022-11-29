describe('CSSLocators', function(){
    
    it('csslocators', function(){

        cy.visit("http://automationpratice.com/index.php")

        // cy.get("#search_query_top").type("T=Shirts") // id tags is optional
        // cy.get(".search_query_top").type("T=Shirts") // class tags is optional
        // cy.get("[name = 'search_query_top']").type("T=Shirts") // attribute tags is optional
        // cy.get("input.search_query_top[name = 'search_query']").type("T=Shirts") // tag  class attribute tags is optional

        // cy.get("[name='sumbimit_search']").click() // click
        
        // cy.get(".lighter").contains("T=Shirts") // Assertion
    })
})