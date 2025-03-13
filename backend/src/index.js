import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

import authRoute from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on http://localhost:" + PORT);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
