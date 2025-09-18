// backend/server.js
import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// 🏠 Root Route
app.get("/", (req, res) => {
  res.json({
    message:
      "ลองเรียก API 👉 /api/hello, /api/myprofile, /api/time, /api/random",
  });
});

// 👋 Hello API
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello World! 🌍 สวัสดีครับ Thanawat! 🙏",
  });
});

// 🙋‍♂️ Profile API
app.get("/api/myprofile", (req, res) => {
  res.json({
    name: "Thanawat Srisaeng",
    email: "PeteLov3DinosaurTH@Gmail.com",
    hobbies: ["💻 Coding", "🎮 Gaming", "🎬 Movie"],
  });
});

// ⏰ Time API
app.get("/api/time", (req, res) => {
  res.json({
    serverTime: new Date().toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
    }),
  });
});

// 🎲 Random API
app.get("/api/random", (req, res) => {
  const num = Math.floor(Math.random() * 100) + 1;
  res.json({ randomNumber: num });
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(
    chalk.green.bold("🚀 Server is running at:") +
      " " +
      chalk.blue.underline(`http://localhost:${PORT}`)
  );
});
