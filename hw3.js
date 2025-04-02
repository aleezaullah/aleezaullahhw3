/*
Name: Aleeza Wajeehullah
Date created: 3/17/25
Date last edited: 3/19/25
Version: 1.1
Description: Homework 3 Java Script Paitent Form
*/
//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;}

//Code below is used from misso hw help 3

//first name validation js (required for hw3)
function validateFname() {
    const fname = document.getElementById("fname").value.trim();
    const namePattern = /^[a-zA-Z'-]+$/;

    if (!fname) {
        document.getElementById("fname-error").innerHTML = "First name cannot be empty.";
        return false;
    }
    if (!namePattern.test(fname)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    }
    if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML = "First name must be at least 2 characters.";
        return false;
    }
    if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name cannot exceed 30 characters.";
        return false;
    }
    document.getElementById("fname-error").innerHTML = "";
    return true;
}

//middle initial validation js (required for hw3)
function validateMinitial(){
    minitial = document.getElementById("minitial").value;
    var namePattern = /^[A-Z]$/; 

    //makes middle initial be upper case
    minitial = minitial.toUpperCase();
    document.getElementById("minitial").value = minitial;

    //checks to make sure initial is only 1 character
    if (!minitial.match(namePattern)) { //checks if minitial matches pattern
        document.getElementById("minitial-error").innerHTML = "Middle initial must be a single uppercase letter.";
        return false;
    } else {
        document.getElementById("minitial-error").innerHTML = "";
        return true; 
    }
}

//last name validation js (required for hw3)
function validateLname(){
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/; 
    //checks if there is a value input for last name 
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name cannot be empty."; 
        return false; 
    } else if (lname != "") {
    if (!lname.match(namePattern)) { //checks if lname matches pattern
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) { //checks that name is at least 1 character 
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    } else if (lname.length > 30) { //checks that name is less than 30 characters
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true; 
    }
}
}
//above is code used from misso hw help

// Below is required code snippet from hw2 help by misso
function validateDob() {
    let dob = document.getElementById("dob").value;
    const inputDate = new Date(dob);
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 120);

    if (inputDate > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date cannot be in the future.";
        return false;
    } else if (inputDate < maxDate) {
        document.getElementById("dob-error").innerHTML = "Date cannot be more than 120 years ago.";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}
 

//ssn validation 
function validateSsn(){
    const ssn = document.getElementById("ssn").value;

    //ssn regex pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid Social Security Number.";
        return false;
        } else {
        document.getElementById("ssn-error"). innerHTML = "";
        return true;
        }
    }

    //address 1 validation 
    function validateAddress1(){
        var ad1 = document.getElementById("address1").value;
        console.log(ad1);
        console.log(ad1.length);

        if(ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = "Please enter something on address line"; 
        return false; 
        } else {
        document.getElementById("address1-error").innerHTML = ""; 
        return true;
        }

    }

    //city validation (required for hw3)
    function validateCity(){
        city = document.getElementById("city").value.trim();

        if (!city){
            document.getElementById("city-error").innerHTML = "City cannot be left blank. ";
            return false; 
        } else {
            document.getElementById("city-error").innerHTML = "";
            return true; 
        }
    }

//zipcode validation 
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g,"")// removes any non-number and non-dash characters

if (!zip) {
    document.getElementById("zcode-error").innerHTML = "Enter a valid Zip Code.";
    return false;
}

if (zip.length > 5) {
zip = zip.slice(0,5); //removes all digits after first 5
}

zipInput.value = zip;
document.getElementById("zcode-error").innerHTML = "";
return true; 

}

//email validation
function validateEmail() {
    let email= document.getElementById ("email").value;
    var EmailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex pattern for email

    if (email =="") {
    document.getElementById ("email-error").innerHTML = "Email cannot be empty.";
    return false;

    } else if (!email.match(EmailR)){
    document.getElementById ("email-error").innerHTML = "Please enter a valid email address." ;
    return false;

    } else {
    document.getElementById ("email-error").innerHTML = ""; 
    return true;
    }
 }

//phone number validation
function validatePnum() {
    const pnumInput = document.getElementById("pnum");
    let pnum = pnumInput.value.replace(/\D/g, ""); // Removes non-numeric characters

    if (pnum.length !== 10) {
        document.getElementById("pnum-error").innerHTML = "Phone number must be 10 digits.";
        return false;
    }

    const formattedPnum = pnum.slice(0, 3) + "-" + pnum.slice(3, 6) + "-" + pnum.slice(6);
    pnumInput.value = formattedPnum;
    document.getElementById("pnum-error").innerHTML = "";
    return true;
}


