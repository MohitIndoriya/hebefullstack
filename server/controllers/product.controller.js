const Product = require("../models/products.model")

const getData = async(req,res) => {
    let {
        page = 1,
        sortby,
        order,
        category,
        limit=12
    } = req.query;

    let data = [];
    let total = 0;
    let skipValue = (page-1)* limit;
    let sortorder = -1;
    if(order == "asc"){
        sortorder = 1;
    }

    if(sortby && order && category){
        data = await Product.find({category})
        .skip(skipValue)
        .limit(limit)
        .sort({[sortby]:sortorder})
        total = await Product.find({category}).count()
    }else if(sortby && order){
        data = await Product.find()
        .skip(skipValue)
        .limit(limit)
        .sort({[sortby]:sortorder})

        total = await Product.find().count();
    }else if(category){
        data = await Product.find({category})
        .skip(skipValue)
        .limit(limit)

        total = await Product.find({category}).count();
    }else{
        data = await Product.find()
        .skip(skipValue)
        .limit(limit)

        total = await Product.find().count();
    }

    return res.status(200).send({
        status: 'success',
        page: parseInt(page),
        total,
        limit: parseInt(limit),
        data
    })
}

module.exports = getData