describe('My suite', function(){
    it('Capture Screen', function()
    {
        cy.visit("https://demo.opencart.com/");
        cy.screenshot("home page");
        // cy.get("img[title='Your Store']").screenshot("logo");
        cy.get('#logo > a > .img-fluid').screenshot("Brand");
       

    })
    // Automatically capture screenshot & video when on failure - only when or execute through CLI
    it.only('Videos', function(){
        cy.visit("https://demo.opencart.com/");
        cy.get(':nth-child(7) > .nav-link').click();
        cy.get('h2').should("have.text","tablets");
        
    })
})