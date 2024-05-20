// alert("Hello World")
// window.alert("Hello World")
// var a='Lorem ipsum dolor sit amet consectetur adipisicing elit'
// alert(a)

// var a='Abeer Iqbal'
// var a='Abeer'
// alert(a)

// var b = 'ABC'
// b = 123
// alert(b)

// var b= 20
// console.log(b)
// b= 30
// console.log(b)

// var a = 20
// var b = a + 10
// console.log (a)

// var a = 20
// var b = 10
// var c = a + b
// alert(c)

// var a = "Abeer"
// var b = "Iqbal"
// var c = a+" "+b

// alert(c)

// var a = "Abeer"
// var b = "Iqbal"
// var c = a+" "+b
// console.log(c)

// // post increment
// var a = 10
// var b = a++ 
// console.log(b)

// // pre increment
// var a = 10
// var b = ++a 
// console.log(b)
// console.log(a)

// var a = prompt("Enter your First name")
// var b = prompt("Enter your Last name");
// console.log(a,b)



//* CLASS TASK 1*//
// var a = +prompt("Enter your total in Science")
// var b = +prompt("Enter your total in Match")
// var c = +prompt("Enter your total in Social studies")
// var d = +prompt("Enter your total in Computer ")
// var e = +prompt("Enter your total in Physics");
// console.log(a,b,c,d,e)

// var f= a+b+c+d+e
// console.log(f)


// *RULES for variable names*//
// var asd = '' //legal
// var 123 = '' //illegal
// var ab12 = "" //legal
// var 12ab = "" //illegal
// var var = "" //ilegal
// var #&*) = "" //illegal
// var ab&s = "" //illegal

//================== IF conditions if and else ===============//

// *CLASS TASK 2*//
// var a = 20
// var b = 20
// if(a == b){
//     console.log("A is equal to B you can do action")
// }else{ 
// console.log("A is not equal to B")
// }

// *if condition 1* //
// var marks = 40
// if(marks > 70){
// console.log("mithai")
// }else{ 
// console.log("dhulai")
// }

// if condition 2* //
// var marks = 80
// if(marks > 70){
// console.log("mithai")
// }else if( marks > 50){ 
// console.log("amma ne bacha lia")
// }
// else { 
//     console.log("dhulai")
//     }

// var a = 20
// if (a == 10) {
// console.log ("A is Equal")
// }

// var a = +prompt("Enter Your Math Marks")
// var b = +prompt("Enter Your Urdu Marks")
// var c = +prompt("Enter Your Computer Marks")
// var d = +prompt("Enter Your Biology Marks")
// var e = +prompt("Enter Your Pakistan Studies Marks")

// // console.log(a,b,c,d)

// var sum = (a+b+c+d+e)
// // console.log(sum)

// var total = sum / 500 * 100

// if(total > 79){
//     alert(`"Excellent! You Got ${total}% A+ Grade"`)
// }else if(total > 69){
//     alert(`"Congratulation! You Got ${total}% A Grade"`)
// }else if(total > 59){
//     alert(`"Congratulation! You Got ${total}% B Grade"`)
// }else if(total > 49){
//     alert(`"Congraulation! You Got ${total}% and C Grade"`)
// }else{
//     alert(`Sorry! You Got ${total}% and Failed"`)
// }


//================== IF conditions bolean and nested if ===============//

// var studendCard = true
// var dept = "sci"
// // // if ( studendCard == true){
// // //     if(dept == sci)
// // //     console.log("Allow")
// // // }else { console.log ("Not Allow")
// // // }

// if ( studendCard == true || dept == 'sci'){
//     console.log("Allow")
// }else { console.log ("Not Allow")
// }

// if ( studendCard == true && dept == 'sci'){
//     console.log("Allow")
// }else { console.log ("Not Allow")
// }


//================== Array ==============//

// var students = ["Abeer", "Bilal", "Ali", "Muhammmad iqbal", "Arshad"]
// // console.log(students[0])
// students[8] = "Muhammad iqbal"
// students.push("Ali")
// students.pop("Arshad")
// students.unshift('Abeer')
// students.shift('Bilal')
// var b = students.slice(1,3)
// var c = students.splice(0,1)
// students.splice(1,1, "usman")
// students.splice(1,0, "umair")
// students.splice(1,2)

