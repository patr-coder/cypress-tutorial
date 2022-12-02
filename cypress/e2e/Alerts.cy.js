describe('Alerts' , function(){
    //1) javascript alert: It will have some text and an 'ok' button
it('Js Alerts', function(){
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    // cy.get("button[onclick='jsAlert()']").click();
    cy.get(':nth-child(1) > button').click();
    cy.on('window:alert', function(t){
        expect(t).to.contains('I am a JS Alert');

    })

    // alert window automatically closed by cypress 

    cy.get('#result').should('have.text','You successfully clicked an alert')
})

    //2) Javascript alert: It will have some text with 'ok an  buttons 
    it('Js Confirm Ok button', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        // cy.get("button[onclick='jsAlert()']").click();
        cy.get(':nth-child(2) > button').click();
        cy.on('window:confirm', function(t){
            expect(t).to.contains('I am a JS Confirm');
    
        })
    
        // alert window automatically closed by cypress 
    
        cy.get('#result').should('have.text','You clicked: Ok')
    })

     //2) Javascript alert: It will have some text with 'ok an cancel buttons 
     it('Js Confirm Cancel button', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        // cy.get("button[onclick='jsAlert()']").click();
        cy.get(':nth-child(2) > button').click();
        cy.on('window:confirm', function(o){
            expect(o).to.contains('I am a JS Confirm');
    
        })
        // cy.on('window:confirm',function(){
        //     false});
        cy.on('window:confirm',()=>false);  // cypress confirm closes alert window using cancel button 
    
    
        // alert window automatically closed by cypress 
        cy.get('#result').should('have.text','You clicked: Cancel');
    })
    

    //3) Javascript Prompt Alert : IT will have some text with a text for user input  along with 'ok'
    it('Js prompt alert  ', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
        cy.window().then((win) =>{
    
            cy.stub(win,'prompt').returns('welcome')
    
        })
        cy.get(':nth-child(3) > button').click()
    
        // alert window automatically closed by cypress 
        cy.get('#result').should('have.text','You entered: welcome');
    
    })
    it('Js prompt alert cancel ', function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) =>{
            cy.stub(win,'prompt').returns('welcome')

        })
        cy.get(':nth-child(3) > button').click()
        // cy.on('window:prompt',()=>false); 
        // alert window automatically closed by cypress 
        cy.get('#result').should('have.text','You entered: welcome');
 })

 //4) Authenticated alert
 it('Authenticated alert',function(){
    
    // approach 1
    cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
    {
        username: 'admin', 
        password: 'admin'
    }
 });
cy.get('p').should('have.contain', 'Congratulations! You must have the proper credentials.')

 })
 it('Authenticated masonwork login',function(){
     //approach 2

    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
 cy.get('p').should('have.contain', 'Congratulations! You must have the proper credentials.')
  })
})
  