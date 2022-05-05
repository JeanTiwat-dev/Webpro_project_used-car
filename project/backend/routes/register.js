const express = require("express");
const pool = require("../config");
const Joi = require("joi");
const router = express.Router();
const { joiPassword } = require('joi-password');
const alert = require("alert");

// ValidityState (Validate register)
// Check username
const usernameValidator = async (value) => {
    const [rows] = await pool.query(
        "SELECT login_username FROM Login WHERE login_username = ?",
        [value]
    );
    if (rows.length > 0) {
        // alert('This username is already taken')
        return res.status(400).send("This username is already taken");
    } else {
        return value;
    }
};
// Check password
const passwordValidator = async (value) => {
    if (value.length < 8) {
        // return res.json('Password must contain at least 8 characters');
        return res.status(400).send("Password must contain at least 8 characters");
    }
    if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
        // return res.json('Password must be harder');
        return res.status(400).send("Password must be harder");
    }
    return value
}
// check email
const emailValidator = async (value) => {
    const [rows] = await pool.query(
        "SELECT user_email FROM Users WHERE user_email = ?",
        [value]
    );
    if (rows.length > 0) {
        // alert("This email is already taken");
        return res.status(400).send("This email is already taken");
    } else {
        return value;
    }
};
// check idcard
const idcardValidator = async (value) => {
    const [rows] = await pool.query(
        "SELECT user_idcard FROM Users WHERE user_idcard = ?",
        [value]
    );
    if (rows.length > 0) {
        // alert("This ID card is already taken");
        return res.status(400).send("This ID card is already taken");
    } else {
        return value;
    }
};
// check phone
const phoneValidator = async (value) => {
    const [rows] = await pool.query(
        "SELECT user_phone FROM Users WHERE user_phone = ?",
        [value]
    );
    if (rows.length > 0) {
        // alert("This phone is already taken");
        return res.status(400).send("This phone is already taken");
    } else {
        return value;
    }
};

const checkValidate = Joi.object({
    username: Joi.string().required().external(usernameValidator),
    password: Joi.string().required().external(passwordValidator),
                        // .string()
                        // .minOfSpecialCharacters(2)
                        // .minOfLowercase(2)
                        // .minOfUppercase(2)
                        // .minOfNumeric(2)
                        // .noWhiteSpaces()
                        // .messages({
                        //     'password.minOfUppercase': 'password should contain at least {#min} uppercase character',
                        //     'password.minOfSpecialCharacters': 'password should contain at least {#min} special character',
                        //     'password.minOfLowercase': 'password should contain at least {#min} lowercase character',
                        //     'password.minOfNumeric': 'password should contain at least {#min} numeric character',
                        //     'password.noWhiteSpaces': 'password should not contain white spaces',
                        // }),
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    address: Joi.string().required(),
    gender: Joi.string().required(),
    email: Joi.string().email().required()
    .external(emailValidator),
    birthdate: Joi.date().required(),
    idcard: Joi.string().required()
    .external(idcardValidator),
    phone: Joi.string().required()
    .external(phoneValidator),
});

// Register
router.post("/register", async function (req, res, next) {
    // let errMassage = [];
    try {
        await checkValidate.validateAsync(req.body, { abortEarly: false });
    } catch (error) {
        // error.details.forEach(element => {
        //     errMassage.push(element.message);
        // });
        // console.log(errMassage);
        // return res.json(errMassage);
        return res.status(400).send(error);
    }
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
