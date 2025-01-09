
# Criando um Portal de Serviços com Prisma, pnpm, JSON e React

## 1. Configuração Inicial

### **Instale o pnpm**
Certifique-se de que o `pnpm` está instalado em sua máquina. Caso não esteja, instale-o com:

```bash
npm install -g pnpm
```

### **Inicialize o Projeto**
Crie uma nova pasta para o projeto e inicialize o gerenciador de pacotes:

```bash
mkdir portal-servicos && cd portal-servicos
pnpm init
```

---

## 2. Configure o Backend com Prisma

### **Instale o Prisma**
Adicione o Prisma ao projeto e inicialize:

```bash
pnpm add prisma @prisma/client
npx prisma init
```

Isso criará o arquivo `prisma/schema.prisma`.

### **Defina o Modelo no Prisma**
No arquivo `prisma/schema.prisma`, configure os modelos para serviços e usuários. Por exemplo:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite" // Use SQLite para simplicidade. Pode ser MySQL ou PostgreSQL.
  url      = "file:./dev.db"
}

model User {
  id       Int      @id @default(autoincrement())
  name     String
  email    String   @unique
  services Service[]
}

model Service {
  id          Int      @id @default(autoincrement())
  title       String
  description String
  price       Float
  userId      Int
  user        User      @relation(fields: [userId], references: [id])
}
```

### **Migre o Banco de Dados**
Rode as migrações para criar o banco de dados:

```bash
npx prisma migrate dev --name init
```

---

## 3. Configure o Servidor Backend com Node.js e Express

### **Instale o Express**
Adicione o Express e outras dependências necessárias:

```bash
pnpm add express body-parser cors
```

### **Crie o Servidor**
Crie um arquivo `server.js`:

```javascript
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

// Endpoints
app.get('/services', async (req, res) => {
  const services = await prisma.service.findMany({
    include: { user: true },
  });
  res.json(services);
});

app.post('/services', async (req, res) => {
  const { title, description, price, userId } = req.body;
  const service = await prisma.service.create({
    data: { title, description, price, userId },
  });
  res.json(service);
});

// Start server
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
```

---

## 4. Configure o Frontend com React

### **Inicialize o React**
Crie o frontend com Vite:

```bash
pnpm create vite@latest client --template react
cd client
pnpm install
```

### **Instale Axios**
Adicione o Axios para fazer requisições HTTP:

```bash
pnpm add axios
```

### **Crie os Componentes**
No diretório `client/src`, crie os seguintes componentes principais:

#### **ServiceList.jsx**
```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/services').then((response) => {
      setServices(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Serviços</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p>Preço: R${service.price}</p>
            <p>Usuário: {service.user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
```

#### **App.jsx**
```javascript
import React from 'react';
import ServiceList from './ServiceList';

const App = () => {
  return (
    <div>
      <h1>Portal de Serviços</h1>
      <ServiceList />
    </div>
  );
};

export default App;
```

---

## 5. Execute o Projeto

### **Inicie o Backend**
Na pasta raiz do projeto:

```bash
node server.js
```

### **Inicie o Frontend**
Na pasta `client`:

```bash
pnpm dev
```

Acesse o frontend em `http://localhost:5173` e o backend em `http://localhost:3001`.

---

Com isso, você terá um portal básico de serviços configurado usando **Prisma**, **pnpm**, **JSON** e **React**. 🚀
