const express = require('express');
const {getData,getDataByID} = require('../controllers/product.controller');
const productRouter = express.Router();

productRouter.get('/products', getData);
productRouter.get('/products/:id',getDataByID);

module.exports = productRouter;