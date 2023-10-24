## IXChat

This is a SocketIo application using Node.js, Mongo, JWT, React and Redux. 

Esta e uma aplicacao utilizando Node.js, Mongo, JWT, React e Redux.

## Steps (Passos)

- Clone o Repo utilizando: 

_git clone_

- Navegue ate o diretorio do projeto

_cd IXChat && yarn_

- Crie um arquivo _.env_

_touch .env_

- Preencha as credenciais 

``PORT: 5000, SECRET_KEY: MY_SECRET_KEY, DATABASE_URL: MY_DB``

- Execute o Projeto

_yarn dev_

Com esse comando ele vai rodar o back e o front juntos. Caso queria rodar separado siga as instrucoes:

- No diretorio root para o back

_yarn back_

- Para o front

_cd client && yarn start_

OBS: O backend roda na porta 5000 e o front na padrao 3000 do React.

### PR Com Auth Passport.js
[Here](https://github.com/GabrielAccessmentSources/IXChat/pull/7)

As rotas e autenticacao e para estar funcionando porem somente por CURL ou Insomnia/Postman