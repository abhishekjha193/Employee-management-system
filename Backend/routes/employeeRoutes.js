const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');


const { createEmployee, getEmployees, softDeleteEmployee } = require('../controllers/employeeController');

router.post('/', verifyToken, upload.single('photo'), createEmployee);
router.get('/', verifyToken, getEmployees);
router.put('/:id/deactivate', verifyToken, softDeleteEmployee);


module.exports = router;