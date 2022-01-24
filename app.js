
// EASY 1
let array = [2, 4, 7, 11, 15, 16];
const even = array.filter(evenPrint);
const odd = array.filter(oddPrint);

console.log(`Even numbers: [${even}]`);
console.log(`Odd numbers: [${odd}]`);

function evenPrint(array){
    return array % 2 ==0;
}

function oddPrint(array){
    return array % 2 != 0;
}

// EASY 2
let numArray = [1,2,3,4,5,6,7,8,9,10];
const prime = numArray.filter(primePrint);

console.log(prime)

function primePrint(numArray){
    for (let i = 2; i < numArray; i++ ){
        if (numArray % i != 0) {return numArray;}
    }
}

// MEDIUM 1