// console.log(b)
// console.log(c)
// console.log(students)

// var i = students.indexof('Ali')
// console.log(i)

// var c = students.lastindexof('arshad')
// console.log(c)

// var last = students.length
// var std = students,{last-1}
// console.log(std)

//============= loop =================//

// for(var i = 0; i < 10; i++){
//     console.log("loop" + i)
// }

//if length of index not know// 
// // var a = [
// //     "Abeer",
// //     "Bilal",
// //     "Ali",
// //     "Muhammmad iqbal",
// //     "Arshad",
// //     "Ali"
// // ]
// // // var b = "Ali"
// // for (var i = 0; i < a.length; i++) {
// //     console.log(a[i])
// }
// if length of index know//
// var a = ["Abeer", "Bilal", "Ali", "Muhammmad iqbal", "Arshad"]
// for(var i = 0; i <= 4; i++){
//     console.log(a [i])
// }


//==== task perform =====////
// var a = [
//     "Abeer",
//     "Bilal",
//     "Ali",
//     "Muhammad Iqbal",
//     "Arshad",
// ];
// var b = "Ali";

// for (var i = 0; i < a.length; i++) {
//     if (a === b) {
//         console.log(a[i] === b[i] + "found at");
//     } else {
//         console.log("not found");
//     }
// }


// var a = [
//     "Abeer",
//     "Bilal",
//     "Ali",
//     "Muhammad Iqbal",
//     "Arshad",
//     "Ali"
// ];

// var b = "Ali";

// for (var i = 0; i < a.length; i++) {
//     if (a[i] === b) {
//         a.indexOf(b)
//     }
// }

// if (b===a) {
//     console.log(b + " is found in the array" + " index of " + a.indexOf(b));
// } else {
//     console.log(b + " is not found in the array");
// }

// var a = [
//     "Abeer",
//     "Bilal",
//     "Ali",
//     "Muhammad Iqbal",
//     "Arshad",
//     // "Ali"
// ];

// var b = "Ali";
// var found = false


// self doit//
// var indexOfB = -1; 

// for (var i = 0; i < a.length; i++) {
//     if (a[i] === b) {
//         indexOfB = i; 

//     }
// }

// if (indexOfB !== -1) {
//     console.log(b + " is found in the array at index " + indexOfB);
// } else {
//     console.log(b + " is not found in the array");
// }

// for (var i = 0; i < a.length; i++) {
//     if (a[i] === b) {
//        console.log("found array",i)       
//     }
// }

// for (var i = 0; i < a.length; i++) {
//     if (a[i] === b) {
//        console.log("found array",a[i])       
//     }
// }

// for (var i = 0; i < a.length; i++) {
//     if (a[i] === b) {
//         found = true; 

//     }
// }

// if (found === true) {
//     console.log(b + " is found in the array ");
// } else {
//     console.log(b + " is not found in the array");
// }

//============== bookExample ==========//

// var cities =["Karachi","Lahore","Islamabad","Peshawar","Multan"];
// var userCity = prompt("Enter your city");
// var found = false

// for (var i = 0; i < cities.length; i++)
// {
//     if (userCity === cities[i]){
//     found = true
//     break;
//     }
// }
// if (found == true){
//     alert("City found")
// }
// else{
//     alert("City not found")
// }

// ============ nested loop =========///

// var a = ["a","b","c","d","e"]
// var b = [1,2,3,4,5]
// var c = []

// for (var i=0; i< a.length; i++){
//     for (var j = 0; j < b.length; j++){
//     console.log(a[i], b[j])
//     c.push (a[i],b[j])
// }
// }

//=== practice ==//

// var a = ["a","b","c","d","e"]
// var b = [1,2,3,4,5]
// var c = a+b

// for (var i=0; i< c.length; i++){
//     console.log(c[i],i)
// }

//bookExample//
// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         console.log(firstNames[i],lastNames[j])
//         fullNames.push(firstNames[i] + lastNames[j]);

