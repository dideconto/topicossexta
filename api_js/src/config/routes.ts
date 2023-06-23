import { Router } from "express";
import { ProdutoController } from "../controllers/produto.controller";

const router: Router = Router();

//Configurar todas rotas/URLs/endpoints da aplicação
router.post("/", new ProdutoController().cadastrar);
router.get("/", new ProdutoController().listar);
router.get("/:id", new ProdutoController().buscar);
router.delete("/:id", new ProdutoController().deletar);

export { router };
