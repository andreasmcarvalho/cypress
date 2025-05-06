describe('CRUD de Carrinho', () => {
    beforeEach(() => {
      cy.fixture('usuario').then((dados) => {
        cy.login(dados.valido.usuario, dados.valido.senha);
      });
    });
  
    it('Adicionar item ao carrinho', () => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_badge').should('contain', '1');
    });
  
    it('Remover item do carrinho', () => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
      cy.get('.shopping_cart_badge').should('not.exist');
    });
  });
  