//     }
// }


// Changing case//

// var students = [
//         "Abeer",
//         "Bilal",
//         "Ali",
//         "Muhammad Iqbal",
//         "Arshad",
//     ];

//     var a = "Bilal"

//     var i =  students.indexOf(a);
//     console.log(i)

// var a = "karachi";
// var b= "KARACHI";
// b= b.toLowerCase();

// if (a===b) {
//     console.log(b)
// }

// var a = "karachi";
// var firstletter = a.slice(0,1);
// firstletter = firstletter.toUpperCase();
// var otherletters = a.slice(1);
// otherletters = otherletters.toLowerCase();

// var b = firstletter + otherletters;

// console.log(b);

//practice//
// var k = "karachi, lahore , islamabad , pindi, multan , peshawar, quetta.";
// m = k.toUpperCase();
// console.log(m);

//Word find with different methods//
//word find = consecteture //
//replace by = ABCD //
// var a = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem, perferendis illum eius odio qui nisi fuga reprehenderit laudantium ab eligendi, id fugiat ratione inventore dolore.Quos minima vero laudantium doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, perferendis illum eius odio qui nisi fuga reprehenderit laudantium ab eligendi, id fugiat ratione inventore dolore.Quos minima vero laudantium doloribus."
// var b = a.indexOf("consectetur");
// var length = a.length
// console.log(length)

// for (var i = 0; i < a.length; i++){
//     var word = a.slice(i , i+11);
//     console.log(word);
//     if (word == "consectetur"){
//         var found = "Word found"
//         console.log (found);
//     break;
//     }
// }
//self doit//
// if (b !== -1){
//     var beforeWord = a.slice(0,b)
//     var newWord = "ABCD"
//     var afterWord = a.slice(b + 28)
//     console.log(beforeWord + newWord + afterWord)

// }
//sir method if using loop change all word in para//
// for (var i = 0; i < a.length; i++){
//     var word = a.slice(i , i+11);
//     console.log(word);
//     if (word == "consectetur"){
//         var found = "Word found"
//         console.log (found);
//         var beforeWord = a.slice(0,i);
//         var newWord = "ABCD";
//         var afterWord = a.slice(i + 11);
//         var updatedPara = beforeWord + newWord + afterWord
//         console.log(updatedPara);
//     break;
//     }

// }
// in this string method only change firstone//
// var b = a.replace("consectetur","ABCD");
// console.log(b);

// in this string method change all//
// var b = a.replace(/consectetur/g,"ABCD");
// console.log(b);

//replace for all //
// var b = a.replaceAll("consectetur","ABCD");
// console.log(b);

// var a = "*";
// var b = a.repeat(10)
// // console.log(b)

// var d = "ABCD,EFGH,IJKL,MNO,QRST,UVW,XYZ"
// var e = d.split(",") // split can break all data and convert into array
// var f = e.join("t"); //its should be split before join.

// console.log(d,e,f)

// math round method for values roundof.
// var a = 1.9;
// var b = Math.round(a);
// console.log(b);

//for farawrd roundof
// var a = Math.ceil(1.9);
// console.log(a);

//for backawrd roundof
// var a = Math.floor(1.9);
// console.log(a);

//practice//
// var a = prompt("Enter Your Number") ;
// var b = Math.round(a);
// console.log(b);

//Math.random//
// var a = Math.random(); // should be 0.1111 to 0.999//
// var diceValue = Math.ceil(a * 6);
// console.log(diceValue);

// var b = Math.random()
// var toss = Math.round(b);
// console.log(toss)

//prac//
// var b = Math.random()
// var toss = Math.round(b);
// if(toss==true){
// alert("Head");
// console.log(toss)
// }
// else
// {alert("Tail")
// console.log(toss)
// }

//covert  to number//
// var a = "10.13"
// // var b = +a
// // console.log(b)
// var b = parseInt(a)
// console.log(b,typeof(b))

// var a = "10.9378900"
// var b = parseFloat(a)
// console.log(b,typeof(b))

// var b = Number("10.93")
// console.log(b,typeof(b))

