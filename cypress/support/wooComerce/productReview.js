/// <reference types="cypress"/>
import token from  '../../fixtures/token.json'
import { faker } from '@faker-js/faker'

Cypress.Commands.add('postProductReview', ()=>{
    cy.request({
        method: 'POST',
        url: Cypress.config('baseUrl') + '/products/reviews',
        headers: {
            Authorization: token.token,
            ContentType: "application/json" 
        },
        body: {
            "product_id": 22,
            "review": faker.word.verb(),
            "reviewer": faker.name.fullName(),
            "reviewer_email": "john.doe@example.com",
            "rating": 5
        }
    })

    Cypress.Commands.add('putProductReview', (id, reviewer)=>{
        cy.request({
            method: 'PUT',
            url: Cypress.config('baseUrl') + `/products/reviews/${id}`,
            headers: {
                Authorization: token.token,
                ContentType: "application/json"
            },    
            body:{
                "reviewer": reviewer
            }  

        })
    })

    Cypress.Commands.add('deleteProductReview', (id)=>{
        cy.request({
            method: 'DELETE',
            url: Cypress.config('baseUrl') + `/products/reviews/${id}?force=true`,
            headers:{
                Authorization: token.token,
                ContentType: 'application/json'
            }
        })
    })
})