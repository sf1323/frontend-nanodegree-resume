// below contains all my bio info

var bio = {
	"name" : "Salvatore Fatica",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "216-555-9368",
		"email" : "sf1323@att.com",
		"github" : "sf1323",
		"twitter" : "@sf1323",
		"location" : "Cleveland, OH"
	},
	"welcomeMessage" : "Welcome to Salvatore Fatica's resume",
	"skills" : [
		"HTML","CSS","Javascript","jQuery"
	],
	"bioPic" : "images/fry.jpg"
}

// below contains all my education

var education = {
	"schools" : [
{
	"name" : "St. Joseph High School",
	"location" : "Cleveland, OH",
	"degree" : "High School Diploma",
	"majors" : [
		"Accounting", "Computer Programming"
		],
	"dates" : "1990",
	"url" : "www.vasj.com"
}
],
	"onlineCourses": [
	{
		"title" : "Front End Web Development",
		"school" : "udacity.com",
		"date" : "2005",
		"url" : "www.udacity.com"
	}
]
}

//below contains my work experience

var work = {
	"jobs" : [
{
		"employer" : "AT&T",
		"title" : "M&P",
		"location" : "Cleveland, OH",
		"dates" : "1996 - current",
		"description" : "Work with third party vender on web application to meet department needs.  Assist centers with system issues regard web applications"
},
{
		"employer" : "Builders Square",
		"title" : "Receiving Manager",
		"location" : "Oakwood, OH",
		"dates" : "1995 - 1996",
		"description" : "Managed the recieving department which include 5 employees"
}
]
}

// below contains my web page projects

var projects = {
	"projects" : [
{
		"title" : "Billing Web Tool",
		"dates" : "2010 - current",
		"description" : "Developed and manage the Billing Web Tool web page which assist the center in identifying the appropriate work center that handles the billing issues for our billing organization",
		"images" : ["images/bwt2.jpg"]
},
{
		"title" : "Udacity Orange Mug Project #1",
		"dates" : "2015",
		"description" : "Replicated the Udacity Orange Mug web page to meet my project #1 objective",
		"images" :["images/orangemug2.png"]
}
]
}

// the following function displays my bio info

bio.display = function(){

// The following add Name and Role to Header

	var formattedName = HTMLheaderName.replace("%data%", bio.name);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);


// The following adds Contact info to header

	var Formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var Formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
	var Formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var Formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var Formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);

	var FormattedconcactInfo = Formattedmobile + Formattedemail + Formattedgithub + Formattedtwitter + Formattedlocation;

	$("#topContacts").append(FormattedconcactInfo);
	$("#footerContacts").append(FormattedconcactInfo);

//  The following added the Picture and Welcome Message

	var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").append(formattedbioPic + formattedWelcomeMsg);
}

// following put Bio info on screen
bio.display();


// the following adds work info to screen

function displayWork() {

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedworkDates = HTMLworkDates.replace ("%data%",work.jobs[job].dates);

	var formattedworkLocation = HTMLworkLocation.replace ("%data%", work.jobs[job].location);

 	var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

 	$(".work-entry:last").append(formattedworkDates);
 	$(".work-entry:last").append(formattedworkLocation);
 	$(".work-entry:last").append(formattedworkDescription);

	}
}

displayWork();

// the following put on the console the location of x and y when the mouse button is clicked

	$(document).click(function(loc) {

		var x = loc.pageX
		var y = loc.pageY

  	logClicks(x,y);

	});

// the following make it show the name shows up international way last name all caps
function inName(name) {

	var name = name.trim().split(" ");
	console.log(name);
	//console.log(name.length);

	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];

	//console.log(name[0] + " " + name[1]);

}

$("#main").append(internationalizeButton);

// the following populate the screen with all the projects

projects.display = function(){

	for(project in projects.projects){

		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		for (image in projects.projects[project].images) {

			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);

			$(".project-entry:last").append(formattedImage);
		};
	}
};

projects.display();


// the following populate the screen with education info

education.display = function(){

	for(school in education.schools){

		$("#education").append(HTMLschoolStart );

		var formattedschoolName = HTMLschoolName .replace("%data%",education.schools[school].name);
		var formattedschoolDegree = HTMLschoolDegree .replace("%data%",education.schools[school].degree);

		var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;

		var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);

		$(".education-entry:last").append(formattedschoolNameDegree);
		$(".education-entry:last").append(formattedschoolLocation);
		$(".education-entry:last").append(formattedschoolDates);
		$(".education-entry:last").append(formattedschoolMajor);

	};

	// below will display the online course

	for(onlinecourses in education.onlineCourses){


		var formattedonlineTitle  = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlinecourses].title);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlinecourses].school);

		var formattedonlineTitleSchool = formattedonlineTitle + formattedonlineSchool;

		var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlinecourses].date);
		var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlinecourses].url);

		$(".education-entry:last").append(HTMLonlineClasses + formattedonlineTitleSchool + formattedonlineDates + formattedonlineURL);

	}
};

education.display();

// adds google map to screen

$("#mapDiv").append(googleMap);