// convert to string //
// var a = 10.937890;
// var b = a.toString();
// console.log(b,typeof(b))

// decimal control//
// var num = 2.544456;
// console.log(Number(num.toFixed(2)));

////
// var a = 0
// for (var i = 0; i < 10; i++){
//  a += a+3
// console.log(a+3)   
// }

// var a = 0;
// for (var i = 0; i < 10; i++){
//     a += 3; // Increment 'a' by 3 in each iteration
//     console.log(a); // Output the current value of 'a'
// }


// Math.max and min//
// var a = Math.max(1,2,3,4,30,50,200)
// var b = Math.min(1,2,3,4,30,50,200)
// console.log(a,b)

//date object//

// var currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.getDate());
// console.log(currentDate.getMonth());
// console.log(currentDate.getDay());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());
// console.log(currentDate.getTime());// java seconds since 1970 

// var currentDate = new Date("01-20-2020");
// console.log('Date=>',currentDate);
// console.log('Date=>',currentDate.getDate());
// console.log('Month=>',currentDate.getMonth());
// console.log('Day=>',currentDate.getDay());
// console.log('FullYear=>',currentDate.getFullYear());
// console.log('Hours=>',currentDate.getHours());
// console.log('Minutes=>',currentDate.getMinutes());
// console.log('Seconds=>',currentDate.getSeconds());
// console.log('MiliSeconds=>',currentDate.getMilliseconds());
// console.log('Java time=>',currentDate.getTime());// java seconds since 1970 

// get my birthday age just for prac
// var currentAge = new Date("01-25-1998");
// console.log('Date=>',currentAge);
// console.log('Date=>',currentAge.getDate());
// console.log('Month=>',currentAge.getMonth());
// console.log('Day=>',currentAge.getDay());
// console.log('FullYear=>',currentAge.getFullYear());
// console.log('Hours=>',currentAge.getHours());
// console.log('Minutes=>',currentAge.getMinutes());
// console.log('Seconds=>',currentAge.getSeconds());
// console.log('MiliSeconds=>',currentAge.getMilliseconds());
// console.log('Java time=>',currentAge.getTime());// java seconds since 1970

// var a = new Date();
// a.setDate(1);
// a.setMonth(0);
/* a.setDay(1) dont have any option */
// a.setFullYear(2000);
// a.setHours(12);
// a.setMinutes(30);
// a.setSeconds(45);
// a.setMilliseconds(500);
/* a.setTime();  dont have any option */
// console.log(a);

// var a = new Date();
// a.setDate(25);
// a.setMonth(0);
// /* a.setDay(1) dont have any option */
// a.setFullYear(1998);
// a.setHours(6);
// a.setMinutes(0);
// a.setSeconds(0);
// a.setMilliseconds(0);
// /* a.setTime();  dont have any option */
// console.log(a);

//if need after 5 days from set given date 
//  var a = new Date(); /* current date */
//  a.setDate(new Date("03-31-2024").getDate()+5); /* set date manually */
//  console.log(a);

//if set previous date 
// var a = new Date(); /* current date */
// a.setDate(new Date("03-31-2024").getDate()-5); /* set date manually */
// console.log(a);

// // if set manually prac //
// var a = new Date();
// a.setDate(new Date().getDate()+10);
// a.setMonth(new Date().getMonth()-2);
// // a.setDay(1) // dont have any option
// a.setFullYear(new Date().getFullYear()-26);
// a.setHours(new Date().getHours(6));
// a.setMinutes(new Date().getMinutes(0));
// a.setSeconds(new Date().getSeconds(0));
// a.setMilliseconds(new Date().getMilliseconds(0));
// // a.setTime(); // dont have any option
// console.log(a);

// Functions //
// function abc() {
//         console.log("Testing Function Calling");
// }
// console.log("ABC");
// abc(); //round bracket mean run funtion//

// function printMyMessage(message) {
//         console.log("My Message: " + message);
// }
// printMyMessage("ABC")
// printMyMessage("Abeer Iqbal")

// for prac
// function printMyMessage(name) {
//         console.log("My Name is : " + name);
// }
// printMyMessage("Abeer")
// printMyMessage("Abeer Iqbal")

