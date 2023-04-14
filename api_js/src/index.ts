import express, { Request, Response } from "express";
import { Produto } from "./entidades/produto.model";

const app = express();

app.use(express.json());

let produtos : Produto[] = [];    

//Listar todos os produtos
app.get("/", function(request : Request, response : Response) : Response{
    return response.status(200).json({ message : "Ok", dados : produtos});
});

//Buscar produto por...
app.get("/:categoria/:produto", (request : Request, response : Response) : Response => {
    const { produto, categoria } = request.params;
    return response.status(200).json({ categoria, produto });
});

//Cadastrar produto
app.post("/", (request : Request, response : Response) : Response => {
    let produto : Produto = new Produto();
    produto.nome = request.body.nome;
    produto.preco = request.body.preco;

    produtos.push(produto);

    return response.status(201).json
    (
        { message : "Produto cadastrado!", dados : produto }
    );
});

//Implementar as funcionalidades no vetor de busca, alteração e remoção
//Implementar o banco na aplicação (Prisma)

app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});