/// <reference types="cypress"/>
import productCategoriesSchema from '../../contratos/categories'
import { faker } from '@faker-js/faker'

describe('Product categories', () => {
    it('Listar todas as categorias - Aceitação', () => {
        cy.getProductCategoriesWooComerce().should((listarCategoriasResponse) => {
            expect(listarCategoriasResponse.status).to.be.eq(200)
            expect(listarCategoriasResponse.body).to.have.length.greaterThan(0)
        })
    })

    it('Lista todas as categorias - Contrato', () => {
        cy.getProductCategoriesWooComerce().should((listarCategoriasResponse) => {
            for (let index = 0; index < listarCategoriasResponse.body.length; index++) {
                return productCategoriesSchema.validateAsync(listarCategoriasResponse.body[index])    
            }
        })
    })

    it('Cadastro de categorias - Aceitação', () => {
        const categoryName = faker.commerce.product() + faker.commerce.product()
        const image = 'https://cena.reset.cwi.com.br/wp-content/uploads/2022/11/T_2_front-5.jpg'
        const imageName = image.substring(57, image.indexOf('.jpg'))

        cy.postProductCategoriesWooComerce(categoryName, image).should((postCategoriesResponse) => {
            expect(postCategoriesResponse.status).to.be.eq(201)
            expect(postCategoriesResponse.body.name).to.be.eq(categoryName)
            expect(postCategoriesResponse.body.image.src).to.contains(imageName)
        })
    })

    it('Cadastro de categorias - Contrato', () => {
        const categoryName = faker.commerce.product() + faker.commerce.product()
        const image = 'https://cena.reset.cwi.com.br/wp-content/uploads/2022/11/T_2_front-5.jpg'

        cy.postProductCategoriesWooComerce(categoryName, image).should((postCategoriesResponse) => {
            return productCategoriesSchema.validateAsync(postCategoriesResponse.body)
        })
    })
})