describe('Display list of employees', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it('it expect displays a header', () => {
    cy.get('#header').should('contain', 'Employee List')
  });

  it('it expect displays a list with 6 items', () => {
    cy.get("#employee-list").within(() => {
      cy.get('.employee-item').should('have.length', 6)
    })

    it('it expect the list items display the expected content',() => {
      cy.get('#employee-item')
      .frist()
      .should('contain','George Bluth')
      
    });
  })
});