const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/", async function (_req, res, next) {
    try {
        const [rows, fields] = await pool.query(
            `SELECT `
        );
        return res.json(rows);
    } catch (err) {
        return next(err)
    }
})


exports.router = router;