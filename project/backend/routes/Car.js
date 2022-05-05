const express = require("express");
const pool = require("../config");
const multer = require("multer");
const Joi = require('joi');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Multer
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

// ValidityState (Validate Car)
const checkValidate = Joi.object({
    car_model: Joi.string().required(),
    car_modelyear: Joi.number().integer().required(),
    car_color: Joi.string().required(),
    car_desc: Joi.string().required(),
    car_price: Joi.number().integer().required(),
    car_regis: Joi.string().required(),
    car_distance: Joi.number().integer().required(),
    car_engine: Joi.string().required(),
    car_gear: Joi.string().required(),
    car_yearbought: Joi.number().integer().required(),
    car_owner: Joi.string().required(),
    car_num_of_gear: Joi.number().integer().required(),
    car_type: Joi.string().required(),
    car_brand: Joi.string().required(),
    car_drive_type: Joi.string().required(),
    car_act: Joi.date().required(),
    car_num_of_door: Joi.number().integer().required()
});

// HTTP Method
// Get All cars
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
            `SELECT * FROM Car JOIN Car_images using(car_id) WHERE main = 1 AND seller_id = ?`,[_req.params.id]
        );
        return res.json(cars);
    } catch (err) {
        return next(err);
    }
});

// Get car by id
router.get("/getCarsData/:id", async function (req, res, next) {
    console.log("getCarsData");
    try {
        const [cars] = await pool.query(
            `SELECT * FROM Car WHERE car_id = ${req.params.id}`
        );
        const [carImages] = await pool.query(
            `SELECT * FROM Car_images WHERE car_id = ${req.params.id}`
        );
        // console.log(req.params.id)
        return res.json({ ...cars[0], car_images: carImages });
    } catch (err) {
        return next(err);
    }
});

// Add car
router.post("/addCar/:userId", upload.array("imgCar", 6),async function (req, res, next) {
    console.log("addCar");
        try {
            await checkValidate.validateAsync(req.body, { abortEarly: false });
        } catch (error) {
            return res.status(400).send(error);
        }
        const conn = await pool.getConnection();
        await conn.beginTransaction();
        try {
            const file = req.files;
            let pathArray = [];
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
            // check index of imgCar
            let checkindex = true;
            file.forEach((files) => {
                let paths = [files.path.substring(6), cars.insertId, checkindex];
                pathArray.push(paths);
                if (checkindex == true) {
                    checkindex = false;
                }
            });
            // insert imgCar
            await conn.query(
                `INSERT INTO Car_images (car_img, car_id, main) VALUES ?;`,
                [pathArray]
            );
            // commit
            await conn.commit();
            return res.json(cars);
        } catch (err) {
            return next(err);
        }
    });

// Edit car 
router.put("/editCar/:carId", upload.array('imgCar', 6),async function (req, res, next) {
    try {
        await checkValidate.validateAsync(req.body, { abortEarly: false });
    } catch (error) {
        return res.status(400).send(error);
    }
    const conn = await pool.getConnection();
    await conn.beginTransaction();

    try {
        const file = req.files;
        let pathArray = [];
        let car_id = req.params.carId;
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

        const [cars] = await pool.query(
            `UPDATE Car SET car_model = ?, car_modelyear = ?, car_color = ?, car_desc = ?, car_price = ?, car_regis = ?, car_distance = ?, car_engine = ?, car_gear = ?, car_yearbought = ?, car_owner = ?, car_num_of_gear = ?, car_type = ?, car_brand = ?, car_drive_type = ?, car_act = ?, car_num_of_door = ? WHERE car_id = ?`,
            [
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
                    car_id
                    ]
        );
        const [images] = await conn.query(
            "SELECT car_img FROM Car_images WHERE car_id = ?",
            [req.params.carId]
        );
        // Delete car images
        const appDir = path.dirname (require.main.filename);
        images.forEach (img =>{
            const p = path.join(appDir, 'static', img.car_img);
            fs.unlinkSync(p);
        });
        await conn.query(
            `DELETE FROM Car_images WHERE car_id=?`,
            [req.params.carId]
        );
        // check index of imgCar
        let checkindex = true;
        console.log(file);
        file.forEach((files) => {
            let paths = [files.path.substring(6), car_id, checkindex];
            pathArray.push(paths);
            if (checkindex == true) {
                checkindex = false;
            }
            
        });
        // insert imgCar
        await conn.query(
            `INSERT INTO Car_images (car_img, car_id, main) VALUES ?;`,
            [pathArray]
        );
        // commit
        await conn.commit();
        return res.json(cars);
    } catch (err) {
        return next(err);
    }
});

exports.router = router;
