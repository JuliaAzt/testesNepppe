
context('Página inicial', () => {
  beforeEach(() => {
    cy.visit('http://localhost/nepppe/index.php/')
  })

it('Navbar', () =>{

     for (var i = 0; i < 5; i++) {
        cy.get('li.rounded.nav-item.border.border-white').eq(i).children().first().click()
     }
    
  })

  it('Links úteis', () =>{

    

    cy.get('li.list-group-item-neppe.d-flex.justify-content-between.align-items-center').first().children().first().click(  )
    cy.get('li.list-group-item-neppe.d-flex.justify-content-between.align-items-center>a').click( { multiple: true } )
    
  })


})
