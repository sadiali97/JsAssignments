// function formValidation()
// {
// var uid = document.registration.userid;
// var passid = document.registration.passid;
// var uname = document.registration.username;
// var uadd = document.registration.address;
// var ucountry = document.registration.country;
// var uzip = document.registration.zip;
// var uemail = document.registration.email;
// var umsex = document.registration.msex;
// var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
// {
// if(passid_validation(passid,7,12))
// {
// if(allLetter(uname))
// {
// if(alphanumeric(uadd))
// { 
// if(countryselect(ucountry))
// {
// if(allnumeric(uzip))
// {
// if(ValidateEmail(uemail))
// {
// if(validsex(umsex,ufsex))
// {
// }
// } 
// }
// } 
// }
// }
// }
// }
// return false;
// }

//========================================= C H A P T E R # 1
function alt1() {
    alert("Welkom to my website!");
}
function alt2() {
    alert("Error! Please emter a valid password.");
}
function alt3() {
    alert("JavaScript Alert\n Welcome to JS land...");
}
function alt4() {
    alert("Welcome to JS Land...");
    alert("Happy Coding\n Prevent this page from creating additional dialogs")
}
function alt5() {
    alert("WELCOME TO ThIS PAGE");
}
function alt6() {
    alert("The script tag is placed on\n Body (Inside your page's HTML)");
}
function alt7() {
    //    var a = ("Hello...I can run JS through my web browser's console");
    console.log("Hello...I can run JS through my web browser's console");
}

//========================================= C H A P T E R # 2
function chap2() {
    // Q#1
    var username = "Sadia";
    alert(username);
    // Q#2
    var myName = " Sadia Ali";
    alert(myName);
    // Q#3
    var message = "Hello World";
    alert(message);
}
function bio() {
    name1 = "I'm Sadia Ali";
    age = "I'm 23 years old";
    certified = "certified Mobile Application Development";
    alert(name1);
    alert(age);
    alert(certified);
}
function pizza() {
    var piza = "Pizza\nPizz\nPiz\nPi\nP";
    alert(piza);
}
function email() {
    var email = "sadiaali624726@gmail.com";
    alert("My email Address is: " + email);
}
function book() {
    var book = "A smarter way to learn JavaScript";
    alert("I am trying to learn from the book " + book);
}
function cont() {
    document.write('Yah! I can write HTML content through JavaScript.');
}
function design() {
    design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
    alert(design);
}
//================================================= C H A P T E R # 3
function age() {
    var age = 23;
    alert("I am " + age + " years old");
}
function track() {
    var track = 14;
    alert("You have visited this page" + " " + track + " " + " times");
}
function birthYear() {
    var birthYear = 1997;
    alert("My birth year is " + birthYear + "\nData type of my decleared variable is number");
}
function cStore() {
    var yourName = "Abdul Basit";
    var productNmae = "TSirt";
    var productQty = 5;
    document.getElementById('cStore').innerHTML = yourName + " ordered " + productQty + " " + productNmae + " on XYZ clothing store";
}

//=========================================== C H A P T E R # 4
function box1() {
    var a = "Sadia Ali";
    var b = 23;
    var c = "Web & Mobile Hybrid Application Development";
    document.getElementById('box1').innerHTML = "I am " + a + ", I am " + b + " years old and I am learning " + c;
}
function box2() {
    document.getElementById('box2').innerHTML = "<h2>Legal Variables are : $name, _IDname, letter, name1</h2>" +
        "<br>" + "<h2>Illegal Variables are : name, ID, 1234, var, ABC</h2>";
}
function box3() {
    document.getElementById('box3').innerHTML = "<h2>“Rules for naming JS variables”</h2>" +
        "<br>" + "<p>Variable names can only contain: any letter starting from lowercase, should not a reserve keyword, should not starting from a number, $my_1stVariable $name, _IDname, letter, name1 </p>" +
        "<br>" + "<p>Variables must begin with a $name, _IDname, letter, name1 </p>" + "<br>" +
        "<p>Variable names are case Sensitive </p>" + "<br>" + "<p>Variable names should not be JS Keyword</p>";
}

