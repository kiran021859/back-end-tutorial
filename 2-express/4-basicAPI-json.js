const express = require('express');
const app = express();
port = 5000

app.get('/',(req, res) => {
  res.json([{name: 'john'}, {name: 'susan'}])
})




app.listen(port, ()=>{
    console.log('server is up port: 5000');
})
