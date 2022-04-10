#### Comment Your JavaScript Code
There are two ways to write comments in JavaScript:
1- Using // will
2-  multi-line comment beginning with /* and ending with */
```
/* This is a
multi-line comment */
// This is an in-line comment.


```
----
#### Declare JavaScript Variables
JavaScript provides eight different data types which are:
 - undefined
 - null
 - boolean
 - string
 - msymbol
 - bigint
 - number
 - object.
 ```javascript  
var myName;
 ```
----
#### Storing Values with the Assignment Operator

```javascript
var myVar;
myVar = 5;

```
#### Assigning the Value of One Variable to Another
- you can assign the value of that variable to another variable using the assignment operator.
```
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```
----
#### Initializing Variables with the Assignment Operator
- var a = 9;
#### Understanding Uninitialized Variables
- If you do a mathematical operation on an undefined variable your result will be NaN   
- Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that 
they will not be undefined.
```
var a = 5;
var b= 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";
```
#### Understanding Case Sensitivity in Variables
- capitalization matters
- Write variable names in JavaScript in **camelCase**. In camelCase, multi-word variable names have
 the first word in lowercase and the first letter of each subsequent word is capitalized.
 ```
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```
####Add Two Numbers with JavaScript
```
var sum = 10 + 10;
myVar = 5 + 10;
(multiply)
var product = 8 * 10;
(divide)
var quotient = 66 / 33;

```
####Increment a Number with JavaScript
You can easily increment or add one to a variable with the ++ operator
```
++;
is the equivalent of

i = i + 1;
```
####Decrement a Number with JavaScript
```
var myVar = 11;
myVar = myVar - 1;

myVar --;
```
####Create Decimal Numbers with JavaScript

- store decimal numbers in variables too.
 Decimal numbers are sometimes referred to as floating point numbers or floats.
```
var ourDecimal = 5.7;

var myDecimal =5.7;
```
####Multiply Two Decimals with JavaScript
- Change the 0.0 so that product will equal 5.0.

```
var product = 2.0 * 2.5;
//Divide One Decimal by Another with JavaScript

var quotient = 4.4 / 2.0; (2.2)
```
#####Finding a Remainder in JavaScript
- operator % gives the remainder of the division of two numbers.
```var remainder= 11%3;```
-----
####Compound Assignment With Augmented Addition
- everything to the right of the equals sign is evaluated first

```
(same for Multiplication*=, /=division, substraction-=)
var myVar = 1;
myVar += 5;
console.log(myVar);

6 would be displayed in the console.

```
-----
####Declare String Variables

- your name" is called a string literal. It is a string because it is a series of zero or more characters enclosed in single or double quotes.

```
var myFirstName="Nizar"
var myLastName= "kerdanian"
```
----
####Escaping Literal Quotes in Strings

- escape a quote ,it as an end of string quote by placing a backslash (\) in front of the quote.

```
var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
- output: Alan said, "Peter is learning JavaScript".

```
####Quoting Strings with Single Quotes
- JavaScript may be written with single or double
- you start and end with the same type of quote.
- if you want to save a conversation in a string and have the conversation in quotes
- Another use for it would be saving an <a> tag with various attributes in quotes, all within a string
```
badStr = 'Finn responds, "Let's go!"';
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```
####Escape Sequences in Strings
-  reasons to use escaping characters:

2- how you to represent multiple quotes in a string
 without JavaScript misinterpreting what you mean.
 ```
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
```
```
FirstLine
    \SecondLine
ThirdLine

var myStr ="FirstLine\n\t\\SecondLine\nThirdLine"; 
```
####Concatenating Strings with the Plus Equals Operator
- The += operator to concatenate a string onto the end of an existing string variable.
- This can be very helpful to break a long string over several lines.
```
var ourStr = "I come first. ";
ourStr += "I come second.";
ourStr now has a value of the string I come first. I come second..


```
####Concatenating Strings with Plus Operator
- + operator is used with a String value, it is called the concatenation operator
- Concatenation does not add spaces between concatenated strings
[back to the exerciseask Rein]
----
####Appending Variables to Strings
 can also append variables to a string using the plus equals (+=) operator
 ```
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```
```
var someAdjective = “difficult but rewarding!”;
var myStr = "Learning to code is ";
myStr += someAdjective;
```
####Find the Length of a String
- You can find the length of a String value by writing .length after the string variable or string literal.
```
console.log("Alan Peter".length);
(The value 10 would be displayed in the console)
```
####Constructing Strings with Variables
-  to build a string, Mad Libs style. By using the concatenation operator (+),
[ General info:Mad Libs is a phrasal template word game created by Leonard Stern[1][2] and Roger Price.
[3] It consists of one player prompting others for a list of words to substitute for blanks in a story before reading aloud.
 The game is frequently played as a party game or as a pastime.]
