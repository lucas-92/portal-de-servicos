
# Requisitos do Ambiente de Desenvolvimento para o Portal de Notícias

## 1. **Ferramentas Essenciais**
Certifique-se de que as seguintes ferramentas estão instaladas:

### **Node.js**
- **Versão recomendada:** 18.x ou superior.
- Necessário para rodar o backend (Express) e o frontend (React).
- Verifique se está instalado com:
  ```bash
  node -v
  ```
- Caso não esteja, [baixe e instale o Node.js aqui](https://nodejs.org/).

---

### **pnpm**
- Um gerenciador de pacotes mais rápido e eficiente.
- Instale globalmente com:
  ```bash
  npm install -g pnpm
  ```

---

### **SQLite (ou outro banco de dados)**
- O projeto usa SQLite por padrão, que não exige instalação externa. O Prisma gerencia o arquivo de banco de dados para você.
- Se preferir usar outro banco de dados, como MySQL ou PostgreSQL, instale a respectiva instância local ou configure um serviço em nuvem.

---

### **Editor de Código**
- Use um editor de código como o **[Visual Studio Code (VS Code)](https://code.visualstudio.com/)**.
- Recomendado instalar as extensões:
  - **ESLint**: Para análise de código.
  - **Prisma**: Para ajudar na edição de arquivos `.prisma`.
  - **Prettier**: Para formatação automática do código.

---

## 2. **Configuração do Backend**

### Dependências do Backend:
No diretório raiz do projeto (onde está o arquivo `server.js`), instale as dependências:
```bash
pnpm install
```

---

### Migração do Banco de Dados:
Certifique-se de que o Prisma foi configurado corretamente:
1. Rode as migrações para criar o banco de dados:
   ```bash
   npx prisma migrate dev --name init
   ```
2. Gere o cliente Prisma:
   ```bash
   npx prisma generate
   ```

---

## 3. **Configuração do Frontend**

### Dependências do Frontend:
No diretório `client`, instale as dependências do React:
```bash
pnpm install
```

---

## 4. **Execução do Portal**

### Passos para iniciar o ambiente:
1. **Inicie o Backend**:
   No diretório raiz do projeto:
   ```bash
   node server.js
   ```
   O backend estará disponível em `http://localhost:3001`.

2. **Inicie o Frontend**:
   No diretório `client`:
   ```bash
   pnpm dev
   ```
   O frontend estará disponível em `http://localhost:5173`.

---

## 5. **Outras Ferramentas Úteis**

- **Postman ou Insomnia**: Para testar os endpoints do backend (opcional).
- **Git**: Para controle de versão.
- **Extensão Live Server no VS Code** (opcional): Para testar páginas estáticas rapidamente.

---

Com este ambiente, você estará pronto para executar, desenvolver e personalizar o portal de notícias! 🚀
