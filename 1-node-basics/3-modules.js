//Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)


//const secret = "SUPER SECRET"
//const bob = "Bob"
//const cole = "Cole"

/*
const Helo= (name) => {
    console.log(`Helo ${name}, what up!!!!!!!!!!!!`);
}*/


//accessing variables from name file
const names = require('./4-namesForModules');
const Helo = require('./5-utilsForModules');

const alterExport = require('./6-alternativeExportMethode')
console.log(alterExport);


Helo("kiran");
Helo(names.bob);
Helo(names.cole);
Helo(alterExport.items[1]);

require('./7-moduleTest');
//Helo("kiran");
//Helo(bob);
//Helo(cole);
