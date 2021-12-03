fs = require('fs');

// const file = './input/example.txt'
const file = './input/input.txt'
fs.readFile(file, 'utf8', solvePartA);
fs.readFile(file, 'utf8', solvePartB);


function solvePartA(err, data) {
    let lines = data.split('\r\n')
    let counter = 0;
    for (let i = 1; i < lines.length; i++) {
        if (+lines[i] > +lines[i-1]) {
            counter++;
        }
    }
    console.log("There are " + counter + " measurements larger than the previous measurement.")
}

function solvePartB(err, data) {
    let lines = data.split('\r\n')
    let windows = [];
    for (let i = 0; i < lines.length - 2; i++) {
        windows.push(+lines[i] + +lines[i+1] + +lines[i+2])
    }
    let counter = 0;
    for (let i = 1; i < windows.length; i++) {
        if (+windows[i] > +windows[i-1]) {
            counter++;
        }
    }
    console.log("The sum of measurements in this sliding window increases " + counter + " times.")
}
