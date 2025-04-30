# takehome-next-nestjs
📌 Take-home Assignment – Desenvolvimento Fullstack com Next.js e NestJS
Requisitos
Docker (se usar Docker)

Node.js (para rodar sem Docker)

PostgreSQL (para o banco de dados)

Redis (para cache)

Instalação e Execução
Backend (NestJS)
Instalar Dependências

Navegue até a pasta do backend e instale as dependências:

bash
Copy
Edit
cd backend
npm install
Configuração das Variáveis de Ambiente

Crie o arquivo .env no diretório do backend com o seguinte conteúdo:

env
Copy
Edit
PORT=3001
DB_HOST=postgres
DB_PORT=5432
DB_USER=admin
DB_PASSWORD=postgres
DB_NAME=challenge-db
REDIS_HOST=redis
REDIS_PORT=6379
Rodar o Backend

Para rodar o backend, utilize o comando abaixo dentro da pasta do backend:

bash
Copy
Edit
npm run start
O servidor backend será iniciado em http://localhost:3001.

Frontend (Next.js)
Instalar Dependências

Navegue até a pasta do frontend e instale as dependências:

bash
Copy
Edit
cd frontend
npm install
Configuração das Variáveis de Ambiente

Crie o arquivo .env no diretório do frontend com o seguinte conteúdo:

env
Copy
Edit
NEXT_PUBLIC_API_URL=http://localhost:3001
Rodar o Frontend

Para rodar o frontend, utilize o comando abaixo dentro da pasta do frontend:

bash
Copy
Edit
npm run dev
O servidor frontend será iniciado em http://localhost:3000.

Usando Docker (Opcional para Backend)
Se preferir usar Docker para o backend, pode usar o arquivo docker-compose.yml.

Configurar Docker

O arquivo docker-compose.yml já está configurado para subir o backend com o PostgreSQL e Redis. Para rodar o Docker, execute:

bash
Copy
Edit
docker-compose up --build
Esse comando vai construir as imagens e iniciar o backend e os serviços auxiliares (PostgreSQL e Redis).

Acessar os Contêineres

O backend estará rodando em http://localhost:3001.

O frontend estará rodando em http://localhost:3000.

O PostgreSQL estará rodando na porta 5432.

O Redis estará rodando na porta 6379.

Parar os Contêineres

Para parar os contêineres, use o seguinte comando:

bash
Copy
Edit
docker-compose down
Estrutura das Rotas
Backend (NestJS)
GET /users: Retorna todos os usuários.

GET /users/:id: Retorna um usuário específico pelo ID.

POST /users: Cria um novo usuário.

PUT /users/:id: Atualiza um usuário existente pelo ID.

DELETE /users/:id: Deleta um usuário pelo ID.

Frontend (Next.js)
Página inicial: Lista todos os usuários.

Página de criação: Formulário para criar um novo usuário.

Página de edição: Formulário para editar um usuário existente.
