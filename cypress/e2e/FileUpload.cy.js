describe('File Upload', function () {

    it('Single Upload', function () {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile('xs517544.key');
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get('h3').should('have.text', 'File Uploaded!');

    })
    it('File Upload-Rename', function () {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#file-upload').attachFile({
            filePath: 'xs517544.key',
            fileName: 'sshKey.key'
        });
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get('h3').should('have.text', 'File Uploaded!');

    })
    it('File-Drag-Drop', function () {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get('#drag-drop-upload').attachFile('xs517544.key', {
            subjectType: 'drag-n-drop'
        });
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('xs517544.key');
        cy.wait(5000);
    })
})