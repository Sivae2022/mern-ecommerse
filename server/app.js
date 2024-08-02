const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Router } = require("./routes/productRoutes");
const { userRouter } = require("./routes/userRoutes");
const { cartRouter } = require("./routes/cartRoutes");
const { orderRouter } = require("./routes/orderRoutes");

const app = express(); // Define app before using it

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.set("view engine", "ejs");

// Routes
app.use('/product', Router);
app.use('/user', userRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);

const DBconnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/emern");
        console.log("mongodb is connected successfully");
    } catch (err) {
        console.log(err);
    }
};

DBconnect();

const port = 8000;
app.listen(port, () => {
    console.log(`PORT RUNNING AT ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello");
});
