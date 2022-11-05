// Hooks
//before
//after
//beforeEach
//AfterEach

describe('MyTestSuite', function(){
    before(()=>{
        cy.log('******** Launch app ****');
    })
    after(()=>{
        cy.log('*************    close App' );
    })
    this.beforeEach(()=>{
        cy.log('***************** Login ******');
    })
    this.afterEach(()=>{
        cy.log('*************** Logout ********')
    })
    it('search',function(){
        

    })
    it('advanced search', function(){

    })
    it('listing',function(){

    })
})