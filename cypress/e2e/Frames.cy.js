import 'cypress-iframe';
describe('Iframe', function(){

    it('Approach iframe 1', function(){
        cy.visit("https://the-internet.herokuapp.com/iframe");
        const iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
        iframe.clear().type("Welcome Mr Patrick!!! {cmd+a}");
        cy.get('[aria-label="Bold"] > .tox-icon > svg > path').click();    
    })
    it('Approach iframe 2 -by using custom command', function(){

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.getIframe('#mce_0_ifr').clear().type("Welcome Mr Patrick!!! {cmd+a}");
        cy.get('[aria-label="Bold"] > .tox-icon > svg > path').click();  
    })
    // command npm install -D cypress-iframe
    // import 'cypress-iframe';
    it('Approach iframe 3 -by using cypress-iframe plugin', function(){

        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('#mce_0_ifr')
        cy.getIframe('#mce_0_ifr').clear().type('I am Patrick {cmd+a}');
        cy.get('[aria-label="Bold"] > .tox-icon > svg > path').click();     
    })
})