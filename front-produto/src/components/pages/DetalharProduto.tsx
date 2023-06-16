import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DetalharProduto() {
  const { id } = useParams();

  useEffect(() => {
    //Criar uma requisição com o axios para a sua API
    //Trazer o objeto do banco com o id que você recebeu
  });

  return <div>Rodapé</div>;
}

export default DetalharProduto;
