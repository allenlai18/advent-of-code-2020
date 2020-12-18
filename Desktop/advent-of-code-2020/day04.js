const fs = require("fs");

var values = fs.readFileSync("day04.txt", "utf8").split('\r\n');
values.push('');

const codes = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

function parseLines(lines) {
    let passports = [];
    let current = {};
    lines.forEach((line)=> {
        if (line) {
            line.split(' ').forEach((pairStr) => {
                let [key, val] = pairStr.split(':');
                current[key] = val;
            });
        } else {
            passports.push(current);
            current = {};
        }
    });
    
    return passports;
}


let mapOfPassports = parseLines(values)

let validPassports = mapOfPassports.filter(pass => {
    return hasRequiredKeys(pass)
});

console.log(validPassports.length)

function hasRequiredKeys(obj) {
    if ('byr' in obj && 'iyr' in obj && 'eyr' in obj && 'hgt' in obj && 'hcl' in obj && 'ecl' in obj && 'pid' in obj) {
        return true;
    }
return false;
}



// const input = fs.readFileSync('day04.txt', 'utf-8').trim().split('\n\n');
// const checkPassport = () => {
// let validPassport = 0;
// const validFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
// for (let i = 0; i < input.length; i++) {


// let obj = {};
// const passport = input[i].split(/\s+/);
// passport.forEach((field) => {
// const info = field.split(':');
// obj[info[0]] = info[1];
// });
// if ('byr' in obj && 'iyr' in obj && 'eyr' in obj && 'hgt' in obj && 'hcl' in obj && 'ecl' in obj && 'pid' in obj) {
// validPassport++;

// }
// }
// console.log('The number is valid passports are:', validPassport);
// };

