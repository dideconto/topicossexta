import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);

  //Função de carregamento do componente
  //React Router DOM - https://www.youtube.com/watch?v=7b42lVMdEjE
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((resposta) => {
        setProdutos(resposta.data.dados);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div>
      <h1>Listagem de produtos</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto: any) => (
            <tr>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>
                {/* <Link to={"/detalhes/" + produto.id}> Detalhes </Link> */}
                <Link to={`/detalhar/${produto.id}`}> Detalhes </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarProdutos;
