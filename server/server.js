const express = require("express");
//const mysql = require('mysql');
const mysql = require("mysql2/promise");
const cors = require("cors"); // Enable CORS for development

const app = express();
const port = 3001; // Backend port

// MySQL connection configuration '66.147.241.116'
const pool = mysql.createPool({
  host: "66.147.241.116",
  user: "ocbenjic_YHTSAPP",
  password: "god578aden",
  database: "ocbenjic_YHTS_App",
});

// Enable CORS for development (adjust for production)
app.use(cors());

app.get("/api/data", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(
      "SELECT * FROM Backgrounds  LIMIT 0, 10"
    );
    connection.release();
    res.json(rows);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
