const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant');

// POST: Submit new applicant
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, skills, motivation } = req.body;

    if (!name || !email || !phone || !skills || !motivation) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newApplicant = new Applicant({ name, email, phone, skills, motivation });
    await newApplicant.save();

    res.status(201).json({ message: "Applicant registered successfully" });
  } catch (error) {
    console.error("POST error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET: All applicants
router.get("/", async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.json(applicants); // ✅ Return real data
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch applicants" });
  }
});

module.exports = router;
