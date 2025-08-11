
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const projectRoutes = require("./Routes/projectRoutes");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`${process.env.APP_NAME} running on port ${PORT}`);
});
