const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

require("./config/database").connect();

// route import and mounting
const user = require("./routes/user");
app.use("/api/v1", user);

// activete app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the User Management API");
});

