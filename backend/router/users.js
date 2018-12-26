const express = require('express');
const router = express.Router();

const user = require('../model/users');

router.get('/', (req, res) => {
    res.send('Users');
});


module.exports = router;