//=========================================== C H A P T E R # 5
function boxes1() {
    // Q1,Q2
    var a = 10;
    var b = 5;
    // alert("The sum of " + a + " and " + b + " is : " + c);
    document.getElementById('boxes1').innerHTML = "The sum of " + a + " and " + b + " is : " + eval(a + b);
    document.getElementById('boxes2').innerHTML = "The sub of " + a + " and " + b + " is : " + eval(a - b);
    document.getElementById('boxes3').innerHTML = "The mul of " + a + " and " + b + " is : " + a * b;
    document.getElementById('boxes4').innerHTML = "The div of " + a + " and " + b + " is : " + a / b;
}
function boxes5() {
    var a;
    a = "Value after variable declaration is undefined";
    var b = 5;
    document.getElementById('boxes5').innerHTML = a + "<br>Initial value : " + b +
        "<br>Value after increament is : " + ++b + "<br>Value after addition is : " + eval(b + 7) +
        "<br>After the decreament is : " + eval((b + 7) - 1) + "<br>The remainder is : " + eval(b % 3);
}
function boxes6() {
    var ticket = 600;
    var qty = 5;
    document.getElementById('boxes6').innerHTML = "Total cost to buy " + qty + " ticket to a movie is " + eval(ticket * qty) + "PKR";
}
function boxes7() {
    var a = prompt('Type no. to see table');
    var myString = "";
    for (i = 1; i <= 10; i++) {
        myString += a + " x " + i + " = " + (i * a) + "<br/>";
    }
    document.getElementById('boxes7').innerHTML = myString;
}
function boxes8() {
    var cel = 32;
    var far = 70;
    var conv = eval((cel * 9 / 5) + 32);
    document.getElementById('boxes8').innerHTML = cel + "<sup>0</sup>C is " + conv + "<sup>0</sup>F";
}
function boxes9() {
    var p1 = 650;
    var p2 = 100;
    var qty1 = 3;
    var qty2 = 7;
    var charges = 100;
    var total = eval((p1 * qty1) + (p2 * qty2) + charges);
    document.getElementById('boxes9').innerHTML = "<h2>Shopping Cart</h2><br>" + " price of item 1 is " + p1 +
        "<br>Quantity of item 1 is " + qty1 + "<br>Price of item 2 is " + p2 + "<br>quantity of item 2 is " + qty2 +
        "<br>Shipping Charges " + charges + "<br>Total cost of your oreder is " + total;
}
function boxes10() {
    var tmarks = 100;
    var obtMarks = 80;
    var per = eval((obtMarks * 100) / tmarks);
    document.getElementById('boxes10').innerHTML = "Total Marks : " + tmarks + "<br>Obtained Marks : " + obtMarks +
        "<br>Percentage : " + per + "%";
}
function boxes11() {
    var a = eval(10 * 104);
    var b = eval(25 * 28);
    document.getElementById('boxes11').innerHTML = "<h2>Currency in PKR</h2><br>" + "Total Currency in PKR : " + eval(a + b);
}
function boxes12() {
    var a = 2;
    var b = eval(a + 5);
    var c = eval(b * 10);
    var d = eval(c / 2);
    document.getElementById('boxes12').innerHTML = "The value of a variable is : " + a + "<br>After adding 5 is : " +
        b + "<br>Multiplay by 10 is : " + c + "<br>Dividing by 2 is : " + d;
}
function boxes13() {
    var currentyr = 2020;
    var birthyr = 1997;
    var age = eval(currentyr - birthyr);
    document.getElementById('boxes13').innerHTML = "<h2>Age Calculate</h2><br>Current Year : " + currentyr +
        "<br>Birth Year : " + birthyr + "<br>Your Age is : " + age;
}
function boxes14() {
    var r = 20;
    var c = eval(2 * 3.14 * r);
    var a = eval(3.14 * (r * r));
    document.getElementById('boxes14').innerHTML = "Radius of a circle is : " + r + "<br>The circumference is : " +
        c + "<br>The Area is : " + a;
}
function boxes15() {
    var favoriteSnack = "Lays";
    var currentAge = 24;
    var maxAge = 60;
    var perDay = 2;
    var tot = (maxAge - currentAge) * perDay;
    document.getElementById('boxes15').innerHTML = "<br> Favourit snack is : " + favoriteSnack +
        "<br> Current age is : " + currentAge + "<br> Estimsted age is : " + maxAge + "<br> amount of snacks per day is : " +
        perDay + "<br> You will need " + tot + " " + favoriteSnack + " to last you until the rip old age " + maxAge;
}

//=========================================== C H A P T E R # 6 - 9
function mth1() {
    var a = 10;
    document.getElementById('mth1').innerHTML = "<h2>Result:</h2> " + "<br>" + "The value of a is : " + a +
        "<br>" + "<br>The value of ++a is : " + ++a + "<br>Now the value is : " + a + "<br>"
        + "<br>The value of a++ is : " + a + "<br>Now The value of a is : " + ++a + "<br>"
        + "<br>The value of --a is : " + --a + "<br>Now The value of a is : " + a + "<br>"
        + "<br>The value of a-- is : " + a-- + "<br>Now The value of a is : " + a;
}
function mth2() {
    var a = 2;
    var b = 1;
    var result = eval(--a - --b + ++b + b--);
    document.getElementById('mth2').innerHTML = "a is : " + a + "<br>b is : " + b + "<br>Result : " + result;
}
function mth3() {
    a = prompt('Type User Name');
}
function mth4() {
    //not understand
    var a = Number(prompt('type a number'));
    var b = "sadia";
    result = a * b;
    document.getElementById('mth4').innerHTML = result;
}
function mth5() {
    var a1 = prompt('Type Subjects Name');
    var a2 = prompt('Type Subjects Name');
    var a3 = prompt('Type Subjects Name');
    var b1 = a1;
    var b2 = a2;
    var b3 = a3;
    var tmarks = 100;
    var c1 = Number(prompt('Type Obtained marks of 1st Subject'));
    var c2 = Number(prompt('Type Obtained marks of 2nd Subject'));
    var c3 = Number(prompt('Type Obtained marks of 3rd Subject'));
    var tobtmarks = eval(c1 + c2 + c3);
    var per1 = eval((c1 * 100) / tmarks);
    var per2 = eval((c2 * 100) / tmarks);
    var per3 = eval((c3 * 100) / tmarks);
    var tper = eval((per1 + per2 + per3) / 3);
    document.getElementById('mth5').innerHTML = "<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>" +
        "<tr><td>" + a1 + "</td><td>" + tmarks + "</td><td>" + c1 + "</td><td>" + per1 + "%</td></tr>" +
        "<tr><td>" + a2 + "</td><td>" + tmarks + "</td><td>" + c2 + "</td><td>" + per2 + "%</td></tr>" +
        "<tr><td>" + a3 + "</td><td>" + tmarks + "</td><td>" + c3 + "</td><td>" + per3 + "%</td></tr>" +
        "<tr><td>" + " " + "</td><td>" + eval(tmarks + tmarks + tmarks) + "</td><td>" + " " + "</td><td>" + tper + "%</td></tr>" + "<table/>";
}

