const Product = require('../models/product');

const getAllProductsStatic = async (req, res)=>{
    const products = await Product.find({
        name:'vase table'
    })
    res.status(200).json({products, nbHits: products.length})
};

const getAllProducts = async (req, res)=>{
    const products = await Product.find(req.query);
    //console.log(req.query);
    res.status(200).json({products, nbHits: products.length})
};


module.exports ={ getAllProducts, getAllProductsStatic}; 
