// JavaScript Document

myFunction();


function myFunction() {
	"use strict";
	var d = new Date();
	var nian = d.getFullYear();
	document.getElementById("nianfen").innerHTML = nian;
	var yue = d.getMonth();
	document.getElementById("yuefen").innerHTML = yue;
	var ri = d.getDate();
	document.getElementById("riqi").innerHTML = ri;
	
	var week12;
	if(nian === 2018 && yue === 10) {
		week12 = 1;
	}
	
	var xingqi = d.getDay();
	document.getElementById("xingqiji").innerHTML = "星期" + xingqi;
	
	var shi = d.getHours();
	var fen = d.getMinutes();
	document.getElementById("cshi").innerHTML = shi;
	document.getElementById("cfen").innerHTML = fen;
	document.getElementsByClassName("currenttime")[0].innerHTML = "现在 " + shi + ":" + fen;
	document.getElementsByClassName("currenttime")[1].innerHTML = "现在 " + shi + ":" + fen;

	var keday4 = ["English", "Methods", "Acc", "Assembly", "Chem", "StudyPeriod"];
	var keday5 = ["StudyPeriod", "Spec", "Methods", "English", "Acc", "Chem"];
	
	var ke;
	var ketmr;
	var cke;
	var nextke;
	var xiake;
	var shangke;
	if(week12 === 1 && xingqi === 4) {
		ke = keday4;
		ketmr = keday5;
	}
	
	if((shi < 8) || (shi === 8 && fen < 40)) {
		$("#dangqiancard").addClass("na");
		nextke = ke[0];
		shangke = "8:40 上课";
		$(".zao").removeClass("na");
	}
	
	if((shi === 9 && fen < 38) || (shi === 8 && fen > 39)) {
		$("#dangqiancard").removeClass("na");
		cke = ke[0];
		nextke = ke[1];
		xiake = "9:38 下课";
		shangke = "9:38 上课";
	}
	
	if((shi === 9 && fen > 37) || (shi === 10 && fen < 36)) {
		cke = ke[1];
		nextke = ke[2];
		xiake = "10:36 下课";
		shangke = "10:56 上课";
	}
	
	if((shi === 10) && (fen > 35 && fen <56)) {
		$("#dangqiancard").addClass("na");
		$(".recess").removeClass("na");
		cke = ke[1];
		nextke = ke[2];
		xiake = "10:36 下课";
		shangke = "10:56 上课";
	}
	
	if(((xingqi === 2) || (xingqi === 4)) && ((shi === 10 && fen > 55) || (shi === 11) || (shi === 12 && fen < 23))) {
		$("#dangqiancard").removeClass("na");
		cke = ke[2];
		nextke = ke[3];
		xiake = "12:23 下课";
		shangke = "12:23 开始";
		$(".xiajieclist, .xiajielms").addClass("na");
	}
	
	if(((xingqi === 2) || (xingqi === 4)) && ((shi === 12 && fen > 22) || (shi === 12 && fen < 52))) {
		cke = ke[3];
		nextke = ke[4];
		xiake = "计划 12:52 结束";
		shangke = "13:42 上课";
		$(".dangqianclist, .dangqianlms").addClass("na");
	}
	
	if(((xingqi === 1) || (xingqi === 2) || (xingqi === 4) || (xingqi === 5)) && ((shi === 12 && fen > 51) || (shi === 13 && fen < 52))) {
		$("#dangqiancard").addClass("na");
		$(".lunchtime").removeClass("na");
		nextke = ke[4];
		shangke = "13:42 上课";
	}
	
	if((shi === 13 && fen > 41) || (shi === 14 && fen < 40)) {
		$("#dangqiancard").removeClass("na");
		cke = ke[4];
		nextke = ke[5];
		xiake = "14:40 下课";
		shangke = "14:40 上课";
	}
	
	if((shi === 14 && fen > 39) || (shi === 15 && fen < 38)) {
		$("#xiajiecard").addClass("na");
		cke = ke[5];
		xiake = "15:38 下课";
	}
	
	if((shi === 15 && fen > 37) || (shi > 15)) {
		$("#dangqiancard").addClass("na");
		$(".afterschool").removeClass("na");
		$("#xiajiecard").addClass("na");
		$(".mingtiankebiao").removeClass("na");
		$(".attendance").removeClass("na");
		var i;
		for(i=0; i < 6; i++) {
			document.getElementsByClassName("mtkb")[i].innerHTML = ketmr[i];
		}
	}

	document.getElementById("dangqiansubj").innerHTML = cke;
	document.getElementById("xiajiesubj").innerHTML = nextke;
	document.getElementById("dangqianover").innerHTML = xiake;
	document.getElementById("xiajieshangke").innerHTML = shangke;
	
	switch(cke) {
		case "English":
			document.getElementById("dangqianvenue").innerHTML = "L002";
			$(".dangqianclist").attr("href","https://ressched.mentonegrammar.net/classlists.php?subclass=EN093++++++++++A&tch_code=DNH&rView=List&form_Data=");
			$(".dangqianlms").attr("href","https://lms.mentonegrammar.net/d2l/home/16802");
			break;
		case "Methods":
			document.getElementById("dangqianvenue").innerHTML = "F132";
			$(".dangqianclist").attr("href","https://ressched.mentonegrammar.net/classlists.php?subclass=MA113++++++++++D&tch_code=KXM&rView=List&form_Data=");
			$(".dangqianlms").attr("href","https://lms.mentonegrammar.net/d2l/home/16834");
			break;
		case "Acc":
			document.getElementById("dangqianvenue").innerHTML = "F008";
			$(".dangqianclist").attr("href","https://ressched.mentonegrammar.net/classlists.php?subclass=AC033++++++++++A&tch_code=VSB&rView=List&form_Data=");
			$(".dangqianlms").attr("href","https://lms.mentonegrammar.net/d2l/home/16734");
			break;
		case "Chem":
			document.getElementById("dangqianvenue").innerHTML = "F119";
			$(".dangqianclist").attr("href","https://ressched.mentonegrammar.net/classlists.php?subclass=CH033++++++++++A&tch_code=PXW&rView=List&form_Data=");
			$(".dangqianlms").attr("href","https://lms.mentonegrammar.net/d2l/home/16747");
			break;
		case "Spec":
			document.getElementById("dangqianvenue").innerHTML = "F028";
			$(".dangqianclist").attr("href","https://ressched.mentonegrammar.net/classlists.php?subclass=MA093++++++++++A&tch_code=KXM&rView=List&form_Data=");
			$(".dangqianlms").attr("href","https://lms.mentonegrammar.net/d2l/home/16855");
			break;
		default:
			document.getElementById("dangqianvenue").innerHTML = "";
			break;
	}
	
	switch(nextke) {
		case "English":
			document.getElementById("xiajievenue").innerHTML = "L002";
			$(".xiajieclist").attr("href","https://ressched.mentonegrammar.net/classlists.php?subclass=EN093++++++++++A&tch_code=DNH&rView=List&form_Data=");
			$(".xiajielms").attr("href","https://lms.mentonegrammar.net/d2l/home/16802");
			break;
		case "Methods":
			document.getElementById("xiajievenue").innerHTML = "F132";
			$(".xiajieclist").attr("href","https://ressched.mentonegrammar.net/classlists.php?subclass=MA113++++++++++D&tch_code=KXM&rView=List&form_Data=");
			$(".xiajielms").attr("href","https://lms.mentonegrammar.net/d2l/home/16834");
			break;
		case "Acc":
			document.getElementById("xiajievenue").innerHTML = "F008";
			$(".xiajieclist").attr("href","https://ressched.mentonegrammar.net/classlists.php?subclass=AC033++++++++++A&tch_code=VSB&rView=List&form_Data=");
			$(".xiajielms").attr("href","https://lms.mentonegrammar.net/d2l/home/16734");
			break;
		case "Chem":
			document.getElementById("xiajievenue").innerHTML = "F119";
			$(".xiajieclist").attr("href","https://ressched.mentonegrammar.net/classlists.php?subclass=CH033++++++++++A&tch_code=PXW&rView=List&form_Data=");
			$(".xiajielms").attr("href","https://lms.mentonegrammar.net/d2l/home/16747");
			break;
		case "Spec":
			document.getElementById("xiajievenue").innerHTML = "F028";
			$(".xiajieclist").attr("href","https://ressched.mentonegrammar.net/classlists.php?subclass=MA093++++++++++A&tch_code=KXM&rView=List&form_Data=");
			$(".xiajielms").attr("href","https://lms.mentonegrammar.net/d2l/home/16855");
			break;
		default:
			document.getElementById("xiajievenue").innerHTML = "";
			break;
	}
}