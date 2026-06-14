const express = require("express");
const path = require("path");
const pool = require("./config/database");

const app = express();
const PORT = 3000;

// Convert a database row to the format the frontend expects
function formatFood(row) {
  return {
    id: row.id,
    name: row.name,
    image: row.image,
    price: row.price,
    difficulty: row.difficulty,
    description: row.description,
    ingredients: row.ingredients,
    prepTime: row.prep_time,
    studentTip: row.student_tip,
  };
}

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

// API: return all foods from the database
app.get("/api/foods", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM foods");
    const foods = result.rows.map(formatFood);
    res.json(foods);
  } catch (err) {
    console.error("Error fetching foods:", err);
    res.status(500).json({ error: "Failed to fetch foods" });
  }
});

// API: return one food by id, or a 404 JSON error if it doesn't exist
app.get("/api/foods/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM foods WHERE id = $1", [
      req.params.id,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Food not found" });
    }

    res.json(formatFood(result.rows[0]));
  } catch (err) {
    console.error("Error fetching food:", err);
    res.status(500).json({ error: "Failed to fetch food" });
  }
});

// Catch-all 404 page for any other route
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
