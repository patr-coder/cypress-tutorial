describe('MyTestSuite', function(){

    it('DataForeach 3', function(){
        cy.fixture('orangehrm2.json').then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            data.forEach((DataUser)=>{
                // Username 
                cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(DataUser.username);
                // Password
                cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(DataUser.password);
                // Validation Button 
                cy.get('.oxd-button').click();

                // Verification credentials
                if(DataUser.username === 'Admin' && DataUser.password === 'admin123'){
                    // successfully message
                    // cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',DataUser.expected);
                    cy.get('.oxd-topbar-header-title').should("have.text",DataUser.expected);

                    
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();

                }
                else{
                    // Alert Error Messages
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text', DataUser.expected);

                }
            })
        })
    })
})