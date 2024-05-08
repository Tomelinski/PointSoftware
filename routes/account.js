const express = require("express");
const db = require('database');
//I would use axios for external requests
//store this in env for testing and prod api endpoints
// const externalAPI = require('www.api.com/');

const router = express.Router();

router.post("/deposit", async (res, req) => {
    //create a function that can be reused for withdrawals as well, since theyre both updating the amount
    try {
        const newAccountBalance = req.query.depositAmount
        
        //if they have multiple account, have a specifiier for which account
        const account = await Account.find(
            where: {
                user_id: req.query.userId
            }
        );

        //function for updating account balance
        const account_balance = account.update(account_balance, newAccountBalance)

        req.status(200).json({balance: account_balance, message: 'success'});

    } catch (error) {
        req.status(200).json({balance: account_balance, message: 'failed to update'});
    }
});

router.post("/withdrawal", (res, req) => {
    
});

module.exports = router;