/*Find the number of elements in an array Y that are greater than or equal to the variable X and less than or equal to the variable Z .
For example…
noOfElements(Y, X, Z)
noOfElements([2, 3, 0, 1, 7], 4, 8) to return 1
noOfElements([3 ,3 ,3, 5, 18, 6, 20], 15, 30) to return  2
noOfElements([4, 6, 2, 6, 7, 7], 0, 7) to return 6 */

function noOfElements(Y, X, Z){
    let count = 0;
    for(let i=0; i<Y.length; i++){
        if (Y[i]>=X && Y[i]<=Z){
            count++;
        }
    }
        return count;
}
console.log(noOfElements([2, 3, 0, 1, 7], 4, 8));
console.log(noOfElements([3 ,3 ,3, 5, 18, 6, 20], 15, 30));
console.log(noOfElements([4, 6, 2, 6, 7, 7], 0, 7));

/*Find the number of the elements in array A that are divisible by 2 and greater than 15.
For example…
divisible(A)
divisible([2,3,12,18,42,24]) to return 3
divisible([100,84,37]) to return 2
divisible([5,8,6,12]) to return 0
 */

function divisible(A) {
    let count = 0;
    for(let i=0; i<A.length; i++){
        if(A[i]%2==0 && A[i]>15) {
            count++;
        }
    }
    return count;
}
console.log(divisible([2,3,12,18,42,24]));
console.log(divisible([100,84,37]));
console.log(divisible([5,8,6,12]));

/*Extract all the values of an array that are divisible by n

For example;
isDivisbleByN(arr, n)
isDivisbleByN([1, 3, 5, 6, 3, 6, 7, 4], 2) to return [4, 6]
isDivisbleByN([21, 3, 5, 6, 3, 6, 7, 4], 7) to return [21, 7]
 */

function isDivisibleByN(arr, n) {
    let x = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%n==0){
            x.push(arr[i]);
        }
    }
    return x;
}
console.log(isDivisibleByN([1, 3, 5, 6, 3, 6, 7, 4], 2));
console.log(isDivisibleByN([21, 3, 5, 6, 3, 6, 7, 4], 7));

/*Given two arrays, return the sum of the array with the highest value when its elements are summed.

For example:
highestSum(X, Y)
highestSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]) => 20
highestSum([ 15, 7], [12, 17]) => 29
highestSum([30], [3, 6, 2, 6]) => 30
 */

function highestSum(X, Y){
    let sumX = 0;
    let sumY = 0;
    for (let i=0; i<X.length; i++){
        sumX += X[i];} 
    for (let i=0; i<Y.length; i++){
        sumY += Y[i];}  
        if (sumX > sumY){
   return sumX;}
   else{return sumY;
   }
}
console.log(highestSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]));
console.log(highestSum([ 15, 7], [12, 17]));
console.log(highestSum([30], [3, 6, 2, 60]));

/**Replace all numbers in an array, X divisible by an integer, Y with string “isDivisible”

For Example:
replaceDivisible(X, Y)
replaceDivisible([2, 4, 3, 6, 5], 3) => [2, 4, “isDivisible”, “isDivisible”, 5]
replaceDivisible([12, 4, 3, 6, 5], 2) => [“isDivisible”, “isDivisible”, 3, “isDivisible”, 5]
 */

function replaceDivisible(X, Y){
    let x = [];
    for(i=0; i<X.length; i++){
        if (X[i]%Y==0) 
            {X[i]= "isDivisible"}
            x.push(X[i])
    }
            return x;
    }
console.log(replaceDivisible([2, 4, 3, 6, 5], 3));
console.log(replaceDivisible([12, 4, 3, 6, 5], 2));

/*Find the number of elements in an array Y, that are greater than to the variable X and less than to the variable Z .

For example…
noOfElements(Y, X, Z)
noOfElements([2, 3, 0, 1,7, 7, 8], 4, 8) to return 2
noOfElements([3 ,30, 2, 7], 15, 30) to return  0 */