//=========================================== C H A P T E R # 9 - 11
function city() {
    var city = prompt('type your city name here', 'your city name is');
    if (city == "karachi") {
        document.getElementById('city').innerHTML = "Welcome to city of light " + city;
    }
    else {
        document.getElementById('city').innerHTML = city + " is not city of light";
    }
}
function gender() {
    var gender = prompt('type your gender here', 'your gender is');
    if (gender == "male") {
        document.getElementById('gender').innerHTML = "Good Morning Sir";
    }
    else if (gender == "female") {
        document.getElementById('gender').innerHTML = "No Message For you";
    }
    else {
        document.getElementById('gender').innerHTML = "No Message For you";
    }
}
function signal() {
    var color = prompt('type color for signal red/yellow/green', 'type red/yelleow/green');
    if (color == "red") {
        document.getElementById('signal').innerHTML = "Must Stop";
    }
    else if (color == "yellow") {
        document.getElementById('signal').innerHTML = "Ready to Move";
    }
    else if (color == "green") {
        document.getElementById('signal').innerHTML = "Move Now";
    }
    else {
        document.getElementById('gender').innerHTML = "No Message For you Please correct your Message";
    }
}
function fuel() {
    var fuel = prompt('type remaining fuel', 'type remining fuel in litter');
    if (fuel <= 0.25) {
        document.getElementById('fuel').innerHTML = "Please refill the fuel in your car";
    }
    else {
        document.getElementById('fuel').innerHTML = "No Need to fill the Fuel";
    }
}
function condition1() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }
}
function condition2() {
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }
}
function condition3() {
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }
}
function condition4() {
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }
}
function condition5() {
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
}
function condition6() {
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
}
function markSheet() {
    var tMarks = 300;
    var obtMarks = Number(prompt('Type here Obtained Marks (1-300)', 'ontained marks'));
    var percentage = eval((obtMarks * 100) / tMarks);
    if (percentage < 60 && percentage >= 10) {
        document.getElementById('mSheet').innerHTML = "Total Marks : " + tMarks + "<br>" +
            "Obtained Marks : " + obtMarks + "<br>" + "Percentage : " + percentage + "% <br>" +
            "Grade : Fail" + "<br>" + "Remarks : Sorry";
    }
    else if (percentage >= 60 && percentage < 70) {
        document.getElementById('mSheet').innerHTML = "Total Marks : " + tMarks + "<br>" +
            "Obtained Marks : " + obtMarks + "<br>" + "Percentage : " + percentage + "% <br>" +
            "Grade : B" + "<br>" + "Remarks : You Need to improve";
    }
    else if (percentage >= 70 && percentage < 80) {
        document.getElementById('mSheet').innerHTML = "Total Marks : " + tMarks + "<br>" +
            "Obtained Marks : " + obtMarks + "<br>" + "Percentage : " + percentage + "% <br>" +
            "Grade : A" + "<br>" + "Remarks : Goode";
    }
    else if (percentage >= 80 && percentage <= 100) {
        document.getElementById('mSheet').innerHTML = "Total Marks : " + tMarks + "<br>" +
            "Obtained Marks : " + obtMarks + "<br>" + "Percentage : " + percentage + "% <br>" + "Grade : A-One"
            + "<br>" + "Remarks : Excellent";
    }
    else {
        document.getElementById('mSheet').innerHTML = "Grade : Not Existing";
    }
}
function game() {
    var scrtNum = Number(prompt('Type a number from 1 to 10', 'type here'));
    var a = 5;
    if (scrtNum === a) {
        document.getElementById('game').innerHTML = "Bingo! Correct Answer";
    }
    else {
        document.getElementById('game').innerHTML = "“Close enough to the correct answer”";
    }
}
function chNum() {
    var a = Number(prompt('type num to check divisible by 3 or not', 'type number'));
    if (a % 3 == 0) {
        document.getElementById('chNum1').innerHTML = a + " is divisible by 3";
    }
    else {
        document.getElementById('chNum1').innerHTML = a + " is not divisible by 3";
    }
    var b = Number(prompt('type num to check Even/Odd', 'type number'));
    if (b % 2 == 0) {
        document.getElementById('chNum2').innerHTML = b + " is Even Number";
    }
    else {
        document.getElementById('chNum2').innerHTML = b + " is Odd Number";
    }
}
function temp() {
    var t = Number(prompt('Type num for temperature', 'type num here'));
    if (t > 40) {
        document.getElementById('temp').innerHTML = "“It is too hot outside.”";
    }
    else if (t > 30) {
        document.getElementById('temp').innerHTML = " “The Weather today is Normal.”";
    }
    else if (t > 20) {
        document.getElementById('temp').innerHTML = "“Today’s Weather is cool.”";
    }
    else if (t > 10) {
        document.getElementById('temp').innerHTML = "“OMG! Today’s weather is so Cool.”";
    }
    else {
        document.getElementById('temp').innerHTML = "Type Correct Temperature";
    }
}

