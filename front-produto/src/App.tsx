import React from "react";
import CadastroProduto from "./components/pages/CadastroProduto";
import ListarProdutos from "./components/pages/ListarProdutos";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />

      <Outlet/>
     
      <Footer />
    </div>
  );
}

export default App;
