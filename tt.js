// JavaScript Document

var d = new Date();
var thisMonthJs = d.getMonth(); // thisMonthJs === 10
var thisMonth = thisMonthJs + 1; // thisMonth === 11
var dateToday = d.getDate(); // dateToday === 30
var dayToday = d.getDay(); // dayToday === 5
var currentHour = d.getHours(); // currentHour = 21
var currentMin = d.getMinutes(); // currentMin = 34

var week1InNov = [30];
var week1InDec = [10,11,12];
var weekDetect; // weekDetect === week1InNov = [30]
var thisWeek = 2; // thisWeek = 1

function main() {
	"use strict";
	
	switch(thisMonth) {
		case 11:
			weekDetect = week1InNov;
			break;
		case 12:
			weekDetect = week1InDec;
			break;
		default:
			weekDetect = "";
			break;
	}

	for(var i = 0; i < weekDetect.length; i++){
		if(dateToday === weekDetect[i]){
			thisWeek = 1;
		}
	}
	
	// document.getElementById("week").innerHTML = thisWeek;
	// document.getElementById("day-today").innerHTML = dayToday;
	document.getElementById("week-and-day").innerHTML = "今天是 Week " + thisWeek + " Day " + dayToday;
	// document.getElementById("current-hour").innerHTML = currentHour;
	// document.getElementById("current-min").innerHTML = currentMin;
	document.getElementsByClassName("current-time")[0].innerHTML = "当前时间 " + currentHour + ":" + currentMin;
	document.getElementsByClassName("current-time")[1].innerHTML = "当前时间 " + currentHour + ":" + currentMin;
	
	// -----------------------------------------------------------------------------------
	var currentPeriod;
	var timeClassOver;
	var nextPeriodStartsAt;
	var nextPeriodOver;
	
	if (
		(currentHour < 8) || (currentHour === 8 && currentMin < 40)
	) {
		currentPeriod = 0;
		timeClassOver = "8:40";
		nextPeriodOver = "9:38";
	} else if (
		(currentHour === 8 && currentMin > 39) || (currentHour === 9 && currentMin < 38)
	) {
		currentPeriod = 1;
		timeClassOver = "9:38";
		nextPeriodOver = "10:36";
	} else if (
		(currentHour === 9 && currentMin > 37) || (currentHour === 10 && currentMin < 36)
	) {
		currentPeriod = 2;
		timeClassOver = "10:36";
		nextPeriodOver = "10:56";
	} else if (
		(currentHour === 10 && currentMin > 35) && (currentHour === 10 && currentMin < 56)
	) {
		currentPeriod = 3;
		timeClassOver = "10:56";
		nextPeriodOver = "11:54";
	} else if (
		(currentHour === 10 && currentMin > 55) || (currentHour === 11 && currentMin < 54)
	) {
		currentPeriod = 4;
		timeClassOver = "11:54";
		nextPeriodOver = "12:23";
	} else if (
		(currentHour === 11 && currentMin > 53) || (currentHour === 12 && currentMin < 23)
	) {
		currentPeriod = 5;
		timeClassOver = "12:23";
		nextPeriodOver = "12:52";
	} else if (
		(currentHour === 12 && currentMin > 22) || (currentHour === 12 && currentMin < 52)
	) {
		currentPeriod = 6;
		timeClassOver = "12:52";
		nextPeriodOver = "13:15";
	} else if (
		(currentHour === 12 && currentMin > 51) || (currentHour === 13 && currentMin < 15)
	) {
		currentPeriod = 7;
		timeClassOver = "13:15";
		nextPeriodOver = "13:42";
	} else if (
		(currentHour === 13 && currentMin > 14) && (currentHour === 13 && currentMin < 42)
	) {
		currentPeriod = 8;
		timeClassOver = "13:42";
		nextPeriodOver = "14:40";
	} else if (
		(currentHour === 13 && currentMin > 41) || (currentHour === 14 && currentMin < 40)
	) {
		currentPeriod = 9;
		timeClassOver = "14:40";
		nextPeriodOver = "15:38";
	} else if (
		(currentHour === 14 && currentMin > 39) || (currentHour === 15 && currentMin < 38)
	) {
		currentPeriod = 10;
		timeClassOver = "15:38";
		nextPeriodOver = "-";
	} else {
		currentPeriod = 11;
		timeClassOver = "-";
		nextPeriodOver = "-";
	}
	// -----------------------------------------------------------------------------------
	
	var nextPeriodStartsAt = timeClassOver;
	// document.getElementById("current-period").innerHTML = currentPeriod;
	document.getElementById("time-class-over").innerHTML = "下课时间 " + timeClassOver;
	var nextPeriod;
	if (currentPeriod === 11) {
		nextPeriod = 11;
	} else {
		nextPeriod = currentPeriod + 1;
	}
	// document.getElementById("next-period").innerHTML = nextPeriod;
	document.getElementById("next-period-starts-at").innerHTML = "上课时间 " + nextPeriodStartsAt;
	document.getElementById("next-period-over").innerHTML = "下节下课时间 " + nextPeriodOver;
	
	var keToday;
	if(thisWeek === 1) {
		switch(dayToday) {
			case 1:
				keToday = ["No Class",			// 0 (8:40以前)
					  "Chem",					// 1 (8:40 - 9:38)		Period 1
					  "English",				// 2 (9:38 - 10:36)		Period 2
					  "Recess", 				// 3 (10:36 - 10:56)
					  "Spec", 					// 4 (10:56 - 11:54)	Period 3
					  "Chapel", 				// 5 (11:54 - 12:23)	Period 4
					  "Chapel", 				// 6 (12:23 - 12:52)	Period 4
					  "Lunch", 					// 7 (12:52 - 13:15)
					  "Lunch", 					// 8 (13:15 - 13:42)
					  "Methods", 				// 9 (13:42 - 14:40)	Period 5
					  "Acc",					// 10 (14:40 - 15:38)	Period 6
					  "No Class"				// 11 (15:38以后)
					 ];
				break;
			case 2:
				keToday = ["No Class", 			// 0 (8:40以前)
					  "Study", 					// 1 (8:40 - 9:38)		Period 1
					  "Acc", 					// 2 (9:38 - 10:36)		Period 2
					  "Recess", 				// 3 (10:36 - 10:56)
					  "Chem", 					// 4 (10:56 - 11:54)	Period 3
					  "Chem", 					// 5 (11:54 - 12:23)	Period 3
					  "Mentor", 				// 6 (12:23 - 12:52)	Period 4
					  "Lunch", 					// 7 (12:52 - 13:15)
					  "Lunch", 					// 8 (13:15 - 13:42)
					  "English", 				// 9 (13:42 - 14:40)	Period 5
					  "Spec", 					// 10 (14:40 - 15:38)	Period 6
					  "No Class"				// 11 (15:38以后)
					 ];
				break;
			case 3:
				keToday = ["No Class", 			// 0 (8:40以前)
					  "Methods", 				// 1 (8:40 - 9:38)		Period 1
					  "Spec", 					// 2 (9:38 - 10:36)		Period 2
					  "Recess", 				// 3 (10:36 - 10:56)
					  "Study", 					// 4 (10:56 - 11:54)	Period 3
					  "Study",					// 5 (11:54 - 12:23)	Period 3
					  "Lunch", 					// 6 (12:23 - 12:52)
					  "Lunch",					// 7 (12:52 - 13:15)
					  "Sports", 				// 8 (13:15 - 13:42)	Sports
					  "Sports",					// 9 (13:42 - 14:40)	Sports
					  "Sports",					// 10 (14:40 - 15:38)	Sports
					  "No Class"				// 11 (15:38以后)
					 ];
				break;
			default:
				keToday = ["No Class"];
					   }
	} else {
		switch(dayToday) {
			case 1:
				keToday = ["No Class", 			// 0
					  "Acc", 					// 1	Period 1
					  "English", 				// 2	Period 2
					  "Recess", 				// 3
					  "Chem", 					// 4	Period 3
					  "Chapel", 				// 5	Period 4
					  "Chapel", 				// 6	Period 4
					  "Lunch", 					// 7
					  "Lunch", 					// 8
					  "Spec", 					// 9	Period 5
					  "Methods", 				// 10	Period 6
					  "No Class"				// 11
					 ];
				break;
			case 2:
				keToday = ["No Class", 			// 0 (8:40以前)
					  "Study", 					// 1 (8:40 - 9:38)		Period 1
					  "Chem", 					// 2 (9:38 - 10:36)		Period 2
					  "Recess", 				// 3 (10:36 - 10:56)
					  "Spec", 					// 4 (10:56 - 11:54)	Period 3
					  "Spec", 					// 5 (11:54 - 12:23)	Period 3
					  "Mentor", 				// 6 (12:23 - 12:52)	Period 4
					  "Lunch", 					// 7 (12:52 - 13:15)
					  "Lunch", 					// 8 (13:15 - 13:42)
					  "Methods", 				// 9 (13:42 - 14:40)	Period 5
					  "English", 				// 10 (14:40 - 15:38)	Period 6
					  "No Class"				// 11 (15:38以后)
					 ];
				break;
			case 3:
				keToday = ["No Class", 			// 0 (8:40以前)
					  "Study", 					// 1 (8:40 - 9:38)		Period 1
					  "Acc", 					// 2 (9:38 - 10:36)		Period 2
					  "Recess", 				// 3 (10:36 - 10:56)
					  "Methods", 				// 4 (10:56 - 11:54)	Period 3
					  "Methods",				// 5 (11:54 - 12:23)	Period 3
					  "Lunch", 					// 6 (12:23 - 12:52)
					  "Lunch",					// 7 (12:52 - 13:15)
					  "Sports", 				// 8 (13:15 - 13:42)	Sports
					  "Sports",					// 9 (13:42 - 14:40)	Sports
					  "Sports",					// 10 (14:40 - 15:38)	Sports
					  "No Class"				// 11 (15:38以后)
					 ];
				break;
			default:
				keToday = [];
					   }
	}

	document.getElementById("current-subject").innerHTML = keToday[currentPeriod];
	document.getElementById("next-subject").innerHTML = keToday[nextPeriod];
	
	var currentVenue;
	var currentClassSerial;
	switch(keToday[currentPeriod]) {
		case "English":
			currentVenue = "L002";
			currentClassSerial = "A";
			break;
		case "Spec":
			currentVenue = "F028";
			currentClassSerial = "A";
			break;
		case "Methods":
			currentVenue = "F132";
			currentClassSerial = "D";
			break;
		case "Acc":
			currentVenue = "F008";
			currentClassSerial = "A";
			break;
		case "Chem":
			currentVenue = "F119";
			currentClassSerial = "A";
			break;
		default:
			currentVenue = "";
			currentClassSerial = "";
			break;
							}
	document.getElementById("current-venue").innerHTML = currentVenue;
	document.getElementById("current-class-serial").innerHTML = "所在课堂 Class " + currentClassSerial;
	
	var nextVenue;
	var nextClassSerial;
	switch(keToday[nextPeriod]) {
		case "English":
			nextVenue = "L002";
			nextClassSerial = "A";
			break;
		case "Spec":
			nextVenue = "F028";
			nextClassSerial = "A";
			break;
		case "Methods":
			nextVenue = "F132";
			nextClassSerial = "D";
			break;
		case "Acc":
			nextVenue = "F008";
			nextClassSerial = "A";
			break;
		case "Chem":
			nextVenue = "F119";
			nextClassSerial = "A";
			break;
		default:
			nextVenue = "";
			nextClassSerial = "";
			break;
							}
	document.getElementById("next-venue").innerHTML = nextVenue;
	document.getElementById("next-class-serial").innerHTML = "所在课堂 Class " + nextClassSerial;

}









