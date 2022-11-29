// const cypress = require("cypress")
// const { it} = require("mocha")




describe('XPathLocators', function(){

    it('find no of products', function(){
        cy.visit("https://amazon.com/index.html")
        // cy.xpath("//ul[@id='product]/li").should('have.length',7)
    })
})