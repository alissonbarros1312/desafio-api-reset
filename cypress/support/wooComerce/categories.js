/// <reference types="cypress"/>
import token from '../../fixtures/token.json'

Cypress.Commands.add('getProductCategoriesWooComerce', () => {
    cy.request({
        method: 'GET',
        url: Cypress.config('baseUrl') + '/products/categories',
        headers: {
            Authorization: token.token,
        }
    })
})

Cypress.Commands.add('postProductCategoriesWooComerce', (name, imgSrc) => {
    cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl') + '/products/categories',
        headers: {
            Authorization: token.token
        },
        body: {
            name: name,
            image: {
                src: imgSrc
            }
        }
    })
})