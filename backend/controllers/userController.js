import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";



// User registration, login, logout, profile retrieval, and update functions
const registerUser = async (req, res) => {
  try {
    // Simulate user registration logic
    const { username, password, email, role, batch, institute, department } = req.body;
    if (!username || !password || !email || !role || !batch || !institute || !department) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    console.log("Creating new user:", { username, email, role, batch, institute, department });
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // create a new user instance
    const newUser = new User({ username, email, password: hashedPassword, role, batch, department, institute });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: { username } });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

const loginUser = async (req, res) => {
  console.log("process.env.JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY);
  try {
    const { username, password } = req.body;
        console.log("=== LOGIN DEBUG ===");
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Password length:", password?.length);
    
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "Invalid credentials" });
    }

        console.log("User found:", user.username);
    console.log("Stored password hash:", user.password);
    console.log("Is hash valid (starts with $2b$):", user.password.startsWith('$2b$'));
    console.log("Hash length:", user.password.length);
    


    // Check password using models/User.js
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("bcrypt.compare result:", isPasswordValid);
    console.log("=== END DEBUG ===");
    
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
    res.status(200).cookie("token", token, { httpOnly: true, maxAge: 24*60*60*1000 }).json({ message: "Login successful", user: { username, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

const logoutUser = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout successful" });
}
const getUserProfile = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
}

const updateUserProfile = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decoded.userId;
    const { username, email, role, batch, institute, department } = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, { username, email, role, batch, institute, department }, { new: true }).select("-password");
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
}

export { registerUser, loginUser, logoutUser, getUserProfile, updateUserProfile };