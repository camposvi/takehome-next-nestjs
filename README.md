# takehome-next-nestjs
📌 Take-home Assignment – Desenvolvimento Fullstack com Next.js e NestJS
Este repositório contém dois projetos principais: o **Server** (backend) e o **Client** (frontend). Este guia explica como configurar e executar ambos.

---

## Estrutura do Projeto

- **`server/`**: Contém o backend desenvolvido com [NestJS](https://nestjs.com/).
- **`client/`**: Contém o frontend desenvolvido com [Next.js](https://nextjs.org/).

---

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (opcional, mas recomendado para rodar serviços como banco de dados e cache)

---

## Configuração do Ambiente

### 1. Clone o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd takehome-next-nestjs
2. Instale as Dependências
Para o Server:
Para o Client:
3. Configure as Variáveis de Ambiente
Server:
No diretório server, o arquivo .env já está configurado com valores padrão. Certifique-se de que as variáveis de ambiente estão corretas:

PORT=3000

# PostgreSQL
DB_HOST=postgres
DB_PORT=5432
DB_USER=admin
DB_PASSWORD=postgres
DB_NAME=challenge-db

# Redis
REDIS_HOST=redis
REDIS_PORT=6379



Executando o Projeto
Usando Docker Compose (Recomendado)
Suba os serviços com Docker Compose
No diretório raiz do projeto:
  docker-compose up --build

Isso irá iniciar o backend (Server), o banco de dados PostgreSQL e o Redis.

Acesse as aplicações:

Frontend (Client): http://localhost:3001
Backend (Server): http://localhost:3000
Executando Manualmente (Sem Docker)
Server:
Certifique-se de que o PostgreSQL e o Redis estão rodando localmente ou em um ambiente acessível.

Atualize as variáveis de ambiente no arquivo .env para apontar para os serviços configurados.

Inicie o servidor:
cd server
npm run start:dev
O servidor estará disponível em http://localhost:3000.

Client:
Certifique-se de que o backend (Server) está rodando.

Inicie o frontend:
cd client
npm run dev
O frontend estará disponível em http://localhost:3001.

Testes
Server:
Testes Unitários:
cd server
npm run test
Testes End-to-End:
npm run test:e2e
Cobertura de Testes:


Problemas Comuns
Erro de conexão com o banco de dados: Certifique-se de que o PostgreSQL está rodando e as variáveis de ambiente estão configuradas corretamente.
Porta em uso: Verifique se as portas 3000 (Server) ou 3001 (Client) já estão sendo usadas por outro processo.
Recursos Adicionais
camposvi: gere um readme ensinando a rodar o projeto server

Workspace: Collecting workspace information```md
# Como Rodar o Projeto Server

Este guia explica como configurar e executar o projeto NestJS localizado na pasta `server`.

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (para rodar os serviços de banco de dados e cache)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

## Configuração do Ambiente

1. **Clone o repositório** (se ainda não o fez):

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd takehome-next-nestjs/server
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:

   O arquivo `.env` já está configurado com valores padrão. Certifique-se de que as variáveis de ambiente no arquivo `.env` estão corretas para o seu ambiente. Por exemplo:

   ```env
   PORT=3000
   DB_HOST=postgres
   DB_PORT=5432
   DB_USER=admin
   DB_PASSWORD=postgres
   DB_NAME=challenge-db
   REDIS_HOST=redis
   REDIS_PORT=6379
   ```

## Executando o Projeto

### Usando Docker Compose

1. **Suba os serviços com Docker Compose**:

   ```bash
   docker-compose up --build
   ```

   Isso irá iniciar o servidor NestJS, o banco de dados PostgreSQL e o Redis.

2. **Acesse a aplicação**:

   O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

### Executando Localmente (Sem Docker)

1. **Certifique-se de que o PostgreSQL e o Redis estão rodando**:

   - Configure o banco de dados PostgreSQL e o Redis localmente ou em um ambiente acessível.
   - Atualize as variáveis de ambiente no arquivo .env para apontar para os serviços configurados.

2. **Inicie o servidor em modo de desenvolvimento**:

   ```bash
   npm run start:dev
   ```

   O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

## Testes

### Testes Unitários

Execute os testes unitários com o comando:

```bash
npm run test
```

### Testes End-to-End

Execute os testes end-to-end com o comando:

```bash
npm run test:e2e
```

### Cobertura de Testes

Para gerar um relatório de cobertura de testes:

```bash
npm run test:cov
```

## Estrutura do Projeto

- **`src/`**: Contém o código-fonte principal.
- **`test/`**: Contém os testes end-to-end.
- **`docker-compose.yml`**: Configuração do Docker Compose para o ambiente de desenvolvimento.
- **`.env`**: Arquivo de configuração de variáveis de ambiente.

## Problemas Comuns

- **Erro de conexão com o banco de dados**: Certifique-se de que o PostgreSQL está rodando e as variáveis de ambiente estão configuradas corretamente.
- **Porta em uso**: Verifique se a porta `3000` já está sendo usada por outro processo.

## Recursos Adicionais

- [Documentação do NestJS](https://docs.nestjs.com/)
- [Documentação do Docker Compose](https://docs.docker.com/compose/)


camposvi: gere um readme para o projeto inteiro server e client

GitHub Copilot: ```md
# Guia de Configuração e Execução do Projeto

Este repositório contém dois projetos principais: o **Server** (backend) e o **Client** (frontend). Este guia explica como configurar e executar ambos.

---

## Estrutura do Projeto

- **`server/`**: Contém o backend desenvolvido com [NestJS](https://nestjs.com/).
- **`client/`**: Contém o frontend desenvolvido com [Next.js](https://nextjs.org/).

---

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (opcional, mas recomendado para rodar serviços como banco de dados e cache)

---

## Configuração do Ambiente

### 1. Clone o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd takehome-next-nestjs
```

### 2. Instale as Dependências

#### Para o Server:

```bash
cd server
npm install
```

#### Para o Client:

```bash
cd ../client
npm install
```

### 3. Configure as Variáveis de Ambiente

#### Server:

No diretório `server`, o arquivo `.env` já está configurado com valores padrão. Certifique-se de que as variáveis de ambiente estão corretas:

```properties
PORT=3000

# PostgreSQL
DB_HOST=postgres
DB_PORT=5432
DB_USER=admin
DB_PASSWORD=postgres
DB_NAME=challenge-db

# Redis
REDIS_HOST=redis
REDIS_PORT=6379
```

#### Client:

No diretório `client`, crie um arquivo `.env.local` (se ainda não existir) e configure as variáveis de ambiente. Exemplo:

```properties
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## Executando o Projeto

### Usando Docker Compose (Recomendado)

1. **Suba os serviços com Docker Compose**:

   No diretório raiz do projeto:

   ```bash
   docker-compose up --build
   ```

   Isso irá iniciar o backend (Server), o frontend (Client), o banco de dados PostgreSQL e o Redis.

2. **Acesse as aplicações**:

   - **Frontend (Client)**: [http://localhost:3001](http://localhost:3001)
   - **Backend (Server)**: [http://localhost:3000](http://localhost:3000)

---

### Executando Manualmente (Sem Docker)

#### Server:

1. Certifique-se de que o PostgreSQL e o Redis estão rodando localmente ou em um ambiente acessível.
2. Atualize as variáveis de ambiente no arquivo .env para apontar para os serviços configurados.
3. Inicie o servidor:

   ```bash
   cd server
   npm run start:dev
   ```

   O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

#### Client:

1. Certifique-se de que o backend (Server) está rodando.
2. Inicie o frontend:

   ```bash
   cd client
   npm run dev
   ```

   O frontend estará disponível em [http://localhost:3001](http://localhost:3001).

---

## Testes

### Server:

- **Testes Unitários**:

  ```bash
  cd server
  npm run test
  ```

- **Testes End-to-End**:

  ```bash
  npm run test:e2e
  ```

- **Cobertura de Testes**:

  ```bash
  npm run test:cov
  ```

### Client:

- **Testes Unitários**:

  ```bash
  cd client
  npm run test
  ```

---

## Problemas Comuns

- **Erro de conexão com o banco de dados**: Certifique-se de que o PostgreSQL está rodando e as variáveis de ambiente estão configuradas corretamente.
- **Porta em uso**: Verifique se as portas `3000` (Server) ou `3001` (Client) já estão sendo usadas por outro processo.

---

## Recursos Adicionais

- [Documentação do NestJS](https://docs.nestjs.com/)
- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Docker Compose](https://docs.docker.com/compose/)

