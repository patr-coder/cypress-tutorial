// const { nth } = require("cypress/types/lodash")
describe('Handle', function(){
    beforeEach("Login", function(){
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('.btn').click();

        cy.get('.btn-close').click();

        // customers  ---> customers
        cy.get('#menu-customer > .parent').click();
        cy.get('#menu-customer>ul>li:first-child').click();

    })
    // it('check Number Rows & columns', function(){
    //        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length',10);
    //      cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length',7);
       
    // })
     
     it('check cell data specific  Rows & columns', function(){
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)>td:nth-child(3)').contains('rs@yopmail.com');
     })
     it('Read all the r Rows & columns data in the first page', function(){
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
        })
     })
})


