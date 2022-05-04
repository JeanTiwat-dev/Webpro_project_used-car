const express = require("express");
const pool = require("../config");
const Joi = require('joi');
const router = express.Router();

// HTTP Method
// Add user
router.post("/profile/:userId", async (req, _res, next) => {
    let userId = req.params.userId;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;
    try {
            await pool.query(
            "UPDATE Users SET user_firstname = ?, user_lastname = ?, user_email = ?, user_phone = ?, user_address = ? WHERE user_id = ?", 
            [fname, lname, email, phone, address, userId]
        );
    } catch (err) {
        next(err);
    }
});

// Edit user
router.put("/editUser/:userId", async (req, res, next) => {
    let userId = req.params.userId;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;
    try {
        const [rows, fields] = await pool.query(
            "UPDATE Users SET user_firstname = ?, user_lastname = ?, user_email = ?, user_phone = ?, user_address = ? WHERE user_id = ?", 
            [fname, lname, email, phone, address, userId]
        );
    } catch (err) {
        next(err);
    }
});

exports.router = router