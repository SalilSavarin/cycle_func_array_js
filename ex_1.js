let nodePath = process.argv[0];
let appPath = process.argv[1];
let  amountOfElem = process.argv[2];
let numbers = [5, 2, -6, 56, 22, 245, 8, 25, 17, 7]


function primeNumbers(array) {
    let count = 0
    for (let i = 0; i < amountOfElem; i++) {
        const element = array[i];
        if (element % 2 !== 0)
            {continue;}
        else
            {count ++;}
    }
    return count;
}


primeNumbers(numbers);