function noOfElements(Y, X, Z) {
    let count = 0;
    for(let i=0; i<Y.length; i++){
        if (Y[i]>X && Y[i]<Z){
            count++;
        }
    }
    return count;
}
console.log(noOfElements([2, 3, 0, 1,7, 7, 8], 4, 8));
console.log(noOfElements([3 ,30, 2, 7], 15, 30));

//MY LAB 2//
/*Write a function that takes in an array and returns the sum of all the numbers divisible by 2 and 3 in the array.
Examples

sum([2, 5, 7, 3]) returns 0 
sum([12, 5, 6, 3]) returns 18 
sum([6]) returns 6
sum([2, 12, 18]) returns 30 */

function sum(X){
    let sum=0;
 for(let i=0; i<X.length; i++){
    if (X[i]%2==0 && X[i]%3==0){
        sum += X[i];
    }
 }
 return sum;
}
console.log(sum([2, 5, 7, 3]));
console.log(sum([12, 5, 6, 3]));
console.log(sum([6]));
console.log(sum([2, 12, 18]));

/**Question 2 (Difficulty: 3 /10)
Write a function that takes in an array and returns all the numbers that are not divisible by 5.
Examples
divisible([3, 5, 15]) returns [3]
divisible([23, 12]) returns [23, 12 ]
divisible([3, 25]) returns [3]
 */

function divisible(A) {
    let x = [];
    for(let i=0; i<A.length; i++){
        if(A[i]%5!==0){
            x.push(A[i]);
        }
    }
    return x;
}
console.log(divisible([3, 5, 15]));
console.log(divisible([23, 12]));
console.log(divisible([3, 25]));

/**Write a function that takes in an array and returns the count of each unique element in the array.
Examples
unique([“java”, “kotlin”, “java”,  “java”, “swift“]) returns { “java”: 3, “kotlin”: 1, “swift”: 1 }
unique([“developer”, “software”, “engineer”,  “software”]) returns { “software”: 2, “engineer”: 1, “developer”: 1 }
unique([“dog”, “cat”, “sheep”,  “cat”, “sheep“]) returns { “dog”: 1, “cat”: 2, “sheep”: 2 }
 */

function unique(A){
    let x = {};
    for(i=0; i<A.length; i++){
    if (x.hasOwnProperty(A[i])){
        x[A[i]] = 1 + x[A[i]];
    }else{
        x[A[i]] = 1;
    }
    }
    return x;
}

console.log(unique(["developer", "software", "engineer",  "software"]));
console.log(unique(["java", "kotlin", "java", "java", "swift"]));
console.log(unique(["dog","cat","sheep","cat","sheep"]));

/**Write a function that takes in two arrays of numbers and returns the length of the array with the highest sum of its elements.
Examples
lengthy([3, 5, 1, 7, 9], [11, 31]) returns 2
lengthy([13, 11, 3, 1], [4, 9, 1]) returns 4
lengthy([20], [1, 18]) returns 1
 */

function lengthy(A,B){
    let sumA = 0;
    let sumB = 0;
    for(let i=0; i<A.length; i++){
        sumA = sumA + A[i]}
    for(let i=0; i<B.length; i++){
        sumB = sumB + B[i]}
        if (sumA>sumB){
            return A.length;
    } else{
        return B.length;
    }
}
console.log(lengthy([3, 5, 1, 7, 9], [11, 31]));
console.log(lengthy([13, 11, 3, 1], [4, 9, 1]));
console.log(lengthy([20], [1, 18]));

/**Write a function that takes in an array of strings and returns the number of strings whose length is greater than 3 but less than or equal to 7.
Examples
range([“java”, “kotlin”, “javascript”, “php”, “spring”, “closure” ]) returns  4
range([“os”, “jenkins”, “circleci”, “travis”, “git”, “closure” ]) returns  3
range([“springboot”, “servlets”]) returns  0
 */
