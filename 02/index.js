fs = require('fs');

// const file = './input/example.txt'
const file = './input/input.txt'
// fs.readFile(file, 'utf8', solvePartA);
fs.readFile(file, 'utf8', solvePartB);

function solvePartA(err, data) {
    let lines = data.split('\r\n')

    let horizontal = 0;
    let depth = 0;
    let aim = 0;


    for (let instruction of lines) {
        const instructionParts = instruction.split(' ');
        const direction = instructionParts[0];
        const shift = +instructionParts[1];

        switch(direction) {
            case 'up':
                depth -= shift;
                break;
            case 'down':
                depth += shift;
                break;
            case 'forward':
                horizontal += shift;
                break;
        }
    }
    const result = horizontal * depth;

    console.log('If I multiply my final horizontal position by my final depth I get ' + result + '.');
}

function solvePartB(err, data) {
    let lines = data.split('\r\n')

    let horizontal = 0;
    let depth = 0;
    let aim = 0;


    for (let instruction of lines) {
        const instructionParts = instruction.split(' ');
        const direction = instructionParts[0];
        const shift = +instructionParts[1];

        switch(direction) {
            case 'up':
                aim -= shift;
                break;
            case 'down':
                aim += shift;
                break;
            case 'forward':
                horizontal += shift;
                depth += shift * aim;
                break;
        }
    }
    const result = horizontal * depth;

    console.log('If I multiply my final horizontal position by my final depth I get ' + result + '.');
}