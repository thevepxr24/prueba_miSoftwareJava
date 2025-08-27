import { useEffect, useState } from "react";
import clientAxios from "../utils/axios";

function Registro() {
  const [user, setUser] = useState({ name: "", email: "", year: 0 });

  const addUser = async ()=>{
     try {
      console.log(user);
      const response = await clientAxios.post("/usuarios", user);
      setUser({});
      alert('Usuario ingresado correctamente');
    } catch (error) {
      console.error("Error insert user:", error);
    }
  }

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Registro</h1>
      <form>
        <div class="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Edad:</label>
          <input
            type="number"
            name="year"
            value={user.year}
            onChange={handleChange}
          />
        </div>
        <button class="btn btn-primary" onClick={()=>addUser()}>Registrarse</button>
      </form>
    </>
  );
}

export default Registro;
