import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import adsRouter from './routes/ads.js';

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Подключение к MongoDB Atlas
const MONGO_URI = "mongodb+srv://scarlet:EtDGQBChuyOI5IWx@cluster0.j4jt6mg.mongodb.net/?appName=Cluster0";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// 🔹 Подключение роутов
app.use('/api/ads', adsRouter);

app.get("/", (req, res) => {
  res.send("Server is running and connected to MongoDB!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
