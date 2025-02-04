const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Allow frontend requests
app.use(express.static("public")); // Serve frontend files

// Sample users JSON
const users = [
    { id: "user_1", name: "Rasika Telase", address: "Nagpur", phone: "123-456-7890" },
    { id: "user_2", name: "Anuja Dauskar", address: "Manewada", phone: "987-654-3210" },
    { id: "user_3", name: "Apeksha Chaware", address: "Pune", phone: "555-555-5555" },
    { id: "user_4", name: "Tina Sharma", address: "Mumbai", phone: "666-777-8888" },
    { id: "user_5", name: "Abhishek Kumar", address: "Hydrabad", phone: "999-000-1111" }
];

// API to get all users
app.get("/users", (req, res) => {
    res.json(users);
});

// API to get a single user by ID
app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
