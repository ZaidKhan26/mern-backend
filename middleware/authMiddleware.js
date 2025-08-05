// middleware/authMiddleware.js
const dotenv = require("dotenv");
dotenv.config();

const verifyAdminToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token || token !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  next();
};

module.exports = verifyAdminToken;
