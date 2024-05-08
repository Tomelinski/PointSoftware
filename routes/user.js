const express = require("express");
const db = require('database');
//I would create a controller for each route

const router = express.Router();

router.post("/login", async (res, req) => {
    try {
        //have some kind of validation

        const user = await db.raw("SELECT * FROM Users Where Username: ? AND password=?", req.query.username,  req.query.password)
        
        if(user){
            res.status(200).json( { user: User })
        } else {
            throw exception
        }
    } catch (error) {
        res.status(404).json({user: null, message: error});
    }
});

router.post("/logout", (res, req) => {
    // log out of session
    // remove JWT token 
});

module.exports = router;