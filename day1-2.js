const fs = require('fs');
const inputstream = fs.readFileSync("inputs/day1input/input.txt").toString();
//inputstream
let sum = 0;
let numbers = ["zero","one","two","three","four","five","six","seven","eight","nine"]
let regexPattern = new RegExp("\\d|" + numbers.join("|"), "g");

let newsource = inputstream.replace(/oneight/g,"oneeight")
.replace(/threeight/g,"threeeight")
.replace(/fiveight/g,"fiveeight")
.replace(/nineight/g,"nineeight")
.replace(/twone/g,"twoone")
.replace(/sevenine/g,"sevennine")
.replace(/eightwo/g,"eighttwo")

let sourcearr = newsource.split("\n");

sourcearr.forEach(element => {
    let temparr = element.match(regexPattern).map((e)=> parseNumber(e));
    sum += temparr.at(0)*10 + temparr.at(-1);
    //console.log(temparr);
});

function parseNumber(e) {
    if(parseInt(e))
        return parseInt(e);
        return numbers.indexOf(e);
    
}

console.log(sum)

// let sourcearr = source.split("\n");
// sourcearr.forEach(element => {
//     let temparr = element.match(/\d/g).map((e)=> parseInt(e));
//     sum += temparr.at(0)*10 + temparr.at(-1);
//     console.log(temparr);
// });

//feeble atempts
//let temparr = [];
// for (let i = 0; i < source.length; i++) {
//     if(Number.isInteger(parseInt(source[i]))) {
//         temparr.push(parseInt(source[i]))
//     }

//     if(Number.isInteger(parseInt(source[i]))) {
//         temparr.push(parseInt(source[i]))
//     }

//     if(source[i] === "\n" || i === source.length-1) {
//         const testsum = temparr.at(0)*10 + temparr.at(-1)
//         sum += temparr.at(0)*10 + temparr.at(-1)
//         console.log(temparr)
//         console.log(testsum)
//         temparr = [];
//     }
// }
