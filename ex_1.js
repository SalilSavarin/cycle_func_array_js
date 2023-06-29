let nodePath = process.argv[0];
let appPath = process.argv[1];
let  amountOfElem = process.argv[2];
let numbers = [1, 2, 56, 22, 245, 8, 25, 17, 7]


function primeNumbers(array) {
    for (let i = 0; i < amountOfElem; i++) {
        const element = array[i];
        console.log(element)
        
    }
}


primeNumbers(numbers)
