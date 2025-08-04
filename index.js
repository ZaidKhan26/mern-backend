const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const applicantRoutes = require('./routes/applicantRoutes');
const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Add this line
app.get("/", (req, res) => {
  res.send("API is running...");
});

// API Routes
app.use('/api/applicants', applicantRoutes);

// MongoDB connection + server start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
