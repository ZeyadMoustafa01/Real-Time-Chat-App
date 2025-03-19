import express from "express";
import { isAuthenticated } from "../middleware/auth.middleware";
import {
  getMessages,
  getUsersFromSidebar,
  sendMessage,
} from "../controllers/message.controller";

const router = express.Router();

router.get("/users", isAuthenticated, getUsersFromSidebar);
router.get("/:id", isAuthenticated, getMessages);
router.post("/send/:id", isAuthenticated, sendMessage);

export default router;
