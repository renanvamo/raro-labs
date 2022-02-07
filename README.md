# Desafio Raro Labs

Bem vindos! Este repositório foi criado com o intuito de resolver o desafio proposto pela Raro labs.

O objetivo era criar uma aplicação de backend, com NodeJS e Express, utilizando a linguagem Javascript.

## Tecnologias Utilizadas

Durante o desenvolvimento do projeto foram utilizadas algumas bibliotecas e ferramentas:

* dotenv
* express
* nodemon
* joi

Também foram desenvolvidos testes E2E utilizando as ferramentas:

* mocha
* chai
* chai-http

## Executando a aplicação localmente

### Clonando o repositório

1. No seu terminal, acesse a pasta onde o repositório será clonado e execute:
```
git clone git@github.com:renanvamo/raro-labs.
```

2. Entre na pasta do repositório que você acabou de clonar:
```
cd raro-labs
```
3. Instale as dependências do projeto executando no terminal:
```
npm install
```

### Executando a aplicação

Execute no terminal:
para produção

```
npm start
```

para desenvolvimento
```
npm run dev
```

## Testes

Você pode rodar os testes manualmente digitando no seu terminal, na pasta raiz do projeto:
```
npm test
```

Você também pode realizar testes manuais, utilizando a requisição `.get`, na rota `/paginacao`. 
Para fazer isso, você pode inserir na url do seu navegador:
```
http://localhost:8080/paginacao?paginaAtual=3&quantidadePaginas=10
```
PS: Os valores de páginaAtual e quantidadePaginas podem ser alterados.

Também é possível utilizar alguns softwares para realizar testes de requisição, alguns exemplos comuns são Insomnia e Postman.
