const express = require('express');
const pool = require('../config');
const router = express.Router();
const Joi = require('joi');

// ValidityState (Validate user)
const checkValidate = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

// HTTP Method
router.post('/goto', async function(req, res, next) {
    try {
        await checkValidate.validateAsync(req.body, { abortEarly: false });
    } catch (error) {
        return res.status(400).send(error);
    }
    let username = req.body.username;
    let password = req.body.password;
    const login = await pool.query(
        'SELECT user_id, login_password FROM Login  WHERE login_username = ?', 
        [username]
    )
    // Check if user exist and password is correct
    if (login[0][0] == undefined || login[0][0].login_password != password) {
        res.json('error');
    } else {
        try {
            const users = await pool.query(
                'SELECT * FROM Users WHERE user_id = ?', 
                [login[0][0].user_id]
                )
                res.json(users[0][0]);
        } catch (error) {
            next(error)
        }
    }
})

exports.router = router