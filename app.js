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