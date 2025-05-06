describe('Login SauceDemo', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Login com sucesso', () => {
      cy.fixture('usuario').then((dados) => {
        cy.login(dados.valido.usuario, dados.valido.senha);
        cy.url().should('include', '/inventory');
      });
    });
  
    it('Login com erro', () => {
      cy.fixture('usuario').then((dados) => {
        cy.login(dados.invalido.usuario, dados.invalido.senha);
        cy.get('[data-test="error"]').should('be.visible');
      });
    });
  });
  