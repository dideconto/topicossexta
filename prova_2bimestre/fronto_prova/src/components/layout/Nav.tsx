import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cadastrar">Cadastrar Despesa</Link>
        </li>
        <li>
          <Link to="/listar">Listar Despesas</Link>
        </li>
        <li>
          <Link to="/calcular">Visualizar total e média</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
