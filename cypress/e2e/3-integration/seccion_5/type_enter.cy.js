/// <reference types="Cypress" />

describe(" Funciones para Type ", () =>{

})    
    it(" Type ENTER ", () => {
        cy.visit("https://www.searchencrypt.com/home")
        cy.title().should("eq", "Search Encrypt | Home")
        cy.wait(500)

        //con esto estamos haciendo la funcion enter
        cy.get("#autosuggest > input").type("Cypress io {enter}")
        cy.wait(500)
        /// En este caso, estoy considerando como dato de nusqueda "selector (copia selector)"
        cy.get("#app > section > section.serp__body.site-wrapper.container-wrapper > section.serp__results.container > div:nth-child(5) > div.web-result.unloaded > h3 > a > span").click();
        cy.wait(1000)
               
        
    }) // Cierre de describe

     
   
