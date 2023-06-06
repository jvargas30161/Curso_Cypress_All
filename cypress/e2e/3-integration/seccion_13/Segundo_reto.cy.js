/// <reference types="Cypress" />

require("cypress-plugin-tab")
//("cypress-xpath")


describe(" Segundo reto ", () =>{

})
    
it("Mi Segundo test ==> Home demoqa", ()=> {
    cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq", "Datos Personales | TestingQaRvn")
        cy.wait(1000)

        cy.get("#wsf-1-field-21").type("{pagedown}")
        cy.wait(1000)

        //Para automatizar el tab para avanzar de un campo a otro, debemos descargar un plugin 
        // https://www.npmjs.com/package/cypress-plugin-tab
        // Lo instalamos desde el terminal:   npm install -D cypress-plugin-tab

        cy.get("#wsf-1-field-21").type("Jorge Alexander").tab().type("Vargas Pedro").tab().type("jvargas3016@yahoo.es").tab
        ().type("635648210").tab().type("Madrid")
        cy.wait(500)
        cy.get("#wsf-1-field-27").click()
        cy.wait(500)

        //Luego de completar los datos voy a la ventana de contacto"
        cy.get("#top-menu > #menu-item-314 > a").click()
        cy.wait(500)

        //Luego voy a la ventana del formulario de contactame
        cy.get("#et_pb_contact_name_0").should("be.visible").type("Jorge Alexander")
        cy.wait(500)
        .tab()
        .type("jvargas3016@yahoo.es")
        cy.wait(500)
        .tab()
        .type("Con esto probados el envío del mensaje 123456")
        cy.wait(500)

        cy.get("#et_pb_contact_name_0").type("{pageup}")
        cy.wait(500)

        cy.get(".et_pb_contact_submit").should("be.visible").click()
        cy.wait(500)

        ///Vamos a buscar un campo donde usemos xpath  --- NO me funciona con xpath
        ///cy.get("#top-menu > #menu-item-185 > a").should("be.visible").click()
        ///cy.wait(500)

        ///cy.get("//header/div[1]/div[2]/nav[1]/ul[1]/li[2]/a[1]").should("be.visible").click()
        ///cy.wait(500)

        
    }) // Cierre de describe