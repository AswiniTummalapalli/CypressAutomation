describe('Json Parsing', () => {
    it('simple json parsing', () => {

        let totalPrice = 0;
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs: { limit: 5 }

        })
            .then((response) => {
                expect(response.status).to.eq(200)
                response.body.forEach(element => {
                    totalPrice = totalPrice + element.price;
                });
                expect(totalPrice).to.equal(899.23)
                expect(response.body[0].id).equal(1)
                expect(response.body[0].title).equal('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
            })
    })

})