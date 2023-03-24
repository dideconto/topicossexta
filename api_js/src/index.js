const express = require('express');

//Criando um servidor web através do express
const app = express();

//Configurando uma requisição com o método GET para 
//a raiz da aplicação 
app.get("/", function(request, response){
    console.log("Primeira requisição recebida!");
    response.status(200).json({ message : "Reposta enviada em JSON"});
});

//EXERCÍCIO - Criar uma nova rota/funcionalidade para receber uma 
//informação pelo corpo da requisição

//EXERCÍCIO - Criar uma nova rota/funcionalidade para receber uma 
//informação pela URL da requição

//O comando listen roda a aplicação
app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});