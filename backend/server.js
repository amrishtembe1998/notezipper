import express from "express";
import notes from "./data/notes.js";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import noteRoutes from "./routes/noteRoutes.js";
const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   res.send(note);
// });

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

// -------------------------------Deployment------------------------------

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running successfully");
  });
}

// -----------------------------------------------------------------------
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
