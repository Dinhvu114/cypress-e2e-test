describe('SauceDemo Test', () => {

  it('Login success', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.url().should('include', '/inventory')

  })

  it('Login fail', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('wrong')
    cy.get('#password').type('wrong')

    cy.get('#login-button').click()

    cy.get('[data-test="error"]').should('be.visible')

  })

  it('Add product to cart', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.inventory_item button').first().click()

    cy.get('.shopping_cart_badge').should('contain', '1')

  })

})