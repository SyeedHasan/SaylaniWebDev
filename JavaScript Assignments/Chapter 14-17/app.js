
//TASK 1
var studentNames = [];


//TASK 2
var studentsNames = new Array();


//TASK 3
var stringArray = ['a', 'b'];


//TASK 4
var numberArray = [1,2,3,4];


//TASK 5
var boolArray = [true, false];


//TASK 6
var mix = [1, 'a', true];


//TASK 7
var serviceProviders = ['Telenor', 'Zong', 'Ufone', 'Jazz'];


//TASK 8
var degrees = ['SSC', 'HSC', 'BSC', 'BS', 'MSC', 'BCOM', 'PhD'];

document.write("Qualifications: <br>")

for(var i=0; i<degrees.length; i++){
    document.write(i+1 + ") " + degrees[i] + " <br>");
}


//TASK 9
var moviesList = [];
moviesList.push('Mr. Robot');
moviesList.push('Westworld');

document.write("<br> Top Movies: <br>")

for(var i=0; i<moviesList.length; i++){
    document.write(i+1 + ") " + moviesList[i] + " <br>");
}


//TASK 10
var favCars = ['Audi', 'BMW', 'Toyota', 'Nissan', 'Honda', 'Accord'];
console.log(0);
console.log(favCars[0]);
console.log(favCars.length-1);
console.log(favCars[favCars.length-1]);


//TASK 11
var stNames = ['Hasan', 'Ahsan', 'Ehsan'];
var marks = [450, 490, 400];
var percentages = [];

for(var i=0; i<marks.length; i++){
    percentages.push(marks[i]/500 * 100);
}

for(var j=0; j<percentages.length; j++){
    document.write("<br>Score of " + stNames[j]    + 
    " is " + marks[i] + " and percentage is: " +
     percentages[j] + " <br>");
}


//TASK 12
var colors = ['Blue', 'Red'];
// var userChoice = 'Yellow';
var userChoice = prompt("What color to add at start? ");
colors.unshift(userChoice);
userChoice = prompt("What color to add at end? ");
colors.push(userChoice);
colors.push('Yellow', 'Green');

document.write(" <br> Colors Array : " + colors + " <br>");

colors.shift();

document.write(" <br> Colors Array : " + colors + " <br>");

colors.pop();

document.write(" <br> Colors Array : " + colors + " <br>");

userChoice = prompt("What color to add? ");
var index = +prompt("What index?");

colors[index] = userChoice;

document.write(" <br> Colors Array : " + colors + " <br>");

var index = +prompt("What index to start removing from?");
var indexTwo = +prompt("What index to stop deleting on? ");
colors = colors.slice(index,indexTwo);

document.write(" <br> Colors Array : " + colors + " <br>");


//TASK 13
var scores = [ 100, 50, 90, 99, 98, 34, 45];
document.write("Sorted scores: " + scores.sort());


//TASK 14
var fruits = ['apple', 'banana', 'avacado', 'strawberry', 'guava'];
document.write("<br> Sorted list: " + fruits.sort() + "<br>");


//TASK 15
var cities = ['Karachi', 'Lahore', 'Peshawar', 'Multan', 'Quetta'];
var selected = cities.slice(2,4);
document.write("<br> Selected cities: " + selected + "<br>");


//TASK 16
var arr = ['This', 'is', 'a', 'cat'];
arr = arr.join(' ');
document.write("Concatenated string: " + arr + "<br>");


//TASK 17
var list = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write("Out: "+ list.shift() + "<br>");
document.write("Out: "+ list.shift() + "<br>");
document.write("Out: "+ list.shift() + "<br>");
document.write("Out: "+ list.shift() + "<br>");


//TASK 18
var list = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write("Out: "+ list.pop() + "<br>");
document.write("Out: "+ list.pop() + "<br>");
document.write("Out: "+ list.pop() + "<br>");
document.write("Out: "+ list.pop() + "<br>");


//TASK 19
var manuf = ['Apple', 'Samsung', 'Motorola', 'Sony'];
document.write("<select><option>" + manuf[0] + "</option><option>"+
 manuf[1] + "</option>" + "<option>" + manuf[2] + "</option><option>" +
 manuf[3] + "</option>" + "</select>");


//TASK 20
var anotherArr = [ [], [], [] ];


//TASK 21
var multiArr = [ [0, 1,2,3], [1, 0, 1, 2], [2, 1, 0, 1] ];


//END 
// SYED HASAN
//11978

