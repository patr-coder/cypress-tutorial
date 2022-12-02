// click on link using label 
// over writing existing contains() command
// re-usable custom commands

describe('Customer Commands', function () {
    it('handling links', function () {
        cy.visit("https://demo.nopcommerce.com/");

        //using custom commands clickLink
        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get('h1').should('have.text', 'Apple MacBook Pro 13-inch');
    })
    it('handling links', function () {
        cy.visit("https://demo.nopcommerce.com/");

        //Direct Without using custom commands 
        cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();
        cy.get('h1').should('have.text', 'Apple MacBook Pro 13-inch');
    });
    it("overwriting existing commands", function () {
        cy.visit("https://demo.nopcommerce.com/");

        //using custom commandss
        cy.clickLink("APPLE MACBOOK PRO 13-inch");
        cy.get('h1').should('have.text', 'Apple MacBook Pro 13-inch');
    })
    it("login command", function () {

        // Approach 2 
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.loginApp("Admin", "admin123");
        cy.wait(1000);
        cy.get("h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", "Dashboard");
    })
})