//=========================================== C H A P T E R # 12 - 13
function ascii() {

}
function lrg() {
    var val1 = Number(prompt('Type Number to chaeck equal/larger', 'type number'));
    var val2 = Number(prompt('Type Number to chaeck equal/larger', 'type number'));
    if (val1 == val2) {
        document.getElementById('lrg').innerHTML = val1 + " is equal to " + val2;
    }
    else if (val1 > val2) {
        document.getElementById('lrg').innerHTML = val1 + " is larger than " + val2;
    }
    else {
        document.getElementById('lrg').innerHTML = val1 + " is smaller than " + val2;
    }
}
function posneg() {
    var val = Number(prompt('Type Number to chaeck positive/negative/zero', 'type number'));
    if (val > 0) {
        document.getElementById('posneg').innerHTML = val + " is a possitive number ";
    }
    else if (val < 0) {
        document.getElementById('posneg').innerHTML = val + " is a negative number ";
    }
    else {
        document.getElementById('posneg').innerHTML = " The value is zero ";
    }
}
function vowel() {
    var str = prompt('type a character to check vowel', 'type a character');
    if (str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u' ||
        str == 'A' || str == 'E' || str == 'I' || str == 'O' || str == 'U') {
        document.getElementById('vowel').innerHTML = "True";
    }
    else {
        document.getElementById('vowel').innerHTML = "False";
    }
}
function password() {
    var pass = "MobileApp";
    var userpass = prompt('type your password', 'Hint: MobileApp');
    if (pass === userpass) {
        document.getElementById('pass').innerHTML = "Correct! The password you entered matches the original password";
    }
    else {
        document.getElementById('pass').innerHTML = "Incorrect password";
    }
}
function time() {
}
function cal() {
    var a = 20;
    var b = 10;
    document.getElementById('cal1').innerHTML = "The sum of " + a + " and " + b + " is : " + eval(a + b);
    document.getElementById('cal2').innerHTML = "The sub of " + a + " and " + b + " is : " + eval(a - b);
    document.getElementById('cal3').innerHTML = "The mul of " + a + " and " + b + " is : " + a * b;
    document.getElementById('cal4').innerHTML = "The div of " + a + " and " + b + " is : " + a / b;
}
//======================================== C H A P T E R # 14 - 16
function fun1() {
    var arr1 = [];
    var arr2 = new Array();
    arr1 = new Array("Student Name");
    document.getElementById('fun1').innerHTML = arr1;
}
function fun2() {
    var person = {
        firstName: "",
        lastName: ""
    };
    document.getElementById('fun2').innerHTML = person;
}
function fun3() {
    var fruit = ["Apple", " Mango", " Banana"];
    document.getElementById('fun3').innerHTML = fruit;
}
function fun4() {
    var numbr = [1, 2, 3, 4, 5];
    document.getElementById('fun4').innerHTML = numbr;
}
function fun6() {
    var mixedArray = [1, "Bob", "Now is", true];
    document.getElementById('fun6').innerHTML = mixedArray;
}
function fun7() {
    var deg = ['SSC', ' HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
    var mydeg = "";
    for (var i = 0; i <= 7; i++) {
        mydeg += i + ") " + deg[i] + "<br>";
        document.getElementById('fun7').innerHTML = mydeg;
    }
}
// function fun8() {
//     var stName = [ 'Ali','Ahmed', 'Ahsan'];
//     var a1 =Number(prompt('type score'));
//     for (var i = 0 ; i <= 2 ; i++){

//     }
//     var tmarks = 500;
//     var per = "";
//     for (var i = 0 ; i <= 2 ; i++){
//         per += "Score of " + stName[i] + ". Percentage : " + eval(()) + "<br>";
//     document.getElementById('fun8').innerHTML = mydeg;
//     }
// }
// }
function fun9() {
    var deg = ['red', 'yellow', 'blue', 'green'];
    var mydeg = "";
    for (var i = 0; i <= deg.length; i++) {
        mydeg += i + ") " + deg[i] + "<br>";
        document.getElementById('fun9').innerHTML = mydeg;
    }
}
function fun10() {
    var fruits = [22, 14, 10, 12, 25];
    document.getElementById('fun9').innerHTML = "Score of Students : " + fruits;
    fruits.sort();
    document.getElementById('fun10').innerHTML = "Ordered Score of Students : " + fruits;
}
function fun11() {
    var deg = [' Karachi ', ' Lahore', ' Islamabad'];
    var mydeg = "";
    for (var i = 0; i <= 2; i++) {
        mydeg += deg[i];
        document.getElementById('fun11').innerHTML = mydeg;
    }
}
// function cal() {
//     var x=Number(prompt('type a 1st number','type here'));
// 	var y=Number(prompt('type a 2nd number','type here'));
// 	var sum=eval(x+y);
// 	document.getElementById('sum').innerHTML="the Addition of " + x + " and " + y + " is " + sum ; 
// 	var sub=eval(x-y);
// 	document.getElementById('sub').innerHTML="the subtraction of " + x + " and " + y + " is " + sub ; 
// 	var mul =eval(x*y);
// 	document.getElementById('mul').innerHTML="the multiplication of " + x + " and " + y + " is " + mul ; 
// }

//======================================= C H A P T E R # 17 - 20
function func1() {
    // var arr[][] = "";
    // alert(arr[][]);
}
function func2() {

}
function func3() {
    var count = "";
    for (i = 1; i <= 10; i++) {
        count += i + "<br/>";
    }
    document.getElementById('func3').innerHTML = count;
}
function func4() {
    var a = Number(prompt('Type no. to see table'));
    var b = Number(prompt('type length'));
    var myString = "";
    for (i = 1; i <= b; i++) {
        myString += a + " x " + i + " = " + (i * a) + "<br/>";
    }
    document.getElementById('func4').innerHTML = myString;
}
function func5() {
    var frt = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
    for (var i = 0; i < frt.length; i++) {
        document.getElementById('func5').innerHTML = "" + frt[i];
    }
}


//========================================= C H A P T E R # 21 - 25
function atask1() {
    var firstName = prompt('type your first name');
    var lastName = prompt('tpye your last name');
    var fullName = "My name is " + firstName + " " + lastName;
    document.write(fullName);
}
function atask2() {
    var frtmodel = prompt('type your favorite mobile model name');
    document.write("My favorite mobile is " + frtmodel + "<br>Length of String is : " + frtmodel.length);
}
function atask3() {
    var str = "pakistani";
    for (var i = 0; i <= str.length; i++) {
        if (str[i] === "n") {
            document.write("n is placed on " + [i] + " index");
        }
    }
}
function atask4() {
    var str = "hello world";
    for (var i = 0; i <= str.length; i++) {
        if (str[i] === "l") {
        }
    }
    document.write("l is placed on " + str.lastIndexOf("l") + " index<br>");
}
function atask5() {
    var str = "pakistani";
    document.write("Character at index 3 is: " + str[3] + " index");
}
function atask6() {
    var firstName = prompt('type your first name');
    var lastName = prompt('tpye your last name');
    var fullName = "My name is " + firstName + " " + lastName;
    document.write(fullName);
}
function atask7() {
    var city1 = "hyder";
    var city2 = "Islam";
    var city = "abad";
    document.write("City: " + city1 + city + "<br>After replacement: " + city1.replace(city1, city2) + city);
}
function atask8() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var message = message.replace("and", "&");
    document.write(message);
}
function atask9() {
    var str = "254";
    var num = 254;
    document.write("value: " + str + "<br>Type: " + typeof (str) + "<br>value: " + num + "<br>Type: " + typeof (num));
}
function atask10() {
    var a = prompt('convert into upper case');
    var b = a.toUpperCase();
    document.write(b);
}
function atask11() {
    // nh para ye Question
    //Write a program that takes user input. Convert and
    // show the input in title case
    var a = prompt('convert into upper case');
    var b = a.slice(0, 1)
    var c = b.toUpperCase();
    document.write(c + a);
}
function atask12() {
    var num = 25.55;
    document.write(num + " After round off is: " + Math.floor(num));
}
function atask13() {
    // nh para ye Question
    // Write a program to take user input and store username
    // in a variable. If the username contains any special symbol
    // among [@ . , !], prompt the user to enter a valid username.
    // For character codes of [@ .
    // Note:
    // ASCII code of ! is 33
    // ASCII code of , is 44
    // ASCII code of . is 46
    // ASCII code of @ is 64


    // var userName = prompt('your name with @,.!');
    // for(var i = 0; i < userName.length; i++) {
    //     if (userName[i] === "@" || userName[i] === "." || userName[i] === "," || userName[i] === "!" ||) {
    //         }
    // }
    // document.write("user name");
}
function atask14() {
    var item = prompt('search any item', '["cake","apple pie","cookie","chips","patties"]');
    item = item.toLowerCase();
    var fruit = ["cake", "apple pie", "cookie", "chips", "patties"];
    for (var i = 0; i < fruit.length; i++) {
        if (fruit[i] == item) {
            document.write("item found from the list");
        }
        else ("not found!");
    }
}
function atask15() {
    var userPass = prompt('type password');
    if (userPass.length === 6) {
        document.write("valid password");
    }
}
function atask16() {
    var str = "University of Karachi";
    var arr = str;
    for (var i = 0; i < arr.length; i++) {
        document.write(arr[i] + "<br>");
    }
}
function atask17() {
    var str = "pakistan";
    var check = "";
    for (var i = str.length - 1; i >= 0; i--) {
        check += str[i];
    }
    document.write("Last Character of this index " + str + " is: " + check[0]);
}
function atask18() {
    // nh para ye Question
    // You have a string “The quick brown fox jumps over the
    // lazy dog”. Write a program to count number of
    // occurrences of word “the” in given string.
}

