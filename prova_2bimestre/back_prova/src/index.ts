import express from "express";
import { router } from "./config/routes";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
app.use(router);

app.listen(3333, function () {
  console.clear();
  console.log("Aplicação rodando na porta 3333");
});
