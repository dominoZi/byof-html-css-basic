import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/highlight.js/styles/agate.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import {
  BoxModelPage,
  Html5Page,
  HtmlSemanticPage,
  LastPage,
  MethodicsPage,
  SpecificityPage,
  UnitsPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HtmlSemanticPage /> },
      { path: "/html-semantic", element: <HtmlSemanticPage /> },
      { path: "/html5", element: <Html5Page /> },
      { path: "/box-model", element: <BoxModelPage /> },
      { path: "/units", element: <UnitsPage /> },
      { path: "/specificity-and-combinators", element: <SpecificityPage /> },
      { path: "/methodics", element: <MethodicsPage /> },
      { path: "/last", element: <LastPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