```
var myName = "Nizar";
var myStr ="My name is "+ myName + "and I am well!";
```
----
####Find the Length of a String

```
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
```
####Use Bracket Notation ترميزto Find the First Character in a String
- They start at 0. This is referred to as Zero-based indexing.
```
var firstName = "Charles";
var firstLetter = firstName[0];
[firstLetter would have a value of the string C\.]
```
####Understand String Immutability

- In JavaScript, String values are immutable, 
- which means that they cannot be altered once created
```
ar myStr = "Bob";
myStr[0] = "J";
```
- should be like this:
```
var myStr = "Bob";
myStr = "Job";
```
####Use Bracket Notation to Find the Nth Character in a String
- use bracket notation to get the character at other positions within a string
```
var lastName = "Lovelace";

// here what they want the third letter.
var thirdLetterOfLastName = lastName[2];
```
####Use Bracket Notation to Find the Last Character in a String
- In order to get the last letter of a string, you can subtract one from the string's length
//[firstName.length - 1]
```
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length-1];
```
####Use Bracket Notation to Find the Nth-to-Last Character in a String
- we just used to retrieve the last character in a string to retrieve the Nth-to-last character.
```
var lastName = "Lovelace";
//the second in the end
var secondToLastLetterOfLastName = lastName[lastName.length -2];
```
####Word Blanks
- We can then assign the completed sentence to a variable as follows:
```
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = " my " + myNoun + " is "+ myAdjective + " and it "+ myVerb+ "  "+ myAdverb+ "."; // Change this line
```
----
####Store Multiple Values in one Variable using JavaScript Arrays
- ou start an array declaration with an opening square bracket, 
- end it with a closing square bracket,
- and put a comma between each entry
```
var myArray = ["peanut butter", 5, "bread"];
```
####Nest one Array within Another Array
- This is also called a multi-dimensional array.
- nest arrays within other arrays
```
var myArray = [["Bulls", 23], ["White Sox", 45]];
```
####Access Array Data with Indexes
- We can access the data inside arrays using indexes.
- There shouldn't be any spaces between the array name and the square brackets, like array [0].
```
var array = [50,60,70];
array[0];
var data = array[1];
```
- array[0] is now 50, and data has the value 60.
```
var myArray = [50,60,70];
var myData= myArray[0];
```
----
####Modify Array Data With Indexes
- Unlike strings, the entries of arrays are mutable and can be changed freely
```
var ourArray = [50,40,30];
ourArray[0] = 15;
ourArray now has the value [15, 40, 30].
```
- There **shouldn't** be any spaces between the array name and the square brackets, like array [0].
----
####Access Multi-Dimensional Arrays With Indexes
```
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3];
arr[3][0];
arr[3][0][1];
arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.

- here as you see the arr[3][0 (10,11,12][1 (11) and [0](10)];
```
```
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];
=8
```
---- 
####Manipulate Arrays With push()
-  to append data to the end of an array is via the push() function.
-  takes one or more parameters and "pushes" them onto the end of the array
```
var arr1 = [1,2,3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
- arr1 now has the value [1, 2, 3, 4] and 
- arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].
```
```
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])
```
----
####Manipulate Arrays With pop()
- pop() is used to pop a value off of the end of an array. 
- We can store this popped off value by assigning it to a variable. 
- In other words, .pop() removes the last element from an array and returns that element.
```
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
The first console.log will display the value 6, and the second will display the value [1, 4].
```
```
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
```
----
####Manipulate Arrays With shift()
- shift() comes in. It works just like .pop(), 
- except it removes the first element instead of the last
```
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
- ourArray would have ["J", ["cat"]].
var myArray = [["John", 23], ["dog", 3]];

var removedFromMyArray = myArray.shift();
```
####Manipulate Arrays With unshift()
- .unshift() works exactly like .push(), 
- but instead of adding the element at the end of the array, 
- unshift() adds the element at the beginning of the array.
```
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
After the shift, ourArray would have the value ["J", "cat"].
- After the unshift,
-  ourArray would have the value ["Happy", "J", "cat"].

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);
```
----
####Shopping List
```
var myList = [
  ["Chocolate Bar", 15],
  ["cola",12],
  ["cheesw", 1],
  ["butter Bar", 5],
  ["Chocolate milk", 35]
];
```
####Write Reusable JavaScript with Functions
- In JavaScript, we can divide up our code into reusable parts called functions.
- You can call or invoke this function by using its name followed by parentheses,
 like this: functionName();
