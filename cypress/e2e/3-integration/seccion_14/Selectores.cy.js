/// <reference types="Cypress" />

describe(" Selectores  ", () =>{

})
    
    it(" Selectores  ", () => {
        cy.visit("https://www.google.es/ ")
        cy.wait(5000)

        //Copy selector
        cy.get("#W0wltc > div").click()
        cy.wait(2000)

        //copy element
        //cy.get("#div:nth-child(1) div:nth-child(1) div.KojFAc:nth-child(2) svg:nth-child(1) > path:nth-child(2)").should("be.visible").click()
        //cy.wait(2000)



        
    }) // Cierre de describe