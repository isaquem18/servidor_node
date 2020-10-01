const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {v4: uuidv4} = require('uuid');
let ejs = require('ejs');
const port = 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

let pessoas = [
  {nome: 'ana'},
  {nome: 'bruna'},
  {nome: 'carla'},
  {nome: 'daniela'},
  {nome: 'analu'},
  {nome: 'bruno'},
  {nome: 'carlos'},
  {nome: 'carol'},
  {nome: 'carine'},
  {nome: 'dandan'},
  {nome: 'ana maria'},
  {nome: 'cassia'},
  {nome: 'carol'}
]

app.get('/', (req, res) => {
  res.render('index', {
    pessoas
  });
});


app.post('/search', (req, res) => {
  const body = req.body.search;
  let newPessoas = pessoas.filter((item) => item.nome.includes(body))
  res.json({pessoas: newPessoas})
});

app.listen(port, (error) => {
  if (error) {
    console.log('ERROR!');
  } else {
    console.log('SERVER STARTED!');
  };
});


