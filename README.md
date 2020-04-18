<h1 align="center">
  <img alt="FastFeet" title="FastFeet" src=".github/logo.png" />
</h1>

<p align="center">Este codigo apresenta o desenvolvimento de um sistema de transportadora ficticia, a FastFeet, para o desafio final do Bootcamp GoStack 10.0</p>

<p align="center">
 <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#computer-instalação-e-execução">Instalação</a>
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

## :computer: Instalação e execução

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
- Rode `docker start database redisfeet` para iniciar os containers
- Acesse o container criado através do Postbird e crie uma base de dados. Exemplo: "fastfeet"
- Preencha o arquivo `.env` com SUAS variáveis ambiente;
- Rode `yarn sequelize db:migrate` para executar as migrations;
- Para executar seed de `admin-user` rode o comando `yarn sequelize db:seed:all`

### Frontend 

- Acesse a pasta da aplicação web `cd frontend`;
- Rode `yarn` para que seja feito a instalação das dependências;
- Rode `yarn start` para rodar o projeto react;

### Mobile 
- A aplicação foi desenvolvida e testada apenas no sistema **Android**
- A emulação foi feita em um aparelho via USB e informações de como fazer essa configuração pode ser encontrada no [blog](https://docs.rocketseat.dev/ambiente-react-native/usb/android) da Rocketseat
- Acesse a pasta da aplicação mobile `cd mobile`
- Rode `yarn` para instalar as dependências
- Acesse `mobile/services/api.js` e altere a `baseURL` para o IP da sua máquina
- Rode `react-native run-android` para rodar o projeto React Native






By [Matheus Cardoso](https://www.linkedin.com/in/thyus/)
