//const { expect } = require("chai");

describe('Post Request', ()=>{


it('post call through fixture', ()=>{

    cy.fixture('apiReqBody').then((data)=>{

        const requestBody=data;

        cy.request(
            
            {
                method:'POST',
                url:'https://reqres.in/api/users',
                body:requestBody
        }).then((response)=>{
        expect(response.status).to.eq(201)
        expect(response.body).has.property('name', requestBody.name)
        expect(response.body.name).to.eq(requestBody.name)


        })




    })


})


})