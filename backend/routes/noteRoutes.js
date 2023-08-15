import express from "express";
import {
  CreateNote,
  getNotes,
  getNoteById,
  UpdateNote,
  DeleteNote,
} from "../controllers/noteController.js";
import { protect } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, CreateNote);
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, UpdateNote)
  .delete(protect, DeleteNote);

export default router;
