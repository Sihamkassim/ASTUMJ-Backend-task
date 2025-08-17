require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // ✅ import here

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const projectRoutes = require("./Routes/projectRoutes");
app.use("/api/projects", projectRoutes);

// DATABASE CONNECTION + SERVER START
connectDB(); // ✅ call it here

app.listen(process.env.PORT, () => {
  console.log(`${process.env.APP_NAME} running on port ${process.env.PORT}`);
});
