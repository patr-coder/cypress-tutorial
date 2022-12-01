// describe('MyTestSuite', function(){

//     //Direct Access 
//     it.skip('FixturesDemoTest', function(){
//         cy.visit("https://opensource-demo.orangehrmlive.com/");
//         cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
//         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
//         cy.get('.oxd-button').click();
//         cy.wait(5000);
//         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',"PIM");

//     })
//     //Direct Access With Fixtures File
//     it.skip('FixturesDemoTest', function(){
//         cy.visit("https://opensource-demo.orangehrmlive.com/");

//         cy.fixture('orangehrm.json').then((data)=>{
//             cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username);
//             cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password);
//             cy.get('.oxd-button').click();
//             cy.wait(5000);
//             cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',data.expected);

//         })
//     })
//     //Access though Hook - For multiple it bocks
//     it('FixturesDemoTest',function(){
//         cy.visit("https://opensource-demo.orangehrmlive.com/");
//         let userData;
//         beforeAll( ()=>{
//             cy.fixture("orangehrm.json").then((data)=>{
//                 userData = data;
//             })
//         })  
//     })
//     it('FixturesDemoTest', function(){
//         cy.visit("https://opensource-demo.orangehrmlive.com/");
//         cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(userData.username);
//             cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(userData.password);
//             cy.get('.oxd-button').click();
//             cy.wait(5000);
//             cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userData.expected);


//     })

// })