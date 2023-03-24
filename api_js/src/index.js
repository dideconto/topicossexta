const express = require('express');

//Criando um servidor web através do express
const app = express();

//Configurando uma requisição com o método GET para 
//a raiz da aplicação 
app.get("/", function(request, response){
    response.status(200).json({ message : "Reposta enviada em JSON"});
});

//EXERCÍCIO - Criar uma nova rota/funcionalidade para receber uma 
//informação pela URL da requição
app.get("/:categoria", (request, response) => {
    console.log(request.params.categoria);
});

//EXERCÍCIO - Criar uma nova rota/funcionalidade com método POST 
//para receber uma informação pelo corpo da requisição
//POSTMAN, INSOMNIA e RESTCLIENT

//O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});