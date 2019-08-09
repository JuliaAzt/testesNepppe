/// <reference types="Cypress" />

context('Painel Administrativo', () => {

  it('Login', () => {
    cy.visit('http://localhost/nepppe/index.php/login/')
    cy.get('input.form-control[placeholder="Email"]')
      .type('mateusversieux@gmail.com').should('have.value', 'mateusversieux@gmail.com')

    cy.get('input.form-control[placeholder="Senha"]')
    .type('90903030').should('have.value', '90903030')

    cy.get('button.btn.btn-lg.btn-success.btn-block')
    .click()

  })

  it('Página do auxiliar', () => {



      cy.visit('http://localhost/nepppe/index.php/Usuarios/auxiliar')
      cy.get('a[href="#pesquisas"]')
        .click()

      cy.get('a[href="#pesquisas"]').should('have.class', 'active')

      cy.get('a[href="#documentos"]')
      .click()
      cy.get('a[href="#documentos"]').should('have.class', 'active')

      cy.get('a[href="#dadosedu"]')
      .click()
      cy.get('a[href="#dadosedu"]').should('have.class', 'active')

      
      cy.get('a[href="#pdes"]')
      .click()
      cy.get('a[href="#pdes"]').should('have.class', 'active')
      
      cy.get('a[href="#midia"]').click()
      cy.get('a[href="#midia"]').should('have.class', 'active')

      cy.get('a[href="#pessoas"]').click()
      cy.get('a[href="#pessoas"]').should('have.class', 'active')

    })

  it('Navbar ', ()  => {
  
   for (var i = 0; i < 8; i++) {
     cy.visit('http://localhost/nepppe/index.php/Usuarios/auxiliar/')
      cy.get('li.rounded.nav-item.border.border-white').eq(i).click()
   }


  })

  it('Logout', ()  => {

    cy.visit('http://localhost/nepppe/index.php/Usuarios/auxiliar/')
    cy.get('li.rounded.nav-item.border.border-white').last().click()

  })
    
  it('Voltar a Página Inicial', ()  => {  
      cy.visit('http://localhost/nepppe/index.php/Usuarios/auxiliar/')
      cy.get('li.rounded.nav-item.border.border-white').last().click()
      cy.get('a').contains('Voltar ao site').click()
  })

  



})
