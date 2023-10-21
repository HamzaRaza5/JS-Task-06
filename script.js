//? <---------- FUNCTIONS  ---------->

//! QUESTION NO 01

// function displayDateAndTime() {
//   var date = new Date();
//   console.log(date);
// }
// displayDateAndTime();

//! QUESTION NO 02

// function greetUser() {
//   var userFirstName = prompt("Enter your First Name");
//   var userLastName = prompt("Enter your Last Name");

//   var fullName = userFirstName.toString() + " " + userLastName.toString();
//   alert(fullName);
// }

// greetUser();

//! QUESTION NO 03

// function sum() {
//   var num1 = +prompt("Enter First Number");
//   var num2 = +prompt("Enter Second Number");

//   var result = num1 + num2;

//   console.log("The Sum of First and Second Number is: " + result);
// }

// sum();

//! QUESTION NO 04

// function calculator(num1, num2, operator) {
//   var result;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;

//     case "-":
//       result = num1 - num2;
//       break;

//     case "*":
//       result = num1 * num2;
//       break;

//     case "/":
//       if (num2 === 0) {
//         result = "cannot divide by zero";
//       } else {
//         result = num1 / num2;
//       }
//       break;
//     default:
//       result = "Invalid Operator";
//   }

//   document.write(num1 + " " + operator + " " + num2 + " = " + result + "<br>");
// }
// calculator(4, 6, "+");
// calculator(12, 5, "-");
// calculator(3, 5, "*");
// calculator(16, 0, "/");
// calculator(14, 7, "/");

//! QUESTION NO 05

// function square(number) {
//   return number * number;
// }

// var result = square(8);
// console.log(result);

//! QUESTION NO 06

// function factorial(number) {
//   if (number > 1) {
//     return number * factorial(number - 1);
//   }
//   return 1;
// }

// console.log(factorial(5));

//! QUESTION NO 07

// function counting(start, end) {
//   if (start <= end) {
//     for (var i = start; i <= end; i++) {
//       document.write(i + "<br>");
//     }
//   } else {
//     document.write(
//       "Start number must be less than or equal to the end number."
//     );
//   }
// }

// counting(1, 10);

//! QUESTION NO 08

// function calculateHypotenuse(base, perpendicular) {
//   function square(number) {
//     return number * number;
//   }
//   if (base >= 0 && perpendicular >= 0) {
//     var baseSquare = square(base);
//     var perpendicularSquare = square(perpendicular);
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
//     return hypotenuse;
//   } else {
//     return "Base and perpendicular must be non-negative values.";
//   }
// }
// var result = calculateHypotenuse(3, 4);
// console.log(result);

//! QUESTION NO 09

//? i. Arguments as value

// function areaByValue(width, height) {
//   return width * height;
// }
// var rectangleAreaByValue = areaByValue(5, 8);
// console.log(rectangleAreaByValue);

//? ii. Arguments as variables

// function areaByVariables() {
//   var width = arguments[0];
//   var height = arguments[1];
//   return width * height;
// }

// var width = 4;
// var height = 8;
// var rectangleAreaByVariable = areaByVariables(width, height);
// console.log(rectangleAreaByVariable);

//! QUESTION NO 10

// function isPalindrome(str) {
//   str = str.replace(/[A-Za-z0-9]/g + "").toLowerCase();
//   return str === str.split("").reverse().join("");
// }

// var testStr1 = "madam";
// var testStr2 = "hamza";
// console.log("is " + testStr1 + " a Palindrome? " + isPalindrome(testStr1));
// console.log("is " + testStr2 + " a Palindrome? " + isPalindrome(testStr2));

//! QUESTION NO 11

// function capitalizeWords(str) {
//   var words = str.split(" ");

//   var capitalizeWords = words.map(function (word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });

//   return capitalizeWords.join(" ");
// }

// var inputString = "my name is hamza raza";
// var outputString = capitalizeWords(inputString);
// console.log(inputString);
// console.log(outputString);

//! QUESTION NO 12

// function findLongestWord(str) {
//   var words = str.split(" ");

//   var longestWord = " ";
//   var longestLength = 0;

//   for (var word of words) {
//     if (word.length > longestLength) {
//       longestWord = word;
//       longestLength = word.length;
//     }
//   }
//   return longestWord;
// }

// var inputString = "Web Development Course";
// var outputString = findLongestWord(inputString);
// console.log(inputString);
// console.log("The Longest Word is: " + outputString);

//! QUESTION NO 13

// function countOccurrences(str, letter) {
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// var inputString = "JSResources.com";
// var targetLetter = "S";
// var outputString = countOccurrences(inputString, targetLetter);

// console.log(inputString);
// console.log(
//   "The Letter " +
//     targetLetter +
//     " appears " +
//     outputString +
//     " times in the String."
// );

//! QUESTION NO 14

// function calcCircumference(radius) {
//   var circumference = 2 * Math.PI * radius;
//   console.log("The Circumference is: " + circumference);
// }

// function calcArea(radius) {
//   var area = Math.PI * radius * radius;
//   console.log("The Area is: " + area);
// }

// var radius = 5;

// calcCircumference(radius);
// calcArea(radius);

//? <---------- CALCULATOR  ---------->

let num1 = +prompt("Enter First Number");
if (isNaN(num1)) {
  alert("Error! Please Enter a Valid Number for the First Input.");
} else {
  let operator = prompt("Enter any operator (+, -, *, /).");
  if (
    operator !== "+" &&
    operator !== "-" &&
    operator !== "*" &&
    operator !== "/"
  ) {
    alert("Error! Please Enter a Valid Operator. (+, -, *, /)");
  } else {
    let num2 = +prompt("Enter Second Number");
    if (isNaN(num2)) {
      alert("Error! Please Enter a Valid Number for the Second Input.");
    } else {
      let result;

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;

        case "-":
          result = num1 - num2;
          break;

        case "*":
          result = num1 * num2;
          break;

        case "/":
          if (num2 === 0) {
            result = "cannot divide by zero";
          } else {
            result = num1 / num2;
          }
          break;
        default:
          result = "Invalid Operator";
      }

      document.write(
        num1 + " " + operator + " " + num2 + " = " + result + "<br>"
      );
    }
  }
}
