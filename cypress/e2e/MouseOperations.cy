import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
describe('Mouse Operation', function(){

    it('MouseHover', ()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').should('not.be.visible');
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
    
        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').should('be.visible');
    });
    it('Right Click ', ()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        // Approach 1 
       /* cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        cy.get('.context-menu-icon-copy > span').should('be.visible'); */

        // Approach 2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');
    });

    it('Double Click', ()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondbclick3")
        // cy.frameLoaded('#my-frames'); // Load the frames 

        // Approach 1 
        // cy.iframe("#my-frames").find("button[ondblclick='myFunction()]").trigger('dblclick');
        // cy.iframe('#iframe').find('#filed').should('have.value','Hello world');

        // Approach 2 
        // cy.iframe("#my-frames").find("button[ondblclick='myFunction()]").dblclick();
        // cy.iframe('#iframe').find('#filed').should('have.value','Hello world');



    });
    it('Drag and Drop Using Plugin', ()=>{
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box6').drag('#box106',{force:true});
        cy.wait(1000);
        cy.get('#box7').drag('#box107',{force:true});

    });
    it('Scrolling Page', ()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get(':nth-child(1) > tbody > :nth-child(42) > :nth-child(2)').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(42) > :nth-child(2)').should('be.visible');
        cy.get(':nth-child(1) > tbody > :nth-child(6) > :nth-child(2)').scrollIntoView({duration:200});
        cy.get(':nth-child(1) > tbody > :nth-child(6) > :nth-child(2)').should('be.visible');
        cy.get('#footer').scrollIntoView();

    });
})