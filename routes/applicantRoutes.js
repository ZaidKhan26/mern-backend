const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant');
const verifyAdminToken = require('../middleware/authMiddleware');

// ✅ POST: Submit new applicant
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, college, skills, motivation } = req.body;

    if (!name || !email || !phone || !college || !skills || !motivation) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newApplicant = new Applicant({ name, email, phone, college, skills, motivation });
    await newApplicant.save();

    res.status(201).json({ message: "Applicant registered successfully" });
  } catch (error) {
    console.error("POST error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET: All applicants (Admin only)
router.get("/", verifyAdminToken, async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.json(applicants);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch applicants" });
  }
});

// ✅ DELETE: Delete applicant by ID (Admin only)
router.delete("/:id", verifyAdminToken, async (req, res) => {
  try {
    const id = req.params.id;
    await Applicant.findByIdAndDelete(id);
    res.status(200).json({ message: "Applicant deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete applicant" });
  }
});

module.exports = router;
