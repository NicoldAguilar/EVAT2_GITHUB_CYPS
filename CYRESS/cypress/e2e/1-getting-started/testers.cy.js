describe('NavbarTest', () => {
    it('Navegar en página',()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#homeP').click()
        cy.get('#bibliotecaP').click()
        cy.get('#usu').type('admin'),
        cy.get('#pss').type('admin'),
        cy.get('#incses').click()
    })
});

describe('BookTest', () => {
    it('Detalles del libro y comentario',()=>{
        cy.visit(Cypress.env("base_url")+'/Auth/Login');
        cy.get('#usu').type('admin'),
        cy.get('#pss').type('admin'),
        cy.get('#incses').click()
        cy.visit(Cypress.env("base_url"));
        cy.get('#2').click()
        cy.get('#ingComent').type('muy buen libro')
        cy.get('#points').type('5')
        cy.get('#sendComent').click()
    })
});

describe('BookTest', () => {
    it('Agregar un libro',()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#HarryPotterylapiedrafilosofal').click()
    })
});

describe('BookTest', () => {
    it('Marcar Estado Libros',()=>{
        cy.visit(Cypress.env("base_url"));        
        cy.get('#bibliotecaP').click()
        cy.get('#usu').type('admin'),
        cy.get('#pss').type('admin'),
        cy.get('#incses').click()
        cy.get('#HarryPotterylapiedrafilosofal').click()
        cy.get('#bibliotecaP').click()
        cy.get('#leyendo').click()
        cy.get('#finish').click()
    })
});


describe('LoginTest', () => {
    it('Login correct validation',()=>{
        cy.visit(Cypress.env("base_url")+'/Auth/Login');
        cy.get('#usu').type('admin'),
        cy.get('#pss').type('admin'),
        cy.get('#incses').click()
    })
});
