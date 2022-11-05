describe('File Upload', function(){

    it('Single Upload', function(){
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('xs517544.key');
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get('h3').should('have.text','File Uploaded!');

    })
    it('File Upload-Rename', function(){
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({filePath:'xs517544.key', fileName:'sshKey.key'});
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get('h3').should('have.text','File Uploaded!');

    })
    it('File-Drag-Drop',function(){
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('xs517544.key',{subjectType:'drag-n-drop'});
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('xs517544.key');
        cy.wait(5000);

    })
    it('Multiple Uploads',function(){
        cy.visit("https://masonwork.org/user/login")
    cy.get('.input-group > .form-control').type('patrick@t-partners.co.jp')
    // cy.wait(5000);
    cy.get(':nth-child(3) > .form-control').type('Masonwork2023')
    // cy.wait(5000);
    cy.get('.btn').click()
    // cy.wait(5000);
    cy.get('.justify-content-between > .bi').click();
    cy.get('.justify-content-between > .bi').should('be.visible');
    cy.get(':nth-child(2) > .nav-link > span').click();
    cy.get(':nth-child(2) > .nav-link > span').should('be.visible')
    cy.get('#forms-nav > li > a > span').click()
    cy.get('#create-expense-tab').click();
    // cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('travel');
    // cy.get(':nth-child(1) > :nth-child(2) > .form-control').should('be.visible');
    cy.get('.file-upload-input').attachFile(["img.png","images.png"]);
    cy.get('form > :nth-child(1) > :nth-child(2) > .row').should('be.visible');
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').scrollIntoView({duration:'2000'});
    })
    it.skip('Multiple Uploads',function(){
        cy.visit("")
    })        
    it('File upload', function(){

    })
    it('File-shadow',function(){
        cy.visit("https://www.htmlelements.com/demos/")
        // cy.get('.smart',{includeShadowDom:true}).attachFile('xs517544.key');
        // cy.wait(5000);
        // cy.get('.smart',{includeShadowDom:true}).contains('xs517544.key');


    })
})