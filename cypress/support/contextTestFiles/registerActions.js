/// <reference types="Cypress"/> 

const registerPage = require('../contextTestFiles/registerPage');

import { users } from '../../fixtures/userFaker';
import faker from 'faker';
import 'cypress-file-upload';

Cypress.Commands.add('validartituloRegistro', () => {
    cy.get(registerPage.formRegister.titlePage).should('be.visible')

})

Cypress.Commands.add('preencherCorretamente', () => {
    
    users.forEach(user => {
        cy.get(registerPage.formRegister.firstName).type(user.firstName);
        cy.get(registerPage.formRegister.lastName).type(user.lastName);
        cy.get(registerPage.formRegister.addressCampo).type(user.addressCampo);
        cy.get(registerPage.formRegister.emailAdress).type(user.emailAdress);
        cy.get(registerPage.formRegister.phoneNumber).type(user.phoneNumber);
        cy.get(registerPage.formRegister.genderM).click();
        cy.get(registerPage.formRegister.hobbiesCricket).click();
        cy.get(registerPage.formRegister.hobbiesHockey).click();
        cy.get(registerPage.formRegister.hobbiesMovies).click();
        cy.get(registerPage.formRegister.languageCampo).click();
        cy.get(registerPage.formRegister.itemLanguage).click();
        cy.get('#imagetrgt').click();
        cy.get(registerPage.formRegister.skillsCampo).select(user.skillsCampo);
        cy.get(registerPage.formRegister.countryCampo).select(user.countryCampo);
        cy.get(registerPage.formRegister.selectCountry).click();
        cy.get(registerPage.formRegister.itemSelect).click();
        cy.get(registerPage.formRegister.birthYear).select(user.birthYear)
        cy.get(registerPage.formRegister.birthMonth).select(user.birthMonth)
        cy.get(registerPage.formRegister.birthDay).select(user.birthDay)
        cy.get(registerPage.formRegister.passowordFirst).type(user.passowordFirst)
        cy.get(registerPage.formRegister.passowordSecond).type(user.passowordSecond)
     

    })

})

Cypress.Commands.add('clicarRegistrar', () => {
    cy.get(registerPage.formRegister.btnRegister).click();

})

Cypress.Commands.add('clicarRefazer', () => {
    cy.get(registerPage.formRegister.btnRefresh).click();

})

Cypress.Commands.add('campoVazio', () => {
    cy.get(registerPage.formRegister.firstName).should('have.value', '');

})



Cypress.Commands.add('validarMensagem', () => {
    cy.get(registerPage.formRegister.messageTxt).should('have.value', 'registration successfully');

})

Cypress.Commands.add('preencherCampos', () => {
    
    cy.get(registerPage.formRegister.firstName).type(faker.name.firstName());
    cy.get(registerPage.formRegister.lastName).type(faker.name.lastName());
    cy.get(registerPage.formRegister.addressCampo).type(faker.address.streetAddress());


})

Cypress.Commands.add('clicarEmail', () => {
  cy.get(registerPage.formRegister.emailAdress).type(faker.internet.userName());

})

Cypress.Commands.add('msgEmailDica', () => {
    cy.get(registerPage.formRegister.alertEmail).contains('Provide a valid email id for further updates')
    
  
  })
