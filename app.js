const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/students.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/students', employeeRoutes);


app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;