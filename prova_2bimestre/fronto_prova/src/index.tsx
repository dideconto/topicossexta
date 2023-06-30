import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CadastrarDespesa from "./components/pages/CadastrarDespesa";
import ListarDespesas from "./components/pages/ListarDespesas";
import Error from "./components/pages/Error";
import CalcularDespesas from "./components/pages/CalcularDespesas";

const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <CadastrarDespesa />,
      },
      {
        path: "/cadastrar",
        element: <CadastrarDespesa />,
      },
      {
        path: "/listar",
        element: <ListarDespesas />,
      },
      {
        path: "/calcular",
        element: <CalcularDespesas />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
