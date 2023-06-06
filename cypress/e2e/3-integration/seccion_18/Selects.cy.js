/// <reference types="Cypress" />

require('cypress-xpath'),
require("cypress-plugin-tab")

describe(" Checkbox ", () =>{

})
    
    it(" Check Dos  ", () => {        
        cy.visit("https://turbologo.com/")      
        cy.wait(100)
        cy.title().should("eq","Free Logo Maker: Create & Generate Your Own Design Online")
        cy.wait(100)

        cy.xpath(' //*[@id="lng"]').should("be.visible").click()
        cy.wait(100)

        cy.get(":nth-child(3) > .item").should("be.visible").click()
        cy.wait(100)

        cy.get(".tl_create_logo_form__company_name").should("be.visible").type("Testing SL")
        cy.wait(4500)
        .tab().type("Servicios de testing")

        cy.xpath('//*[@id="main"]/div[1]/div/div/div/div[2]/div/div/form/div[2]/input').should("be.visible")        
        .click({force: true})        
        cy.wait(4500)



        // error con select....
        //cy.get("#.tl_create_logo_industry__input").should("be.visible").select("Arte")
        //cy.wait(500)

        //cy.get("#div.wrapper:nth-child(7) div.main.service div.tl_create_logo.tl_home:nth-child(1) div.tl_home_in div.container.tl_create_logo_in div.row div.col-md-6:nth-child(2) div.row div.col-md-10.col-md-offset-1 form.tl_create_logo_form div.tl_create_logo_industry ul.tl_create_logo_industry_list > li.tl_create_logo_industry__item.tl_create_logo_industry__item--active:nth-child(7)").should("be.visible").select("Arte")
        //cy.wait(500)
        
      
    
    }) // Cierre de describe