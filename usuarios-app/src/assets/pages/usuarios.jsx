import { useEffect, useState } from "react";
import clientAxios from "../utils/axios";
import Usuario from "../modules/user";

function Usuarios() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await clientAxios.get("/usuarios/todos");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [users]);

  return (
    <div>
      <h2>Usuarios</h2>
      <table class="table">
       
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">nombre</th>
            <th scope="col">email</th>
            <th scope="col">años</th>
          </tr>
        </thead>
         {users.length > 0 ? (
          <tbody>
            {users.map((user) => (
              <Usuario user={user} onDeleteHandle={()=>setUsers([])}/>
            ))}
            <tr></tr>
          </tbody>
        ) : (
          <h1>Cargando usuarios...</h1>
        )}
      </table>
    </div>
  );
}

export default Usuarios;
