/* COMMENTED OUT - not used anymore
// Console.log function test + defining variables for my name and role.
var name = "Uwe Sonderhoff";
console.log(name);

var role = "Product Manager";



// Replace method used with two different variables where a string is being replaced
// and the string is being rendered in html by selecting and CSS ID
var awesomeThoughts = "I am Uwe and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
console.log(funThoughts);

//$("#main").append(funThoughts);


// Replacing method used with set email variable
var email = "uwe.sonderhoff@lecturio.de";
var NewEmail =
    email.replace("lecturio.de", "me.com");
console.log(email);
console.log(NewEmail);
*/



// JavaScript objects: Creating Objects with different options

// --- Literal notation ---
var bio = {
  "name" : "Uwe Sonderhoff",
  "role" : "Product Manager",
  "contacts" : "Germany"
  "location" : "Leipzig",
  "welcomeMsg" : "Welcome Message",
  "skills" : ["Skill 1", "Skill 2"]
}

/* COMMENTED OUT
// --- Dot notation ---
var work = {}
work.workTitle = "Head of Product";
work.description = "Develop online product"
work.employer = "My Company";
work.yearsWorked = 5;
work.workLocation = "Leipzig";

// --- Bracket notation ---
var education = {}
education["schoolName"] = "GAB Gymnasium";
education["schoolYears"] = 9;
education["schoolLocation"] = "Benndorf";
*/

// --- Nested objects with literal notation ---
var education = {
    "schools": [
      {
        "type": "elementary school",
        "city": "Siebigerode",
        "majors": "none",
        "minors": "none",
        "graduationYears": 4,
        "onlineCourseInformation": "What should that be?"
      },
      {
        "type": "primary school",
        "city": "Benndorf",
        "majors": ["math", "english language"],
        "minors": ["economics", "german language"],
        "graduationYears": 9,
        "onlineCourseInformation": "What should that be?"
      }
    ]
}

var projects = {
    "project" : [
        {
            "title" : "Travel24.com Launch",
            "description" : "Launch and Development of Travel24.com",
            "date" : "2010-2012",
            "images" : ["no image", "no image"]
        },
        {
            "title" : "Apion",
            "description" : "Develop Mobile Apps in Android and iOS",
            "date" : "2012-2015"
            "images" : ["no image", "no image"]
        }
    ]
}

var work = {
    "jobs" : [
        {
            "workTitle" = "Head of Product";
            "description" = "Develop online product"
            "employer" = "My Company";
            "yearsWorked" = 5;
            "workLocation" = "Leipzig";
        }
    ]
}




/* COMMENTED OUT
// Combine .replace and .append/prepend between 2 js files and therewith adding content to a page by CSS ID
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#main").append(formattedWelcomeMsg);

var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.workTitle);
$("#main").append(formattedWorkTitle);

var formattedSchoolName = HTMLschoolName.replace("%data%", education.schoolName);
$("#main").append(formattedSchoolName);
*/
