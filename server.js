// importar o módulo dotenv //
const dotenv = require('dotenv');
dotenv.config(); // dotenv.config() deve estar na linha mais alta possível //

// importar o módulo Express //
const express = require('express');

// importar o módulo path //
const path = require('path');

//------------------------------------------------------------//

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, function(){console.log(`Servidor rodando em http://localhost:${PORT}`)});

//------------------------------------------------------------//

// servir arquivos estáticos a partir da pasta 'public' //
const publicPath = path.join(__dirname, 'public');

// definir o caminho para a pasta 'pages' dentro da pasta 'public' //
const pagesPath = path.join(publicPath, 'pages');

//------------------------------------------------------------//

// definir rotas para os arquivos HTML //

// se nenhuma das rotas abaixo for encontrada, redirecionar para a página 404 //
app.get('/404', function(req, res){res.sendFile(path.join(pagesPath, '404.html'))});

app.get('/', function(req, res){res.sendFile(path.join(pagesPath, 'index.html'))});
app.get('/login', function(req, res){res.sendFile(path.join(pagesPath, 'login.html'))});
app.get('/cadastro', function(req, res){res.sendFile(path.join(pagesPath, 'cadastro.html'))});

// caminho para os arquivos estáticos (CSS, JS, imagens) //
app.use('/assets', express.static(path.join(publicPath, 'assets')));

//------------------------------------------------------------//