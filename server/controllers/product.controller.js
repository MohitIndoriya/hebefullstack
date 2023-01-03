const Product = require("../database/products.model")

const getData = async(req,res) => {
    let {
        page = 1,
        sortby,
        order,
        category
    } = req.query;

    let data = [];
    let total = 0;
    let sortorder = -1;
    if(order == "asc"){
        sortorder = 1;
    }

    if(sortby && order && category){
        data = await Product.find({category})
        .sort({[sortby]:sortorder})
        total = await Product.find({category}).count()
    }else if(sortby && order){
        data = await Product.find()
        .sort({[sortby]:sortorder})

        total = await Product.find().count();
    }else if(category){
        data = await Product.find({category})

        total = await Product.find({category}).count();
    }else{
        data = await Product.find()

        total = await Product.find().count();
    }

    return res.status(200).send({
        status: 'success',
        page: parseInt(page),
        total,
        data
    })
}

const getDataByID=async(req,res)=>{
    console.log("hello");
    try{
        const data =await Product.findById(req.params.id);
        console.log(data);
        res.send({
            data:[data]
        })
    }
    catch(err){
        res.send({
            err:err
        })
    }


}


module.exports = {getData,getDataByID}