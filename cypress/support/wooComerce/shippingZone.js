/// <reference types="cypress"/>
import token from '../../fixtures/token.json'

Cypress.Commands.add('postShippingZone', (name) => {
    cy.request({
        method: "POST",
        url: Cypress.config('baseUrl') + '/shipping/zones',
        headers: {
            Authorization: token.token,
            ContentType: "application/json"
        },
        body: {
            "name": name 
        }
    })
})

Cypress.Commands.add('putShippingZone', (id, name) => {
    cy.request({
        method: "PUT",
        url: Cypress.config('baseUrl') + `/shipping/zones/${id}`,
        headers: {
            Authorization: token.token,
            ContentType: "application/json"
        },
        body: {
            "name": name 
        }
    })
})

Cypress.Commands.add('deleteShippingZone', (id) => {
    cy.request({
        method: "DELETE",
        url: Cypress.config('baseUrl') + `/shipping/zones/${id}?force=true`,
        headers: {
            Authorization: token.token,
            ContentType: "application/json"
        }
    })
})
