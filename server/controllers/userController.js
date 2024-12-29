const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("./../models/userSchema.js");
const signupUser = async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.emailAddress;
    const password = req.body.password;
    const password2 = req.body.password2;

    if (!username || !email || !password || !password2) {
      console.log("Missing fields.");
      return res.status(400).send({ message: "All fields are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send({ message: "Invalid email format." });
    }

    const existingUser = await Users.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res
        .status(409)
        .send({ message: "Username or email already exists!" });
    }
    if (password !== password2) {
      return res.status(403).send({ message: "Passwords don't match!" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new Users({
      username,
      email,
      password: hashedPassword,
    });

    // Save user to the database
    await user.save();

    res.status(201).send({ message: "User saved successfully." });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send({ message: "Server error. Please try again later." });
  }
};
const loginUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const user = await Users.findOne({ username });

    if (!user) {
      return res.send({ message: "User not found!" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.send({ message: "Password entered incorrectly!" });
    }

    const token = jwt.sign({ data: user }, "SPAN", { expiresIn: "1h" });
    res.send({ message: "User found successfully.", token });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error." });
  }
};
module.exports = {
  signupUser,
  loginUser,
};