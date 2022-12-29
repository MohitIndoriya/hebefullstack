const mongoose = require('mongoose');

async function connect(){

    return new Promise((res, rej) => {
        mongoose.connect('mongodb://127.0.0.1:27017/hebe',(err) => {
            return rej(err);
        })
        res();
    })
}

module.exports = connect;