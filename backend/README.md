<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

<h3 align="center">
  API do Desafio final Bootcamp GoStack
</h3>

<p>
Este desafio faz parte do Bootcamp GoStack e do Desafio Final, que contempla uma aplicação
completa (Back-end, Front-end e Mobile).
</p>

## :rocket: Sobre o desafio

A aplicação desenvolvida é um app para uma transportadora fictícia, o FastFeet.

Nesse desafio a ideia é construir a api back-end que servirá os dados para o front-end em (React) e o Mobile (React Native).

### **Um pouco sobre as ferramentas**


- Express
- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (utilizando PostgreSQL);

### **Rotas**

Abaixo estão descritas as rotas da aplicação.

### **1. Autenticação**
| Ação |  Tipo  | Rota |
| ---| --- | --- |
|  Rota de autenticação do adm | *POST* |  `/sessions` |

### **2. Gestão de entregadores**
| Ação |  Tipo  | Rota |
| ---| --- | --- |
| Listagem (todos ou passando o nome como parâmetro)| *GET* |  `/deliverymen?q=` |
| Criação | *POST* |  `/deliverymen` |
| Edição | *PUT* |  `/deliverymen/:id` |
| Remoção | *DELETE* |  `/deliverymen/:id` |

### **2. Gestão de Destinatários**
| Ação |  Tipo  | Rota |
| ---| --- | --- |
| Listagem (todos ou passando o nome como parâmetro)| *GET* |  `/recipients?q=` |
| Criação | *POST* |  `/recipients` |
| Edição | *PUT* |  `/recipients/:id` |
| Remoção | *DELETE* |  `/recipients/:id` |

### **3. Gestão de Encomendas**
| Ação |  Tipo  | Rota |
| ---| --- | --- |
| Listagem (todos ou passando o nome como parâmetro)| *GET* |  `/deliveries/?q=` |
| Criação | *POST* |  `/deliveries` |
| Edição | *PUT* |  `/deliveries/:id` |
| Remoção | *DELETE* |  `/deliveries/:id` |

### **4. Funcionalidades do Entregador**
| Ação |  Tipo  | Rota |
| ---| --- | --- |
| Listagem de encomendas não entregues (id do entregador)| *GET* |  `/deliveryman/:id/undelivered` |
| Listagem de encomendas entregues (id do entregador)| *GET* |  `/deliveryman/:id/delivered` |
| Altera status da encomenda (id da encomenda)| *PUT* |  `/deliveries/withdraw/:id` |
| Altera status da encomenda (id da encomenda)| *DELETE* |  `/deliveries/withdraw/:id` |
| Cadastra problema na entrega (id da encomenda)| *POST* |  `/delivery/id/problems` |







