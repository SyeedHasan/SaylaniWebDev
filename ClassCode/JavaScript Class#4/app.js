//Learning upper/lower casing in a string
str = "This is a string";
str = str.toLowerCase();
// alert(str);

str = str.toUpperCase();
// alert(str);
//Can use numbers with strings. Only numbers give an error.
s = "1kllllkk234 THI SIS SKS98797979KSKSKKS ";
s = s.toLowerCase();
// alert(s);

//Looping in a single line
// for(var i=0; i<5; i++)
    // for(var j=0; j<10; j++)
    // console.log(j);

// console.log("THIS IS A STRING!")

// SLICING STRINGs
a = "Another string";
a = a.slice(1,5).toUpperCase().toLowerCase(); //Works just like an array 
// alert(a);

b = "Another";

b = b.slice(2);
// alert(b);

//TASK NUMBER 1
var myname = "syed Hasan";
var firstChar = myname.slice(0,1).toUpperCase();
var otherChars = myname.slice(1);
var finalName = firstChar + otherChars;
// alert(finalName);


//TESTING BOOKS CODE!
str = "Thisisa  hi";
for(var i=0; i<str.length; i++){
    if(str.slice(i, i+2) === "  "){
        // alert("NO!");
        break;
    }
}


// TASK NUMBER 2 
var finalName;
var myName = "My name is SYED AHSAN SYED AHSAN and I'm a person";
for(var i=0; i<myName.length; i++){
    if(myName.slice(i, i+10) === "SYED AHSAN"){
        finalName = myName.slice(0,i) + "Syed Hasan" + myName.slice(i+10);
    }
}
// alert(finalName);

// using indexOf
num = myName.indexOf("SYED AHSAN");
myName = myName.slice(0, num) + "Syed Hasan" + myName.slice(num+10);
// alert(myName);

myName = myName.replace(/SYED AHSAN/g, 'Syed Hasan');
alert(myName);






