// Using Go commands
describe('Navigation Browser', function(){

    it('navigation Test', function(){
        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq','Your Store'); // Home page title 

        cy.get(':nth-child(7) > .nav-link').click();
        cy.get('h2').should("have.text", "Cameras"); //  cameras

        cy.go('back'); // go back  to home page 
        cy.title().should('eq','Your Store'); // Home page title 

        cy.go('forward');
        cy.get('h2').should("have.text", "Cameras"); //  cameras

        cy.go(-1) // Go back to home page
        cy.title().should('eq','Your Store'); // Home page title 

        cy.go(1) // Go to cameras 
        cy.get('h2').should("have.text", "Cameras"); //  cameras

        cy.go('back'); // go back  to home page 
        cy.title().should('eq','Your Store'); // Home page title 

        cy.reload();



    })
})