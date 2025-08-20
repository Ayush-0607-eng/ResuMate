import express from "express";
import User from "../models/user.js";

const router = express.Router();

// POST /signup
router.post("/signup", async (req, res) => {
    try {
        console.log("its coming");
        const { firstName, fullName, dob, age, email, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const newUser = new User({
            firstName,
            fullName,
            dob: new Date(dob),  // convert to Date
            age: Number(age),    // convert to Number
            email,
            password
        });

        // console.log("Saving user:", newUser);
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// POST /login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check password
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Send back user info (you can exclude password if you want)
        res.status(200).json({
            message: "Login successful",
            user: { firstName: user.firstName, fullName: user.fullName, email: user.email }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
