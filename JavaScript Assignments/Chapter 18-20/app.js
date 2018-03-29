//TASK 1
for (var i = 0; i < 5; i++) {
    document.write("Hello World!<br>");
}


//TASK 2
for (var i = 0; i <= 10; i++) {
    document.write(i + "<br>");
}


//TASK 3
var num = +prompt("Enter a number:");
var length = +prompt("Enter length:");
for (var i = 0; i <= length; i++) {
    document.write(num + " * " + i + " = " + num * i + " <br>");
}


//TASK 4
var a = ['Nokia', 'Samsung', 'Apple'];
for (var i = 0; i < a.length; i++) {
    document.write(a[i] + "<br>");
}


//TASK 5
document.write("<br><br>");
var fruits = ['apple', 'banana', 'guava', 'mango'];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + " <br>");
}
for (var i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is" + fruits[i] + " <br>");
}
document.write("<br><br>");


//TASK 7

for (var i = 1; i <= 15; i++) {
    document.write(i + "  ");
}
document.write("<br><br>");

for (var i = 10; i >= 1; i--) {
    document.write(i + "  ");
}
document.write("<br><br>");

for (var i = 0; i <= 20; i += 2) {
    document.write(i + "  ");
}
document.write("<br><br>");

for (var i = 1; i <= 19; i += 2) {
    document.write(i + "  ");
}
document.write("<br><br>");

for (var i = 2; i <= 20; i++) {
    document.write(i + "k  ");
}
document.write("<br><br>");


//TASK 8
a = ['cake', 'apple', 'guava', 'mango'];
var j = 0;
var choice = prompt("What do u want to search? ");
for (var i = 0; i < a.length; i++) {
    if (a[i] === choice) {
        alert("Found!");
        j = 1;
        break;
    }
}

if (j == 0) {
    alert("Not found!");
}

document.write("<br><br>");


//TASK 9
var nums = [22, 434, 232, 353, 32, 223, 22323];
max = nums[0];
for (var i = 1; i < nums.length; i++) {
    if (nums[i] >= max) {
        max = nums[i]
    }
}
document.write("Largest number: " + max);
document.write("<br><br>");


//TASK 10
var nums = [22, 434, 232, 353, 32, 223, 22323];
min = nums[0];
for (var i = 1; i < nums.length; i++) {
    if (nums[i] <= min) {
        min = nums[i]
    }
}
document.write("Smallest number: " + min);
document.write("<br><br>");


//TASK 11
var nums = [22, 434, 232, 353, 32, 223, 22323];
min = nums[0];
max = nums[0];
for (var i = 1; i < nums.length; i++) {
    if (nums[i] <= min) {
        min = nums[i]
    }
    if (nums[i] >= max) {
        max = nums[i]
    }
}

document.write("Largest number: " + max);
document.write("<br><br>");
document.write("Smallest number: " + min);
document.write("<br><br>");


//TASK 12
for(var i=5; i<=100; i=i+5){
    document.write(i + " ");
}
document.write("<br><br>");


//TASK 13









