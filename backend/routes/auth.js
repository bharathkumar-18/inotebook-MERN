//Import express
const express = require('express');
//Use router in express
const router = express.Router();
//Import express-validator
const { body, validationResult } = require('express-validator');

//Import User schema to put it into database 
const User = require('../models/User');


//Create a user using "POST" at "/api/auth" It doesn't require auth
router.post('/',[
    body('personname', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
] , (req, res)=>{ 
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        personname: req.body.personname,
        password: req.body.password,
        email: req.body.email,
      }).then(user => res.json(user))
      .catch(err=> {console.log(err)
    res.json({error: 'Please enter a unique value for email', message: err.message})})
 
} );


//Export the router module
module.exports = router;