//========================================= C H A P T E R # 26 - 30
function btask1() {
    var num = 15.454;
    document.write("Number: " + num + "<br>Round of Value: " + Math.round(num) + "<br>Floor Value: " +
        Math.floor(num) + "<br>Ceil Value: " + Math.ceil(num));
}
function btask2() {
    var num = Number(prompt('Type a negative number'));
    document.write("Number: " + num + "<br>Round of Value: " + Math.round(num) + "<br>Floor Value: " +
        Math.floor(num) + "<br>Ceil Value: " + Math.ceil(num));
}
function btask3() {
    //Write a program that displays the absolute value of a number.
    //E.g. absolute value of -4 is 4 & absolute value of 5 is 5
    var num1 = Number(prompt('Type a negative number'));
    var num = 1 * (-num1);
    document.write("Absolute Value of " + num1 + " is: " + num);
}
function btask4() {
    var a = Math.random();
    var improvedNum = (a * 6) + 1;
    var numberOfStars = Math.floor(improvedNum);
    document.write(numberOfStars);
}
function btask5() {
    // nh para ye Question
}
function btask6() {
    // nh para ye Question
}
function btask7() {
    var a = Number(prompt('your weight'));
    document.write("The weight of user is: " + a + " Kilogram");
}
function btask8() {
    var userNum = Number(prompt('type a no.'));
    var secNum = 5;
    if (userNum === secNum) {
        document.write("CONGRATULATIONS");
    }
    else {
        document.write("NO. NOT FOUND!");
    }
}




