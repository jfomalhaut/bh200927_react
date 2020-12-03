const express = require('express');
const factory = require('../factory/factory');
const router = express.Router();

router.get('/getItem', factory.getItem);
router.post('/insertItem', factory.insertItem);

module.exports = router;

