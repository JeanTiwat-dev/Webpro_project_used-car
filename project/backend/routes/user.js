const express = require("express");
const pool = require("../config");
const Joi = require('joi');
const router = express.Router();

// ValidityState (Validate user)
const checkValidate = Joi.object({
        fname: Joi.string().required(),
        lname: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required(),
        address: Joi.string().required(),
});

// HTTP Method
// Add user
router.post("/profile/:userId", async (req, res, next) => {
    try {
        await checkValidate.validateAsync(req.body, { abortEarly: false });
    } catch (error) {
        return res.status(400).send(error);
    }
    let userId = req.params.userId;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let email = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;
    try {
            await pool.query(
            "UPDATE Users SET user_firstname = ?, user_lastname = ?, user_email = ?, user_phone = ?, user_address = ? WHERE user_id = ?", 
            [
                    fname, 
                    lname, 
                    email, 
                    phone, 
                    address, 
                    userId
                    ]
        );
    } catch (err) {
        next(err);
    }
});

// Edit user
router.put("/editUser/:userId", async (req, res, next) => {
    try {
        await checkValidate.validateAsync(req.body, { abortEarly: false });
    } catch (error) {
        return res.status(400).send(error);
    }

    try {
        let userId = req.params.userId;
        let fname = req.body.fname;
        let lname = req.body.lname;
        let email = req.body.email;
        let phone = req.body.phone;
        let address = req.body.address;

        // Update user
        await pool.query(
            "UPDATE Users SET user_firstname = ?, user_lastname = ?, user_email = ?, user_phone = ?, user_address = ? WHERE user_id = ?", 
            [
                    fname, 
                    lname, 
                    email, 
                    phone,
                    address, 
                    userId
                    ]
        );

        // Update user in navbar
        const [user] = await pool.query(
            "SELECT * FROM Users WHERE user_id = ?",
            [userId]
        );
        return res.json(user[0]);
    } catch (err) {
        return next(err);
    }
});

exports.router = router