// function calculateDiscount(amount,disc){
//         var price = amount;
//         var discount = disc;
//         var total = price - discount;
//         console.log(total);
// }

// calculateDiscount(400,100);
// calculateDiscount(1000, 200);
// calculateDiscount(17000,1000);

// Local Variable
// Global Variable
// return

// var a = "abc";

// if (true) {
//   if (true) {
//     console.log(a);
//   }
// }
// function abc() {
//   var a = "abc";
// }
// console.log(a);
// abc();

// if (true) {
//   var a = "ABC";
// }
// console.log(a);
// var c;
// function abc() {
//   var a = 10;
//   var b = 20;

//   c = a + b;
// }
// abc();
// console.log(c);

// function calculateDiscount(amount) {
//         var percentage = 10;
//         var percentageAmount = amount * (percentage / 100);
//         var finalAmount = amount - percentageAmount; 
//         console.log("Final amount after discount:", finalAmount);
//     }

//     calculateDiscount(10000); 
//     calculateDiscount(20000); 
//     calculateDiscount(30000); 

// function func1() {
//   console.log("Function 1");
// }
// function func2() {
//   console.log("Function 2");
// }
// function playAll() {
//   func1();
//   func2();
// }
// playAll();

// function abc() {
//   var a = "Abdul Basit Ahmed";

//   return a;
// }

// var val = abc();

// abc();

// function login() {
//   var a = 10;
//   var b = 20;
//   if (a == b) {
//     return false;
//   }
//   //   login Logic
// }

// function calcDiscount(price, discount) {
//   total = price - discount;
//   return total;
// }
// var p1 = calcDiscount(1000, 200);
// var p2 = calcDiscount(500, 50);
//  console.log(p1,p2)

// var amounts = [1, 232,45,612,3,456,123,4,654,21]
// // calculate the sum of all numbers of this Aarray

// function calculate(){
// var sum = 0
// for (var i = 0; i < amounts.length; i++){
// sum += amounts[i];
// console.log(sum);//
// }
// return sum
// }
// var add = calculate()
// console.log(add)


// if val < 50 so multiply by 2
// if val > 50 so multiply by 3
// calculate the total mutilplied amount
// var arr = [12, 45, 78, 54, 4, 54, 565, 8, 9, 7, 87, 54]

// function calculate() {
//         var sum = 0
//         for (var i = 0; i < arr.length; i++) {
//                 if (arr[i] < 50) {
//                         arr[i] *= 2
//                 }else {
//                 arr[i] *= 3
//                 }
//                 sum += arr[i]
//         }
//         return sum
// }
// var totalMultipliedAmount = calculate()
// console.log("array:", arr);
// console.log("totalMultipliedAmount:" , totalMultipliedAmount)

// //check the string "T" and push in other array and return that.//
// var arr = ["UIY", "TYU", "QWE", "FGH", "TRT", "MOM"]
// function find() {
//     var newArray = [];

//     for (var i = 0; i < arr.length; i++) {
//         var word = arr[i];

//         if (word.indexOf("T") !== -1) {
//             newArray.push(word);
//         }
//     }

//     return newArray;
// }

// var str = find();
// console.log(str);

//write a function which tells letter count of (word)
// var word = "Hello"
// function letterCount(){
//         var len = word.length
//         return len
//         }
//         var wordLen = letterCount()
//         console.log(wordLen)

// write a function which tells that the word which is passed in the arguement is palindrome or not (same pronounciation from start to end and from end to start), example : Mom, Madam. these are palindrome.

// function isPalindrome(word) {
//     // Convert the word to lowercase to make the comparison case-insensitive
//     word = word.toLowerCase();

//     // Reverse the word using split(), reverse(), and join() methods
//     var reversedWord = word.split("").reverse().join("");

//     // Check if the original word is the same as the reversed word
//     return word === reversedWord;
// }

// // Test the function with some examples
// console.log(isPalindrome("Mom"));    // Output: true
// console.log(isPalindrome("Madam"));  // Output: true
// console.log(isPalindrome("hello"));  // Output: false


