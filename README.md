# Nightwatchjs.org Test Automation Repository


Cenários:

Cadastro - Essencial para qualquer cliente começar a utilizar os serviços do Zé. Uma experiência frustrante pode fazer um potencial usuário a desistir do serviço

Login - Usuário precisa estar logado para finalizar a compra. Logo deve ser prático e funcionar de maneira rápida, ou pode fazer o usuário desistir do pedido naquele momento se for algo complicado e demorado. Importante estar funcionando tanto no 
carrinho de compras, como na tela inicial

Sacola - A sacola deve informar exatamente e de forma amigável a quantidade de itens, e o valor total assim como o frete. Como já dito no Login, uma experiência complicada nesse ponto pode fazer o usuário desistir do pedido. 

(Os steps destes fluxos estão descrutos na pasta Features, mesmo os não automatizados estão listados e comentados)


O cenário automatizado foi logar na página principal, adicionar itens a sacola e validar o valor total (não completa a compra por motivos óbvios rs) 

Como rodar:

Ter o Node instalado - https://nodejs.org/

Visual Studio Code instalado - https://code.visualstudio.com/

Após abrir o projeto, digitar no terminal:

npm install (se for no linux: sudo npm install) e aguardar a instalação.

rodar testes E2E: "npm run test:E2E-chrome"  (o relatório em HTML será gerado no final da execução e abrirá automaticamente)

rodar testes da API Open Weather Map: "npx jest"