function range(A){
    let count=0;
    for(let i=0; i<A.length; i++){
        if(A[i].length>3 && A[i].length<=7){
            count++;
        }
    }
    return count;
}
console.log(range(["java", "kotlin", "javascript", "php", "spring", "closure"]));
console.log(range(["os", "jenkins", "circleci", "travis","git", "closure" ]));
console.log(range(["springboot", "servlets"]));


/* Write a function takes in an array of numbers and returns the numbers that are multiple of 2 or 5.
Examples
multiples([2, 11, 45]) returns [2, 45]
multiples([3, 155, 5, 18]) returns [155, 5, 18]
multiples([3, 7]) returns [ ] */

function multiples(A){
    let x=[];
    for(let i=0; i< A.length; i++){
        if(A[i]%2==0 || A[i]%5==0){
            x.push(A[i]);
        }
    }
    return x;
}
console.log(multiples([2, 11, 45]));
console.log(multiples([3, 155, 5, 18]));
console.log(multiples([3, 7]));

// Find the elements in an array Y, that are equal to a given variable X.   v   
// For example…
// elementsEqualToX(Y, X)
// elementsEqualToX(['a' ,'a' ,'b' ,'f' ,'x' ,'y'], 'a') to return ['a', 'a']
// elementsEqualToX(['t' ,'3' ,3 ,3, '5', 'v'], 3) to return  [3, 3]
// elementsEqualToX([4, 6, 2, 6, 7, '7'], '7') to return ['7']

function elementsEqualToX(Y, X) {
    let x = [];
    for (let i=0; i<Y.length; i++){
        if (Y[i]=== X){
            x.push(Y[i]);
        }
    }
    return x;
}
console.log(elementsEqualToX(['a' ,'a' ,'b' ,'f' ,'x' ,'y'], 'a'));
console.log(elementsEqualToX(['t' ,'3' ,3 ,3, '5', 'v'], 3));
console.log(elementsEqualToX([4, 6, 2, 6, 7, '7'], '7'));

// Find the length of the numbers in array A that are divisible by 2 or 3 and greater than 15.
// For example…
// divisible(A)
// divisible([2,3,12,18,42,24]) to return 3
// divisible([100,84,22,37]) to return 1
// divisible([5,8,6,12]) to return 0

function divisible(A){
    let count = 0;
    for (i=0;i<A.length; i++){
        if((A[i]%2== 0 || A[i]%3== 0) && A[i] > 15 ){
            count++
        }
    }
    return count;
}

console.log(divisible([2,3,12,18,42,24]));
console.log(divisible([100,84,22,37]));
console.log(divisible([5,8,6,12]));

// Find the total age of the applicants that applied for this interview from the given record below.
// For example…

// totalAge([{ name: "XYZ", age: 23 }, { name: "ABC", age: 40 }]) to return 63
// totalAge([{ name: "XYZ", age: 34 }, { name: "XYZ", age: 29 }, { name: "XYZ", age: 33 }]) to return 96
// totalAge([{ name: "XYZ", age: 66 }, { name: "WER", age: 44 },  { name: "AZX", age: 22 }]) to return 132

function totalAge(A){
    let sum = 0;
    for(let i=0; i<A.length; i++){
         sum = sum + A[i].age;
    }
    return sum;
}
console.log(totalAge([{ name: "XYZ", age: 23 }, { name: "ABC", age: 40 }]));
console.log(totalAge([{ name: "XYZ", age: 34 }, { name: "XYZ", age: 29 }, { name: "XYZ", age: 33 }]));
console.log(totalAge([{ name: "XYZ", age: 66 }, { name: "WER", age: 44 },  { name: "AZX", age: 22 }]));

// Given an array of objects containing user’s information, assign a default age X for any user that did not enter his/her age and return the array.

// checkAge([{ name: "XYZ", age: 23 }, { name: "ABC"}], 33) to return ([{ name: "XYZ", age: 23 }, { name: "ABC", age: 33}]

// checkAge([{ name: "XYZ" }, { name: "ASD" }, { name: "CVB", age: 33 }], 55) to return ([{ name: "XYZ", age: 55 }, { name: "ASD", age: 55 }, { name: "CVB", age: 33 }])

