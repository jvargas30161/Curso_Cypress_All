/// <reference types="Cypress" />

describe(" Ejemplo de TypeUp, pageDown ", () =>{
    
    it(" Type pageUp", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq", "Datos Personales | TestingQaRvn")
        cy.wait(2500)

        cy.get("#wsf-1-field-21").type("{pageup}")
        cy.wait(2000)
        
    })
        it.only(" Type primero", () => {
            cy.visit("https://testingqarvn.com.es/datos-personales/")
            cy.title().should("eq", "Datos Personales | TestingQaRvn")
            cy.wait(2500)
    
            cy.get("#wsf-1-field-21").type("{pagedown}")
            cy.wait(2000)

        })

        it(" Type pageDown", () => {
            cy.visit("https://testingqarvn.com.es/datos-personales/")
            cy.title().should("eq", "Datos Personales | TestingQaRvn")
            cy.wait(2500)
        
            cy.get("#wsf-1-field-21").type("{pagedown}")
            cy.wait(2000)

        })

        it(" Type pageDown", () => {
            cy.visit("https://testingqarvn.com.es/datos-personales/")
            cy.title().should("eq", "Datos Personales | TestingQaRvn")
            cy.wait(2500)
        
            cy.get("#wsf-1-field-21").type("{pagedown}")
            cy.wait(2000)

        })

        it.only(" Type ultimo", () => {
            cy.visit("https://testingqarvn.com.es/datos-personales/")
            cy.title().should("eq", "Datos Personales | TestingQaRvn")
            cy.wait(2500)
        
            cy.get("#wsf-1-field-21").type("{pagedown}")
            cy.wait(2000)  
    
    })
              
    }) // Cierre de describe
   
