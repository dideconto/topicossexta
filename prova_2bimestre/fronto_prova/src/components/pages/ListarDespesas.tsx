import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListarDespesas() {
  const [despesas, setdespesas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333")
      .then((resposta) => {
        setdespesas(resposta.data.dados);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div>
      <h1>Listagem de Despesas</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {despesas.map((despesa: any) => (
            <tr>
              <td>{despesa.id}</td>
              <td>{despesa.descricao}</td>
              <td>{despesa.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarDespesas;
