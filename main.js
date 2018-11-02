// JavaScript Document

function myFunction() {
	var d = new Date();
	var hrs = d.getHours();
	var mins = d.getMinutes();
	if(mins < 10) {
		mins = "0" + mins;
	}
	document.getElementById("time").innerHTML = hrs + ":" + mins;
	var day;
	switch (d.getDay()) {
    	case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
    	case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
	}	
		var mo;
	switch (d.getMonth()) {
    	case 0:
			mo = "January";
			break;
		case 1:
			mo = "February";
			break;
		case 2:
			mo = "March";
			break;
		case 3:
			mo = "April";
			break;
		case 4:
			mo = "May";
			break;
    	case 5:
			mo = "June";
			break;
		case 6:
			mo = "July";
			break;
	   	case 7:
			mo = "August";
			break;
		case 8:
			mo = "September";
			break;
		case 9:
			mo = "October";
			break;
		case 10:
			mo = "November";
			break;
		case 11:
			mo = "December";
			break;
	}
	var date = d.getDate();
	var yr = d.getFullYear();
	document.getElementById("date").innerHTML = day + " " + date + " " + mo + " " + yr;
}