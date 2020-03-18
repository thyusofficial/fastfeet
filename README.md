<h1 align="center">
  <img alt="FastFeet" title="FastFeet" src=".github/logo.png" />
</h1>

<p align="center">Este codigo apresenta o desenvolvimento de um sistema de transportadora ficticia, a FastFeet, para o desafio final do Bootcamp GoStack 10.0</p>

<p align="center">
 <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#computer-instalação-execução-e-desenvolvimento">Instalação, execução e desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-como-contribuir">Como contribuir</a>
</p>

## :rocket: Tecnologias

As tecnologias utilizadas neste projeto foram:

- [Node.js](https://nodejs.org/en/)
- [Express](https://github.com/expressjs/express)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [Bee-Queue](https://github.com/bee-queue/bee-queue)
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

## :computer: Instalação, execução e desenvolvimento

Faça um clone desse repositório.

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Yarn](https://yarnpkg.com/)
- [Postbird](https://www.electronjs.org/apps/postbird)

### Backend

- Acesse a pasta do servidor `cd backend`;
- Rode `yarn` para que seja feito a instalação das dependências;
- Rode `docker run --name database -e POSTGRESS_PASSWORD=docker -p 5432:5432 -d postgres`
- Rode `docker run --name redisfeet -p 6379:6379 -d -t redis:alpine`
- Rode `docker run database redisfeet` para iniciar os containers
- Acesse o container criado através do Postbird e crie uma base de dados. Exemplo: "fastfeet"
- Preencha o arquivo `.env` com SUAS variáveis ambiente;
- Rode `yarn sequelize db:migrate` para executar as migrations;
- Para executar migration de `admin-user` rode o comando `yarn sequelize db:seed:all`


By [Matheus Cardoso](https://www.linkedin.com/in/thyus/)
