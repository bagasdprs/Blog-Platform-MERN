import express from "express";
import { registerUser, registerAdmin, loginUser, getMe } from "../controllers/authController.js";
import auth from "../middleware/auth.js";
import { adminOnly } from "../middleware/roleCheck.js";

const router = express.Router();

router.post("/register-user", registerUser);
router.post("/register-admin", auth, adminOnly, registerAdmin);

// Login
router.post("/login", loginUser);

// Profile
router.get("/me", auth, getMe);

export default router;