// create a function that takes 2 peramters, in first perameter take date and in second peramter take number of days
// the task is showing the date after the counting of second peramter according the date of first peramter.

// // prac
// function tellTime() {
//         var nowDate = new Date();
//         var newDate = new Date(nowDate);
//         newDate.setDate(nowDate.getDate() + 5);
//         var nowDays = newDate.getDate(); 

//         return nowDays,newDate; 
//     }

//     var dateandDays = tellTime();
//     console.log(dateandDays);

// // sir
// function dateValues(dt, num) {
//         var a = new Date(dt);
//         a.setDate(new Date(dt).getDate() + num);
//         console.log(a);
//       }

//       dateValues("05-18-2024", 45);

// Write a function name calculateSquareRoot taking 1 perameter, calculate square root of the number which is given in perameter. and return the value.
// function calculateSquare(num) {
//         return num * num;
//       }

//       var a = calculateSquare(5);
//       var b = calculateSquare(9);
//       var c = calculateSquare(13);

//       console.log(a, b, c);


// Practice
// var num = prompt("Enter a num")
// function calculateSquareRoot(num) {
//        var squareRootOfNumber = Math.sqrt(num);
//        var result = squareRootOfNumber.toFixed(2)
//         return result
// }

// var resulOfSquareRoot = calculateSquareRoot(num)
// console.log(resulOfSquareRoot)


// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// function showTime() {
//   var dt = new Date();
//   var arr = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   var dayIndex = dt.getDay();
//   console.log("Today is : " + arr[dayIndex]);
// }
// showTime();


// Write a JavaScript program to calculate the days left before Eid-ul-Fitr.

// 10 Apr 2024

// function daysBeforeEid() {
//   var EidDate = new Date("04-10-2024");
//   var currentDate = new Date();

//   var diff = EidDate.getTime() - currentDate.getTime();
//   var conv = diff / (1000 * 60 * 60 * 24);
//   console.log(conv);
// }
// daysBeforeEid();

// switch statement//

// var day = 'mon'

// switch (day) {
//         case 'mon':
//                 console.log('Monday Case Match');
//                 break;

//         case 'tue':
//                 console.log('Tuesday Case Match');
//                 break;

//         case 'wed':
//                 console.log('Wednesday Case Match');
//                 break;

//         case 'thur':
//                 console.log('Thursday Case Match');
//                 break;

//         case 'fri':
//                 console.log('Friday Case Match');
//                 break;

//         case 'sat':
//                 console.log('Saturday Case Match');
//                 break;

//         case 'sun':
//                 console.log('Sunday Case Match');
//                 break;

//         default:
//                 console.log('other');

// }

// practice//

// 1 paid 
// 2 unpaid
// 3 partialy paid
// 4 wave

// var voucherStatus = 4


// switch (voucherStatus) {
//         case 1:
//                 console.log('Paid');
//                 break;

//         case 2:
//                 console.log('UnPaid');
//                 break;

//         case 3:
//                 console.log('Partialy Paid');
//                 break;

//         case 4:
//                 console.log('Wave');
//                 break;

// }

// while loop//
// var i = 0;
// while (i<10) {
//         console.log("while loop " + i)
//         i++
// }


// do while loop//
// var i = 5;
// do {
//       console.log("loop works at "+ i)
//       i++  
// } while (i<5);

/////////////////* Events Links *///////////

// function abc(message){
//         console.log(message);
// }

// function changeImage(image){
//         var newUrl = "https://cdn.pixabay.com/photo/2024/04/14/04/55/ai-generated-8694768_640.jpg"
//         image.src = newUrl
//         console.log(image.src);
// }

// var url1= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1s4yl2K2TkwwJ7-Oa4Y3WdxYwIPSnMD-MA&s"
// var url2= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9wxefSTJ9RdpfBIMMAH0zkEHxt3mhyr3pA&s"
// function switchOff(image) {
//     console.log(image.src);
//     if(image.src == url1) 
//     image.src = url2;
// else {
//         image.src = url1;
// }   
// }

