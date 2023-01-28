describe('Handle tables',  () =>{
    beforeEach('Login',  () =>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('.btn').click();

        cy.get('.btn-close').click();

        // customers  ---> customers
        cy.get('#menu-customer > .parent').click();
        cy.get('#menu-customer>ul>li:first-child').click();



    })
})