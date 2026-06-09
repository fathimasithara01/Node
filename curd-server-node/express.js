const express = require("express");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is running successfully"
    });
});

// Users Route
app.get("/users", (req, res) => {
    res.status(200).json({
        success: true,
        data: [
            {
                id: 1,
                name: "Sithara"
            }
        ]
    });
});

// Create User
app.post("/users", (req, res) => {
    const { name, email } = req.body;

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: {
            name,
            email
        }
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});