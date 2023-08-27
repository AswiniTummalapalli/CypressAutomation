//const { expect } = require("chai");

describe('API Testing', ()=>{
const queryParam={page:2};

//it("Get Method", ()=>{

//cy.request('GET', "https://reqres.in/api/users?page=2")

//.its('status')
//.should('equal', 200);
//})

it.only('query params', ()=>
    { cy.request({
       

        method: 'GET',
        url: 'https://reqres.in/api/users',
        qs:queryParam
    })
.then((response)=>{
    expect(response.status).equal(200);
    expect(response.body.page).equal(2);
})

    })


})