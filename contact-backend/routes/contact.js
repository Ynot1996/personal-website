const express = require('express');
const router = express.Router();
const { handleContactForm } = require('../controllers/contactController');

// POST: Handle contact form submission
router.post('/', handleContactForm);

module.exports = router;
