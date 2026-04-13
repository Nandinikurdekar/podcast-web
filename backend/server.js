const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const SECRET = "secret123";

// 🧠 In-memory storage (temporary DB)
let users = [];
let podcasts = [{
        id: 1,
        title: "AI Talks",
        duration: "12:30",
        category: "Technology",
        audio: "/audio/sample.mp3"
    },
    {
        id: 2,
        title: "Startup Stories",
        duration: "20:15",
        category: "Business",
        audio: "/audio/sample.mp3"
    }
];


// ================= AUTH =================

// Signup
app.post("/api/signup", async(req, res) => {
    const { email, password } = req.body;

    const exists = users.find(u => u.email === email);
    if (exists) return res.status(400).json({ message: "User exists" });

    const hashed = await bcrypt.hash(password, 10);

    users.push({ email, password: hashed });

    res.json({ message: "User created" });
});

// Login
app.post("/api/login", async(req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Wrong password" });

    const token = jwt.sign({ email }, SECRET);

    res.json({ token });
});


// ================= PODCAST API =================

// GET
app.get("/podcasts", (req, res) => {
    res.json(podcasts);
});

// POST
app.post("/podcasts", (req, res) => {
    const newPodcast = { id: Date.now(), ...req.body };
    podcasts.push(newPodcast);
    res.json(newPodcast);
});

// DELETE
app.delete("/podcasts/:id", (req, res) => {
    podcasts = podcasts.filter(p => p.id != req.params.id);
    res.json({ message: "Deleted" });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});