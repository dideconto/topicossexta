import axios from "axios";
import { useState } from "react";
import { Despesa } from "../../models/despesa.model";

function CadastroDespesa() {
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  function enviar() {
    let despesa: Despesa = new Despesa();
    despesa.descricao = descricao;
    despesa.preco = Number.parseInt(preco);

    axios
      .post("http://localhost:3333", despesa)
      .then((resposta) => {
        console.log(resposta.data.mensagem);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <div>
      <h1> Cadastrar Despesa</h1>
      <div>
        <label>Descrição:</label>
        <input type="text" onChange={(event: any) => setDescricao(event.target.value)} />
      </div>
      <div>
        <label>Preço:</label>
        <input type="text" onChange={(event: any) => setPreco(event.target.value)} />
      </div>
      <div>
        <button onClick={enviar}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroDespesa;
