import { useState } from "react";

interface Props {
  tipo: string;
}

function Operacao(props: Props) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [subtracao, setSubtracao] = useState<any>();

  function calcular() {
    if (props.tipo === "Subtração") {
      setSubtracao(Number.parseInt(num1) - Number.parseInt(num2));
    }else if(props.tipo === "Multiplicação"){
      setSubtracao(Number.parseInt(num1) * Number.parseInt(num2));
    }
  }

  return (
    <div>
      <h1> Componente da {props.tipo}</h1>
      <div>
        <label>Número 1:</label>
        <input
          type="text"
          onChange={(event: any) => setNum1(event.target.value)}
        />
      </div>
      <div>
        <label>Número 2:</label>
        <input
          type="text"
          onChange={(event: any) => setNum2(event.target.value)}
        />
      </div>
      <div>
        <button onClick={calcular}>Calcular</button>
        <span>{subtracao}</span>
      </div>
    </div>
  );
}

export default Operacao;
