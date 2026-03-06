import express from "express";
import mongoose from "mongoose";
import routes from "./interfaces/http/activity.routes.js";
import "./infrastructure/kafka/consumer.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", routes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});