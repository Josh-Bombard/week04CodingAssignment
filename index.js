let ageArray = [3,9,23,64,2,8,28,93];
/*1. a and b- creating the array and using the object index to subtract
the first element from the last*/

// ageArray.push(74); (this is to update the array to show dynamicness).

let newAge = ageArray[ageArray.length-1] - ageArray[0];
console.log(newAge);

/* 1. C - using a for loop to calculate the average of the array by 
putting the total into the 'sum'and then dividing that by the array length to get the average*/
let sum = 0
for (let i = 0; i < ageArray.length;i++){
console.log(ageArray[i]);
sum += ageArray[i];
}
let average = (sum / ageArray.length);
console.log(average);

/*2. A- using a for loop to break down how long the words are
and then totalling them up into 'numberOfWords' and then dividing
that by the array length*/
let names = [`Sam`,`Tommy`,`Tim`,`Sally`,`Buck`,`Bob`];
let numberOfWords = 0;
for (let i = 0; i < names.length;i++){
  console.log(names[i]);
  numberOfWords += names[i].length;
}
console.log(numberOfWords / names.length);

/*2. B- using a for loop i got the i value to equal the names in the array
and by using an if statement i was able to seperate the names using
concatenation and putting a space in between each name */
let result = ``
for (let i = 0; i < names.length; i++){
  console.log(names[i]);
  result = result.concat(names[i]); 
  if (i <names.length - 1){
    result = result.concat(` `);
  }
}
 console.log(result);

/*3 and 4.- using the programatically correct way to find the last
 element and finding the first element. Decided to put it in a string
to show that I understand how it works*/
let lastElement =names[names.length - 1];
let firstElement = names[0];

console.log(`First element is ` + firstElement);
console.log(`Last element is ` + lastElement);

/*5.- Created a new array with the lengths of
 each name in the previous array*/
let nameLengths = [3,5,3,5,4,3];

/*6.- using a for loop to get the total of the numbers in the array
and printing them in the console in a seeable way*/
let total = 0
for (let i = 0; i <nameLengths.length; i++){
  console.log(nameLengths[i]);
  total += nameLengths[i];
}
console.log(`The total of the array is: ${total}`);

/*7.- using a function to concatenate the same word multiple times
using repeat and the paramaters put into the function*/
const concatFunction = (word,n) => {
console.log(word.repeat(n));
}
concatFunction(`Josh`,5);

/*8.-this function creates a full name using the parameters*/
const nameFunction = (firstName,lastName) => {
  console.log(`${firstName} ${lastName}`);
}
nameFunction(`Horus`, `Porus`);

/*9.- this function takes an array and uses a for loop to determine
if the sum of the numbers is over 100 ir not*/ 
const overHundred = (Array) => {
  let numbers = 0
  for (let i = 0; i <Array.length; i++){
    numbers += Array[i];
  }
  if (numbers < 100){
    return false
  } else {
    return true
  }
}
console.log(overHundred([20,30,60,25]));


/*10.- this function takes an array and finds the average of the
numbers using a for loop and dividing the total by the array length */
const arrayAverage = (Array) => {
  let arrayTotal = 0;
  for (let i = 0; i <Array.length; i++){
    arrayTotal += Array[i];
  }
  let averageOfArray = arrayTotal / Array.length;
  console.log(averageOfArray);
}
arrayAverage([10,20.4,8.5,26]);

/*11.- this function takes two paramters(both arrays) and finds out which 
average is greater between the two arrays. The average of both is found
 by using for loops and an if else statement*/
const twoArrayFunction = (array1,array2) => {
  let firstTotal = 0;
  let secondTotal = 0;
  for (let i = 0; i < array1.length; i++){
    firstTotal += array1[i];
  }
  let averageOfFirst = firstTotal / array1.length;
  console.log(`This is the average of the first: ${averageOfFirst}`);
  for (let i = 0; i < array2.length; i++){
    secondTotal += array2[i];
  }
  let averageOfSecond = secondTotal / array2.length;
  console.log(`This is the average of the second: ${averageOfSecond}`);
  if (averageOfFirst > averageOfSecond){
    return true
  }else {return false};
}
console.log( twoArrayFunction([110,160,.10,1000],[500,45,4505]));

/*12.- this function contains a boolean and number paramater and uses
an if else statement to determine whether to buy a drink or not
depending on if its hot outside and having enough money*/
const willBuyDrink = (isHotOutside,moneyInPocket) => {
  if (isHotOutside == true && moneyInPocket > 10.50){
    return true 
  } else {
    return false
  }
}
console.log(willBuyDrink(true,11));

/*13.-This function takes the user input as to whether theyre done with
homework or studying. If theyre not done with either it will let them 
know it's not time to be done, and that they got more work to do*/
const isDone = (isDoneWithHomework,isDoneStudying) => {
  if (isDoneWithHomework == true && isDoneStudying == true){
    console.log(`I can take a break.. finally 😁`);
  } else if (isDoneWithHomework == true && isDoneStudying == false){
    console.log(`I'm not done yet! 😒`);
  } else if (isDoneWithHomework == false && isDoneStudying == true){
    console.log(`Still not done... 😡`)
  } else {
    console.log(`GET YOUR BUTT UP AND GET TO WORK!!! 🤬`);
  }
}
isDone(false,false);

