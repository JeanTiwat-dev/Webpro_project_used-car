const express = require("express");
const pool = require("../config");
const multer = require("multer");

const router = express.Router();

var storage = multer.diskStorage({
    destination: function (_req, _file, callback) {
        callback(null, "./static/uploads");
    },
    filename: function (_req, file, callback) {
        callback(
            null,
            file.originalname.split(path.extname(file.originalname))[0] +
            "-" +
            Date.now() +
            path.extname(file.originalname)
        );
    },
});
const upload = multer({ storage: storage });

router.get("/CarsData", async function (_req, res, next) {
try {
const [cars] = await pool.query(
    `SELECT * FROM Car JOIN Car_images using(car_id) WHERE main = 1`
);
return res.json(cars);
} catch (err) {
return next(err);
}
});

router.get("/CarsData/:id", async function (_req, res, next) {
    try {
        const [cars] = await pool.query(
            `SELECT * FROM Car WHERE car_id = ${_req.params.id}`
        );
        const [carImages] = await pool.query(
            `SELECT * FROM Car_images WHERE car_id = ${_req.params.id}`
        );
        console.log(carImages)
        return res.json({ ...cars[0], car_images: carImages });
    } catch (err) {
        return next(err);
    }
});

router.post("/addCar/:userId", upload.array("imgCar", 6), async function (req, res, next) {
    let userId = req.params.userId;
    let car_model = req.body.car_model;
    let car_modelyear = req.body.car_modelyear;
    let car_color = req.body.car_color;
    let car_desc = req.body.car_desc;
    let car_price = req.body.car_price;
    let car_regis = req.body.car_regis;
    let car_distance = req.body.car_distance;
    let car_engine = req.body.car_engine;
    let car_gear = req.body.car_gear;
    let car_yearbought = req.body.car_yearbought;
    let car_owner = req.body.car_owner;
    let car_num_of_gear = req.body.car_num_of_gear;
    let car_type = req.body.car_type;
    let car_brand = req.body.car_brand;
    let car_drive_type = req.body.car_drive_type;
    let car_act = req.body.car_act;
    let car_num_of_door = req.body.car_num_of_door;
try {
const [cars] = await conn.query(
    `INSERT INTO Car (seller_id, car_model, car_modelyear, car_color, car_desc, car_price, car_regis, car_distance, car_engine, car_gear, car_yearbought, car_owner, car_num_of_gear, car_type, car_brand, car_drive_type, car_act, car_num_of_door) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
    userId,
    car_model,
    car_modelyear,
    car_color,
    car_desc,
    car_price,
    car_regis,
    car_distance,
    car_engine,
    car_gear,
    car_yearbought,
    car_owner,
    car_num_of_gear,
    car_type,
    car_brand,
    car_drive_type,
    car_act,
    car_num_of_door,
    ]
);
    console.log(cars);
    return res.json(cars);
    } catch (err) {
        return next(err);
    }
});

router.put("/editCar/", async function (req, res, next) {
    try {
        const [cars] = await pool.query(
            `UPDATE Car SET car_model = ?, car_modelyear = ?, car_color = ?, car_desc = ?, car_price = ?, car_regis = ?, car_distance = ?, car_engine = ?, car_gear = ?, car_yearbought = ?, car_owner = ?, car_num_of_gear = ?, car_type = ?, car_brand = ?, car_drive_type = ?, car_act = ?, car_num_of_door = ? WHERE car_id = ?`, 
            [req.body]
        );
    } catch (error) {
        return next(error);
    }
});

exports.router = router;