```
function reusableFunction(){
  console.log("Hi World");
}
reusableFunction();
```
----- 
####Passing Values to Functions with Arguments
- Parameters are variables that act as placeholders for the values 
 that are to be input to a function when it is called
 - When a function is defined, it is typically defined along with one or more parameters.
 - The actual values that are input (or "passed") into a function when it is called are known as **arguments**
 ```
- [Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
- Call the function with two numbers as arguments.
]
function functionWithArgs(arg1, arg2) {
  console.log(arg1+arg2);
}
functionWithArgs(3,4)
```
----
####Global Scope and Functions
- scope refers to the visibility of variables.
- Variablesvar keyword are automatically created in the global scope
- This can create unintended consequences elsewhere in your code or when running a function again. 
- **You should always declare your variables with var.**
```
**var myGlobal= 10;** 

function fun1() {
  // Assign 5 to oopsGlobal Here
**oopsGlobal = 5;**
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
----
####Local Scope and Functions
- Variables which are declared within a function, as well as the function parameters, have local scope
- they are only visible within that function.
-----
####Global vs. Local Scope in Functions
- possible to have both local and global variables with the same name. 
- When you do this, the local variable takes precedence over the global variable
```
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
The function myFun will return the string Head because the local version of the variable is present.

- var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();
```
----
####Return a Value from a Function with Return
- We can pass values into a function with arguments. 
- You can use a return statement to send a value back out of a function
```
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5);
answer has the value 8.

plusThree takes an argument for num and returns a value equal to num + 3.
```
- Create a function timesFive that accepts one argument, multiplies it by 5,
 - and returns the new value.

```
function timesFive(num){
  return 5*num;
}
var answer = timesFive(10);
console.log(answer)
```
####Understanding Undefined Value returned from a Function
```
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
```
####
- everything to the right of the equal sign is resolved before the value is assigned. 
- This means we can take the return value of a function and assign it to a variable.
- ourSum = sum(5, 12);
- will call sum function, which returns a value of 17 and assigns it to ourSum variable.
```
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
```
####Stand in Line
- In Computer Science a queue is an abstract Data Structure where items are kept in order.
 - New items can be added at the back of the queue and old items are taken off from the front of the queue.
- Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
```
function nextInLine(arr, item) {
  arr.push(item);
  var removedElem= arr.shift();
  return removedElem;
  return item;  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```
####Use Conditional Logic with If Statements
- If statements are used to make decisions in code
- defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.
- When the condition evaluates to true, the program executes
- false, the statement inside the curly braces will not execute.

```
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue){
    return "Yes, that was true"
  }else{
    return "No, that was false"
  }
}
```
----
####Comparison with the Equality Operator
- The most basic operator is the equality operator ==. 
- The equality operator compares two values and returns true
- if they're equivalent or false if they are not. 
- quality is different from assignment (=)
```
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
```
####Comparison with the Strict Equality Operator
- Strict equality (===) is the counterpart to the equality operator (==). 
- unlike the equality operator, which attempts to convert both values being compared to a common type,
 - the strict equality operator does not perform a type conversion.
 - 3 ===  3
- 3 === '3' [string]
-  == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' 
- returns false because the types are different and type conversion is not performed.
- inequality operator (!=)
- The strict inequality operator (!==).
- The greater than operator (>) compares the values of two numbers
```
function testGreaterThan(val) {
  if (val>100) { 
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);
```

```
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }
  if (val<55) {  // Change this line
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);
```
- The less than or equal to operator (<=) compares the values of two numbers
```
function testLogicalAnd(val) {
  if (val) {
    if (val) {
      return "Yes";
    }
  }
  return "No";
}
testLogicalAnd(10);
```
####Comparisons with the Logical And Operator

- Sometimes you will need to test more than one thing at a time. The logical and operator (&&)
```
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```
```
function testLogicalAnd(val) {
  if (val>=25 && val <=50) {
      return "Yes";
  }
  return "No";
}

