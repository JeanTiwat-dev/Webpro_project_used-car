const express = require("express");
const pool = require("../config");

const router = express.Router();

//HTTP Method
router.get("/getSellerData", async function (req, res, next) {
    try {
        const [seller] = await pool.query(
        `SELECT * FROM Seller JOIN Users USING(user_id)`
        );
        return res.json(seller);
    } catch (err) {
        return next(err);
    }
});

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

exports.router = router;