/// <reference types="Cypress" />

require('cypress-xpath'),
require("cypress-plugin-tab")

describe(" Selects ", () =>{

})
    
    it(" Selects ", () => {        
        cy.visit("https://google.es/")      
        cy.wait(100)
        cy.title().should("eq","Google")
        cy.wait(100)

        cy.xpath('//*[@id="L2AGLb"]/div').click()
        cy.wait(100)

        cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}")
        //cy.get("#SPZz6b").dblclick()
        cy.wait(100)
            
    }) // Cierre de describe