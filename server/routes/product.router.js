const express = require('express');
const getData = require('../controllers/product.controller');
const productRouter = express.Router();

productRouter.get('/products', getData);

module.exports = productRouter;