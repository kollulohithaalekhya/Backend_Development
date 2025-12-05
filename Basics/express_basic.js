const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Express Server Running!");
});

app.post("/data", (req, res) => {
    res.json({
        message: "Data Received",
        body: req.body
    });
});

app.listen(5000, () => {
    console.log("Server started on http://localhost:5000");
});
