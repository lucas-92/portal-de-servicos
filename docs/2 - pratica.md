1. Criação do Repositório no GitHub
Passo 1: Crie um repositório no GitHub

    Acesse GitHub e faça login.
    Clique em New Repository.
    Preencha:
        Nome do repositório (ex.: portal-noticias).
        Escolha Public ou Private.
        Marque a opção para adicionar um arquivo README.md.
    Clique em Create Repository.

   2. Clone o Repositório para a Máquina Local

git clone https://github.com/<seu-usuario>/portal-noticias.git
cd portal-noticias

Substitua <seu-usuario> pelo nome do seu usuário no GitHub.

3. Inicialize o Projeto
Backend e Frontend

    Crie as pastas para o backend e frontend:

mkdir backend client
cd backend

Inicialize o backend:

pnpm init
pnpm add prisma @prisma/client express body-parser cors
npx prisma init

Configure o frontend (em outro terminal):

cd ../client
pnpm create vite@latest . --template react
pnpm install

4. Configure o Controle de Versão com Git
Adicione os arquivos e commit inicial:

    Certifique-se de estar na raiz do projeto:

cd ../  # Voltar à pasta raiz do repositório

Configure o .gitignore: Crie um arquivo .gitignore com o seguinte conteúdo para evitar enviar arquivos desnecessários ao GitHub:

node_modules/
.env
.next/
dist/
prisma/dev.db

Adicione os arquivos ao repositório:

git add .
git commit -m "Configuração inicial do portal de notícias"

Envie as alterações para o GitHub:

git push origin main

5. Execute o Ambiente Localmente
Backend:

    No diretório backend, inicie o servidor:

    node server.js

Frontend:

    No diretório client, inicie o servidor do React:

pnpm dev

6. Publicação de Alterações Futuras

Sempre que fizer alterações no código, siga estes passos:

    Verifique os arquivos modificados:

git status

Adicione as alterações:

git add .

Faça o commit:

git commit -m "Descrição das alterações"

Envie para o GitHub:

git push origin main

Com esses passos, seu ambiente de desenvolvimento estará integrado ao Git e GitHub, facilitando o controle de versão e colaboração. 🚀
