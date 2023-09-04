# NestJS Backend Visagio

Este backend foi criado usando NestJS e Prisma, e foi projetado para uma atividade para o exercicio Rocketlab da Visagio.

## 🚀 Funcionalidades

1. **Criação de Produto**: Adicione novos produtos à base de dados.
2. **Listagem de Produtos**: Liste todos os produtos disponíveis.
3. **Atualização de Produto**: Atualize os detalhes de um produto específico.
4. **Deleção de Produto**: Remova um produto da base de dados.
5. **Obtenção de Detalhes de Produto Específico**: Obtenha detalhes de um produto específico.
6. **Compra de Produto**: Marque um produto como comprado e o torne indisponível para futuras compras.

## 🛠 Setup

### Pré-requisitos

- Node.js
- NestJS CLI
- Prisma CLI

### Instruções de Instalação

1. Clone o repositório.
2. Navegue até a pasta do projeto e instale as dependências usando `npm install`.
3. Configure o Prisma com seu banco de dados.
4. Execute as migrações do Prisma com `prisma migrate dev`.
5. Inicie o servidor com `npm run start`.

## 📌 Endpoints

- `POST /products`: Criar um novo produto.
- `GET /products`: Listar todos os produtos.
- `PUT /products/:id`: Atualizar um produto específico.
- `DELETE /products/:id`: Deletar um produto específico.
- `GET /products/:id`: Obter detalhes de um produto específico.
- `POST /products/:id`: Comprar um produto específico.

---
