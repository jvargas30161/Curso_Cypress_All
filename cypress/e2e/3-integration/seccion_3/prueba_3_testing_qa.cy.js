/// <reference types = "Cypress" />

describe("Primer Test con Cypress", () => {
    it("Esto es un hola mundo desde Cypress", () => {
       cy.log("Bienvenido a Cypress")
       cy.visit("https://testingqarvn.com.es/datos-personales/")
       cy.wait(3000)

       cy.get("#wsf-1-field-21").type("Jorge Alexander")
       cy.wait(1000)

       cy.get("#wsf-1-field-22").type("Vargas Sánchez")
       cy.wait(1000)

       cy.get("#wsf-1-field-23").type("jvargas30161@gmail.com")
       cy.wait(1000)

       cy.get("#wsf-1-field-24").type("635756708")
       cy.wait(1000)

       cy.get("#wsf-1-field-28").type("Calle los palacios reales numero código postal 28039 Madrid España")
       cy.wait(1000)

       cy.get("#wsf-1-field-27").click()
       cy.wait(1000)


    })
})