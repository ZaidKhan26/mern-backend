const express = require('express');
const router = express.Router();

// Route: POST /api/applicants/register
router.post('/register', async (req, res) => {
  try {
    // Example logic
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    // Save applicant logic here
    res.status(201).json({ message: 'Applicant registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

module.exports = router;
