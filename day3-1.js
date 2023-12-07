const fs = require('fs');
const inputstream = fs.readFileSync("inputs/day3input/input.txt").toString();
//inputstream
//console.log(inputstream)
//symbols: !=. or 0-9

const inputMatrix =
`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

let imatrix = inputstream.split("\n")
let sum = 0;
//let cpymatrix = imatrix.map(row => row.replace(/./g, '0'));
let cpymatrix = Array.from({ length: imatrix.length }, () => Array(imatrix[0].length).fill('.'));
const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
];

for (let i = 1; i < imatrix.length - 1; i++) {
    for (let j = 1; j < imatrix[i].length - 1; j++) {
        let current = imatrix[i][j];
        //front
        if (!isSpecial(imatrix[i][j]))
            continue;
        for (const [dx, dy] of directions) {
            cpymatrix[i + dy][j + dx] = imatrix[i + dy][j + dx];
        }
    }
}
for (let i = 0; i < cpymatrix.length; i++) {
    for (let j = 0; j < imatrix[i].length; j++) {
        if (!isNumber(cpymatrix[i][j]))
            continue;
        if (isNumber(imatrix[i][j + 1])) {
            cpymatrix[i][j + 1] = imatrix[i][j + 1];
            if (isNumber(imatrix[i][j + 2])) 
            cpymatrix[i][j + 2] = imatrix[i][j + 2];
        }
        if (isNumber(imatrix[i][j - 1]) ) {
            cpymatrix[i][j - 1] = imatrix[i][j - 1];
            if (isNumber(imatrix[i][j - 2]) )
            cpymatrix[i][j - 2] = imatrix[i][j - 2];
        }
    }
}

const concatenatedString = cpymatrix.flat(2).map(element => String(element)).join('');

// Use a regular expression to match whole numbers
const wholeNumbers = concatenatedString.match(/\b\d+\b/g) || [];

// Convert matched numbers to integers and calculate the sum
const sum2 = wholeNumbers.reduce((acc, num) => acc + parseInt(num, 10), 0);

//console.log(imatrix.join("\n"))
//console.log(cpymatrix.join("\n"))

console.log(sum2)

function isNumber(char) {
    return !isNaN(parseInt(char));
}
function isSpecial(char) {
    return (!isNumber(char) && char != ".");
}
function wordSearch() {

}
//only search up
//dx
//xx