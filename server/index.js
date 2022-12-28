const express = require('express');
const { connect } = require('./database/connect');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());



const PORT = process.argv[2] || 3001;
connect().then(res=>{
    app.listen(PORT,()=>{
        console.log(res);
        console.log("Connected To Server");
    })
})
.catch((err)=>{
    console.log(err.message);
})