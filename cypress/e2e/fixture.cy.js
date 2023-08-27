describe('fixture.cy.js', () => {
    /*it("fixture1", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')


        cy.fixture('orangehrm').then((data) => {

            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            //cy.xpath("//button[normalize-space()='Login']").click();
            cy.xpath("//button[normalize-space()='Login']").click();
            cy.xpath("//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a").should('have.text', data.expect)


        })

    }) */
before(()=>{
    cy.fixture("orangehrm").then((data) => {

        let userdata = data;
})

    it("FixturesMethod2", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
      
            cy.get("input[placeholder='Username']").type(userdata.username);
            cy.get("input[placeholder='Password']").type(userdata.password);
            cy.xpath("//button[normalize-space()='Login']").click(); 

            cy.xpath("//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a").should('have.text', userdata.expect)


        })



    })

})