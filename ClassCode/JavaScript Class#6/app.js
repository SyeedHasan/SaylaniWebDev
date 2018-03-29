//  24-February-2018

//Date object
var date = new Date();
// alert(date);

//Date object is converted to a string
var stringDate = date.toString();
// alert(stringDate);

//Get day from this object
var day = date.getDay();
// alert(day);
var month = date.getMonth();
// alert(month);


/*

CONSOLE OUTPUT BELOW.

*/

///Mapping these in an array.

var months = ['January', 'Feb', 'March', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var date = new Date();

days[date.getDay()]   
months[date.getMonth()]

// TASK 1
// var birthdate = +prompt("Enter birthdate: ");
var birthdate = new Date("11 August 1998");
var dateToday = new Date();

var year = dateToday.getFullYear();
var age = year - Number(birthdate.getFullYear()) -1 ;

document.write("<h5> Age: " + age +  "</h5>");

// TASK 2

var thisYearBday = new Date("11 August 2018");
var daysToBirthday = thisYearBday - dateToday  ;

var days = Math.floor(daysToBirthday / (1000*3600*24));
var hours = 24 - dateToday.getHours() - 1;
var minutes = 60 - dateToday.getMinutes() - 1;
var seconds = 60 - dateToday.getSeconds() - 1;
document.write("<h5> Days to birthday : " + days + "</h5>")
document.write("<h5> Hours to birthday : " + hours + "</h5>")
document.write("<h5> Minutes to birthday : " + minutes + "</h5>")
document.write("<h5> Seconds to birthday : " + seconds + "</h5>")