/* if change css of element change with with name of element.dot =""  */
// function abc(elm){
//         console.log("Input focused")
//         elm.style.backgroundColor = "yellow";
// }
// function xyz(elm){
//         console.log("Input blured")
//         elm.style.backgroundColor = "white";
// }

/* Flip Game  */
// var gameGreeting = "Welcome to Flip Master!";
// var gameRules = "You have 3 attempt to flip on any box you want and get Diamond"
// Swal.fire(gameGreeting,gameRules);
// var img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPCelOBrmKgV3rfVHhf9YNzurlsan7OAoBC-208hDcg&s";
// var img2 = "https://imageio.forbes.com/specials-images/imageserve/63bc44d04f40912057eb4f4e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds";
// var count = 0;
// function flip(elem, diamond) {
//         if (count < 3) {
//                 if (diamond == "yes") {
//                         elem.src = img1;
//                 } else {
//                         elem.src = img2;
//                         Swal.fire("Congratulation You Won! ")
//                 }
//                 count++;
//         } else {
//                 alert("3 attempted try agin later!")
//         }
// }
//*/

/* var messageBox = document.getElementById
("messageBox");

function cls() {
        console.log(messageBox);
        messageBox.style.display = "none";
} */

//  var inp = document.getElementById("inp");
// function addInp() {
//         console.log(inp.value);
// }

// var inp = document.getElementById("inp");
// var showMessage = document.getElementById("showMessage");
// function addInp() {
//         if (inp.value.length !== 5) {
//                 showMessage.innerHTML = "Input value can't be increse greater than 5 characters";
//         }else{
//                 console.log(inp.value);
//         }
// }


// var box = document.getElementById("box");
// function changeClassToSq() {
//         box.className = "square" 
// }
// var box = document.getElementById("box");
// function changeClassToRec() {
//         box.className = "rectangular" 
// }
// var box = document.getElementById("box");
// function changeClassToCr() {
//         box.className = "circle" 
// }



// var box = document.getElementById("box");
// function changeClass(change) {
//         box.className = change
// }

// // DOM rule tagName in capitalLetter//
// var arr = document.getElementsByTagName("P")
// console.log(arr)

// var main = document.getElementById("main")
// console.log(arr)
// var arr = main.getElementsByTagName("P")


// DOM //
// var main = document.getElementById("main");
// var second = document.getElementById("second");
// console.log(second.previousSibling);

// var main = document.getElementById("main");
// console.log(main.childNodes[0]);
// main.childNodes[0].nodeValue = "ABCDEFG";

// var main = document.getElementById("main");
// var arr = main.childNodes;
// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//          console.log(arr[i]);
//          if (arr[i].nodeType == 1){
//         console.log(arr[i].nodeName);
//         arr[i].style.color = "red"
//          }
// }

// function addElement() {
//         var pera = document.createElement("P");
//         var text = document.createTextNode("Here is a Dummy text created by javascript");
//         pera.appendChild(text);
//         console.log(pera);
// }



/*try to add set attribute using js*/
// function abc(){
//         console.log("Abc works");
// }
//         var input = document.createElement("input");
//         var text = inp.value; 
//         var textNode = document.createTextNode(text);
//         input.appendChild(input.value);
//         input.setAttribute("class", "abc");
//         input.setAttribute("id", "abcd");
//         input.setAttribute("onfocus", "abcd()");

// objects //

// var student1 = {
//         rollNo : "Abc-1234",
//         name : "Abeer",
//         cnic : "4769989",
//         contactNo : "0564686",
// }

// //check the object (NTN)
// console.log(student1);
// //check the object with property (NTN)
// console.log(student1.name);
// student1.name = "Iqbal"
// //change the object property (NTN)
// console.log(student1);
// console.log(student1.name);
// //delete the object property (NTN)
// delete student1.contactNo;
// console.log(student1);
// //find the object property (NTN)
// var a = "inst" in student1;
// studen1.age = 25;

// console.log(student1);


