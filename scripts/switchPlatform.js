const fs = require('fs');
const path = require('path');

const startFile = process.env.REACT_NATIVE_EJECTED === 'true' ? '../ejected.json' : '../unejected.json';

fs.copyFileSync(path.resolve(__dirname, startFile), path.resolve(__dirname, '../app.json'));
console.log(startFile + " copied to app.json!");

const isEjected = process.env.REACT_NATIVE_EJECTED === 'true';

fs.writeFileSync(path.resolve(__dirname, '../config.json'), JSON.stringify({ isEjected }, null, "\t"));
console.log(`Updated config.json file with isEjected: ${isEjected}`);