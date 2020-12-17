const fs = require("fs");

var values = fs.readFileSync("day01.txt", "utf8").split("\r\n").map(elem => parseInt(elem)); //Reads the values


function findAnswer(values) {
    let numsSeen = new Set(values);

    for (let i = 0; i < values.length; i++) {
        let valToFind = 2020-values[i];
        if (numsSeen.has(valToFind)) {
            return valToFind * values[i];
        }
    }

    return null

}

function findAnswerThreeNums(values) {

    
    for (let i = 0; i < values.length; i++) {
        for (let j = i+1; j < values.length; j++) {
            for (let k = j+1; k < values.length; k++) {
                if (values[i] + values[j] + values[k] == 2020) {

                    return values[i] * values[j] * values[k]
                }
            
            }
        }
    }
    return null;

}



console.log(findAnswerThreeNums(values));








