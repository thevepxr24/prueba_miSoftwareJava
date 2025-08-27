import { useEffect, useState } from "react";
import clientAxios from "../utils/axios";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/" id="navbarNav">
        Registro
      </a>
       <a class="navbar-brand" href="/usuarios">
        Usuarios
      </a>
     
    </nav>
  );
}

export default Navbar;
