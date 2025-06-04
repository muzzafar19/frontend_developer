import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "./feature/user/userslice";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (editId) {
      dispatch(updateUser({ id: editId, name, email }));
      setEditId(null);
    } else {
      dispatch(addUser({ name, email }));
    }
    setName("");
    setEmail("");
  };

  const handleEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  return (
    <div style={{ padding: "20px", textAlign:"center",margin:"0 auto", border:"1px solid" , height:"500px", width:"500px" }}>
      <h2>👥 Redux Toolkit CRUD</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
        {editId ? "Update" : "Add"}
      </button>

      <ul style={{ marginTop: "20px" }}>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <strong>{user.name}</strong> ({user.email})
            <button
              onClick={() => handleEdit(user)}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteUser(user.id))}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

