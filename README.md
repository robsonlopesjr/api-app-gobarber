<h4 align="center">
	🚧  Backend da Aplicação GoBarber 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autor">Autor</a> •
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

🚀 Projeto de uma Barbearia desenvolvido durante o curso GoStack 13 da RocketSeat.

---

## ⚙️ Funcionalidades

# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
- Cada agendamento deve durar 1h exatamente;
- O usuário não pode agendar em um horário já ocupado;

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Instale as dependências
$ yarn

# Execute as migrations para o banco de dados
$ yarn typeorm migration:run

# Acesso o site do MD5 online para gerar o hash para o secret e inserir no arquivo .env em APP_SECRET

# Execute a aplicação em modo de desenvolvimento
yarn dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [](https://github.com/robsonlopesjr/api-app-gobarber)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Postgre](https://www.postgresql.org/)**
-   **[MongoDB](https://www.mongodb.com/)**
-   **[Redis](https://redis.io/)**
-   **[Express](https://expressjs.com/)**
-   **[Jest](https://www.npmjs.com/package/jest)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[Multer](https://github.com/expressjs/multer)**
-   **[Nodemailer](https://www.npmjs.com/package/nodemailer)**
-   **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**
-   **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**
-   **[uuidv4](https://www.npmjs.com/package/uuidv4)**
-   **[Gerador MD5](http://www.md5.cz/)**

---

## 🦸 Autor

<a href="https://www.instagram.com/robson.junior.184/">
 <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/69487360?s=400&u=7956928a6764b5ab125fccfa6350c58e3414e2ff&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Robson Júnior</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-Robson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/robson-jos%C3%A9-lopes-gon%C3%A7alves-j%C3%BAnior-7680b41a4/)](https://https://www.linkedin.com/in/robson-jos%C3%A9-lopes-gon%C3%A7alves-j%C3%BAnior-7680b41a4/)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
