import React from "react";
import { BrowserRouter, createBrowserRouter, Route } from "react-router-dom";
import Index from "../../Interface/Pages/Index/Index";

// createBrowserRouter é uma função que retorna um objeto do tipo Router
// que contém as rotas da aplicação.
// É uma alternativa ao componente BrowserRouter padrão.
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  }
]);