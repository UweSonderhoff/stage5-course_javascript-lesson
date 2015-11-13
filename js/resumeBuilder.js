// Console.log function test + defining variables for my name and role.
/* not used anymore
var name = "Uwe Sonderhoff";
console.log(name);

var role = "Product Manager";
*/

/*
Replace method used with two different variables where a string is being replaced
and the string is being rendered in html by selecting and CSS ID
*/
var awesomeThoughts = "I am Uwe and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);

//COMMENTED OUT: $("#main").append(funThoughts);


// Replacing method used with set email variable
var email = "uwe.sonderhoff@lecturio.de";
var NewEmail =
    email.replace("lecturio.de", "me.com");
console.log(email);
console.log(NewEmail);


// Playing with JavaScript objects

var bio = {
  "name" : "Uwe Sonderhoff",
  "role" : "Product Manager",
  "contact-info" : "Leipzig",
  "picture-url" : "url",
  "welcomeMsg" : "Welcome Message",
  "skills" : "Many"
}

// Combine .replace and .append/prepend between 2 js files and therewith adding content to a page by CSS ID
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#main").append(formattedwelcomeMsg);
