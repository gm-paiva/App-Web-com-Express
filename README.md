# 🌐 App Web com Express

> Aplicação web desenvolvida com Node.js e Express para servir páginas HTML estáticas, com roteamento e suporte a arquivos de assets (CSS e imagens).

---

## 📌 Sobre o Projeto

Este projeto consiste no desenvolvimento de um servidor web utilizando **Node.js** com o framework **Express**, capaz de servir páginas HTML estáticas por meio de rotas definidas. A aplicação inclui uma página inicial com informações sobre o curso de DSM, além de páginas de login, cadastro e tratamento de erro 404.

A atividade foi desenvolvida como parte das práticas acadêmicas da **FATEC Jacareí – Faculdade de Tecnologia de Jacareí**, no curso de **Desenvolvimento de Software Multiplataforma (DSM)**.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) — Ambiente de execução JavaScript no servidor
- [Express v5](https://expressjs.com/) — Framework web para Node.js
- [dotenv](https://github.com/motdotla/dotenv) — Gerenciamento de variáveis de ambiente
- HTML5 + CSS3 — Estrutura e estilização das páginas estáticas
- JavaScript — Linguagem base do projeto

---

## 📁 Estrutura do Projeto

```
app/
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css          # Estilos globais da aplicação
│   │   └── img/
│   │       ├── logo_cps_transparente.png
│   │       ├── logo_dsm_transparente.png
│   │       └── logo_fatec_transparente.png
│   └── pages/
│       ├── index.html            # Página inicial (Home - DSM)
│       ├── login.html            # Página de login
│       ├── cadastro.html         # Página de cadastro
│       └── 404.html              # Página de erro
├── .env                          # Variáveis de ambiente (porta do servidor)
├── .gitignore
├── package.json
├── package-lock.json
└── server.js                     # Arquivo principal do servidor Express
```

---

## 🔀 Rotas Disponíveis

| Método | Rota        | Descrição              |
|--------|-------------|------------------------|
| GET    | `/`         | Página inicial (Home)  |
| GET    | `/login`    | Página de login        |
| GET    | `/cadastro` | Página de cadastro     |
| GET    | `/404`      | Página de erro 404     |
| GET    | `/assets/*` | Arquivos estáticos     |

---

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
PORT=3001  # ou qualquer outra porta de sua preferência
```

> ⚠️ O arquivo `.env` já está no `.gitignore` e **não deve ser versionado**.

---

## ⚙️ Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 14 ou superior)
- npm (incluído com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# 2. Acesse a pasta do projeto
cd app

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
# Crie o arquivo .env conforme a seção acima

# 5a. Inicie o servidor (produção)
npm start

# 5b. Inicie o servidor (desenvolvimento com hot reload)
npm run dev
```

Acesse no navegador: [http://localhost:3001](http://localhost:3001)

---

## 📚 Contexto Acadêmico

| Campo          | Informação                                        |
|----------------|---------------------------------------------------|
| 🏫 Instituição | FATEC Jacareí                                     |
| 🎓 Curso       | Desenvolvimento de Software Multiplataforma – DSM |
| 📖 Disciplina  | Desenvolvimento Web I                            |
| 👨‍🏫 Professor(a) | [Arley Ferreira de Souza](https://github.com/arleysouza) |
| 📅 Semestre    | 1º Semestre - 2026 |

---

## 👤 Autor

Desenvolvido por **[Guilherme Matos Paiva](https://github.com/gm-paiva)**.

---

## 📄 Licença

Este projeto está sob a licença MIT.
