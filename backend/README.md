<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

<h3 align="center">
  Desafio final Bootcamp GoStack
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

### **Funcionalidades**

Abaixo estão descritas as funcionalidades da aplicação.

### **1. Autenticação**

O usuário pode se autenticar utilizando e-mail e senha. Este acesso será exclusivo para a transportadora

### 2. Gestão de destinatários

Cada destinatário possui dados de **nome** e campos de endereço: **rua**, **número**, **complemento**, **estado**, **cidade** e **CEP**.
O cadastro de destinatários só pode ser feito por administradores autenticados na aplicação.

### 3. Gestão de entregadores
O administrador pode cadastrar, listar, atualizar e remover entregadores. Eles possuem os campos de:

- id (id do entregador)
- name (nome do entregador);
- avatar_id (foto do entregador);
- email (email do entregador)
- created_at;
- updated_at;

### 4 Gestão de encomendas
O entregador não é independente na plataforma, o cadastro de encomendas é feito por administradores.
Cada encomenda possui os campos de:

- id (id da entrega)
- recipient_id (referência ao destinatário);
- deliveryman_id (referência ao entregador);
- signature_id (referência à uma assinatura do destinatário, que será uma imagem);
- product (nome do produto a ser entregue);
- canceled_at (data de cancelamento, se cancelada);
- start_date (data de retirada do produto);
- end_date (data final da entrega);
- created_at;
- updated_at;

Os campos **recipient_id** e **deliveryman_id** devem ser cadastrados no momento que for cadastrada a encomenda.

A **data de início** deve ser cadastrada assim que for feita a retirada do produto pelo entregador, e as retiradas só podem ser feitas entre as 08:00 e 18:00h. Já a **data de término** da entrega deve ser cadastrada quando o entregador finalizar a entrega.

Quando a encomenda é cadastrada para um entregador, o entregador recebe um e-mail com detalhes da encomenda, com nome do produto e uma mensagem informando-o que o produto já está disponível para a retirada.

### 5 Funcionalidades do entregador
O entregador possui rotas para listar encomendas atribuidas a ele que não estejam **entregues** ou **canceladas**, nessa funcionalidade ele deve informar o seu ID de cadastro. Ele também pode listar encomendas que já foram **entregues**.

### 6 Alterar status de encomendas

O entregador pode alterar o status das encomendas, incluindo a data de retirada (start_date) ou de entrega (end_date), sendo possível fazer 5 retiradas por dia e nos horários entre 8:00 e 18:00.

### 6 Cadastrar problemas nas entregas

O entregador pode cadastrar problemas nas entregas, os campos da tabela de problemas são:

- delivery_id (referência da encomenda);
- description (descrição do problema que o entregador teve);
- created_at;
- updated_at;

A distribuidora pode listar todos os problemas, ou listar todos os problemas de uma encomenda específica. E também pode cancelar uma encomenda baseado na gravidade do problema.


