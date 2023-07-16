//Import express
const express = require('express');
//Use router in express
const router = express.Router();

router.get('/',(req, res)=>{
    res.json([]);
})

//Export the router module
module.exports = router;