testLogicalAnd(10);
```
####Comparisons with the Logical Or Operator

- The logical or operator (||) returns true if either of the operands is true.
 Otherwise, it returns false.(one should true)
```
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
now we can do the following:
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```
```
function testLogicalOr(val) {
  // Only change code below this line

  if (val <10 || val >20) {
    return "Outside";
  }
   return "Inside";
}
testLogicalOr(15);
```
####Introducing Else Statements
- When a condition for an if statement is true
- when that condition is false :an alternate block of code can be executed.
```
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```
----
####Introducing Else If Statements
- If you have multiple conditions that need to be addressed, 
- you can chain if statements together with else if statements.


```
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  } else{

  return "Between 5 and 10";
  }
}

testElseIf(7);
```
----
####Logical Order in If Else Statements
- The function is executed from top to bottom 
- so you will want to be careful of what statement comes first.
- so how can i be sure abour the order?
```
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);
```
####Chaining If Else Statements
- Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge

(I wrote it but it didnt work)
```
function testSize(num) {
  if (num < 5){
   return "Tiny";
}
    else if (num < 10){
    return "Small";
}   else if(num < 15){
    return "Medium";
  } else if (num < 20){
    return "Large";
   }else (num >= 20){ 
    return "Huge";}


  return "Change Me";
}

testSize(7);
```
----
####Golf Code
- I ran it but it give uncorrect syntax!!< 
```
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){
    return "Hole-in-one!";
  } else if (strokes == <= par- 2){
    return "Eagle";
  }else if (strokes == par - 1	){
    return "Birdie";
  } else if (strokes == par	){
    return "Par";
  } else if (strokes == par + 1	){
    return "Bogey";
  } else if (strokes == par + 2	){
    return "Double Bogey";
  } else (strokes == >= par + 3){
    return "Go Home!";
  } 


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
```
####Selecting from Many Options with Switch Statements
- A switch statement 
tests a value and can have many case statements which define various possible values.
- Statements are executed from the first matched case value until a break is encountered.
```
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

```
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
switch (val){
  case 1:
   answer = "alpha";
    break;
  case 2:"
    answer = "beta";
    break;
  case 3:"
    answer ="gamma";
    break;
  case 4:"
    answer ="delta";
    break;
}
  return answer;
}

caseInSwitch(1);
```
####Adding a Default Option in Switch Statements
- In a switch statement you may not be able to specify all possible values as case statements.
- Instead, you can add the default statement which will be executed 
- if no matching case statements are found
```
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```

```
function switchOfStuff(val) {
  var answer = "";
switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer="bird";
    break;
  case "c":
    answer= "cat";
    break;
...
  default:
    stuff;
    break;
}
  return answer;
}

switchOfStuff(1);
```
####Multiple Identical Options in Switch Statements
- If you have multiple inputs with the same output, 
- you can represent them in a switch statement like this:

```
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;


  return answer;
}

sequentialSizes(1);
```
----
####Replacing If Else Chains with Switch
- a switch statement can be easier to write than many chained if/else if statements. 
- The following:
```
f (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```
- can be replaced with:
```
switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```
the excercise doesn't work"
```
function chainToSwitch(val) {
  var answer = "";
  switch(val){
    case "bob":
     answer= "Marley";
     break;
    case "42":
     answer= "The Answer";
     break;
    case "99":
     answer= "Missed me by this much!";
     break;
    case "7":
     answer= "Ate Nine";
     break;
  }
  

  return answer;
}

chainToSwitch(7);
```
####Returning Boolean Values from Functions
- Sometimes people use an if/else statement to do a comparison, like this:
```
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```
- better way to do this. Since === returns true or false, 
- we can return the result of the comparison:
```
function isEqual(a,b) {
  return a === b;
}
```


