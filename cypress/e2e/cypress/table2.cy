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
    it('Pagination', function(){ 
        /* let totalPages ;
        cy.get('.row > .text-end').then((e)=>{
              let paginationText = e.text(); // Showing 1 to 10 of 5581 (559 Pages)
             totalPages = paginationText.substring(paginationText.indexOf("(") +1, paginationText.indexOf("Pages")-1)
              cy.log("Total number of pages in table is :" + totalPages);
          })*/
          let totalPages = 5;
          for (let p=1; p <= totalPages; p++)
          {
             if(totalPages > 1)
             {
                 cy.log("Active page is  ===="+p);
                 // cy.get("class['.page-link']>li:nth-child(+p+)").click();
                 cy.get(':nth-child(5) > .page-link').click();
                 cy.wait(3000);
                 cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                 .each(($row , index, $rows)=>{
                     cy.wrap($row).within(()=>{
                         cy.get('td:nth-child(3)').then((e)=>{
                             
                             cy.log(e.text()); // email
    
                         })
    
                     })
    
                 })
    
             }
    
          }
      })

})