// var students = [
//         {
//                 rollNo: "Abc-123",
//                 name: "Abeer"
//         },
//         {
//                 rollNo: "Abc-456",
//                 name: "Iqbal"
//         },
//         {
//                 rollNo: "xyz-1234",
//                 name: "Jawwad"
//         },
//         {
//                 rollNo: "uio-14",
//                 name: "Daniyal"
//         },
//         {
//                 rollNo: "Abc-99000",
//                 name: "Saim"
//         },
//         {
//                 rollNo: "okgkt678",
//                 name: "Ayub"
//         },
//         {
//                 rollNo: "ilp00-456",
//                 name: "amir"
//         },
//         {
//                 rollNo: "xyz-pojk00",
//                 name: "saud"
//         },
//         {
//                 rollNo: "0pl-14",
//                 name: "huzaifa"
//         },
//         {
//                 rollNo: "hjlb-9900",
//                 name: "khan"
//         }
// ];

// //     var a = [];
// //     for (var i = 0; i < students.length; i++) {
// //         a.push(students[i]);        
// //     }
// //     console.log(a);


// var input = document.getElementById("inp");
// function searchResult() {
//         for (i = 0; i < students.length; i++) {
//                 var std = students[i];
//                 if (std.rollNo == inp.value) {
//                         console.log(std);
//                 }
//         }
// }

// Create a Quiz App. Features are Given below.

 // a. show single question at a time.
 // b. show current Question fio on the top and also show total 

// Questions Quantity.

 // c. show all options.dx

 // d. show next question button.

// Process

// 1. create data for Quiz App.
 // 2. Create HTML for QUIZ App.
// 3. Create CSS for Quiz App and proper Design.
 // 4. apply All Element IDs in HTML.

// quiz app//


var allQuizQuestions = [
        {
            question: "HTML stands for?",
            options: [
                "Hyper Text Markup Language",
                "Incorrect",
                "Incorrect",
                "Incorrect"
            ],
            correctAnswer: "Hyper Text Markup Language",
        },
        {
            question: "CSS stands for?",
            options: [
                "Incorrect",
                "Cascading Style Sheet",
                "Incorrect",
                "Incorrect"
            ],
            correctAnswer: "Cascading Style Sheet",
        },
        {
            question: "JS stands for?",
            options: [
                "Incorrect",
                "Incorrect",
                "Incorrect",
                "Java Scripts"
            ],
            correctAnswer: "Java Scripts",
        },
        {
            question: "JS stands for?",
            options: [
                "Incorrect",
                "Incorrect",
                "Incorrect",
                "Java Scripts"
            ],
            correctAnswer: "Java Scripts",
        },
        {
            question: "JS stands for?",
            options: [
                "Incorrect",
                "Incorrect",
                "Incorrect",
                "Java Scripts"
            ],
            correctAnswer: "Java Scripts",
        }
    ];
    
    var currentQuestionNo = document.getElementById("currentQuestionNo");
    var totalQuestionNo = document.getElementById("totalQuestions");
    var question = document.getElementById("question");
    var options = document.getElementById("options");
    
    var currentIndex = 0;
    var marks = 0;
    
    totalQuestionNo.innerHTML = allQuizQuestions.length;
    
    function nextQuestion() {
        currentIndex++;
        if (currentIndex >= allQuizQuestions.length) {
            alert(`Quiz completed! Your score is ${marks} out of ${allQuizQuestions.length}`);
            currentIndex = 0;
            marks = 0;
        }
        renderQuestion();
    }
    
    function checkQuestion(selectedOption) {
        if (selectedOption === allQuizQuestions[currentIndex].correctAnswer) {
            marks++;
        }
        nextQuestion();
    }
    
    function renderQuestion() {
        var currentQuestion = allQuizQuestions[currentIndex];
        currentQuestionNo.innerHTML = currentIndex + 1;
        question.innerHTML = currentQuestion.question;
    
        options.innerHTML = "";
        currentQuestion.options.forEach(option => {
            var button = document.createElement("button");
            button.innerText = option;
            button.className = "btn btn-danger option";
            button.onclick = function() {
                checkQuestion(option);
            };
            var div = document.createElement("div");
            div.className = "col-md p-2";
            div.appendChild(button);
            options.appendChild(div);
        });
    }
    
    renderQuestion();
    