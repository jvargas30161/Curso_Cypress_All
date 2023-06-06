describe("Bienvenido al curso de Cyoress seccion 1", () => {

    it("Mi primer Test ==> hola mundo que tal como estas", () => {
        cy.log("hola mundo :) ")
        cy.wait(500)
    })
    it("Mi Segundo test ==> Home demoqa", ()=> {
        cy.visit("https://demoqa.com")
        cy.wait(300)
              
        })
    it("Mi tercer test ==> Campo Name", ()=> {
        cy.visit("https://turbologo.com/")
        cy.get("#main > div.tl_create_logo.tl_home > div > div > div > div.col-md-6 > div > div > form > input.tl_create_logo_form__company_name").type("Jorge Alexander Vargas Sánchez")    
        cy.wait(500) 
        cy.get("#main > div.tl_create_logo.tl_home > div > div > div > div.col-md-6 > div > div > form > input.tl_create_logo_form__slogan").type("Esto es una prueba")   
        cy.wait(500) 
        
    }) 
   
})// Cierre de describe