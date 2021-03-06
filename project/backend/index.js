const express = require("express");
var cors = require('cors');
const path = require("path");
const BodyParser = require('body-parser');
const app = express();

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.use(BodyParser.urlencoded({ extended: false }));

const indexRouter = require('./routes/index');
const regisRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const userRouter = require('./routes/user');
const SelectDataCar = require('./routes/Car');
const adminRouter = require('./routes/admin');
const sellerRouter = require('./routes/seller');

app.use(indexRouter.router);
app.use(regisRouter.router);
app.use(loginRouter.router);
app.use(userRouter.router);
app.use(SelectDataCar.router);
app.use(adminRouter.router);
app.use(sellerRouter.router);

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
})

