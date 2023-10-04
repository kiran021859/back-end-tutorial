const Product = require('../models/product');
//const { search } = require('../routes/products');

const getAllProductsStatic = async (req, res)=>{
    let search = 'albany sectional'
    const products = await Product.find({
        name: { $regex: search, $options: "i" },
    })
    res.status(200).json({products, nbHits: products.length})
};

const getAllProducts = async (req, res)=>{
    const {featured, company, name} = req.query;
    const queryObject = {};
    if (featured) {
        queryObject.featured = featured === 'true'? true : false;
    };
    if(company){
        queryObject.company = company;
    };
    if(name){
        queryObject.name = { $regex:name, $options: "i" }
    }
    
    console.log(queryObject);
    const products = await Product.find(queryObject);
    //console.log(req.query);
    res.status(200).json({products, nbHits: products.length})
};


module.exports ={ getAllProducts, getAllProductsStatic}; 
