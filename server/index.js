const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.get("/", (req, res) => {
    res.send("server running")
})

app.get("/api/home", (req, res) => {
  res.json({ message: "Welcome to my LifeOS" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
