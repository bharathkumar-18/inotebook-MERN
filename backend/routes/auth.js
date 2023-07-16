//Import express
const express = require('express');
//Use router in express
const router = express.Router();

router.get('/',(req, res)=>{
    obj = {
        name: "Bharath",
        learning: "Web Dev",
    };
    res.send(obj);
})

//Export the router module
module.exports = router;
