fs = require('fs');

// const file = './input/example.txt'
const file = './input/input.txt'
// fs.readFile(file, 'utf8', solvePartA);
fs.readFile(file, 'utf8', solvePartB);

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
        for (let l = 0; l < hline.length; l++) {
            if (+hline[l] == 0) {
                counter0++;
            } else {
                counter1++;
            }
        }
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

function solvePartB(err, data) {
    let lines = data.split('\r\n')
    let oxygenCandidates = [...lines]
    for (let i = 0; i < lines[0].length; i++) {
        let horizontalLines = [];
        for (let k = 0; k < oxygenCandidates[0].length; k++) {
            let hline = '';
            for (let j = 0; j < oxygenCandidates.length; j++) {
                hline = hline.concat(oxygenCandidates[j][k]);
            }
            horizontalLines.push(hline)
        }

        let hline = horizontalLines[i];
        let counter0 = 0;
        let counter1 = 0;
        for (let l = 0; l < hline.length; l++) {
            if (+hline[l] == 0) {
                counter0++;
            } else {
                counter1++;
            }
        }
        let mostCommon;
        if (counter0 > counter1) {
            mostCommon = 0;
        } else if (counter0 < counter1) {
            mostCommon = 1;
        } else if (counter0 === counter1) {
            mostCommon = 1;
        }

        for (let n = 0; n < oxygenCandidates.length; n++) {
            let line = oxygenCandidates[n];
            if (+line[i] != mostCommon) {
                oxygenCandidates.splice(oxygenCandidates.indexOf(line), 1);
                n--;
            }
        }

        if (oxygenCandidates.length === 1) {
            break;
        }
    }


    let co2Candidates = [...lines]
    for (let i = 0; i < lines[0].length; i++) {
        horizontalLines = [];
        for (let k = 0; k < co2Candidates[0].length; k++) {
            let hline = '';
            for (let j = 0; j < co2Candidates.length; j++) {
                hline = hline.concat(co2Candidates[j][k]);
            }
            horizontalLines.push(hline)
        }

        let hline = horizontalLines[i];
        let counter0 = 0;
        let counter1 = 0;
        for (let l = 0; l < hline.length; l++) {
            if (+hline[l] == 0) {
                counter0++;
            } else {
                counter1++;
            }
        }
        let leastCommon;
        if (counter0 > counter1) {
            leastCommon = 1;
        } else if (counter0 < counter1) {
            leastCommon = 0;
        } else if (counter0 === counter1) {
            leastCommon = 0;
        }

        for (let n = 0; n < co2Candidates.length; n++) {
            let line = co2Candidates[n];
            if (+line[i] != leastCommon) {
                co2Candidates.splice(co2Candidates.indexOf(line), 1);
                n--;
            }
        }

        if (co2Candidates.length === 1) {
            break;
        }
    }
   

    let oxygen = oxygenCandidates[0];
    
    let co2 = co2Candidates[0];

    const oxygenDecimal = parseInt(oxygen, 2);
    const co2Decimal = parseInt(co2, 2);
    const result = oxygenDecimal * co2Decimal;
    console.log('The life support rating of the submarine is ' + result + '.');
}