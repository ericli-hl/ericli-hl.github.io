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

var currentPeriod = "-";

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
	
	// -----------------------------------------------------------------------------------
	if((currentHour < 8) || (currentHour === 8 && currentMin < 40)) {
		currentPeriod = "preschool"; // Pre-school
	} else if((currentHour === 8 && currentMin > 39) || (currentHour === 9 && currentMin < 38)) {
		currentPeriod = 1; // Period 1
	} else if((currentHour === 9 && currentMin > 37) || (currentHour === 10 && currentMin < 36)) {
		currentPeriod = 2; // Period 2
	} else if(currentHour === 10 && currentMin > 35 && currentMin < 56) {
		currentPeriod = "recess"; // Recess
	} else if((currentHour === 10 && currentMin > 55) || (currentHour === 11 && currentMin < 54)) {
		currentPeriod = 3; // Period 3
	} else if((dayToday === 1 || 5) && ((currentHour === 11 && currentMin > 53) || (currentHour === 12 && currentMin < 23))) {
		currentPeriod = 4; // Period 4
	} else if((dayToday === 2 || 3 || 4) && ((currentHour === 11 && currentMin > 53) || (currentHour === 12 && currentMin < 23))) {
		currentPeriod = 4; // Period 4
	} else if((currentHour === 12 && currentMin > 22) || (currentHour === 12 && currentMin < 52)) {
		if(dayToday === 1 || dayToday === 5) {
			currentPeriod = 4; // Period 4
		} else if (dayToday === 2 || dayToday === 4) {
			currentPeriod = "Assembly"; // Assembly
		} else if (dayToday === 3) {
			currentPeriod = "Lunchtime"; // Lunchtime
		}
	} else if((currentHour === 12 && currentMin > 51) || (currentHour === 13 && currentMin < 15)) {
		currentPeriod = "Lunchtime"; // Lunchtime
	} else if((currentHour === 13 && currentMin > 14) || (currentHour === 13 && currentMin < 42)) {
		if(dayToday === 1 || dayToday === 2 || dayToday === 4 || dayToday === 5) {
			currentPeriod = "Lunchtime"; // Lunchtime
		} else {
			currentPeriod = "Sports"; // Sports
		}
	} else if((currentHour === 13 && currentMin > 41) || (currentHour === 14 && currentMin < 40)) {
		if(dayToday === 1 || dayToday === 2 || dayToday === 4 || dayToday === 5) {
			currentPeriod = 5; // Period 5
		} else {
			currentPeriod = "Sports"; // Sports
		}
	} else if((currentHour === 14 && currentMin > 40) || (currentHour === 15 && currentMin < 38)) {
		if(dayToday === 1 || dayToday === 2 || dayToday === 4 || dayToday === 5) {
			currentPeriod = 6; // Period 6
		} else {
			currentPeriod = "Sports"; // Sports
		}
	} else {
		currentPeriod = "afterschool"; // After school
	}
	// -----------------------------------------------------------------------------------
	
	document.getElementById("week").innerHTML = thisWeek;
	document.getElementById("curday").innerHTML = dayToday;
	document.getElementById("current-period").innerHTML = currentPeriod;
}









