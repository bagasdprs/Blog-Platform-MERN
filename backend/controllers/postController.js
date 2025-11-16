import Post from "../models/Post.js";

// ---------------------------------------------
// CREATE POST (Admin only)
// ---------------------------------------------
export const createPost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    const post = await Post.create({
      title,
      content,
      tags: tags ? tags.split(",") : [],
      image: req.file ? `/uploads/${req.file.filename}` : null,
    });

    res.status(201).json(post);
  } catch (error) {
    console.error("Create Post Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ---------------------------------------------
// GET ALL POSTS (Public) + Search
// ---------------------------------------------
export const getPosts = async (req, res) => {
  try {
    const { q } = req.query;

    const filter = q
      ? {
          $or: [{ title: new RegExp(q, "i") }, { content: new RegExp(q, "i") }],
        }
      : {};

    const posts = await Post.find(filter).sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    console.error("Get Posts Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ---------------------------------------------
// GET SINGLE POST
// ---------------------------------------------
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.json(post);
  } catch (error) {
    console.error("Get Single Post Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ---------------------------------------------
// UPDATE POST
// ---------------------------------------------
export const updatePost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    const updateData = {
      title,
      content,
      tags: tags ? tags.split(",") : [],
    };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const post = await Post.findByIdAndUpdate(req.params.id, updateData, { new: true });

    res.json(post);
  } catch (error) {
    console.error("Update Post Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ---------------------------------------------
// DELETE POST
// ---------------------------------------------
export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);

    res.json({ message: "Post deleted" });
  } catch (error) {
    console.error("Delete Post Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
