const express = require('express');

//get the router portion of that express variable.
const router = express.Router();

router.get('/', (req,res)=>{
    res.render("index")
})

//how to export router
module.exports= router;