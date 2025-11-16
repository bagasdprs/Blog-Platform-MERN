// import User from "../models/User.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// // Helper to generate JWT
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
// };

// // ---------------------------------------------
// // LOGIN ADMIN
// // ---------------------------------------------
// export const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });

//     if (!user) return res.status(400).json({ message: "User not found" });

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     // Send response
//     res.json({
//       token: generateToken(user._id),
//       user: {
//         id: user._id,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (err) {
//     console.error("Login Error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // ---------------------------------------------
// // REGISTER ADMIN (optional)
// // ---------------------------------------------
// export const registerUser = async (req, res) => {
//   const { email, password, role } = req.body;

//   try {
//     const exists = await User.findOne({ email });
//     if (exists) return res.status(400).json({ message: "Email already used" });

//     const hashed = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       email,
//       password: hashed,
//       role: role || "admin",
//     });

//     res.status(201).json({
//       message: "Admin created",
//       user: { id: user._id, email: user.email },
//     });
//   } catch (error) {
//     console.error("Register Error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // ---------------------------------------------
// // GET AUTHENTICATED USER
// // ---------------------------------------------
// export const getMe = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");

//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// };

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Generate token helper
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ========================= REGISTER USER =========================
export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cek email
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "Email already exists" });

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashed,
      role: "user",
    });

    return res.json({
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========================= REGISTER ADMIN =========================
export const registerAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cek email
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const admin = await User.create({
      email,
      password: hashed,
      role: "admin",
    });

    return res.json({
      message: "Admin created successfully",
      admin,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========================= LOGIN =========================
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid password" });

    const token = generateToken(user);

    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ========================= GET PROFILE =========================
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
