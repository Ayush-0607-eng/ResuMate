import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import resumeRoutes from "./routes/resumeauth.js";
import userRoutes from "./routes/profile.js";
import chatRoutes from "./routes/chat.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.MONGO_URI)
.then((conn) => console.log("MongoDB connected to:", conn.connection.db.databaseName))
.catch((err) => console.log("DB error: ", err));

app.get("/", (req, res) => {
  res.send("Hello homie 👊 from MongoDB world");
});

// attach routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/profile", userRoutes);
app.use("/api", chatRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
  console.log("🤖 Using Ollama for AI resume generation (no API key needed)");
});

