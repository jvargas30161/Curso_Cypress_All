/// <reference types="Cypress" />

require('cypress-xpath'),
require("cypress-plugin-tab")

describe(" Selects ", () =>{

})
    
    it(" Selects ", () => {        
        cy.visit("https://testingqarvn.com.es/combobox-dependiente/")      
        cy.wait(100)

        cy.title().should("eq","ComboBox Dependiente | TestingQaRvn")
        cy.wait(100)

        cy.get("#wsf-1-field-54").type("Jorge Alexander")
        .tab().type("Viera Torres")
        .tab().type("juan_16985$%$@gmail.com")
        .tab().type("0034 652125635")
        .tab().type("Calle Islas Aleutianas 13 5c 28039")
        cy.get("#wsf-1-label-59-row-1").should("be.visible").click()
        cy.get("#wsf-1-label-59-row-2").should("be.visible").click()
        cy.get("#wsf-1-label-59-row-3").should("be.visible").click()
        cy.get("#wsf-1-label-60-row-1").should("be.visible").click()

        cy.get("#wsf-1-field-61").should("be.visible").select("Mac")
        cy.wait(4000)

        cy.get("#wsf-1-field-65").should("be.visible").select("Yosemite")
        cy.wait(4000)

        /* cy.get("#wsf-1-field-62").should("be.visible").click()
        cy.wait(4000)
         */
            
    }) // Cierre de describe