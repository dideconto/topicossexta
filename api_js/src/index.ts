import express from "express";
import { router } from "./config/routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, function(){
    console.clear();
    console.log("Aplicação rodando na porta 3000");
});    

//Implementar as funcionalidades no vetor de busca, alteração e remoção
//Implementar o banco na aplicação (Prisma)