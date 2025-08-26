// // /*================Conditional====================*/
// var bb=prompt("born year ?");
// var current = new Date().getFullYear -bb ;
// if (current >=60){ console.log( old) if

// }

// /*======================================================*/

// var day =prompt("enter the day of week");
// switch (day){
//     case "saturday":
//         console.log("day is saturday");
//         break;

//      case "sunday":
//         console.log("day is sunday");
//         break;

//      case "monday":
//         console.log("day is monday");
//         break;

//       case "tuesday":
//         console.log("day is tuesday");
//         break;

//      case "wednesday":
//         console.log("day is wednesday");
//         break;

//      case "friday":
//         console.log("day is friday holiday");

//         default :
//         console.log("valide input");

// }

// /*=============================tenery operater===================*/
// var x =50;
// var y =x<60 ? "less than 60": "old than 60";
// console.log(y);

// /*=================================================================*/

// // fasle value >>>   false   0   null    nan   " "   undefined ;

// /*=======================================================================*/

/*=======================loops============================*/

// for (var i =0 ; i <= 100 ;i++){
//     if(!i%2) {
//         console.log("is even");

//     }

// };
/*===================================================================*/

// var btn = document.getElementById("vv");

// btn.addEventListener("click", function () {
//   var randomNum = Math.floor(Math.random() * 50) + 1;
//   alert("الرقم العشوائي: " + randomNum);
// });

/*===================================================================*/

// var secretNumber = Math.floor(Math.random() * 50) + 1;
// var attempts = 0;
// var guess;

//   while (guess !== secretNumber) {
//     guess = parseInt(prompt("خمن الرقم بين 1 و 50:"));
//     attempts++;

//     if (guess < secretNumber) {
//       alert("الرقم أكبر من " + guess);
//     } else if (guess > secretNumber) {
//       alert("الرقم أصغر من " + guess);
//     } else if (guess === secretNumber) {
//       alert("مبروك! لقد خمنت الرقم الصحيح " + secretNumber + " في " + attempts + " محاولات.");
//     } else {
//       alert("الرجاء إدخال رقم صالح.");
//     }
   
// };


//Create an array of 10 numbers (it can include both positive and negative values).
// var numbers = [10, -5, 3, -8, 15, -2, 7, -1, 20, -10];
// //Use a for loop to iterate through the array and calculate the sum of all positive numbers.
// var sumPositive = 0;   
// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     sumPositive += numbers[i];
//   }
//   console.log(sumPositive);
  
// }

// //Use continue to skip any negative values during the iteration.
// console.log("Total sum of positive numbers: " + sumPositive);   
// document.getElementById("=show").innerHTML=sumPositive;

// //a. The sum of positive numbers. 

// //b. The sum of all numbers in the array (including both positive and negative)
/*===================================================================*/

