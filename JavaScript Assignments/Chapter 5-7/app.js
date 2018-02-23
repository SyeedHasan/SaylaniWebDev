
//SYED HASAN
// 11978

//TASK 1
var num1 = +prompt("Number: ");
var num2 = +prompt("Number: ");
alert("Sum of " + num1 + " and " + num2 +  " is  " + (num1+num2));


//TASK 2
var num1 = +prompt("Number: ");
var num2 = +prompt("Number: ");

alert("Subtraction of " + num1 + " and " + num2 +  " is  " + (num1-num2));
alert("Multiplication of " + num1 + " and " + num2 +  " is  " + (num1*num2));
alert("Division of " + num1 + " and " + num2 +  " is  " + (num1/num2));


//TASK 3
var x ;
alert("value is " + x);
x = 10;
alert("Initial value " + x);
x++;
x += 7;
alert("Value: " + x);
x--
x = x/3;
alert("Value now: " + x);


//TASK 4
var ticket = 600;
var price = ticket*5;
alert("Ticket cost: " + price);


//TASK 5
document.write("Multplication table of 4 <br>");
for(var i=0; i<=10; i++){
    document.write("4 *" + i + " = " + 4*i + "<br>");
}


//TASK 6
var celcius = 34;
var fahrenheit = 90;

celcToFahr = (celcius * 9/5) + 32;
fahrToCelc = (fahrenheit - 32) * 5/9;

alert("Converted Temps: " + celcToFahr + " and " + fahrToCelc);


//TASK 7
var item1 = 200;
var item2 = 2000;
var quantity1 = 20;
var quantity2 = 30;
var shoppingCharges = 500;
var final = item1*quantity1 + item2*quantity2 + shoppingCharges;
document.write("Total cost of order: " + final);


//TASK 8
var total = +prompt("Enter total marks: ");
var marksObtained = +prompt("Enter obtained marks: ");
var percentage = (marksObtained/total) * 100;

alert("Percentage: " + percentage); 


//TASK 9
var finalCurrency = 10*104 + 25*28;
document.write("Total currency in PKR: " + finalCurrency);


//TASK 10
var x;
x = ((x+5) * (10) ) /2;
alert(x);


//TASK 11
var currentYear = 2018;
var birthYear = 1998;
document.write("They are either " + (currentYear-birthYear) + " or " + (currentYear-birthYear-1));


//TASK 13
var a = 10;
++a;
a++;
--a;
a--;
alert("Value of a: " + a);


//TASK 14
var a=2;
var b=1;
var result = --a - --b + ++b + b--;
// EXPLAINED OUTPUT Result : 1 - 0 + 1 + 1;
alert(result);


//TASK 15
var snack = "Lays";
var age = 19;
var maxAge = 65;
var amount = 5;

alert("You need : " + (maxAge-age)*amount + " of Lays to suffice!") ;













