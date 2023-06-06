/// <reference types="Cypress" />

describe(" Primer reto ", () =>{

})
    
    it(" ", () => {
        cy.visit("https://www.google.es/")
        cy.wait(400)

        cy.title().should("eq","Google")
        cy.wait(500)

        cy.get("#L2AGLb > .QS5gu").click()
        cy.wait(500)

        //Con estas lineas busca en el buscador.
        cy.get("#APjFqb").should("be.visible").type("Sofas de 3 plazas")
        cy.wait(500)

        //Con estas lineas borra lo escrito en el buscador.
        cy.get("#APjFqb").should("be.visible").clear()
        cy.wait(500)

        //Con estas lineas busca en el buscador por segunda vez.
        cy.get("#APjFqb").should("be.visible").type("Sofas de 2 plazas")
        cy.wait(500)

        //Con estas lineas borra lo escrito en el buscador.
        cy.get("#APjFqb").should("be.visible").clear()
        cy.wait(500)

        //Con estas lineas busca en el buscador por tercera vez.
        cy.get("#APjFqb").should("be.visible").type("Vitrinas baratas").type("{enter}")
        cy.wait(500)

        //con estas líneas selcciono imágenes de google.
        cy.get(".MUFPAc > :nth-child(2) > a").should("be.visible").click()
        cy.wait(500)

        /* cy.get(":nth-child(4) > .ZZ7G7b > .rHLoR").should("be.visible").click()
        cy.wait(500)

        //con estas lineas seleccionare una web para navegación...
        cy.get(".KZ4CUc > :nth-child(1) > .ZZ7G7b").click()
        cy.wait(500)

        cy.get(":nth-child(2) > .tzVsfd > .ZZ7G7b").click()
        cy.wait(500) */

                        
    }) // Cierre de describe