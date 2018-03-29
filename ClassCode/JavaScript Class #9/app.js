
function days(){

    var day = prompt("Enter a day: ");
    switch(day){
        case "Monday":
        case "Mon":
            alert("Its Monday.");
            break;
        case "Tuesday":
            alert("Okay, its tuesday today.");
            break;
        case "Wednesday":
            alert("Okay, its Wednesday today!");
            break;
        case "Thursday":
            alert("ALL GOOD!");
            break;
        case "Friday":
            alert("ITS GOOD!");
            break;
        case "Saturday":
            alert("ITS SOO GOOD!");
            break;
        case "Sunday":
            alert("Its monday tomorrow :(");
            break;       
        default:
            alert("Enter a valid day!");
    }

}

//NEVER ENDING LOOP
function whileLoops(){
    var a=7;
    while(a>=5){
        alert("Good!");
    }
}

//OUTPUTS: 0 1 2 3
function anotherWhile(){
    var i=0;
    while(i<=3){
        alert(i);
        i++;
    }
}

function whileLooping(){
    var i=0;
    while(i<=10){
        console.log(i);
        i+=2;
    }
}

function doWhileLoops(){

    var i=0; 
    do {
        alert(i);
    } while(i<0);

    var i=0; 
    do {
        console.log(i);
        i+=2;
    } while(i<=100);


}

doWhileLoops();