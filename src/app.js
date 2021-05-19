const express = require("express");
const cors = require("cors");
const {uuid} = require('uuidv4') 

const app = express();

app.use(express.json());
app.use(cors());

const repositoriesArray = [];

//Listando
app.get("/repositories", (request, response) => {
  const {title} = request.query;

  const results = title
  ? repositoriesArray.filter(repository => repository.title.includes(title))
  : repositoriesArray;

  return response.json(results);
});

//Criando
app.post("/repositories", (request, response) => {
  const {title, url, techs} = request.body;

  const repository = {id: uuid(), title, url, techs, likes:0};

  repositoriesArray.push(repository);//colocando no array as infos recebidas (Json)

  return response.json(repository)
});

app.put("/repositories/:id", (request, response) => {
  // Atualizar title, url, techs
  const {id} = request.params;//pegando o id da requisiçao;
  const {title, url, techs} = request.body;

  //comparando se o id localizado no repositorio é o mesmo que o usuario selecionou para atualizar
  const repositoryIndex = repositoriesArray.findIndex(repository => repository.id == id);

  if(repositoryIndex < 0){
    return response.status(400).json({error: 'Repository not found'})
  }

  const repository ={
    id, 
    title,
    url,
    techs,
    likes: repositoriesArray[repositoryIndex].likes,
  }

  repositoriesArray[repositoryIndex] = repository;//colocando as infos no array

  return response.json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  const {id} = request.params;

  const repositoryIndex = repositoriesArray.findIndex(repository => repository.id == id);
   
  if (repositoryIndex < 0){
    return response.status(400).json({error: 'Repository not found'})
  }else{
    repositoriesArray.splice(repositoryIndex, 1);
  }

  return response.status(204).send()
});

app.post("/repositories/:id/like", (request, response) => {
  const {id} = request.params;

  //comparando se o id localizado no repositorio é o mesmo que o usuario selecionou para atualizar(-1 == not found e 1 == found)
  const repositoryIndex = repositoriesArray.findIndex(repository => repository.id == id);

  if(repositoryIndex < 0){
    return response.status(400).json({error: 'Repository not found'})
  }

  repositoriesArray[repositoryIndex].likes++;//Atualizando os likes do id indicado

  return response.json(repositoriesArray[repositoryIndex])
});

module.exports = app;