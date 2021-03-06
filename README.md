# desafio-conceitos-nodejs
## Descrição do Projeto
<p align="left">Essa será uma aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".</p>

### Pré-requisitos
VSCode e Yarn.

### Como utilizar 
Após a clonagem desse repositório, digite yarn em seu terminal para instalar todas as dependências do projeto. 

### Features
- [x] **POST /repositories** - A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.
- [x] **GET /repositories** - Rota que lista todos os repositórios;
- [x] **PUT /repositories/:id** - A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;
- [x] **DELETE /repositories/:id** - A rota deve deletar o repositório com o id presente nos parâmetros da rota;
- [x] **POST /repositories/:id/like** - A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;