function checkAge(A,Y){
    for (let i=0; i<A.length; i++){
if (A[i].hasOwnProperty("age")){
    A[i].age = A[i].age
}else{
    A[i].age = Y
}
    }
    return A;
}
console.log(checkAge([{ name: "XYZ", age: 23 }, { name: "ABC"}], 33));
console.log(checkAge([{ name: "XYZ" }, { name: "ASD" }, { name: "CVB", age: 33 }], 55));

// Find the sum of all the ages in an array of objects
// For example;
// [
//         	{name: ‘Uche Egbo’, age: 24, occupation: ‘Trader’},
//         	{name: ‘Solomon Ogbodo’, age: 30, occupation: ‘Accountant’}
// ]
 
// to return 54.

function sumAges(A){
    let sum = 0;
    for (let i=0; i<A.length; i++){
        sum = sum + A[i].age
    }
    return sum;
}
console.log(sumAges([
    {name: 'Uche Egbo', age: 24, occupation: 'Trader'},
    {name: 'Solomon Ogbodo', age: 30, occupation: 'Accountant'}
]));

// Find all the numbers in a string and sum them up
// For Example;
// expect(‘1weudh56jdnbfskjn788sdhkfbs90’) to return (935)

function sumInt(A){
    let sum = 0;
    let digit = "";
    for (let i=0; i<A.length; i++){
        if(!(isNaN(A[i]))){
            digit = digit + A[i];
            console.log("digit is now " + digit)
        }
        else if (digit.length>0){
            console.log(typeof(digit))
            sum=sum + parseInt(digit)
            digit = "";

            console.log("our sum is " + sum)
            console.log(A[i])
        }
    }
        if (digit.length>0){
            sum=sum + parseInt(digit)
            // digit = "";
        }
    return sum;
}

console.log(sumInt(("1weudh56jdnbfskjn788sdhkfbs90")));


// Return all the unique values in an array as another array in a sorted order.
// For example;
// uniques([2,4,5,4,3,2,5,6,6,7,7,9,1,2,3,5]) will return [1,2,3,4,5,6,7,9];

function uniques(A){
    let x = [];
    for(let i=0; i<=9; i++){
        if ( A.includes(i)){
            x.push(i);
        }
    }
    return x;
}

console.log(uniques([2,4,5,4,3,2,5,6,6,7,7,9,1,2,3,5]))

// Return True or False if a word is a Palindrome 
// Hint: a palindrome is a word that can be spelt backwards and looks the same.
// Not case sensitive

// For example;
// isPalindrome(‘madam’) to return true
// isPalindrome(‘decagon’) to return false

function isPalindrome(A){
    let B = "";
    for (let i=A.length-1; i>=0; i--){
        B += A[i];
    }
       if (A===B){
            return true;
        }else{
            return false;
        }
}
    console.log(isPalindrome('madam'));
    console.log(isPalindrome('decagon'));
// Extract all the values of an array that are divisible by n

// For example;
// isDivisbleByN([1,3,5,6,3,6,7,4], 2) to return [4, 6]

function isDivisbleByN(A, N){
    let x = [];
    for (let i=0; i<A.length; i++){
        if (A[i]%N==0 && (!(x.includes(A[i])))){
            x.unshift(A[i]);
        }
        // if (x.includes(A[i])){
        //     continue;
        // }
    }
    return x;
}

console.log(isDivisbleByN([1,3,5,6,3,6,7,4], 2));

// You are given an array of player objects for a competition of several games.
// let register = [
// 	{name: 'Tolu', age: 54, game: 'Chess'},
// 	{name: 'Ikenna', age: 19, game:'Catch'},
// 	{name: 'Adammu', age: 78, game:'FuzzBuzz'},
// {name: 'David', age: 23, game:'Chess'}
// ]

// Write a function that:
// Extract all the names of the players from the given array of user objects and return an array of names
// For example;
// playerNames(register) to return [‘Tolu’, ‘Ikenna’,’Adammu’,’David’]

