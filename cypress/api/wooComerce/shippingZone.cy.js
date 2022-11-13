/// <reference types="cypress"/>
import shippingZoneSchema from '../../contratos/shippingZones';

describe('Shipping zone - WooCommerce', () =>{
    it('Post Shipping Zone -Aceite', () => {
        cy.postShippingZone("Brazil").should((response) => {
            expect(response.status).to.be.eq(201)
            expect(response.body.name).to.be.equal("Brazil")
        })
    })

    it('Create shipping zone - Contrato', () => {
        cy.postShippingZone("Brazil").should((response) => {            
            return shippingZoneSchema.validateAsync(response.body)        
        })
    })
    
    it('Update shipping zone - Aceite', () => {
        cy.postShippingZone("Brazil").should((response) => {
            cy.putShippingZone(response.body.id, "Argentina").should((responsePut) => {
                expect(responsePut.status).to.be.eq(200)
                expect(responsePut.body.name).to.be.equal("Argentina")
            })
        })
    })
    
    //delete não foi feito em aula:
    it('Delete shipping zone - Aceite', () => {
        cy.postShippingZone("Brazil").should((response) => {
            cy.deleteShippingZone(response.body.id).should((responseDelete) => {
                expect(responseDelete.status).to.be.eq(200)                
            })
        })
    })
    
})