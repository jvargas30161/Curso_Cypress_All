/// <reference types="Cypress" />

describe(" Opciones de Click ", () =>{

})
    
    it.only(" Click force true ", () => {
        cy.visit("https://app.plus500.com/")
        cy.wait(1500)
        
        cy.get("#realMoney > :nth-child(1) > .btn > strong").should("be.visible").click({force: true})
        cy.wait(1500)
        
        cy.get("#newUserEmail").should("be.visible").type("jvargas3016@yahoo.es")
        cy.wait(500)

        cy.get("#newUserPassword").should("be.visible").type("Nicolas120212")
        cy.wait(500)

        cy.get("#newUserSubmit").should("be.visible").click()
        cy.wait(500)

        cy.get(".menu-nav-btn").should("be.visible").click()
        cy.wait(500)

        cy.get("#menu-Account").should("be.visible").click()
        
        cy.wait(500)

        cy.get("#menu-VerificationCenter > :nth-child(2)").should("be.visible").click({force: true})
        cy.wait(500)

        }) // Cierre de describe