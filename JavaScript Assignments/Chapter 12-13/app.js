
//CHAPTER 12-13
//SYED HASAN 
// 11978

//TASK 1
var x = +prompt("Number: ");
if(x/3 == 0){
    alert("Divisible by 3");
}
else {
    alert("Not divisible by 3");
}


//TASK 2
var x = +prompt("Number: ");
if(x%2==0){
    alert("Even number");
}
else {
    alert("Odd number");
}


//TASK 3
var x = +prompt("Age: ");
if(age >= 18){
    alert("Old enough");
}
else {
    alert("Too young");
}


//TASK 4
var x = prompt("Enter name: ");
if(x === "Hasan"){
    alert("Welcome Hasan!");
}
else {
    alert("You are not welcome!");
}


//TASK 5
var x = +prompt("Number: ");
//SWITCH CASES HAVE NOT BEEN TAUGHT


//TASK 6
var x = prompt("Enter something: ");
if(x>=65 && x<=90){
    alert("Upper case!");
}
else if (x>=97 && x<=122){
    alert("Lower case!");
}
else {
    alert("Number!");
}


//TASK 7
//SWITCH CASE HAS NOT BEEN TAUGHT


//TASK 8
var x = +prompt("Number: ");
if(x >= 0000 and x < 1200){
    alert("Good morning!");
}
else if(time>=1200 && time<1700){
    alert("Good afternoon!");
}
else if(time>=1700 && time<2100){
    alert("Good evening!");
}
else if(time>=2100 && time<=2359){
    alert("Good night!");
}


//TASK 9
var year = +prompt("Year: ");
if(year %100 == 0){
    if(year%400 === 0){
        alert("Leap year!");
    }
  	else {
      alert("Not a leap year!");
    }
}
else if(year %4 == 0 ){
    alert("Leap Year!");
}
else {
    alert("Not a leap year!");
}


//TASK 10
var pass = "12345";
var enteredPass = prompt("Enter password: ");
if(pass == enteredPass){
    alert("Correct!");
}
else{
    alert("Please enter password again");
}


//TASK 11
var firstName = "Ali";
if (firstName === "Fahad") {
    document.write("Hello Fahad!");
}
else {
    document.write("You're not Fahad!");
}


//TASK 12
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
alert(greeting);


//TASK 13
var x = +prompt("Number: ");
var y = +prompt("Number: ");
if(x>y){
    alert("X is larger");
}
else if(y>x){
    alert("Y is larger");
}
else{
    alert("Both equal");
}


//TASK 14
var x = +prompt("Number: ");
if(x>0){
    alert("Positive");
}
else if(x<0){
    alert("Negative");
}
else{
    alert("ZERO!");
}

//TASK 16
var x = prompt("Enter something: ");
alert(typeof(x));


//TASK 17
var x = prompt("Enter something: ");
if(x === ('a' || 'e' || 'i' || 'o' || 'u')){
    alert("Vowel!");
}
else {
    alert("Not a vowel");
}


//TASK 18
// 10 !== 8


//TASK 19
//SWITCH NOT USED!


//TASK 20
var x = +prompt("Enter something: ");
var y = (x<18) ? "Too young!" : "Old enough";
console.log(y);








