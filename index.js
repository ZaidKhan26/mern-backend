const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const applicantRoutes = require('./routes/applicantRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/applicants', applicantRoutes);

// MongoDB connection + server start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
      console.log('Server is running on http://localhost:5000');
    });
  })
  .catch((error) => console.error(error));
