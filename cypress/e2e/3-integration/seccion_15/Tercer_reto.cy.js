/// <reference types="Cypress" />

//const { now } = require("cypress/types/lodash")

//import { format, subDays } from 'date-fns'
require("cypress-xpath")
//const moment = require('moment')


describe(" Tercer reto ", () =>{

})
    
    it(" Tercer reto ", () => {
        cy.visit("http://computer-database.gatling.io/computers")
        cy.wait(500)
        cy.title().should("eq","Computers database")
        cy.wait(500)

        //buscando por xpath
        cy.xpath("//input[contains(@id,'searchbox')]")
        cy.wait(500)
        cy.xpath("//*[@id='searchbox']").type("ACE")
        cy.wait(500)

        cy.get("#searchsubmit").should("be.visible").click()
        cy.wait(500)

        //add
        cy.get("#add").should("be.visible").click()
        cy.wait(500)

        cy.get("#name").should("be.visible").type("Cypress")
        cy.wait(500)
                
        // Obtener la fecha actual
        const today = new Date();
        
        // Formatear la fecha today
        const formattedDate = `${today.getFullYear().toString()}-${(today.getMonth() + 1).toString()
        .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`  

        // Ingresar la fecha en un campo de texto
        cy.get('#introduced').type(formattedDate);
        cy.wait(500)
     
        // Ingresar la fecha en un campo de texto
        cy.get("#discontinued").type("2025-05-30"); //// debo mejorar la parte de fecha que sea vía código.
        cy.wait(500)

        //add en filtro
        cy.get("#company").should("be.visible").select("Nokia").should("have.value","16")
        cy.wait(500)
        cy.xpath('//*[@id="main"]/form/div/input').should("be.visible").click()
        cy.wait(500)

       
        
    }) // Cierre de describe