//========================================= C H A P T E R # 31 - 34
function ctask1() {
    var cdate = new Date();
    document.write(cdate);
}
function ctask2() {
    var monthname = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var cdate = new Date();
    var cmonth = cdate.getMonth();
    var month = monthname[cmonth];
    alert("Current Month : " + month);
}
function ctask3() {
    var dayname = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    var cdate = new Date();
    var cday = cdate.getDay();
    var day = dayname[cday];
    alert("Today is : " + day);
}
function ctask4() {
    var dayname = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    var cdate = new Date();
    var cday = cdate.getDay();
    var day = dayname[cday];
    if (day == 'sun' || day == 'sat') {
        alert("It's Fun day ");
    }
}
function ctask5() {
    var a = new Date();
    var day = a.getDate();
    if (day <= 15) {
        document.write("First Fifteenth days");
    }
    else {
        document.write("Last day of month");
    }
}
function ctask6() {
    var a = new Date();
    var d = new Date("jan 01,1970");
    var b = d.getTime();
    var mint = b / (1000 * 60);
    document.write("Current Date: " + a + "<br>Elapsed millisecond since january 1, 1970: " + b + "<br>Elapsed minutes since january 1, 1970: " + mint)
}
function ctask7() {
    var a = new Date();
    var hr = a.getHours();
    if (hr <= 12) {
        document.write(hr + " AM");
    }
    else {
        document.write(hr + " PM");
    }
}
function ctask8() {
    var laterDate = new Date("dec 31,2020");
    document.write(laterDate);
}
function ctask9() {
    var a = new Date();
    var atime = a.getTime();
    var b = new Date("june 18, 2015");
    var btime = b.getTime();
    var d = atime - btime;
    var day = Math.round(d / (1000 * 60 * 60 * 24 * 12));
    document.write(day + " days have passed since ramdan 1st, 2015");
}
function ctask10() {
    var a = new Date();
    var atime = a.getTime();
    var b = new Date("january 1, 2015");
    var btime = b.getTime();
    var d = atime - btime;
    var sec = Math.round(d / (1000));
    document.write("on reference date " + a + "<br>" + sec + " seconds has passed since beginning of 2015")
}
function ctask11() {
    //smjh nh aya proper result jesa chah rhi nh mila :(
    var a = new Date();
    var b = a.getHours();
    var d = b - 1;
    document.write("current date " + a + "<br>1 an hour ago " + d)
}
function ctask12() {
    var a = new Date();
    var ayr = a.getFullYear();
    var byr = ayr - 100;
    document.write("current date: " + a + "<br>100 year back: " + byr);
}
function ctask13() {
    var age = prompt('type your age');
    var a = new Date();
    var yr = a.getFullYear();
    var sun = yr - age;
    document.write(sun);
}
function ctask14() {
    var a = prompt('customer name');
    var b = prompt('current month');
    var c = prompt('no. of unit');
    var d = prompt('charges per unit');
    var e = c * d;
    var f = prompt('late payment charges');
    var g = e * f;
    document.write("<h1>K-Electric Bill</h1><br>Customer Name: " + a + "<br>Current Month: " + b + "<br>No. of unnit: " + c +
        "<br>Chrges per unit: " + d + "<br><br>Net Amount payable(Within Due Date: )" + e + "<br>Late payment Charges: " + f +
        "<br>Gross Amount Payable (After Due Date): " + g);
}
//========================================= C H A P T E R # 35 - 38
function dtask1() {
    var cdate = new Date();
    document.write(cdate);
}
function dtask2() {
    var firstName = "Ali";
    var lastName = "Ahmed";
    var fullName = "My name is " + firstName + " " + lastName;
    document.write(fullName);
}
function dtask3() {
    var first = Number(prompt('type first no'));
    var last = Number(prompt('tpye second no'));
    var sum = eval(first + last);
    document.write("The sum of  " + first + " and " + last + " is " + sum);
}
function dtask4(num1, num2) {
    var num1 = 15;
    var num2 = 10;
    document.write(num1 * num2);
}
function dtask5() {
    var a = Number(prompt('type  num for square'));
    var sq = a * a;
    document.write(sq);
}
function dtask6() {
    var n = Number(prompt('type number for factorial'));
    var c, r = 1;
    for (c = 1; c <= n; c++)
        r = r * c;
    document.write(r);
}
function dtask7() {
    var first = Number(prompt('type first no'));
    var last = Number(prompt('tpye last no'));
    for (i = first; i <= last; i++) {
        document.write(i + "<br>");
    }
}
function dtask8() {
    var b = Number(prompt('type value of base'));
    var p = Number(prompt('type value of perpendicular'));
    function hyp() {
        var base = b * b;
        var per = p * p;
        var h = (eval(base + per));
        document.write("Hypotenuse<sup>2</sup> = Base<sup>2</sup> + Perpendicular<sup>2</sup><br>" + h + " = " + base + " + " + per);
    }
    document.write(hyp() + " = " + base + " + " + per)
}
function dtask9(width, height) {
    var area = width * height;
    document.write(area);
}
function dtask10() {
    var myNAme = prompt('Palindrome', 'madam, maham, afifa, ana');
    var check = "";
    for (var i = myNAme.length - 1; i >= 0; i--) {
        check += myNAme[i];
    }
    if (myNAme === check) {
        document.write("The word " + myNAme + " is a palindrome");
    }
    else {
        document.write("The word " + myNAme + " is not a palindrome");
    }
}
function dtask11() {
    // nh ho para ye Question
    // Write a JavaScript function that accepts a string as a
    // parameter and converts the first letter of each word of the
    // string in upper case.
    // EXAMPLE STRING : 'the quick brown fox'
    // EXPECTED OUTPUT : 'The Quick Brown Fox'

    // var a = prompt('convert into upper case');
    // var b = a.toTitleCase();
    // document.write(b);
}
function dtask12() {
    // nh ho para ye Question
    // Write a JavaScript function that accepts a string as a
    // parameter and find the longest word within the string.
    // EXAMPLE STRING : 'Web Development Tutorial'
    // EXPECTED OUTPUT : 'Development'

    //     var str = "hello world";
    //     for (var i = 0; i <= str.length; i++) {
    //         if (str[i] === "l") {
    //         }
    //     }
    //     document.write("l is placed on " + str.lastIndexOf("l") + " index<br>");
    // }
    // function atask() {
    //     var str = "pakistani";
    //     document.write("Character at index 3 is: " + str[3] + " index");   
}
function dtask13() {
    // nh ho para ye Question
    // Write a JavaScript function that accepts two arguments, a
    // string and a letter and the function will count the number of 
    // occurrences of the specified letter within the string.
    // Sample arguments : 'JSResourceS.com', 'o'
}
function dtask14() {
    var r = prompt('radius');
    function calcCircumference() {
        var ans1 = eval("2*3.14*r");
        document.write(ans1);
    }
    function calcArea() {
        var ans2 = eval(3.14(r * r));
        document.write(ans2);
    }
    document.write(calcCircumference());
    document.write(calcArea());
}

