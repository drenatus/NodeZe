 #language:pt
 
 Funcionalidade: Sacola

# Contexto: Efetuar Login
 
 Cenário: Adicionar produtos a Sacola estando logado
 Dado que estou na página inicial do Zé
 E vejo a mensagem VOCÊ TEM 18 ANOS OU MAIS?
 E clico em Sim
 E vejo a página principal do Zé
 E clico no botão ENTRAR na Home Page
 E sou direcionado para a página de Login
 E preencho o campo E-MAIL com o email 'diogorenatus@hotmail.com'
 E preencho o campo SENHA com a senha 'TesteZe2020'
 E clico no botão ENTRAR da pagina de login
 Então sou redirecionado para a Home Page, e vejo a mensagem 'Olá, Diogo'
 Quando clico na opção CERVEJAS
 E digito 'Budweiser 350' no campo de busca de produto
 E clico no produto pesquisado
 E clico no botão + 6 un.
 E clico em ADICIONAR
 
 E vejo aberta a modal SACOLA
 E clico no botão CONTINUAR COMPRA
 E sou direcionada para a página de CHECKOUT
 E clico no botão SELECIONAR FORMA DE PAGAMENTO
 E sou direcionado para a PÁGINA DE PAGAMENTO
 E clico na opção DINHEIRO
 Então vejo o campo VALOR DO SEU PEDIDO com o total de R$ '21,93'




# Cenário: Adicionar produtos a Sacola estando deslogado

#  Dado que estou na página do Zé
#  E preencho o campo INSERA O ENDEREÇO COM NUMERO com o valor 'Avenida Paulista, 1000'
#  E clico na primeira sugestão apresentada
#  E clico no checkbox NAO TENHO COMPLEMENTO
#  E clico no votão VER PRODUTOS DISPONIVEIS
#  Então vejo a página principal do Zé

#  Quando clico na opção CERVEJAS
#  E clico no produto Brahma Duplo Malte
#  E clico no botão + 6 un.
#  E clico em ADICIONAR
#  E então vejo aberta a modal SACOLA
#  E clico no botão CONTINUAR COMPRA
#  E clico no produto Brahma Duplo Malte
#  E clico no botão + 6 un.
#  E clico em ADICIONAR
#  E então vejo aberta a modal SACOLA
#  E clico no botão ENTRAR PARA CONTINUAR
#  Então sou direcionado para a página de Login


# Cenário: Login com facebook