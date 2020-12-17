const fs = require("fs");

var values = fs.readFileSync("day03.txt", "utf8").split("\r\n").map(x => x.split(''));

function findNumberOfEncounters(rows, rowDiff, colDiff) {

    let currRow = 0;
    let currCol = 0;

    let count = 0;
    while(currRow < rows.length ) {

        let adjustedCol = currCol % rows[0].length;
        if (rows[currRow][adjustedCol] == '#') {
            count++;
        }

        currRow += rowDiff;
        currCol += colDiff;
    }

    return count;
}

function multiplyEncounters(values) {
    let waysToTraverse = [[1,1],[3,1],[5,1],[7,1],[1,2]];


    return waysToTraverse.map(([x,y]) => {
        return findNumberOfEncounters(values,y,x);
        
    }).reduce((a, b) => a * b, 1);


}

console.log(multiplyEncounters(values));
