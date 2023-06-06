/// <reference types="Cypress" />

require('cypress-xpath'),
require("cypress-plugin-tab")

describe(" Selects wihit them ", () =>{

})
    
    it(" Selects ", () => {        
        cy.visit("http://opencart.abstracta.us/index.php?route=common/home")      
        cy.wait(1500)

        cy.title().should("eq","Your Store")
        cy.wait(1500)

        cy.get(".nav > :nth-child(1) > .dropdown-toggle").click()
        cy.wait(1500)

        cy.get(".open > .dropdown-menu > .see-all").should("be.visible").click()
        cy.wait(500)

        cy.get(":nth-child(1) > .product-thumb > .image > a > .img-responsive").should("be.visible")
        .click()
        cy.wait(500)

        cy.get("#form-currency > .btn-group > .dropdown-toggle > .fa").should("be.visible")
        .click()
        cy.wait(500)

        cy.get(":nth-child(1) > .currency-select").should("be.visible")
        .click()
        cy.wait(500)

        cy.get(".radio > label > input").should("be.visible").type("{pagedown}")
        cy.wait(500)

        cy.get("#input-option223 > :nth-child(1) > label > input").should("be.visible").click()
        cy.wait(500)
        cy.get(":nth-child(2) > label > input").should("be.visible").click()
        cy.wait(500)

        cy.get("#input-option208").should("be.visible").type("_Automatizado_1")
        cy.wait(500)

        cy.get("#input-option217").should("be.visible").click
        cy.wait(500)

        
        cy.get("#input-option209").should("be.visible").type("Esta es una tarea automatizada")
        cy.wait(500)
    
    }) // Cierre de describe