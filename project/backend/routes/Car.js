const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/CarsData", async function (_req, res, next) {
    try {
        const [cars] = await pool.query(
            `SELECT * FROM Car JOIN Car_images using(car_id) WHERE main = 1`
        );
        return res.json(cars);
    } catch (err) {
        return next(err)
    }
})



exports.router = router;