# Avaliação para Automação de testes WEB-Cypress



📋 Pré-requisitos
- Java Script
- VSCODE
- Cypress
- Allure Reports
- Fakker

Para iniciar os testes, execute um dos seguintes comandos no terminal do VS Code:
- npm cypress i
- yarn install

Para iniciar os testes, execute um dos seguintes comandos no terminal do VS Code:
- npx cypress open

Para iniciar os testes com relatório ALLURE, execute um dos seguintes comandos no terminal do VS Code:
- cypress run --config video=false --env allure=true

Gerar os resultados dos testes
- allure generate allure-results --clean

Allure report
- allure open allure-report
