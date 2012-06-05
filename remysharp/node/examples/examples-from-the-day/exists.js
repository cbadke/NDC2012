var path = require('path');

console.log('step 1: file exists?');

path.exists(process.argv[2], function (exists) {
    console.log('Exists? ' + exists);
});

debugger;

console.log('step 2: now we wait...');

