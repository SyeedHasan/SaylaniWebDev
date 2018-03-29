
var p = document.getElementById('header');

console.log(p.innerHTML);

var li = document.getElementById('ul');


console.log("LI : " + li.nodeType);

// var li = ul.childNodes[0];

var a = li.childNodes[1].innerHTML;

console.log(a);

console.log(a.nodeType);