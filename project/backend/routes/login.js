const express = require('express');
const pool = require('../config');
const router = express.Router();

router.post('/goto', async function(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    // console.log("success");
    const login = await pool.query(
        'SELECT user_id FROM Login  WHERE login_username = ?', [
            username
        ]
    )
    if (login[0][0].user_id == undefined) {
        console.log(login[0][0]);
        res.json('error');
    } else {
        try {
            const users = await pool.query(
                'SELECT * FROM Users WHERE user_id = ?', [
                    login[0][0].user_id
                ]
                )
                res.json(users[0][0]);
        } catch (error) {
            next(error)
        }
    }
})

exports.router = router