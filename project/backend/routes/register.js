const express = require("express");
const pool = require("../config");

const router = express.Router();

router.post("/register", async function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let address = req.body.address;
    let gender = req.body.gender;
    let email = req.body.email;
    let birthdate = req.body.birthdate;
    let idcard = req.body.idcard;
    let phone = req.body.phone;
    let customer_type = false;

    // find age
    let current = new Date();
    let birthDate = new Date(birthdate);
    let age = current.getFullYear() - birthDate.getFullYear();
    let m = current.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && current.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age >= 20) {
        customer_type = true;
    }
    const con = await pool.getConnection();
    await con.beginTransaction();
    try {
        const user_data = await con.query(
            "INSERT INTO Users (user_firstname, user_lastname, user_idcard, user_age, user_phone, user_address, user_email, user_gender, user_birth, customer_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                firstname,
                lastname,
                idcard,
                age,
                phone,
                address,
                email,
                gender,
                birthdate,
                customer_type,
            ]
        );
        await con.query(
            "INSERT INTO Login (login_username, login_password, user_id ) VALUES (?, ?, ?)",
            [username, password, user_data[0].insertId]
        );
        await con.commit();
        res.json('success');
    } catch (error) { 
        await con.rollback();
        next(error);
    }
});

exports.router = router;
