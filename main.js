'use strict';
let args = process.argv.splice(2);
let output = 0;
for (let i = 0; i < args.length; i++){
    output += parseInt(args[i]);
}
console.log(output);