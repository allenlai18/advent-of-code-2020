const fs = require("fs");

var values = fs.readFileSync("day02.txt", "utf8").split("\r\n"); //Reads the values


function findPasswords(values) {
    
    return values.filter((entry) => {
        let information = entry.split(' ');
        let [min, max] = information[0].split('-').map(num => parseInt(num));

        let character = information[1].charAt(0);

        let occur = information[2].split(character).length-1;

        return occur < min || occur > max;


    }).length;
}

function findPasswordsPartTwo(values) {
    
    return values.filter((entry) => {
        let information = entry.split(' ');
        let [iOne, iTwo] = information[0].split('-').map(num => parseInt(num));
        let character = information[1].charAt(0);
        let password = information[2];


        return [password[iOne-1] == character, password[iTwo-1] == character].filter((e) => e == true).length == 1;


    }).length;


}

console.log(findPasswordsPartTwo(values))
