const express = require('express');
const connect = require('./database/connect');
const productRouter = require('./routes/product.router');

const app = express();
app.use(express.json());

app.use("/products",productRouter)
connect()
.then(() => {
    app.listen(8080, () => console.log("Connected"))
})
.catch((err) => {
    console.log("Server went into unknown state")
})