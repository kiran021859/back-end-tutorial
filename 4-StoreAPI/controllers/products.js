

const getAllProducts = async (req, res)=>{
    throw new Error('testing new errors');
    res.status(200).json({msg:'products test1'})
};

const getAllProductsStatic = async (req, res)=>{
    
    res.status(200).json({msg:'products test2'})
    
};

module.exports ={ getAllProducts, getAllProductsStatic}; 