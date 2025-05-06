Projeto de Testes com Cypress
Este repositório contém testes automatizados end-to-end (E2E) para o site SauceDemo usando o framework Cypress. Os testes verificam funcionalidades como login, carregamento de produtos, responsividade em dispositivos móveis e operações CRUD simuladas (adicionar/remover itens do carrinho).
Estrutura do Projeto
cypress/
├── e2e/                  # Arquivos de testes
│   ├── login.cy.js       # Testes de login (válido e inválido)
│   ├── ui.cy.js          # Testes de UI, rede e responsividade
│   ├── crud.cy.js        # Testes de operações CRUD (adicionar/remover itens)
├── fixtures/             # Dados de teste
│   ├── usuario.json      # Credenciais de login
├── support/              # Arquivos de suporte
│   ├── commands.js       # Comandos personalizados (ex.: cy.login)
│   ├── e2e.js            # Configurações globais
├── cypress.config.js     # Configuração do Cypress
├── package.json          # Dependências do projeto
├── README.md             # Este arquivo
└── .gitignore            # Arquivos ignorados pelo Git

Pré-requisitos

Node.js (versão LTS recomendada, ex.: v20.x ou superior)
Git instalado
Navegador compatível (Chrome, Firefox, Edge, etc.)
Conta no GitHub para gerenciar o repositório

Como Configurar o Projeto

Clone o repositório:
git clone https://github.com/andreasmcarvalho/cypress-project.git
cd cypress-project


Instale as dependências:No diretório do projeto, instale o Cypress e outras dependências:
npm install


Verifique a configuração do Cypress:O arquivo cypress.config.js define:

baseUrl: https://www.saucedemo.com
supportFile: cypress/support/e2e.js
specPattern: cypress/e2e/**/*.cy.{js,jsx,ts,tsx}



Como Executar os Testes

Abra o Cypress Test Runner:
npx cypress open


Isso abre a interface gráfica do Cypress.
Selecione E2E Testing e escolha um navegador.
Clique em login.cy.js, ui.cy.js, ou crud.cy.js para executar os testes.


Execute os testes em modo headless (opcional):Para rodar todos os testes no terminal sem interface gráfica:
npx cypress run


Detalhes dos testes:

login.cy.js: Testa o login com credenciais válidas (standard_user, secret_sauce) e inválidas.
ui.cy.js: Verifica o carregamento de produtos após login e a responsividade em uma viewport mobile (iPhone 6).
crud.cy.js: Simula operações CRUD, como adicionar e remover itens do carrinho, e verifica o inventário.



Comandos Personalizados
O arquivo cypress/support/commands.js define o comando cy.login:
Cypress.Commands.add('login', (usuario, senha) => {
  cy.visit('/');
  cy.get('[data-test="username"]').type(usuario);
  cy.get('[data-test="password"]').type(senha);
  cy.get('[data-test="login-button"]').click();
});

Os dados de teste estão em cypress/fixtures/usuario.json:
{
  "valido": {
    "usuario": "standard_user",
    "senha": "secret_sauce"
  },
  "invalido": {
    "usuario": "invalido",
    "senha": "senha_errada"
  }
}

Gerenciamento do Repositório Git

Adicione alterações:Após modificar arquivos (ex.: novos testes), adicione ao Git:
git add .
git commit -m "Descrição das alterações"


Envie para o GitHub:
git push origin main


Branches:

A branch principal é main.
Se houver uma branch master, consolide-a na main:git checkout main
git merge master --allow-unrelated-histories
git push origin main
git branch -d master
git push origin --delete master





Solução de Problemas

Erro cy.login is not a function:
Confirme que cypress/support/e2e.js contém import './commands';.
Verifique se cypress.config.js tem supportFile: "cypress/support/e2e.js".


Erro cy.wait() timed out:
Ajuste o cy.intercept() em ui.cy.js para capturar /inventory.html:cy.intercept('GET', '/inventory.html').as('getProdutos');


Ou remova o cy.wait() se não for necessário.


Node.js não instalado:
Baixe a versão LTS em nodejs.org e instale.


Permissões no PowerShell:
Habilite scripts com:Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned





Contribuição

Crie uma branch para novas funcionalidades:git checkout -b nova-funcionalidade


Adicione commits e envie:git add .
git commit -m "Adiciona nova funcionalidade"
git push origin nova-funcionalidade


Crie um Pull Request no GitHub.

Licença
Este projeto está sob a licença MIT.
