// server/models/Applicant.js
const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  skills: { type: String },
  whyJoin: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Applicant', applicantSchema);
