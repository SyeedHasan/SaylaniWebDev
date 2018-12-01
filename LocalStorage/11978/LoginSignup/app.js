
//Stores data locally to login later
function Register(){

    var name = document.getElementById('userName').value;
    var email = document.getElementById('emailAddress').value;
    var number = document.getElementById('userNumber').value;
    var password = document.getElementById('userPassword').value;

    //Created later, now we can set this object
    var user = {
        name: name,
        email: email,
        number: number,
        password: password
    };


    //Get or set in Cache
    //Stores stuff locally in the system
    // or browser
    //Two arguments, property and value 
    //separated by commas
    //To check your local storage,
    //See these in devTools -> Application -> Local Storage -> File
    localStorage.setItem('Name', name);
    localStorage.setItem('Email', email);
    localStorage.setItem('Number', number);
    localStorage.setItem('Password', password);

    //Stringify converts the object into strings
    localStorage.setItem("UserData", JSON.stringify(user));


    //Redirects page to the login page for login
    window.location = 'login.html';

}

//Logs in if proper data is provided
function Login(){

    var email = document.getElementById('inpEmailAdd');
    var password = document.getElementById('inpUserPass');

    //Access the stored data
    var storedEmail = localStorage.getItem('Email');
    var storedPass = localStorage.getItem('Password');

    if(storedEmail === email.value && password.value === storedPass){
        alert("You are logged in. Welcome back!");    
        window.location = 'home.html';
    } 
    else {
        alert("Wrong user or password!");
        //Reset all values
        email.value = "";
        password.value = "";
    } 


}

