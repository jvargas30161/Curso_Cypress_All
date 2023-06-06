describe("Sección 4 Validando el título ", () =>{

})
    
    it(" Test validar el titulo ", () => {
        cy.visit("https://demoqa.com")
        cy.title().should("eq", "DEMOQA")

        cy.log("Ok la función tittle va bien ")
        

    }) // Cierre de describe

     
   
