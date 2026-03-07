import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import routes from "./interfaces/http/activity.routes.js";
import "./infrastructure/kafka/consumer.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", routes);

mongoose.connect("mongodb+srv://ahmed:ahmed123@cluster0.tfzbn8p.mongodb.net/activity_logs")
.then(() => console.log("MongoDB connected"));

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});