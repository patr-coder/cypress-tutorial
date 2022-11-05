const { nth } = require("cypress/types/lodash")

// Url : https://demo.opencart.com/admin/index.php
describe('Handle tables', function(){
    beforeEach('Login', function(){
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get('.btn').click();

        cy.get('.btn-close').click();

        // customers  ---> customers
        cy.get('#menu-customer > .parent').click();
        cy.get('#menu-customer>ul>li:first-child').click();



    })

    // it.only('check Number Rows & columns', function(){
      
    //     cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length',10);
    //     cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length',7);

    // })
    // it.skip('check cell data specific  Rows & columns', function(){

    //     cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(5)>td:nth-child(3)').contains('rs@yopmail.com');
        
    // })
    it.skip('Read all the r Rows & columns data in the first page', function(){
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })

        })
        
    })
    //  it.only('Pagination', function(){

    //    let totalPages ;
    //    cy.get('.row > .text-end').then((e)=>{
    //          let paginationText = e.text(); // Showing 1 to 10 of 5581 (559 Pages)
    //         totalPages = paginationText.substring(paginationText.indexOf("(") +1, paginationText.indexOf("Pages")-1)
    //          cy.log("Total number of pages in table is :" + totalPages);
    //      })

    //  })
   
})