const express = require('express');
const router = express.Router();

const { loginUser, logout } = require('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/login', loginUser);
router.post('/logout', logout);

router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Protected route accessed', user: req.user });
});

module.exports = router;