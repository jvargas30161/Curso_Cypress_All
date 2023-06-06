/// <reference types="Cypress" />

describe(" ", () =>{

})
    
    it(" ", () => {
        cy.visit("https://preprod.idpdecathlon.oxylane.com/as/authorization.oauth2?client_id=e2&response_type=code&redirect_uri=https://qa-mex.decathlon.net/e2-mx-front/develop/login&scope=openid%20profile%20email")
        cy.wait(500)

        cy.get("#labelUsername").should("be.visible").type(123456)
        cy.wait(500)

        cy.get("#password").should("be.visible").type(123456)
        cy.wait(500)
    

        }) // Cierre de describe