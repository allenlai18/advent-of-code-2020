const fs = require("fs");

var values = fs.readFileSync("day05.txt", "utf8").split("\r\n"); //Reads the values

function findMaxId(tickets) {

        
    return Math.max.apply(...tickets.map(ticket => {calculateId(ticket)  }));

}

function calculateId(string) {
    let row = string.substring(0, 7);
    let col = string.substring(7);

    let rowL = 0;
    let rowR = 127;

    let colL = 0;
    let colR = 7;

    
    row.split('').forEach((char) => {
        if (char == 'F') {
            rowR = Math.floor((rowL + rowR) / 2);
        } else {
            rowL = Math.ceil((rowL + rowR) / 2);
        }
    });

    col.split('').forEach((char) => {
        if (char == 'R') {
            colL = Math.ceil((colL + colR) / 2);
        } else {
            colR = Math.floor((colL + colR) / 2)
        }
    });

    return rowL * 8 + colL; 


}
console.log(findMaxId(values))



