const fs = require('fs');
const inputstream = fs.readFileSync("inputs/day2input/input.txt").toString();
//readfile
const teststream = `Game 1: 4 blue, 16 green, 2 red; 5 red, 11 blue, 16 green; 9 green, 11 blue; 10 blue, 6 green, 4 red
Game 2: 15 green, 20 red, 8 blue; 12 green, 7 red; 10 green, 2 blue, 15 red; 13 blue, 15 red`
////"12 red cubes, 13 green cubes, and 14 blue cubes" "red>12 %% green>13 && blue>14"

let sum = 0;
const regexRed = /(\d+)(?=\sred)/g;
const regexGreen = /(\d+)(?=\sgreen)/g;
const regexBlue = /(\d+)(?=\sblue)/g;
const regexGame = /(?<=Game\s)(\d+)/g;
//console.log(inputstream)

inputstream.split("\n").forEach(e => {
    sum += Math.max(...e.match(regexRed)) * Math.max(...e.match(regexGreen)) * Math.max(...e.match(regexBlue));
});

console.log(sum)