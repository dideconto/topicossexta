import Soma from "./components/Soma";
import Operacao from "./components/Operacao";

function App() {
  return (
    <div className="App">
      <h1>Projeto em React por Diogo Deconto</h1>
      <Soma />
      <Operacao tipo="Subtração" />
      <Operacao tipo="Multiplicação" />
    </div>
  );
}

export default App;
