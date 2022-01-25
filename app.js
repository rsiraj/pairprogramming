
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
let vowels = ["a", "e", "i", "o", "u"];

let input = prompt("Enter a letter");

//let output = vowelCheck();
vowelCheck(input);
function vowelCheck (input){
    if(input == "a" || input == "e" || input == "i" || input == "o" || input == "u"){
        console.log("This is a vowel");

    }
    else{
        console.log("This is not a vowel");
    }

    // for(let i = 0; i < vowels.length; i++){
    //     if(input == vowels[i]){
    //         console.log("This is a vowel");
    //     }
    //     else{
    //         console.log("This is not a vowel");
    //     }

    // }
}

// MEDIUM 2
function anagramCheck (string1, string2) {
    string1 = string1.replace(/\s+/g, '');
    string2 = string2.replace(/\s+/g, '');

    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    let stringArray1 = Array.from(string1);
    let stringArray2 = Array.from(string2);

    stringArray1 = stringArray1.sort();
    stringArray2 = stringArray2.sort();

    console.log(stringArray1);
    console.log(stringArray2);

    for (let i = 0; i < stringArray1.length; i++){
        if (stringArray1[i] != stringArray2[i]){
            return false;
        }
    }
    return true;
}

let string1 = "So dark the con of man";
let string2 = "Madonna of the Rocks";


console.log(anagramCheck(string1, string2));

//MEDIUM 3 

function gcd(num1, num2) {
    
    while(num2) { // 126 78 48 30 18 12 6 0
       x = num2;
      //console.log(x); 126 78 48 30 18 12 6
      num2 = num1 % num2;
      //console.log(num2); 78 48 30 18 12 6 0
      num1 = x;
      //console.log(num1);126 78 48 30 18 12 6
    }
    return x;
  }
  
  console.log(gcd(78, 126));
  console.log(gcd(336, 360));