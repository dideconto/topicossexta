import axios from "axios";
import { useEffect, useState } from "react";

function CalcularDespesas() {
  const [total, setTotal] = useState();
  const [media, setMedia] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3333/calcular")
      .then((resposta) => {
        setTotal(resposta.data.total);
        setMedia(resposta.data.media);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div>
      Total: {total}
      Media: {media}
    </div>
  );
}

export default CalcularDespesas;
