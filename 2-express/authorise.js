const authorise = (req,res,next) => {
    const {user} = req.query;
    //console.log(user);
    if(user == 'john'){
        req.user = {name:'john',id:3}
        next();
    }else{
        res.status(401).send('Unorthorised')
    };
    // console.log('authorise');
    // next();
}

module.exports = authorise