//username validation (used misso snippet)  
function validateUid() {
    uid = document.getElementById("uid").value;

    // makes username lowercase 
    uid = uid.toLowerCase();

    //display lowercase username 
    document.getElementById("uid").value = uid;

    if (uid.length == 0 ) {
        document.getElementById("uid-error").innerHTML = "Username field cannot be empty.";
        return false;
    }
    //checks that username doesn't start with a number
    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = "Username cannot start with a number";
        return false;
    }

    //checks that username is only consisted of letters, numbers, or underscores
    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML=" Username only contains letters, numbers, and underscores.";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = "Username must be a t least 5 characters.";
        return false;
    }
        
    //checks that username does not have 30+ characters
       else if(uid.length > 30) {
        document.getElementById("uid-error").innerHTML = "Username cannot exceed 30 characters.";
        return false;
    }   else { //if all the above checks then username is valid
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

//password validation 
function validatePassword() {
    const pass = document.getElementById("pass").value; 
    const uname = document.getElementById("uname").value.toLowerCase(); //section was added to convert to lowercase as required on rubric
    const firstName = document.getElementById("fname").value.toLowerCase();
    const lastName = document.getElementById("lname").value.toLowerCase();

    //sets up and initializes array 
    const errorMessage = [];

    //checks for at least one lowercase letter
    if (!pass.match(/[a-z]/)){
        errorMessage.push("Enter at least one lowercase letter."); 
    }

    //this checks for uppercase letters at least one required
    if (!pass.match(/[A-Z]/)){
        errorMessage.push("Enter at least one uppercase letter.");
    }

    //this checks for numbers in password
    if (!pass.match(/[0-9]/)){
        errorMessage.push("Enter at least one number.");
    }

    //this checks for special characters  
    if (!pass.match(/[!@#\$%\^&*\-_\.\+\(\)]/)) {
        errorMessage.push("Enter at least one special character.");
    }

    //this checks that username is not included in the password  
    if (pass==uname || pass.includes(uname)) {
        errorMessage.push("Password cannot contain username.");
    }

    //displays error messages
    const errorContainer = document.querySelector(".pass-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");
 }

//confirm password validation 
function confirmPassword() {
    const pass1 = document.getElementById("pass").value;
    const pass2 = document.getElementById("pass_con").value;

    if (pass1 !== pass2) {
        document.getElementById("pass2-error").innerHTML = "Passwords do not match.";
        return false;
    } else {
        document.getElementById("pass2-error").innerHTML = "Passwords match.";
        return true;
    }
} 



//shows user enterted data on to another message box from the review button
function reviewInput(){
    var formcontent = document.getElementById("signup");
    var formoutput= "";
    var i;
    formoutput = "<table class = 'output'><th colspan = '3'> Your Information: </th>";
    for (i=0; i< formcontent.length; i++) {
        if (formcontent.elements[i].value!= "") {
            datatype = formcontent.elements[i].type;
            switch (datatype){
                case"checkbox":
                    if (formcontent.elements[i].checked){
                        formoutput = formoutput + "<tr><td align= 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = formoutput + "<td class = 'outputdata'>&#x2713; </td></tr>";
                }
                    break;
                case "radio": 
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr> <td align='right'" + formcontent.elements[i].name + "</td>";
                        formoutput = "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break; 
                case "button":
                case "submit":
                case "reset":
                    break; 
                default:
                    formoutput = formoutput + "<tr><td align= 'right' >" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class = 'outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            
            }
        }
    }
    if (formoutput.length > 0){
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
} 

// this removes the user input when the user wants to delete entered data
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
 }

//this shows alert box (new addition to hw3)
 function showAlert() {
    var alertBox = document.getElementById("alert-box"); 
    var closeAlert = document.getElementById("close-box");

    alertBox.style.display = "block"; 
    closeAlert.onclick = function () {
        alertBox.style.display = "none"; 
    }
 }
 //validates everything on the form from the submit button results (new addition to hw3)
 function validateInput() {
    let valid = true; 

    if (!validateFname()); {
        valid = false; 
    }
    if (!validateMinitial()); {
        valid = false; 
    }
    if (!validateLname()); {
        valid = false; 
    }
    if (!validateDob()); {
        valid = false; 
    }
    if (!validateSsn()); {
        valid = false; 
    }
    if (!validateAddress1()); {
        valid = false; 
    }
    if (!validateCity()); {
        valid = false; 
    }
    if (!validateZcode()); {
        valid = false; 
    }
    if (!validateEmail()); {
        valid = false; 
    }
    if (!validatePnum()); {
        valid = false; 
    }
    if (!validateUname()); {
        valid = false; 
    }
    if (!validatePassword()); {
        valid = false; 
    }
    if (!confirmPassword()); {
        valid = false; 
    }
    if (valid) {
        document.getElementById("submit").disabled = false; 
    } else {
        showAlert();
    }

 }
//this is the END OF JAVA SCRIPT