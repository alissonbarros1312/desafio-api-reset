/// <reference types="cypress"/>
import productReviewSchema from '../../contratos/postProductReviewSchema'
import putProductReview from '../../contratos/putProductReviewSchema'
import deleteProductReview from '../../contratos/deleteProductReviewSchema'

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
            cy.putProductReview(response.body.id, 'João Souza').should((putResponse)=>{
                expect(putResponse.status).to.be.eq(200)
                expect(putResponse.body.reviewer).to.be.equal('João Souza')
            })
        })
    })
    it('Update Product Review - Contrato', ()=>{
        cy.postProductReview().should((response)=>{
            cy.putProductReview(response.body.id, 'Maria Souza').should((putResponse)=>{
                return putProductReview.validateAsync(putResponse.body)
            })
        })
    })

    it('Delete Product Review - Aceite', ()=>{
        cy.postProductReview().should((response)=>{
            cy.deleteProductReview(response.body.id).should((deleteResponse)=>{
                expect(deleteResponse.status).to.be.eq(200)
                expect(deleteResponse.body.deleted).to.be.true
            })
        })
    })
    it('Delete Product Review - Contrato', ()=>{
        cy.postProductReview().should((response)=>{
            cy.deleteProductReview(response.body.id).should((deleteResponse)=>{
                return deleteProductReview.validateAsync(deleteResponse.body)
            })
        })

    })


})