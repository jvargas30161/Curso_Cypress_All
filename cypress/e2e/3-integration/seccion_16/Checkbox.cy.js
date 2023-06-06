/// <reference types="Cypress" />

require("cypress-xpath")
require("cypress-plugin-tab")

describe(" Checkbox ", () =>{

})
    
    it(" Check Uno  ", () => {        
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/") 
        cy.wait(500)
        cy.title().should("eq","Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(500)
        cy.get("#wsf-1-field-29").should("be.visible").click().type("Jorge Alexander")
        cy.wait(500)
        .tab().type("Villegas Torres")
        .tab().type("juliobenites136@gmail.com")
        .tab().type("625452250")
        .tab().type("Barrio del PIlar cerca a Vaguada")
        cy.get("#wsf-1-label-36-row-1").should("be.visible").click()
        cy.wait(500)
        cy.get("#wsf-1-label-36-row-2").should("be.visible").click()   //cy.get("[type='checkbox']").check().should("be.checked")
        cy.wait(500)
        cy.get("#wsf-1-label-36-row-3").should("be.visible").click()   //.should("be.checked")
        cy.wait(1500)
        cy.get("#wsf-1-label-36-row-3").should("be.visible").click()   //.should("be.checked")
        cy.wait(1500)
        cy.get("#wsf-1-field-34").should("be.visible").click()
        cy.wait(500)   
        
        
        // url checkbox (https://www.tutorialspoint.com/checkbox-verification-with-cypress)

    }) // Cierre de describe