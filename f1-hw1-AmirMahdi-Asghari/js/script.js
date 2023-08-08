
let num = +prompt("To detect whether the input is even or odd and whether it is a number");
let num2 = +prompt("Enter your number:");
let num3 = +prompt("Enter your number:");

function bigernumber(a, b) {
    if (a > b) {
        console.log(a)

    } else {
        console.log(b)
    }
}
bigernumber(2, 10)
//--------------------------------------------- number 2 


if (typeof num === "number") {
    console.log("this is number");
}
else {
    console.log("this is not number");
}

// -------------------------------------------number3
if (num % 2 == 0) {
    console.log("This number is even");
}
else {
    console.log("This is an odd number");
}
// ------------------------------------------------number4

if (num > num2 && num < num3) {
    console.log('yes');
} else {
    console.log('no');
}
// ---------------------------------------------------number5
for (let index = 0; index <= 15; index++) {
    console.log(index)
    if (index % 2 == 0) {
        console.log("This number is even");
    }
    else {
        console.log("This is an odd number");
    }

}
// -----------------------------------------------------------number6

    for(let game =1; game <= 100; game++){
        if(game % 3 === 0){
          console.log("Fizz")
        }
        else if(game % 5 === 0){
          console.log("Buzz")
        }
        else if(game % 5 === 0 && game % 3 === 0){
          console.log("FizzBuzz")
        } 
        else {
          console.log(game)
        }
    }
