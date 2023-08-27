describe("Headers Cookies", () => {

    let authToken = null;

    before("Get Bearer Token", () => {

        cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/api-clients/",
            headers: {
                'Content-Type': "application/json"
            },
            body: {
                clientName: 'ABC',
                clientEmail: Math.random().toString(5).substring(2) + "@gmail.com"
            }

        }).then((response) => {
            authToken = response.body.accessToken;
            console.log('Bearer token is '+authToken);
        });

    });
    it('Submit orders', () => {
       cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': "application/json",
                'Authorization': 'Bearer'+authToken
            },
            body: {
                "bookId": "1",
                "customerName": "xyzabc"

            }
        }).then((response) => {
            expect(response.status).equal(201);
            expect(response.body.created).to.eq(true);
        })

    })


});







