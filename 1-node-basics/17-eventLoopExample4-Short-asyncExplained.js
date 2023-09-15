const {readFile, writeFile} = require('fs').promises;
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() => {
try {
    const first = await readFile('./content/first.txt', 'utf8');
    console.log(first);
    const second = await readFile('./content/second.txt', 'utf8');
    console.log(second);
    await writeFile('./content/result-async-util.txt', `THIS IS AWSOME !!!!!!: ${first} ${second} \n`, {flag: 'a'});

} catch (error) {
    console.log(error);
}

}

start()

// readFile('./content', 'utf8', (err, data)=>{
//     if(err){
//         return;
//     } else {
//         console.log(data);
//     }
// })



// const getText = (path) => {
//     return new Promise((resolve, reject) => { 
//         readFile(path, 'utf8', (err, data)=>{
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then((result) => {console.log(result);})
// .catch((err) => {console.log(err);})
