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
// Cancel 
router.put("/cancelCus/:carid/", async function (req, res, next) {
    try {
        const [upcar, field] = await pool.query(
            "UPDATE Sales_data SET sal_status = 'cancel' WHERE car_id = ?",
            [req.params.carid]
        );
        return res.json(upcar);
        } catch (err) {
        return next(err);
        }
    });
// Approve
router.put("/confirmCus/:carid/:price", async function (req, res, next) {
    try {
    const [upcar, field] = await pool.query(
        "UPDATE Sales_data SET sal_price = ?, sal_status = 'waiting admin' WHERE car_id = ?",
        [req.params.price, req.params.carid]
    );
    return res.json(upcar);
    } catch (err) {
    return next(err);
    }
});
// Get all sales data 
router.get("/getCarReqCus/:sellerid", async function (req, res, next) {
    // console.log(req.params.sellerid);
    try {
    const [seller, field] = await pool.query(
        "SELECT * FROM Car AS c JOIN Sales_data AS sd ON(c.car_id = sd.car_id) JOIN Car_images AS ci ON(ci.car_id = c.car_id) JOIN Users AS u ON(u.user_id = sd.cus_id) WHERE sd.seller_id = ? AND main = 1",
        [req.params.sellerid]
    );
    return res.json(seller);
    } catch (err) {
    return next(err);
    }
});

exports.router = router