```
function isLess(a, b) {
  // Only change code below this line
return (a < b);  // Only change code above this line
}

isLess(10, 15);
```
####Return Early Pattern for Functions
- return statement is reached,
- the execution of the current function stops and control returns to the calling location.
```
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```
excercise:
```
function abTest(a, b) {
  // Only change code below this line
  if (a<0 | b<0){
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);
```
####Counting Cards
- 
```
var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
     count ++;
     break;
    case 7:
    case 8:
    case 9:
     break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
     count --;
     break;
  }


  if (count > 0){
    return count +" Bet"
  }else {
    return count + " Hold"
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
```
####Build JavaScript Objects
- Objects are similar to arrays
- except that instead of using indexes to access and modify their data,
you access the data in objects through what are called *properties*.
-Objects are useful for storing data in a structured way,
 and can represent real world objects, like a cat.
```
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```
- Make an object that represents a dog called myDog which contains the properties name
 (a string), legs, tails and friends.


```
var myDog = {
       "name":"puddles",
   "legs": 4,
   "tails": 1,
   "friends":[]

};
```
####Accessing Object Properties with Dot Notation
- There are two ways to access the properties of an object: dot notation (.) ,
and bracket notation ([]), similar to an array.

- Dot notation is what you use when you know the name of the property you're trying to access
 ahead of time.

```
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1;
var prop2val = myObj.prop2;
```
```
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line
```
----
####Accessing Object Properties with Bracket Notation
-if the property of the object you are trying to access has a space in its name,
 you will need to use bracket notation.
 ```
r myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"]
```
```
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line
```
####Accessing Object Properties with Variables
- Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
- This can be very useful for iterating through an object's properties or when accessing a lookup table.
```
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);
```
-(he string Doberman would be displayed in the console)
- e do not use quotes around the variable name when using it to access the property 
because we are using the value of the variable, not the name
```
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber =16;       // Change this line
var player = testObj[playerNumber]; 
```
####Updating Object Properties
- you can update its properties at any time just like you would update any other variable
```
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
- Since he's a particularly happy dog, let's change his name to the string Happy Camper.
 Here's  we update his object's
 - name property: 
 - ourDog.name = "Happy Camper";
 - or ourDog["name"] = "Happy Camper";
 - Now when we evaluate ourDog.name,
 - instead of getting Camper, we'll get his new name, Happy Camper.
 ```
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name ="Happy Coder"
```
----
####Add New Properties to a JavaScript Object
- You can add new properties to existing JavaScript objects 
the same way you would modify them.
- ourDog.bark = "bow-wow";
- or ourDog["bark"] = "bow-wow";
```
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```
####Delete Properties from a JavaScript Object
- We can also delete properties from objects like this:

delete ourDog.bark
```
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```
----
####

```

  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
```
####Using Objects for Lookups
- Objects can be thought of as a key/value storage, like a dictionary.
- If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain.
- This is most useful when you know that your input data is limited to a certain range.

----
-Convert the switch statement into an object called lookup.
- Use it to look up val and assign the associated string to the result variable.
```
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta" :"Denver",
    "echo" :"Easy",
    "foxtrot": "Frank",
  };
  result = lookup[val];
  return result;

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
```
----
####Testing Objects for Properties
- to check if the property of a given object exists or not.
- We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name.
- hasOwnProperty() returns true or false if the property is found or not.
```
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```
- The first hasOwnProperty returns true, while the second returns false.
- Modify the function checkObj to test if an object passed to the function (obj)
 contains a specific property (checkProp). If the property is found,
 return that property's value. If not, return "Not Found".

 ```
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  } else{
    return "Not Found";
  }
}
  // Only change code above this line
}
```
----
####Manipulating Complex Objects
- A JavaScript object is one way to handle flexible data. 
- They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

```
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "omar diab",
    "title": "yetalmo",
    "release_year": 2019,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    
  }
];
```
---- 
####Accessing Nested Objects
- The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
```
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
```
- ourStorage.cabinet["top drawer"].folder2 would be the string secrets,
- and ourStorage.desk.drawer would be the string stapler.
```
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
```
----
####Accessing Nested Arrays
- Similar to accessing nested objects, array bracket notation can be chained 
- to access nested arrays.
```
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

