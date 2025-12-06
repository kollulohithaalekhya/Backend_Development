const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Express Server Running!");
});
const users = [];

app.post("/add-user", (req, res) => {
  users.push(req.body);
  res.json({ message: "Data added successfully!", data: req.body });
});

app.get("/users", (req, res) => {
  res.json(users);
});


app.listen(5000, () => {
    console.log("Server started on http://localhost:5000");
});
