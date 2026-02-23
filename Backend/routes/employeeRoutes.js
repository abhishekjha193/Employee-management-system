const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const {
  createEmployee,
  getEmployees,
  deleteEmployee,
} = require("../controllers/employeeController");

const multer = require("multer");

// Multer Storage Setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// Routes
router.post("/", upload.single("photo"), createEmployee);

router.get("/", protect, getEmployees);


module.exports = router;
