import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CadastroProduto from "./components/pages/CadastroProduto";
import ListarProdutos from "./components/pages/ListarProdutos";
import Error from "./components/pages/Error";
import DetalharProduto from "./components/pages/DetalharProduto";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <CadastroProduto />,
      },
      {
        path: "/cadastrar",
        element: <CadastroProduto />,
      },
      {
        path: "/listar",
        element: <ListarProdutos />,
      },
      {
        path: "/detalhar/:id",
        element: <DetalharProduto />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
