//import express
const express = require('express');

//initialize the router
const router = express.Router();

// home route
router.get('/', (req, res) => {
    res.send('welcome to my student page');
});









//export the router
module.exports = router;