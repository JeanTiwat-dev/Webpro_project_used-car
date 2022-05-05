const express = require("express");
const pool = require("../config");
const Joi = require('joi');
const router = express.Router();

// HTTP Method
router.put("/reqSeller/:userId", async (req, res, next) => {
    try {
        await pool.query(
            `INSERT INTO Seller VALUES(?, ?)`,[
                "Not-Vertified",
                req.params.userId
            ]);
        return res.json("Request Seller Success");
    } catch (error) {
        return next(error);
    }
});


exports.router = router