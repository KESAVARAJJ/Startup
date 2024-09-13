const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://kesavaraj:kesava123@cluster0.9jpj9.mongodb.net/", {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const FormData = require("./models/FormData");

app.get("/", (req, res) => {
  res.send("Server is Working");
});

app.post("/submit", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    country,
    streetAddress,
    city,
    region,
    postalCode,
  } = req.body;
  try {
    const formData = new FormData({
      firstName,
      lastName,
      email,
      country,
      streetAddress,
      city,
      region,
      postalCode,
    });
    await formData.save();
    res.status(201).json({ message: "Form data saved successfully" });
  } catch (err) {
    res.status(500).json({ err: "Failed to save form data", err });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
