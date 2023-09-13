const os = require('os');

// info about current user

const user = os.userInfo()
console.log(user);

//return system up time in seconds
const running = os.uptime();
console.log(`Te system up time is: ${running} seconds`);



const current = {
    name: os.type(),
    release: os.release(),
    totalMemo: os.totalmem(),
    freeMemo: os.freemem(),

};

console.log(current);