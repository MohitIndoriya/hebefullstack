const {mongoose} = require('mongoose')




const connect=async()=>{

    return new Promise((resolve,reject)=>{
        mongoose.connect('mongodb://127.0.0.1:27017/hebe',(err)=>{
            return err ?reject('Not Connected to DataBase'):resolve('Connected To DataBase')
        })
    })

}


module.exports={connect};