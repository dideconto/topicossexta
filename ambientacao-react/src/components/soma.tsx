import { useState } from "react";

//Todo componente deve ter a primeira letra maiúscula
//Todo componente deve ter uma função que retorna um HTML
//Todo componente deve ser exportado
//Todo componente deve retornar apenas um elemento pai HTML

function Soma() {
  const [num1, setNum1] = useState<any>();
  const [num2, setNum2] = useState<any>();
  const [soma, setSoma] = useState<any>();

  function clicarNoBotao() {
    setSoma(Number.parseInt(num1) + Number.parseInt(num2));
    console.log(soma);
  }

  function escreverCaixaTexto1(event: any) {
    setNum1(event.target.value);
  }

  function escreverCaixaTexto2(event: any) {
    setNum2(event.target.value);
    // console.log(num2);
  }

  return (
    <div>
      <h1> Componente da soma</h1>
      <div>
        <label>Número 1:</label>
        <input type="text" onChange={escreverCaixaTexto1} />
      </div>
      <div>
        <label>Número 2:</label>
        <input type="text" onChange={escreverCaixaTexto2} />
      </div>
      <div>
        <button onClick={clicarNoBotao}>Calcular</button>
        <span>{soma}</span>
      </div>
    </div>
  );
}

export default Soma;
