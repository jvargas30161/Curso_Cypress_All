/// <reference types="Cypress" />

describe(" Introducción a los assert  ", () =>{

})
    
    it(" Demo de los asserts ", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq", "Datos Personales | TestingQaRvn")
        cy.wait(1000)

        cy.get("#wsf-1-field-21").should("be.visible").type("Jorge Alexander")
        cy.wait(1000)
        cy.get("#wsf-1-field-22").should("be.visible").type("Vargas  Sánchez")
        cy.wait(1000)
        cy.get("#wsf-1-field-23").should("be.visible").should("be.enabled").type("jvargas3016@gmail.com")
        cy.wait(1000)
        cy.get("#wsf-1-field-24").should("be.visible").type("0034 654 668 980")
        cy.wait(1000)
        cy.get("#wsf-1-field-28").should("be.visible").type("Madrid España")
                
    }) // Cierre de describe