```
- (ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1] would be the string Fluffy, 
- and ourPets[1].names[0] would be the string Spot.
)
```
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];
```
----
####
- 
```
// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  
}
if (prop != "tracks" && value 
!=""){
  collection[id][prop]=value;
}else if (prop== "tracks" && !collection[id].hasOwnProerty("tracks")){
  var tracks =[];
  tracks.push(value);
}else if (prop ="tracks" && value !=""){
  collection[id][prop].push(value);
}else {
  delete collection[id][prop];
}
return collection;


updateRecords(recordCollection, 5439, "tracks", "test");
console.log(collection);
```
[it doesnt work]

```
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

```
```
another solution:
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
```
####Iterate with JavaScript While Loops
- You can run the same code multiple times by using a loop.

The first type of loop is called a while loop
-because it runs while a specified condition is true and stops once that condition is no longer true.
```
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
```
- Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

```
var myArray = [];
var i=5;
while(i>=0){
  myArray.push(i);
  i--;
}
// Only change code below this line

```
##Iterate with JavaScript For Loops
- can run the same code multiple times by using a loop.
- st common type of JavaScript loop is called a for loop 
because it runs for a specific number of times.
- For loops are declared with three optional expressions separated by semicolons
- for (a; b; c), where a is the intialization statement, b is the condition statement, and c is the final expression.
- The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

- The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, 
the loop will stop executing. This means if the condition starts as false, your loop will never execute.

- The final expression is executed at the end of each loop iteration, 
prior to the next condition check and is usually used to increment or decrement your loop counter.
```
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
ourArray will now have the value [0,1,2,3,4].

```
- Use a for loop to push the values 1 through 5 onto myArray.
```
var myArray = [];
for (var i=1; i<6;i++ ){
  myArray.push(i);
}
```
----
###Iterate Odd Numbers With a For Loop
- For loops don't have to iterate one at a time. By changing our final-expression, we can count by even numbers.
- We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.
```
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```
- ourArray will now contain [0,2,4,6,8].
- Push the odd numbers from 1 through 9 to myArray using a for loop.
```
var myArray = [];
for (var i=1; i<10; i+=2){
  myArray.push(i);
}
```
####Count Backwards With a For Loop
- A for loop can also count backwards, so long as we can define the right conditions.
- In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.
- start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.
```
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```
- Push the odd numbers from 9 through 1 to myArray using a for loop.
```
var myArray = [];
for (var i = 9; i > 0; i -= 2){
  myArray.push(i);
}
```
----
####Iterate Through an Array with a For Loop
- This code will output each element of the array arr to the console
-[arr.length]
- arrays have zero-based indexing, 
which means the last index of the array is length - 1
```
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```
- Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. 
- In this case the last iteration is i === 4 i.e. 
 - when i becomes equal to arr.length - 1 and outputs 6 to the console.
 - Then i increases to 5, and the loop terminates because i < arr.length is false.

- Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

```
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total =0
for (var i=0 ; i< myArr.length; i++){
  total +=myArr[i];
}
```
----
####Nesting For Loops
- multi-dimensional array, can use the same logic 
as the prior waypoint to loop through both the array and any sub-arrays.
```
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```
- excercise:
_ Modify function multiplyAll so that it returns the product of all the numbers in 
the sub-arrays of arr.


```
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
for (var i=0; i<arr.length;i++){
  for (var j=0; j<arr[i].length;j++){
    product*=arr.[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
```
or
```
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
```
----
####Iterate with JavaScript Do...While Loops
- do...while loop. It is called a do...while loop because :
it will first do one pass of the code inside the loop no matter what,
 and then continue to run the loop while the specified condition evaluates to true.
_ excercise:
Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.


```
var myArray = [];
var i = 10;

// Only change code below this line
do{
  myArray.push(i);
  i++;

}while (i < 5);
```
{Need more explanation}
----
####Replace Loops using Recursion
- Recursion is the concept that a function can be expressed in terms of itself
```
function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }

```
or
- notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1].
 That means it  can rewrite multiply in terms of itself and never need to use a loop.
```
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

```
excercise:
- Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.


```
function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

```
####Profile Lookup
- 


###Grid Layout
The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.









