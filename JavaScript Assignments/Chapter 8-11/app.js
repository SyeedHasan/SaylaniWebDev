//TASK1

// var name = prompt("Enter your name:");
// alert("Hi " + name);

//TASK 2

// var num = +prompt("Enter a number:", 5);
// document.write("Multiplication table of " + num + "<br>");

// for(var i=1; i<=10; i++){
//     document.write(num + "*" + i + "= " + num*i + "<br>");
// }

//TASK 3

var city = prompt("Enter your city:");
alert("Welcome to " + city + ", the city of lights!");

//TASK 4

var gender = prompt("Enter your gender: ");
if (gender === "Male") {
    alert("Welcome Sir!");
} else {
    alert("Welcome Ma'am!");
}

//TASK 5

var color = prompt("Enter a color: ");
if (color === "red") {
    alert("Vehicles must stop!");
} else if (color === "yellow") {
    alert("Vehicles should get ready to move!");
} else if (color === "green") {
    alert("Vehicles can move now!");
}

//TASK 6

var currAge = prompt("Enter current age: ");
var maxAge = prompt("Enter max age: ");
if (currAge <= maxAge) {
    alert("Welcome user!");
}

//TASK 7

var litres = +prompt("Enter remaining fuel in litres: ");
if (litres <= 0.25) {
    alert("Please refill the fuel in the car!");
}


// TASK 8
//A
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
//ALERT DISPLAYED!

//B
var b = 82;
if (b++ == 83) {
    alert("Given condition is true!");
}
//ALERT NOT DISPLAYED!

//C
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
//NOT DISPLAYED
if (c === 13) {
    alert("condition 2 is true");
}
//DISPLAYED
if (++c < 14) {
    alert("condition 3 is true");
}
//NOT
if (c === 14) {
    alert("condition 4 is true");
}
//DISPLAYED

//D
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
//DISPLAYED

//E
if(true){
    alert("True");
}
//DISPLAYED : True
if(false){
    alert("False");
}

//F
if("car" < "cat"){
    alert("Car is smaller than Cat");
}
//DISPLAYED

//TASK 9
var firstSub = +prompt("Enter marks in first subject: ");
var secondSub = +prompt("Enter your marks in second subject: ");
var thirdSub = +prompt("Enter your marks in the third sub: ");
var totalMarks = firstSub + secondSub + thirdSub;
var percentage = (totalMarks/300) * 100;

var grade = "A";
var remarks = "Excellent";

if(percentage >= 80){
    grade = "A-One";
    remarks = "Excellent";
}
else if (percentage >= 70){
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60){
    grade = "B";
    remarks = "You need to improve!";
}
else {
    grade = "Fail";
    remarks = "Sorrry!";
}

document.write("<h1>Marks Sheet</h1>");
document.write("- Total Marks:" + "300" + "<br>");
document.write("- Marks Obtained: " + totalMarks + "<br>");
document.write("- Percentage:  " + percentage + "<br>");
document.write("- Grade: " + grade + "<br>");
document.write("- Remarks: "+ remarks + "<br>");


//TASK 10
var name1 = "lays";
var name2 = "prince";
var price1 = 5;
var price2 = 50;
var quantity1= 20;
var quanitity2 = 50;
var charges = 500;

var totalCost = price1*quantity1 + quanitity2*price2;
if(totalCost >=2000){
    alert("Discountedd price!");
    totalCost = totalCost - (20/100)*totalCost;
}

//TASK 11
var num = 3;
if(num == 3){
    alert("Bingo you're right");
}
else {
    alert("you're wrong!");
}

//TASK 12

var number = +prompt("Enter a number:");
if(number%3==0){
    alert("Divisible by 3!");
}
else {
    alert("Not divisible!");
}

//TASK 13

var name1 = prompt("Enter first team name: ");
var name2 = prompt("Enter second team name: " );
var score1 = +prompt("Enter first team score: ");
var score2 = +prompt("Enter second team score: ");
if(score2>score1){
    alert(name2 + " WON!");
}
else {
    alert(name1+ " WON!");
}

//TASK 14

var num = 1;
var str = "Hi";
var bool = true;
alert(num + " is a " + typeof(num));
alert(str+ " is a " + typeof(str));
alert(bool+ " is a " + typeof(bool));


//TASK 15

var num = +prompt("Enter a number: " );
if(num%2==0){
    alert("EVEN!");
}
else {
    alert("ODD!");
}

//TASK 16
var temp = +prompt("Enter temperature:");
if(temp>40){
    alert("too hot");
}
else if(temp>30){
    alert("Normal weather");
}
else if(temp >20){
    alert("cool");
}
else {
    alert("omg, so cool");
}

//TASK 18

var day = prompt("Enter the day today: ");
if(day == "Saturday"){
    alert("Weekend");
}
else if(day === "Sunday"){
    alert("YAY! Its a holiday.");
}
else {
    alert("Its a weekday.");
}

//TASK 19

var num = +prompt("Enter a number: " );
if(num >= 50){
    alert("Passed!");
}
else {
    alert("Failed!");
}

//TASK 20

var num1 = +prompt("Enter a number: " );
var num2 = +prompt("Enter a number: " );
if(num1>num2){
    alert(num2 + " is greater than " + num1);
}
else if(num2>num1){
    alert(num1 + " is greater than " + num2);
}
else {
    alert(num1 + " is equal to " + num2);
}

//TASK 21
var lang = prompt("Enter code: ", "en");
if(lang == "es"){
    alert("HOLA!");
}
else if(lang == "ge"){
    alert("hallo")
}
else{
    alert("HI!");
}

//TASK 22
var num = +prompt("Enter a number: " );
if(num >=0){
    alert("Positive!");
}
else {
    alert("Negative!");
}

//TASK 23
var a = prompt("Enter noun: ");
var num = +prompt("Enter a number:");

alert(num + " " + a + "s");