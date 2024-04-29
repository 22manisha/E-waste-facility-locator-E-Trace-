const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/Innohack", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Define User schema
const userSchema = new mongoose.Schema({
  fullName: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  phoneNumber: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

app.use(express.json());

// Route for user registration
app.post("/api/v1/auth/register", async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user
    const newUser = new User({
      fullName: req.body.fullName,
      username: req.body.username,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Registration failed:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Route for user login
app.post("/api/v1/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "your_secret_key_here");

    // Return user and token
    res.status(200).json({
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        username: user.username,
      },
      token,
    });
    console.log(id,email);

  } catch (error) {
    console.error("Login failed:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

const bookingSchema = new mongoose.Schema({
    userId: String,
    userEmail: String,
    recycleItem: String,
    recycleItemPrice: Number,
    pickupDate: String,
    pickupTime: String,
    facility: String,
    fullName: String,
    address: String,
    phone: Number,
  });
  
  // Define MongoDB Model for BookingData
  const Booking = mongoose.model("Booking", bookingSchema);
  
  // Define route to handle booking data submission
  app.post("/api/v1/booking", async (req, res) => {
    try {
      // Extract data from request body
      const {
        userId,
        userEmail,
        recycleItem,
        recycleItemPrice,
        pickupDate,
        pickupTime,
        facility,
        fullName,
        address,
        phone,
      } = req.body;
  
      // Create new booking instance
      const newBooking = new Booking({
        userId,
        userEmail,
        recycleItem,
        recycleItemPrice,
        pickupDate,
        pickupTime,
        facility,
        fullName,
        address,
        phone,
      });
  
      // Save booking data to the database
      await newBooking.save();
  
      // Send success response
      res.status(200).json({ message: "Booking submitted successfully" });
    } catch (error) {
      // Handle errors
      console.error("Error submitting booking:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

// Start the server
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);