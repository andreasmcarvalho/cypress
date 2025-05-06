# 🧪 Testes Automatizados com Cypress - SauceDemo

Este repositório contém os testes automatizados do sistema **[SauceDemo](https://www.saucedemo.com/)** utilizando o framework **Cypress**. Os testes cobrem cenários de login, navegação e fluxo de compra na aplicação.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [VSCode ou PyCharm](https://code.visualstudio.com/) (opcional para desenvolvimento)
- [Git](https://git-scm.com/)

## 📁 Estrutura do Projeto

├── e2e/
│ ├── login.cy.js # Testes de login
│ ├── compra.cy.js # Testes de fluxo de compra
│ └── ...
├── support/
│ └── commands.js # Comandos customizados
cypress.config.js # Configuração do Cypress
package.json # Dependências e scripts


## 📦 Instalação

1. Clone o repositório:

git clone https://github.com/andreasmcarvalho/cypress.git
cd cypress

2. Instale as dependências:

npm install


🧪 Executando os Testes

Modo Interativo (GUI)
npx cypress open
Modo Headless (Terminal)

npx cypress run

✅ Funcionalidades Testadas

Login com credenciais válidas e inválidas
Adição e remoção de produtos no carrinho
Finalização de compra
Validação de mensagens de erro
Navegação entre páginas

📝 Autor
Andreas — Desenvolvedor e testador do projeto acadêmico de automação.

📌 Observações

Os testes foram desenvolvidos com fins acadêmicos.
Os dados utilizados são fictícios e baseados no ambiente de testes fornecido pela própria SauceDemo.

