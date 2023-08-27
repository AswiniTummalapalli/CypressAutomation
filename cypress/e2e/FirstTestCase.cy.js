//const cypress =require("cypress")

describe('FirstTestCase.cy.js', ()=>{
    it('Launch URL', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("//input[@placeholder='Password']").type("admin123");
        cy.get("//button[normalize-space()='Login']").click();
    })

    it('Negative Test Case', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM123')
       // cy.get("input[placeholder='Username']").type("Admin");
        //cy.get("//input[@placeholder='Password']").type("admin123");
        //cy.get("//button[normalize-space()='Login']").click();
    })
})