

let userInput = prompt ("enter a number between 0 to 1 milllion:");
 let number = Number(userInput);

 if (isNaN(number) || number < 0 || number > 1000000) {
    console.log("invalid number");
 }else {
    let sum = (number * (number + 1)) / 2;
    console.log("sum of numbers up to " + number + " is " + sum);
}