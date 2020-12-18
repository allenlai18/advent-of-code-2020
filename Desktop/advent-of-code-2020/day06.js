
const fs = require("fs");

var values = fs.readFileSync("day06.txt", "utf8").split('\r\n');

values.push('');
function parseLines(lines) {
    let count = 0;

    let currentSet = [];

    lines.forEach((line)=> {
        if (line.length>0) {

            if (currentSet.length == 0) {
                currentSet = [...line.split('')];
            } else {
                currentSet = currentSet.filter(x => line.split('').includes(x));

            }
            
        } else {
            console.log(currentSet);
            count += currentSet.length;


            currentSet = [];
        }
    });
    
    return count;
}


console.log( parseLines(values));
