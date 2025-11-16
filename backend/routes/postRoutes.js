import express from "express";
import { createPost, getPosts, getPostById, updatePost, deletePost } from "../controllers/postController.js";

import auth from "../middleware/auth.js";
import { adminOnly } from "../middleware/roleCheck.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// PUBLIC ROUTES
router.get("/", getPosts);
router.get("/:id", getPostById);

// ADMIN ROUTES
router.post("/", auth, adminOnly, upload.single("image"), createPost);
router.put("/:id", auth, adminOnly, upload.single("image"), updatePost);
router.delete("/:id", auth, adminOnly, deletePost);

export default router;