//========================================= C H A P T E R # 38 - 44
function wtask1() {
    var base = Number(prompt('Enter base value'));
    var power = Number(prompt('Enter power value'));
    var p = 1;
    for (var i = 1; i <= power; i++) {
        p *= base;
        document.getElementById('wtask1').innerHTML = p;
    }
}
function wtask2() {
    var year = Number(prompt('CHECK Leep Year', 'LEEP YAER'));
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        document.getElementById('wtask2').innerHTML = year + " is a Leep Year";
    }
    else {
        document.getElementById('wtask2').innerHTML = year + " is not a Leep Year";
    }
}
function wtask3() {
    var a = Number(prompt('Enter base value'));
    var b = Number(prompt('Enter perpendicular value'));
    var c = Number(prompt('Enter Hypotenuse value'));
    var s = eval(a + b + c) / 2;
    var sa = s - a;
    var sb = s - b;
    var sc = s - c;
    var area = eval(s(sa)(sb)(sc));
    document.getElementById('wtask3').innerHTML = area;
}
function wtask4() {
    var a = Number(prompt('Enter Marks 1 value'));
    var b = Number(prompt('Enter Marks 2 value'));
    var c = Number(prompt('Enter Marks 3 value'));
    var per = eval(a + b + c) / 3;
    document.getElementById('wtask4').innerHTML = per + "%";
}
function wtask5() {

}
function wtask6() {
    const countVowels = str => Array.from(str)
        .filter(letter => 'aeiou'.includes(letter)).length;
    document.write(countVowels('Pleases read this application and give me gratuity')); // 5
    console.log(countVowels('test')); // 1
    console.log(countVowels('ddd')); // 0
    
}
function wtask7() {
    return finalResult;
}

