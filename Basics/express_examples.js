const express = require("express");
const app = express();
app.use(express.json());

let users = [];

// POST: Add user
app.post("/add-user", (req, res) => {
  const newUser = req.body;
  users = users.concat(newUser);
  res.send("User added successfully");
});

// GET: All users
app.get("/users", (req, res) => {
  res.json({ users });
});

// GET: Single user by ID
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send(`User with id ${id} not found`);
  }
});

// PUT: Update user by ID
app.put("/update-user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  let userIndex = users.findIndex(u => u.id === id);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedData };
    res.send(`User with id ${id} updated successfully`);
  } else {
    res.status(404).send(`User with id ${id} not found`);
  }
});

// DELETE: Remove user by ID
app.delete("/delete-user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.send(`User with id ${id} deleted successfully`);
});

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
