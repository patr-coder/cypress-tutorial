// click on link using label 
// over writing existing contains() command
// re-usable custom commands


describe('Customer Commands', function(){
    it('handling links', function(){
        cy.visit("https://demo.nopcommerce.com/");

        // Direct Without using custom commands 
        // cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();
        // cy.get('h1').should('have.text', 'Apple MacBook Pro 13-inch');

        //using custom commands 
      cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get('h1').should('have.text', 'Apple MacBook Pro 13-inch');


    })
    it("overwriting existing commands", function(){
        cy.visit("https://demo.nopcommerce.com/");

        //using custom commandss
        cy.clickLink("APPLE MACBOOK PRO 13-inch");
        cy.get('h1').should('have.text', 'Apple MacBook Pro 13-inch');
    })
    it("login command", function(){
         
        // Approach 1
        //cy.visit("https://demo.nopcommerce.com/");
        //login 
        //search
        // cy.clickLink('Log in'); // custom commands
        //cy.loginApp("patrick@masonwork.co.jp","012345678")
        // cy.get(".ico-account").should("have.text", "My account")

         /// Approach 2 
        cy.visit("http://mason-work.herokuapp.com/user/login");
        cy.loginApp("patrick@masonwork.co.jp","Masonwork2022");
        cy.wait(1000);
        cy.get('.logo > .d-none').should("have.text","メイスンワｰク株式会社");
        
       

    })
})