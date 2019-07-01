const fs = require('fs');
let package = require('./package.json');

const startFile = process.env.EJECTED === 'true' ? './ejected.json' : './unejected.json';

fs.copyFile(startFile, './app.json', function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(startFile + " copied to app.json!");
});