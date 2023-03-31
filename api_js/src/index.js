const express = require('express');
const cors = require('cors');

//Criando um servidor web através do express
const app = express();

//Configurar a aplicação para receber dados no formato JSON
app.use(express.json());
// app.use(cors());

//Configurando uma requisição com o método GET para 
//a raiz da aplicação 
app.get("/", function(request, response){
    response.status(200).json({ message : "Reposta enviada em JSON"});
});

//EXERCÍCIO - Criar uma nova rota/funcionalidade para receber uma 
//informação pela URL da requição
app.get("/:categoria/:produto", (request, response) => {
    // const produto = request.params.produto;
    // const categoria = request.params.categoria;
    const { produto, categoria } = request.params;
    response.status(200).json({ categoria, produto });
});

//EXERCÍCIO - Criar uma nova rota/funcionalidade com método POST 
//para receber uma informação pelo corpo da requisição
//POSTMAN, INSOMNIA e RESTCLIENT
app.post("/", (request, response) => {
    console.log(request.body);
    response.status(201).json
    (
        { message : "Categoria cadastrada!", categoria : request.body }
    );
});

//O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});