/// <reference types="Cypress" />

require('cypress-xpath'),
require("cypress-plugin-tab")

describe(" Selects wihit them ", () =>{

})
    
    it(" Selects ", () => {        
        cy.visit("https://phptravels.net/")      
        cy.wait(500)

        cy.title().should("eq","PHPTRAVELS | Travel Technology Partner - PHPTRAVELS")
        cy.wait(500)

        //cy.xpath('//*[@id="languages"]').click()
        //cy.wait(1500)
        //cy.get('flag-icon flag-icon-es mr-1').select("Spanish")
        //cy.wait(1500)

        //cy.xpath("#//*[@id="flights-tab"]/span[2]/span").should("be.visible").select()
       // cy.wait() 
        


    
    }) // Cierre de describe