function playerNames(register){ 
    let x = [];
    for (let i=0; i<register.length; i++){
        x.push(register[i].name);
    }
    return x;
}

console.log(playerNames([
	{name: 'Tolu', age: 54, game: 'Chess'},
	{name: 'Ikenna', age: 19, game:'Catch'},
	{name: 'Adammu', age: 78, game:'FuzzBuzz'},
{name: 'David', age: 23, game:'Chess'}
]));

// You are given an array of player objects for a competition of several games.
// let register = [
// 	{name: 'Tolu', age: 54, game: 'Chess'},
// 	{name: 'Ikenna', age: 19, game:'Catch'},
// 	{name: 'Adammu', age: 78, game:'FuzzBuzz'},
// {name: 'David', age: 23, game:'Chess'}
// ]

// Write a function that:
// Return only names of players of a particular game
// Note: inputs are not case sensitive

// For example:
// playerNames(register, ‘Chess’) to return [‘Tolu’, ‘David’]
// playerNames(register, ‘chess’) to return [‘Tolu’, ‘David’]

function playerNames(register, A){ 
    let x = [];
    for (let i=0; i<register.length; i++){
        if (register[i].game == A)
        x.push(register[i].name);
    }
    return x;
}

console.log(playerNames([
	{name: 'Tolu', age: 54, game: 'Chess'},
	{name: 'Ikenna', age: 19, game:'Catch'},
	{name: 'Adammu', age: 78, game:'FuzzBuzz'},
{name: 'David', age: 23, game:'Chess'}
], 'Chess'));

// You are given a string of numbers and characters separated by commas (,).
// For example: ‘2,g,65,e,3,7,5,g,3’
// Find the total sum of the numbers in the given string

// For example:
// sumNumbers(‘2,g,65,e,3,7,5,g,3’) => 85

function sumNumbers(A){
    let sum = 0;
    let digit = ""
    for (let i=0;i<A.length; i++){
        if (!(isNaN(A[i]))){
            digit += A[i];
            console.log("digit is now" +  digit)
        }
        else if(digit.length>0){
            sum=sum + parseInt(digit)
            digit = "";
            console.log("sum is now"  +  sum);
            console.log(typeof(sum));
        }
    }
    if(digit.length > 0){
        sum += parseInt(digit);
    }
     return sum;
}
console.log(sumNumbers("2,g,65,e,3,7,5,g,3"))

// Given two arrays, return the sum of all positive non-zero results when arr1[i] is subtracted from arr2[i].
// For example:
// totalPositiveSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]) => 11
// Explanation: 
// 2 - 2 = 0
// 5 - 3 = 2
// 1 - 5 = -4
// 0 - 6 = -6
// 5 - 2 = 3
// 7 - 1 = 6

// Sum   =  2 + 3 + 6 = 11

function totalPositiveSum(A, B){
    let sum = 0;
    let x = [];
    for (let i=0; i<A.length; i++){
        let y = A[i]-B[i];
        if (y>0){
            x.push(y);
        }
    }
    for (i=0; i<x.length; i++){
        sum=sum+x[i];
    }
    return sum;
}

console.log(totalPositiveSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]));

// return true if an array contains duplicates else false
var containsDuplicate = function(nums) {
    let x = [];
    for (i=0;i<nums.length;i++){
       if (!(x.includes(nums[i]))){
           x.push(nums[i]);
      }
    }
        if (nums.length!=x.length){
          return true;
      }else{
          return false;
    }
}
     console.log(containsDuplicate([1,2,3,4])) 


function noOfElements(Y,X,Z){
    let count = 0;
    for(let i=0;i<Y.length; i++){
        if (Y[i]>=X && Y[i]<=Z){
            count++;
        }
    }
    return count;
}
console.log(noOfElements([2,3,0,1,7],4,8))


function reverseArr(A){
    for (i=0;i<A.length;i++){
        let B = A.reverse();
        return B;
    }
}
console.log(reverseArr(["Uncle","Papi","Ancestor"]));













