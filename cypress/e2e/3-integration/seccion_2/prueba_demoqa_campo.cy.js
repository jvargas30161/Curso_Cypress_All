describe("Bienvenido al curso de Cyoress seccion 2", () => {

    it("Mi tercer test ==> Campo Name", ()=> {
        cy.visit("https://demoqa.com/text-box")
        cy.wait(500)      
        cy.get("#userName").type("Jorge Alexander Vargas Sánchez") 
        cy.wait(500) 
        
    }) 
   
})// Cierre de describe