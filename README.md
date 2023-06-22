## Description
Para o projeto foi usado como base o framework NestJS.
O projeto tem como objetivo a criação de um endpoint GET para buscar artigos em uma determinada API.
Além disso adicionei camada de validação utilizando DTO.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Chamada na API e validação
Para buscar artigos basta fazer uma chamada GET na própria base da url.
Esse endpoint foi feito para suportar dois query params e ambos são opcionais.

query = filtra pelo título e conteúdo do artigo.
sortBy = ordena por 'popularity', 'relevancy' ou 'publishedAt'
