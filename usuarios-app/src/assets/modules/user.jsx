import { useEffect, useState } from "react";
import clientAxios from "../utils/axios";

function Usuario({ user , onDeleteHandle}) {
  const [editableUser, setEditableUser] = useState(user);

  const handleChange = (e) => {
    setEditableUser({
      ...editableUser,
      [e.target.name]: e.target.value,
    });
  };

  const updateUser = async () => {
    try {
      const response = await clientAxios.put("/usuarios", editableUser);
    } catch (error) {
      console.error("Error update user:", error);
    }
  };

  const deleteUser = async ()=>{
    try{
        const response = await clientAxios.delete("/usuarios/"+editableUser.id);
    }
    catch(error){
      console.error("Error delete user:", error);
    }
  }

  return (
    <tr id={editableUser.id}>
      <th scope="row">{editableUser.id}</th>
      <td>
        <input
          type="text"
          name="name"
          value={editableUser.name}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          value={editableUser.email}
          onChange={handleChange}
        />
      </td>
      <td>
         <input
          type="number"
          name="year"
          value={editableUser.year}
          onChange={handleChange}
        />
      </td>
      <td>
        <button
          type="button"
          class="btn btn-warning"
          onClick={() => updateUser()}
        >
          Actualizar
        </button>
      </td>
      <td>
        <button type="button" class="btn btn-danger" onClick={()=> deleteUser()}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Usuario;
