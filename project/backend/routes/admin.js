const express = require("express");
const pool = require("../config");

const router = express.Router();

//HTTP Method
// Get Seller Data
router.get("/getSellerData", async function (_req, res, next) {
    try {
        const [seller] = await pool.query(
        `SELECT * FROM Seller JOIN Users USING(user_id)`
        );
        return res.json(seller);
    } catch (err) {
        return next(err);
    }
});
// Verify for Seller
router.put("/vertified/:userId", async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
        let userId = req.params.userId;
        // Update seller status
        await conn.query(
            `UPDATE Seller SET s_vertified = "Vertified" WHERE user_id = ${userId}`
        )
        // Update User seller_type
        await conn.query(
            `UPDATE Users SET seller_type = 1 WHERE user_id = ${userId}`
        )
        await conn.commit();
        return res.data("Update Seller Status Success");
    } catch (error) {
        return next(error);
    }
});
// Cancel for Seller
router.put("/unvertified/:userId", async (req, res, next) => {
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try {
        let userId = req.params.userId;
        // Update seller status
        await conn.query(
            `UPDATE Seller SET s_vertified = "Not-Vertified" WHERE user_id = ${userId}`
        )
        // Update User seller_type
        await conn.query(
            `UPDATE Users SET seller_type = 0 WHERE user_id = ${userId}`
        )
        await conn.commit();
        return res.data("Update Seller Status Success");
    } catch (error) {
        return next(error);
    }
});
// Change status to confirm 
router.put("/finalsell/:saledataid/:emid", async function (req, res, _next) {
    try {
        const [saledata, field] = await pool.query(
        "UPDATE Sales_data SET sal_status = 'confirmed', em_id = ? WHERE sal_id = ?",
        [req.params.emid, req.params.saledataid]
        );
        return res.json("success");
    } catch (err) {
        return res.status(400).json(err);
    }
    });
// get all sales data 
router.get("/getcarsaledata", async function (_req, res, _next) {
    try {
        const [saledata] = await pool.query(
        "SELECT *, cus.user_firstname AS cusfirstname, cus.user_lastname AS cuslastname, sell.user_firstname AS sellfirstname, sell.user_lastname AS selllastname FROM Car AS c JOIN Car_images AS ca ON(ca.car_id = c.car_id) JOIN Sales_data AS sd ON(c.car_id = sd.car_id) JOIN Users AS sell ON(sd.seller_id = sell.user_id) JOIN Users AS cus ON(cus.user_id = sd.cus_id) WHERE main = 1 and sd.sal_status IN ('waiting admin', 'confirmed')", 
        );
        return res.json(saledata);
    } catch (err) {
        return res.status(400).json(err);
    }
});

exports.router = router;