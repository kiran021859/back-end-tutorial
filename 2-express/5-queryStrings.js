const express = require('express');
const app = express();
port = 5000;
const {products} = require('./data')

app.get('/',(req, res) => {
  //res.json([{name: 'john'}, {name: 'susan'}])
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');

})

app.get('/api/products', (req, res)=>{
    const newProduct1 = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image};
    })
    res.json(newProduct1);
})
                        // productID is a place holder for whaterver is input into the http at its place 
app.get('/api/products/:productID', (req, res)=>{
    // console.log(req);
    // console.log(req.params);
    const {productID} = req.params;

//     const newProduct2 = products.find((product)=> product.id === 1 )
//     res.json(newProduct2);

    const newProduct2 = products.find((product)=> product.id === Number(productID) )
    if(!newProduct2){
        return res.status(404).send('Product doesnt exist')
    }

    return res.json(newProduct2)

})
 


app.get('/api/products/:productID/review/:reviewID', (req, res)=>{
    console.log(req.params);
    res.send('helo world')
})

app.get('/api/home/query', (req, res)=>{
    console.log(req.query);

    const {search, limit} = req.query;
    let sortProduct = [...products];

    
    if(search){
        sortProduct = sortProduct.filter((products)=>{
            return products.name.startsWith(search)
        })
    }
    if (limit){
      sortProduct = sortProduct.slice(0,Number(limit));
    }
    if(sortProduct.length < 1){
        //res.status(200).send('there is no result')
        return res.status(200).json({success:true, data: [] })
    }
    res.status(200).json(sortProduct);

    res.send('helo world query')
})


app.listen(port, ()=>{
    console.log('server is up port: 5000');
})
