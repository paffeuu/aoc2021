fs = require('fs');

const file = './input/example.txt'
// const file = './input/input.txt'
fs.readFile(file, 'utf8', solvePartA);
// fs.readFile(file, 'utf8', solvePartB);

function solvePartA(err, data) {
    let lines = data.split('\r\n')
    horizontalLines = [];
    for (let i = 0; i < lines[0].length; i++) {
        let hline = '';
        for (let j = 0; j < lines.length; j++) {
            hline = hline.concat(lines[j][i]);
        }
        horizontalLines.push(hline)
    }
    let gamma = '';
    let epsilon = '';
    for (let hline of horizontalLines) {
        let counter0 = 0;
        let counter1 = 0;
        console.log(hline.length)
        for (let l = 0; l < hline.length; l++) {
            if (+hline[l] == 0) {
                counter0++;
            } else {
                counter1++;
            }
        }
        console.log('counter1 - ' + counter1)
        console.log('counter0 - ' + counter0)
        if (counter0 > counter1) {
            gamma += '0';
            epsilon += '1';
        } else {
            gamma += '1';
            epsilon += '0';
        }
    }
    const gammaDecimal = parseInt(gamma, 2);
    const epsilonDecimal = parseInt(epsilon, 2);
    const result = gammaDecimal * epsilonDecimal;
    console.log('The power consumption of the submarine is ' + result + '.');
}