import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(err));

// Routes
import authRoutes from "./routes/authRoutes.js";

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

