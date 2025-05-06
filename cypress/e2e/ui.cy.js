describe('Teste de UI + Network + Responsividade', () => {
    it('Intercepta o carregamento de produtos', () => {
      cy.intercept('GET', '/inventory.html', { statusCode: 200 }).as('getProdutos');
      cy.fixture('usuario').then((dados) => {
        cy.login(dados.valido.usuario, dados.valido.senha);
      });
      cy.wait('@getProdutos', { timeout: 10000 });
      cy.get('.inventory_item').should('have.length.at.least', 1);
    });
  
    it('Responsividade mobile', () => {
      cy.viewport('iphone-6');
      cy.fixture('usuario').then((dados) => {
        cy.login(dados.valido.usuario, dados.valido.senha);
      });
      cy.get('.shopping_cart_link').should('be.visible');
    });
  });
  