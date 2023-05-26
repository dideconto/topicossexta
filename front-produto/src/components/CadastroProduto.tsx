import axios from "axios";
import { useState } from "react";

function Operacao() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  function enviar() {
    axios
      .post("http://localhost:3001", { nome, preco })
      .then((data) => {})
      .catch((erro) => {});
    //Enviar o produto para a API, através FETCH ou AXIOS
  }

  return (
    <div>
      <h1> Cadastrar Produto</h1>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          onChange={(event: any) => setNome(event.target.value)}
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="text"
          onChange={(event: any) => setPreco(event.target.value)}
        />
      </div>
      <div>
        <button onClick={enviar}>Cadastrar</button>
      </div>
    </div>
  );
}

export default Operacao;
