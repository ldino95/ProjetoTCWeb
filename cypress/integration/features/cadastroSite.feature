Feature: Realizar cadastro no site


     Feature Description
     Como futuro do usuario final
     Quero realizar meu cadastro
     de modo que possa usufruir após meus acessos




     Scenario: Validar que todos os campos é preenchido corretamente
          Given que estou na pagina de registro
          When preencho campos corretamente


     Scenario: Realizar registro de usuario
          Given que estou na pagina de registro
          When preencho campos corretamente
          Then clico no botao de finalizar cadastro
          And mensagem de sucesso e exibida


     Scenario: Realizar cadastro e clicar no botão de recomeçar
          Given que estou na pagina de registro
          When preencho campos corretamente
          Then clico no botao de recomeçar cadastro
          And valido que os campos é apagado



     Scenario: Validar que texto de dica aparece no campo e-mail
          Given que estou na pagina de registro
          When preencho campos nome, sobrenome e endereco
          Then clico campo email
          And valido mensagem de dica



