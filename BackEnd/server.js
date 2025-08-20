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

// ✅ Allow your Vercel frontend
const allowedOrigins = [
  "https://resu-mate-online.vercel.app", // your production frontend
  "http://localhost:5173"                // local dev (Vite default)
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Connect Mongo
mongoose
  .connect(process.env.MONGO_URI)
  .then((conn) =>
    console.log("MongoDB connected to:", conn.connection.db.databaseName)
  )
  .catch((err) => console.log("DB error: ", err));

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Hello homie 👊 from MongoDB world");
});

// ✅ Attach routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/profile", userRoutes);
app.use("/api", chatRoutes);

// ✅ Use PORT from env or fallback to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log("🤖 Using Ollama for AI resume generation (no API key needed)");
});
