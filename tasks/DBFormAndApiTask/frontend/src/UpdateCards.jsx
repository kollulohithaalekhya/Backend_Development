import { useState } from "react";

function UpdateCard({ onUpdate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate({ username: title, description });
  };

  return (
    <form onSubmit={handleUpdate} style={{ margin: "20px" }}>
      <h2>Update Card</h2>
      <input
        type="text"
        placeholder="New Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="New Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateCard;
