const express = require('express')
const app = express()
const port = 5000
const path = require('path')
console.log(__dirname);

app.use(express.static('./navbar-app'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

app.all('*', ()=>{
    res.status(404).send('resource not found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
}); 