describe('Data driven test', () => {

    it('test with multiple set of data', () => {
        cy.fixture("orangehrm2").then((data) => {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            data.forEach((userdata) => {

                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.xpath("//button[normalize-space()='Login']").click();
                cy.wait(5000)

               cy.screenshot("HomePage");
              if (userdata.username == 'Admin' && userdata.password == 'admin123') {

                    //cy.xpath("//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a").should('have.text', userdata.expect)
                                  
                    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span').click();
                    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/ul/li[4]/a').click();
                }

                else {

                    console.log(userdata.expect)
                }
                      
            })

           
        })


    })


})