/* global Given, Then, When */
/// <reference types="Cypress"/> 

import registerActions from "../contextTestFiles/registerActions"


beforeEach(() => {

	Cypress.on('uncaught:exception', (err, runnable) => { //ignora erros da página
		return false

	})

	Given('que estou na pagina de registro', () => {
		cy.visit('/Register.html');
		cy.validartituloRegistro();

	});

	When('preencho campos corretamente', () => {
		cy.preencherCorretamente();

	});

	Then('clico no botao de finalizar cadastro', () => {
		cy.clicarRegistrar();
	});

	Then('mensagem de sucesso e exibida', () => {
		cy.validarMensagem();
	});


	Then('clico no botao de recomeçar cadastro', () => {
		cy.clicarRefazer();
	});

	Then('valido que os campos é apagado', () => {
		cy.campoVazio();
	});


	When('preencho campos nome, sobrenome e endereco', () => {
		cy.preencherCampos();
	});



	Then('clico campo email', () => {
		cy.clicarEmail();
	});


	Then('valido mensagem de dica', () => {
		cy.msgEmailDica();
	});



});