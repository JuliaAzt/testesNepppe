context('CRUDs', () => {


  it('CRUD eventos', ()  => {
  
      //Inserir
      cy.visit('http://localhost/nepppe/index.php/Usuarios/auxiliar/')
      cy.get('li.rounded.nav-item.border.border-white').eq(0).click()

      cy.get('input#txt-titulo')
      .type('ABC').should('have.value', 'ABC')

      cy.get('input#txt-link')
      .type('ABC').should('have.value', 'ABC')
   
      cy.get('button.btn.btn-lg.btn-success.btn-block').click()

      //Verifica se foi inserido
      expect(cy.contains('ABC')).not.to.be.empty

      //Editar
      cy.get('tr').contains('ABC').next().next().contains('Editar').click();

       cy.get('input#txt-titulo')
      .clear().type('ABC2').should('have.value', 'ABC2')

      cy.get('input#txt-link')
      .clear().type('ABC2').should('have.value', 'ABC2')
   
      cy.get('button.btn.btn-lg.btn-success.btn-block').click()

     //Verifica se foi alterado
      expect(cy.contains('ABC2')).not.to.be.empty

      //Excluir
      cy.get('tr').contains('ABC2').next().next().contains('Excluir').click();


  })

  it('CRUD Midia', ()  => {
  
      //Inserir
      cy.visit('http://localhost/nepppe/index.php/Usuarios/auxiliar/')
      cy.get('li.rounded.nav-item.border.border-white').eq(1).click()

      cy.get('input#txt-titulo')
      .type('ABC').should('have.value', 'ABC')

      cy.get('input#txt-descricao')
      .type('ABC').should('have.value', 'ABC')

      cy.get('input#txt-link').type('ABC').should('have.value', 'ABC')

      cy.get('button.btn.btn-lg.btn-success.btn-block').click()
  
      //Verifica se foi inserido
      expect(cy.contains('ABC')).not.to.be.empty

      //Editar
      cy.get('a[href="#midia"]').click()
      cy.get('tr').contains('ABC').next().next().contains('Editar').click();

      cy.get('input#txt-titulo')
      .clear().type('ABC2').should('have.value', 'ABC2')

      cy.get('input#txt-descricao')
      .clear().type('ABC2').should('have.value', 'ABC2')

      cy.get('input#txt-link')
      .clear().type('ABC2').should('have.value', 'ABC2')

      cy.get('button.btn.btn-lg.btn-success.btn-block').click()

      cy.get('a[href="#midia"]').click()
      
      //Verifica se foi alterado
      expect(cy.contains('ABC2')).not.to.be.empty

      //Excluir
      cy.get('a[href="#midia"]').click()
      cy.get('tr').contains('ABC2').next().next().contains('Excluir').click();
  })

    it('CRUD Pesquisa', ()  => {
  
      //Inserir
      cy.visit('http://localhost/nepppe/index.php/Usuarios/auxiliar/')
      cy.get('li.rounded.nav-item.border.border-white').eq(2).click()

      cy.get('input#txt-titulo')
      .type('Lorem Ipsum').should('have.value', 'Lorem Ipsum')

      cy.get('input#txt-resumo')
      .type('Lorem IpsumLorem IpsumLorem Ipsum').should('have.value', 'Lorem IpsumLorem IpsumLorem Ipsum')

       cy.get('input#txt-conteudo')
      .type('Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum').should('have.value', 'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum')

       cy.get('input#txt-autoria')
      .type('Lorem Ipsum').should('have.value', 'Lorem Ipsum')

      cy.get('input#txt-natureza')
      .type('Lorem Ipsum').should('have.value', 'Lorem Ipsum')

      cy.get('select#tipo').select('Em andamento')

      cy.get('button.btn.btn-lg.btn-success.btn-block').click()
  
      //Verifica se foi inserido
      expect(cy.contains('Lorem Ipsum')).not.to.be.empty

      //Editar
      cy.get('a[href="#pesquisas"]').click()
      cy.get('tr').contains('Lorem Ipsum').next().next().contains('Editar').click();
      cy.get('input#txt-titulo')
      .clear().type('Michael Kelso').should('have.value', 'Michael Kelso')

      cy.get('input#txt-resumo')
      .clear().type('Michael Kelso').should('have.value', 'Michael Kelso')

      cy.get('input#txt-conteudo')
      .clear().type('Michael Kelso').should('have.value', 'Michael Kelso')

      cy.get('input#txt-autoria')
      .clear().type('Michael Kelso').should('have.value', 'Michael Kelso')

      cy.get('input#txt-natureza')
      .clear().type('Michael Kelso').should('have.value', 'Michael Kelso')

      cy.get('select#tipo').select('Concluída')

      cy.get('button.btn.btn-lg.btn-success.btn-block').click()

      //Verifica se foi alterado
      cy.get('a[href="#pesquisas"]').click()
      cy.get('a[href="#pesquisas"]').should('have.class', 'active')
      expect(cy.contains('Michael Kelso')).not.to.be.empty


      //Excluir
      cy.get('tr').contains('Michael Kelso').next().next().contains('Excluir').click();

  })
  
  

  it('CRUD Documentos', ()  => {
  
      //Inserir
      cy.visit('http://localhost/nepppe/index.php/Usuarios/auxiliar/')
      cy.get('li.rounded.nav-item.border.border-white').eq(3).click()

      cy.get('input#txt-titulo')
      .type('Lorem Ipsum').should('have.value', 'Lorem Ipsum')

      cy.get('input#txt-resumo')
      .type('Lorem IpsumLorem IpsumLorem Ipsum').should('have.value', 'Lorem IpsumLorem IpsumLorem Ipsum')

       cy.get('input#txt-conteudo')
      .type('Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum').should('have.value', 'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum')

      cy.get('select#categoria').select('Livro')
  
      const fileName = 'data.pdf';
 
        cy.fixture(fileName).then(fileContent => {
          cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/pdf' });
        });

      cy.get('input.btn.btn-lg.btn-success.btn-block').click()
    
      
      //Verifica se foi inserido
      cy.get('a[href="#documentos"]').click()
      cy.get('a[href="#documentos"]').should('have.class', 'active')
      
      expect(cy.contains('Lorem Ipsum')).not.to.be.empty

      //Editar
      cy.get('tr').contains('Lorem Ipsum').next().next().contains('Editar').click();
      cy.get('input#txt-titulo')
      .clear().type('Michael Kelso').should('have.value', 'Michael Kelso')

      cy.get('input#txt-resumo')
      .clear().type('Michael Kelso').should('have.value', 'Michael Kelso')

      cy.get('input#txt-conteudo')
      .clear().type('Michael Kelso').should('have.value', 'Michael Kelso')

    
      cy.get('select#categoria').select('Artigo')

      cy.get('button.btn.btn-lg.btn-success.btn-block').click()

      //Verifica se foi alterado
      cy.visit('http://localhost/nepppe/index.php/Usuarios/auxiliar/')
      cy.get('a[href="#documentos"]').click()
      cy.get('a[href="#documentos"]').should('have.class', 'active')
      expect(cy.contains('Michael Kelso')).not.to.be.empty


      //Excluir
      cy.get('tr').contains('Michael Kelso').next().next().contains('Excluir').click();

  })



   it('CRUD Pessoas', ()  => {
  
      //Inserir
      cy.visit('http://localhost/nepppe/index.php/Usuarios/auxiliar/')
      cy.get('li.rounded.nav-item.border.border-white').eq(5).click()

      cy.get('input#txt-nome')
      .type('Lorem Ipsum').should('have.value', 'Lorem Ipsum')

      cy.get('select#categoria').select('Mestrando')

       cy.get('input#txt-curriculo')
      .type('Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum').should('have.value', 'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum')


      cy.get('input#txt-dep')
          .type('Lorem IpsumLorem IpsumLorem Ipsum').should('have.value', 'Lorem IpsumLorem IpsumLorem Ipsum')
      

      cy.get('button.btn.btn-lg.btn-success.btn-block').click()
    
      
      //Verifica se foi inserido
      cy.get('a[href="#pessoas"]').click()
      expect(cy.contains('Lorem Ipsum')).not.to.be.empty

      //Editar

      cy.get('tr').contains('Lorem Ipsum').next().next().next().next().contains('Editar').click();

      cy.get('input#txt-nome').clear()
      .type('Julia').should('have.value', 'Julia')

      cy.get('select#categoria').select('Graduando')

       cy.get('input#txt-curriculo').clear()
      .type('Julia').should('have.value', 'Julia')

      cy.get('input#txt-departamento').clear().type('Julia').should('have.value', 'Julia')
      cy.get('button.btn.btn-lg.btn-success.btn-block').click()

      //Verifica se foi alterado
      cy.visit('http://localhost/nepppe/index.php/Usuarios/auxiliar/')
      cy.get('a[href="#pessoas"]').click()
      cy.get('a[href="#pessoas"]').should('have.class', 'active')
      expect(cy.contains('Julia')).not.to.be.empty


      //Excluir
      cy.get('tr').contains('Julia').next().next().next().next().contains('Excluir').click();

  })



   it('CRUD PDEs', ()  => {
  
      //Inserir
      cy.visit('http://localhost/nepppe/index.php/Usuarios/auxiliar/')
      cy.get('li.rounded.nav-item.border.border-white').eq(6).click()

      cy.get('input#txt-nome-doc')
      .type('Lorem Ipsum').should('have.value', 'Lorem Ipsum')

      cy.get('select#regiao').select('Acre')

       const fileName = 'data.pdf';
 
        cy.fixture(fileName).then(fileContent => {
          cy.get('input[type="file"]').upload({ fileContent, fileName, mimeType: 'application/pdf' });
        });


      cy.get('input.btn.btn-lg.btn-success.btn-block').click()
    
      
      //Verifica se foi inserido
      cy.get('a[href="#pdes"]').click()
      expect(cy.contains('Lorem Ipsum')).not.to.be.empty

      //Editar

      cy.get('tr').contains('Lorem Ipsum').next().next().contains('Editar').click();

       cy.get('input#txt-nome-doc').clear()
      .type('Julia').should('have.value', 'Julia')

      cy.get('select#regiao').select('Minas Gerais')

      cy.get('button.btn.btn-lg.btn-success.btn-block').click()

      //Verifica se foi alterado
      cy.visit('http://localhost/nepppe/index.php/Usuarios/auxiliar/')
      cy.get('a[href="#pdes"]').click()
      cy.get('a[href="#pdes"]').should('have.class', 'active')
      expect(cy.contains('Julia')).not.to.be.empty


      //Excluir
      cy.get('tr').contains('Julia').next().next().contains('Excluir').click();

  })


})
