// Express provides:

// Easy Routing
// Middleware
// JSON Parsing
// Error Handling
// REST APIs


const express = require("express");

const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
    res.send("Get Products");
});

app.post("/products", (req, res) => {
    res.send("Create Product");
});

app.put("/products/:id", (req, res) => {
    res.send("Update Product");
});

app.patch("/products/:id", (req, res) => {
    res.send("Patch Product");
});

app.delete("/products/:id", (req, res) => {
    res.send("Delete Product");
});

app.listen(3000);