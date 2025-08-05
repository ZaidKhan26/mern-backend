const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  college: String,
  skills: String,
  motivation: String,
});

module.exports = mongoose.model("Applicant", applicantSchema);
