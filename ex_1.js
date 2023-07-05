function getPrimeNums(n) {
    const array = [];
    let counter = 1;
    while (array.length < n) {
        counter++;
        if (counter  % 2 !== 0 && counter % 3 !== 0 && counter % 5 !==0 || counter / 5 === 1  counter / 3 === 1  counter / 2 === 1) {
            array.push(counter);
        }
    }
    return array;
}


console.log(getPrimeNums(process.argv[2]));
