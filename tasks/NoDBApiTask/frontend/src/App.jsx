import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [addName, setAddName] = useState("");

  const [targetId, setTargetId] = useState("");
  const [updateName, setUpdateName] = useState("");

  const [data, setData] = useState([]);

  const addData = async () => {
    await axios.post("http://localhost:7000/post-data", {
      id: Number(id),
      name: addName,
    });
    setId("");
    setAddName("");
    getData();
  };

  const getData = async () => {
    const res = await axios.get("http://localhost:7000/get-data");
    setData(res.data);
  };

  const deleteData = async () => {
    await axios.delete(`http://localhost:7000/delete/${targetId}`);
    setTargetId("");
    getData();
  };

  const updateData = async () => {
    await axios.put(`http://localhost:7000/update/${targetId}`, {
      name: updateName,
    });
    setTargetId("");
    setUpdateName("");
    getData();
  };

  return (
    <div className="app">
      <h2>Product Manager</h2>

      <div className="form">
        <input
          type="number"
          placeholder="Add ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add Name"
          value={addName}
          onChange={(e) => setAddName(e.target.value)}
        />
        <button onClick={addData}>Add</button>
      </div>

      <div className="form">
        <input
          type="number"
          placeholder="Update ID"
          value={targetId}
          onChange={(e) => setTargetId(e.target.value)}
        />
        <input
          type="text"
          placeholder="New Name"
          value={updateName}
          onChange={(e) => setUpdateName(e.target.value)}
        />
        <button onClick={updateData}>Update</button>
        <button onClick={deleteData}>Delete</button>
      </div>

      <button className="fetch" onClick={getData}>
        Get Data
      </button>

      {/* <ul className="list">
        {data.map((item) => (
          <li key={item.id}>
            <span>{item.id}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul> */}
        <div className="list">
        {data.length === 0 ? (
          <div className="no-match">No match found</div>
        ) : (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <span>{item.id}</span>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
