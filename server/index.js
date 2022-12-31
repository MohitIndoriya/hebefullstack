const express = require('express');
const { connect } = require('./database/connect');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const { cartRouter } = require('./routes/cart.route');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users",userRouter);
app.use(cartRouter);

const PORT = process.argv[2] || 8080;
connect().then(res=>{
    app.listen(PORT,()=>{
        console.log(res);
        console.log("Connected To Server");
    })
})
.catch((err)=>{
    console.log(err.message);
})