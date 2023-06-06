/// <reference types="Cypress" />

describe(" Opciones de Click por coordenadas x,y", () =>{

})
    
    it(" Click por coordenadas x,y ", () => {
        cy.visit("https://app.plus500.com/")
        cy.wait(300)
        
        cy.get("#realMoney > :nth-child(1) > .btn > strong").should("be.visible").click()
        cy.wait(300)
        
        cy.get("#newUserEmail").should("be.visible").type("jvargas3016@yahoo.es")
        cy.wait(300)

        cy.get("#newUserPassword").should("be.visible").type("Nicolas120212")
        cy.wait(5000)

        cy.get("#newUserChat > span").click()
        cy.wait(5000)

        cy.get(".login-logo > span").should("be.visible").click(5,5)
        cy.wait(5000)

        cy.get(".login-logo > span").should("be.visible").click(3,2)
        cy.wait(5000)

        }) // Cierre de describe