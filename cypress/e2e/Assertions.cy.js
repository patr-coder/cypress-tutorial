// const {describe} = require("mocha")

describe("Assertion-demo", function(){

    it.skip("Implicit assertions", function(){

        cy.visit("https://masonwork.org/user/login")

        //should and
        cy.url().should('include', 'masonwork.org')
        cy.url().should('eq','https://masonwork.org/user/login')
        cy.url().should('contain','masonwork.org/user/login')

       // second way with one url three should

        cy.url().should('include', 'masonwork.org')
        .should('eq','https://masonwork.org/user/login')
        .should('contain','masonwork.org/user/login')

        //third way with url should and two and 
                                
        cy.url().should('include', 'masonwork.org')
        .and('eq','https://masonwork.org/user/login')
        .and('contain','masonwork.org/user/login')
        cy.title().should('include','Login')
        .and('contain','Lo')
        
        cy.get('.d-none').should('be.visible') // logo visisble
        cy.get('.d-none').should('exist') // logo existing

        // All link in website
        
        cy.xpath("//a").should("have.length",'5') // No of link
        cy.get('.input-group > .form-control').type('email') // provide email
        cy.get('.input-group > .form-control').should('have.value','email')
})

// Explicit assertions

it("explicit assertions", function(){

    cy.visit("https://masonwork.org/user/login")
    cy.get('.input-group > .form-control').type('patrick@masonwork.co.jp')
    cy.get(':nth-child(3) > .form-control').type('Masonwork2023')
    cy.get('.btn').click()

    let expName="管理者 管理者";
    cy.get('.dropdown-header > h6').then( (x)=>{
        let actName=x.text()

        //BDD Style
        expect(actName).to.equal(expName)
        // expect(actName).to.not.equal(expName)

        //TDD style 
        assert.equal(actName,expName)
        // assert.notEqual(actName,expName)

    })

    
})
})