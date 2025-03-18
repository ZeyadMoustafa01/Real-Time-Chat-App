import express from "express";
import {
  login,
  logout,
  signup,
  updateProfile,
  checkAuthentication,
} from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", isAuthenticated, updateProfile);

router.get("/check", isAuthenticated, checkAuthentication);

export default router;
