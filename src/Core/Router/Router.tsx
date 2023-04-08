import React from "react";
import { BrowserRouter, createBrowserRouter, Route } from "react-router-dom";
import Index from "@/Interface/Pages/Index/Index";
import Banks from "@/Interface/Pages/Banks/Banks";
import AddBank from "@/Interface/Pages/Banks/AddBank";
import NotFoundPage from "@/Interface/Global/Layout/NotFoundPage";
import ErrorElement from "@/Interface/Global/Layout/ErrorElement";

// createBrowserRouter é uma função que retorna um objeto do tipo Router
// que contém as rotas da aplicação.
// É uma alternativa ao componente BrowserRouter padrão.
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorElement/>
  },
  {
    path: "/banks",
    element: <Banks />,
    errorElement: <ErrorElement/>
  },
  {
    path: "/bank/add/:code",
    element: <AddBank />,
    errorElement: <ErrorElement/>
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
    errorElement: <ErrorElement/>
},
]);
