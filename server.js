const express = require("express");
const path = require("path");
const foods = require("./data/foods");

const app = express();
const PORT = 3000;

// Serve everything inside the public folder (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Detail page: serve the same index.html so the frontend JS can
// read the id from the URL and render the detail view.
app.get("/foods/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API: return all foods
app.get("/api/foods", (req, res) => {
  res.json(foods);
});

// API: return one food by id, or a 404 JSON error if it doesn't exist
app.get("/api/foods/:id", (req, res) => {
  const food = foods.find((item) => item.id === req.params.id);

  if (!food) {
    return res.status(404).json({ error: "Food not found" });
  }

  res.json(food);
});

// Catch-all 404 page for any other route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
