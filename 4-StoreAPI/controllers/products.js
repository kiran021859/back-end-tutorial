const Product = require('../models/product');
//const { search } = require('../routes/products');

const getAllProductsStatic = async (req, res)=>{
    
    const products = await Product.find({})
    .sort('name')
    .select('name price')
    .limit(3)
    res.status(200).json({products, nbHits: products.length})
};

const getAllProducts = async (req, res)=>{
    const {featured, company, name, sort, fields} = req.query;
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
    let result = Product.find(queryObject);
   
    if(sort){
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
        //products = products.sort();
        console.log(sortList);
    }else{
        result = result.sort('createdAt')
    }
//select only sertain fields in the json schema  
    if(fields){
        const fieldsList = fields.split(',').join(' ');
        result = result.select(fieldsList);
    }

const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 10;
const skip = (page -1) * limit;

result = result.skip(skip).limit(limit);

    //console.log(req.query);
    const products = await result;
    res.status(200).json({products, nbHits: products.length})
};


module.exports ={ getAllProducts, getAllProductsStatic}; 
