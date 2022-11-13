/// <reference types="cypress"/>
import productReviewSchema from '../../contratos/productReviewSchema'

describe('Product Review', ()=>{

    it('Create Product Review - Aceite', ()=>{
        cy.postProductReview().should((response)=>{
            expect(response.status).to.be.eq(201)
            expect(response.body.reviewer_email).to.be.equal('john.doe@example.com')
        })
    })

    it('Create Product Review - Contrato', ()=>{
        cy.postProductReview().should((response)=>{
            return productReviewSchema.validateAsync(response.body)
        })
    })
    it('Update Product Review - Aceite', ()=>{
        cy.postProductReview().should((response)=>{
            cy.putProductReview(response.body.id, 'João Souza').should((responsePut)=>{
                expect(responsePut.status).to.be.eq(200)
                expect(responsePut.body.reviewer).to.be.equal('João Souza')
            })
        })
    })
    it('Delete Product Review - Aceite', ()=>{
        cy.postProductReview().should((response)=>{
            cy.deleteProductReview(response.body.id).should((responseDelete)=>{
                expect(responseDelete.status).to.be.eq(200)
                expect(responseDelete.body.deleted).to.be.true
            })
        })
    })


})