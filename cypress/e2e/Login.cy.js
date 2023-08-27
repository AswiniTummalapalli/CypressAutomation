//const cypress =require("cypress")

describe('FirstTestCase.cy.js', ()=>{
    it("Login", ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        //cy.xpath("//button[normalize-space()='Login']").click();
        cy.xpath("//button[normalize-space()='Login']").click();
        //cy.xpath("//i[@class='oxd-icon bi-chevron-left']").click();

        
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul').xpath(".//li").should('have.have.length',12);

    })

//    it('chained-xpath', () =>{

  //  })

})