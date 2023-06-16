import { Request, Response } from "express";
import { Produto } from "../models/produto.model";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class ProdutoController {
  async listar(request: Request, response: Response): Promise<Response> {
    const produtos = await prisma.produto.findMany({});
    return response.status(200).json({ message: "Ok", dados: produtos });
  }

  async buscar(request: Request, response: Response): Promise<Response> {
    const produto = await prisma.produto.findUnique({
      where: {
        id: Number.parseInt(request.params.id),
      },
    });
    if (!produto) {
      return response.status(404).json({ message: "Produto não encontrado!" });
    }
    return response.status(200).json({ data: produto });
  }

  async cadastrar(request: Request, response: Response): Promise<Response> {
    let produto: Produto = new Produto();
    produto.nome = request.body.nome;
    produto.preco = Number.parseInt(request.body.preco);

    const produtoCadatrado = await prisma.produto.create({
      data: {
        nome: produto.nome,
        preco: produto.preco,
      },
    });

    return response
      .status(201)
      .json({ message: "Produto cadastrado!", dados: produtoCadatrado });
  }
}
