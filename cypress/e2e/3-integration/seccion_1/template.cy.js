import { format, subDays } from 'date-fns'
require("cypress-xpath")

describe("Tercer reto", () => {
    it("Tercer reto", () => {
        cy.visit("http://computer-database.gatling.io/computers")
        cy.wait(500)
        cy.title().should("eq","Computers database")
        cy.wait(500)

        //buscando por xpath
        cy.xpath("//input[contains(@id,'searchbox')]")
        cy.wait(500)
        cy.get("#searchbox").type("ACE")
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

        // Ingresar la fecha actual en el campo "Introduced"
        cy.get('#introduced').type(formattedDate);
        cy.wait(500)

        // Obtener la fecha de ayer tengo ERROR
        const yesterday = subDays(today, 1);
        const formattedYesterday = `${yesterday.getFullYear().toString()}-${(yesterday.getMonth() + 1).toString().padStart(2, '0')}-${yesterday.getDate().toString().padStart(2, '0')}`

        
    })
}) // Cierre de describe