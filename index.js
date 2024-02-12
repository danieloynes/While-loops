//Oppgave 1
/*
let i = 0;

while (i<50) {
    i++;
    console.log(i);
}
*/

//Oppgave 2
/*
let i = 0;

while (i<100) {
    if (i % 2 === 0) {
    console.log(i);
    }
    i++;
}
*/

//Oppgave 3
/*
let i = 0;

while (i < 999) {
    if (i % 3 === 0) {
        console.log(i);
    }
    i++;
}
*/

//Oppgave 4
/*
let i = 0;

while (i < 1000) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
    i++;
}
*/

//Oppgave 5
/*
let sum = 0;
let i = 0;

while (i < 100) {
  sum += i;
  i++;
}

console.log(sum);
*/

//Oppgave 6
/*
let htag = ""
for (let i = 0; i < 5; i++) {
    htag +="#" 
    console.log(htag);
}
*/

//Oppgave 7
/*
let htag = ""
for (let i = 0; i < 50; i++) {
    htag +="#" 
    console.log(htag);
}
*/

//Oppgave 8 

let i = 0;

while (i<100) {
    i++;
    if (i % 3) {
        console.log("Fizz");
    } else if (i % 5) {
        console.log("Buzz");
    } else if (i % 3 && i % 5){
        console.log("FizzBuzz");
    }else{
        console.log(i);
    }
}