function countVowelPair(word) {
    let count = 0;
    for (let i = 1; i < word.length; i++) {
        if (isVowel(word[i]) && isVowel(word[i - 1])) {
            count++;
        }
    }
    return count;
}

function isVowel(char) {
    let result = false;
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            result = true;
            break;
    }
    function wtask8() {
        var distance = Number(prompt('type Distance of 2 cities in km'));
        var meter = distance * 1000;
        var feets = meter * 3.28;
        var inches = feets * 12;
        var centimeter = inches * 30;
        document.getElementById('wtask8').innerHTML = distance + " Km<br>" + meter + " meter<br>" + feets + " feets<br>" + inches + " inches<br>" + centimeter + " cm"
    }
    function wtask9() {
        var hours = Number(prompt('type your overtime hours'));
        var perHour = 12;
        var salary = hours * perHour;
        document.getElementById('wtask9').innerHTML = salary;
    }
    function wtask10() {
        var amount = Number(prompt('type amount'));
        document.getElementById('wtask10').innerHTML = "Required notes of Rs. 100  : " + (amount / 100) + "<br>Required notes of Rs. 50  : " + (((amount % 100) % 50) / 10) + "<br>Required notes of Rs. 10 : " + (((amount % 100) % 50) / 10) + "<br>Amount still remaining is Rs. : " + (((amount % 100) % 50) % 10);
    }

    //========================================= C H A P T E R # 43 - 48
    function delBtn() {
        document.getElementById('delBtn').deleteRow();
    }
    function setNewImage() {
        document.getElementById('img1').src = "https://www.sciencenews.org/wp-content/uploads/2019/09/091119_mt_antisolar_feat-1028x579.jpg";
    }
    function setOldImage() {
        document.getElementById('img1').src = "https://cache.desktopnexus.com/thumbseg/2540/2540882-bigthumbnail.jpg";
    }
    function click() {
        var clicks = 0;
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    }
    //========================================= C H A P T E R # 49 - 52
    //========================================= C H A P T E R # 53 - 58
    function showImage(pic) {
        console.log(pic.src);
        var modalImage = document.getElementById('modalImage');
        modalImage.src = pic.src;
    }
    function readMore() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    //========================================= C H A P T E R # 59 - 67
    function ztask1() {
        var mainCont = document.getElementById('main-content')
        document.write(mainCont.childNodes)
    }
    function ztask2() {
        var rend = document.getElementsByClassName("render");
        document.write(rend);
        document.write(rend.nodeValue);
    }
    function ztask4() {
        var fName = document.getElementById('first-name');
        var fText = document.createTextNode("Sadia");
        fName.appendChild(fText);
        console.log(fName)
        document.write();
    }
    function ztask5() {
        var lName = document.getElementById('last-name');
        var lText = document.createTextNode("Ali");
        lName.appendChild(lText);
        document.write(lName);
    }
    function ztask6() {
        var eName = document.getElementById('email');
        var eText = document.createTextNode("Sadiaali624726@gmail.com");
        eName.appendChild(eText);
        document.write(eName);
    }
    function ztask2_1() {
        var form_Cont = document.getElementById('form-content')
        document.write("<br>Node type of id= form-content is: " + form_Cont.nodeType)
    }
    function ztask2_2() {
        var last_Name = document.getElementById('last-name')
        document.write("<br>Node type of id= lastName is: " + last_Name.nodeType)
    }
    function ztask2_3() {
        var lName = document.getElementById('last-name');
        var lText = document.createTextNode("M.Ali");
        lName.appendChild(lText);
        document.write("<br>Updated node of id= lastName is: " + lName)
    }
    function ztask2_4() {
        var mainCont = document.getElementById('main-content')
        document.write(mainCont.firstChild);
        document.write(mainCont.lastChild);
    }
    function ztask2_5() {
        var lName = document.getElementById('last-name');
        document.write(lName.nextSibling);
        document.write(lName.previousSibling);
    }
    function ztask2_6() {
        var eName = document.getElementById('email');
        document.write(eName.nodeType);
        document.write(eName.parentNode);
    }
