/// <reference types="Cypress" />

require("cypress-plugin-tab")

describe(" Ejemplo funcion Tab  ", () =>{

})    
    it(" Tpe con Tab ", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq", "Datos Personales | TestingQaRvn")
        cy.wait(1500)

        cy.get("#wsf-1-field-21").type("{pagedown}")
        cy.wait(2500)

        //Para automatizar el tab para avanzar de un campo a otro, debemos descargar un plugin 
        // https://www.npmjs.com/package/cypress-plugin-tab
        // Lo instalamos desde el terminal:   npm install -D cypress-plugin-tab

        cy.get("#wsf-1-field-21").type("Jorge Alexander").tab().type("Vargas Pedro").tab().type("jvargas3016@yahoo.es").tab
        ().type("635648210").tab().type("Madrid")
        cy.wait(2500)
        cy.get("#wsf-1-field-27").click()
        

        
        
    }) // Cierre de describeseccion_7 copy