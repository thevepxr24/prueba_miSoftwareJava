import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registro from "./assets/pages/registro";
import Usuarios from "./assets/pages/usuarios";
import Navbar from "./assets/modules/navbar";

import "./Styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registro />,
  },
  {
    path: "/usuarios",
    element: <Usuarios />,
  },
  {
    path:"/*",
    element: <Registro />,
  }
]);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
