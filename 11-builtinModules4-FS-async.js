const {readFileSync, writeFileSync, readFile, writeFile} = require('fs');
console.log('starts tasks');
readFile('./content/first.txt','utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    };
    console.log(result);
    const first = result;

    readFile('./content/second.txt','utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        };
        console.log(result);
        const second = result;

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}\n`, 
            {flag: 'a'},
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                };
                //console.log(result);
                console.log('done with this task');
            });

    });
});

console.log('starting with next task');