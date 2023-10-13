	var thequestion1 = ["1) Among the following which option best describes a 'mummy'?", "Relative", "Coffins", "Preserving of the dead", 		"Mother", "Preserving of the dead", "N"];
	var thequestion2 = ["2) What are manuscripts?", "Writings on ceilings", "Writings on walls", "Writings on trees", "Writings on perishable material", "Writings on perishable material", "N"];
	var thequestion3 = ["3) This picture is the court of which ruler?", "Akbar the Great", "Napolean the Invincible", "Alexander the Great", "Karunanidhi the Eternal", "Akbar the Great", "Y"];
	var thequestion4 = ["4) This is the picture of Amar Jawan Jyoti. Why is it important?", "It is the place where Gandhiji has been cremated", "It is a mall", "It is a battleground", "It was built to honour the soldiers who died in battle", "It was built to honour the soldiers who died in battle", "Y"];
	var thequestion5 = ["5) This is the emblem of:", "Olympic Games", "Ring of Fire", "Game of Thrones", "Asian Games", "Olympic Games", "Y"];
	var thequestion6 = ["6) The word 'Tomb' means:", "Place", "Comb", "Burial Place", "Fort", "Burial Place", "N"];
	var thequestion7 = ["7) Followers of Zoroastrianism are called:", "Jains", "Manthanites", "Parsis", "Jews", "Parsis", "N"];
	var thequestion8 = ["8) This is the emble of the WWF. What do they work for?", "Children", "Old people", "Nature and wildlife", "Teachers", "Nature and wildlife", "Y"];
	var thequestion9 = ["9) 'Artifacts' means:", "Writing a report", "Helps to reconstruct the past", "Past tense", "Facts about art", "Helps to reconstruct the past", "N"];
	var thequestion10 = ["10) The king who became a Buddhist after the Kalinga war is:", "Harshwardhan", "Chandragupta Maurya", "Humayun", "Ashoka", "Ashoka", "N"];	

function chucky(){
    document.getElementById("entryform").style.top = "-150vw";
    document.getElementById("thequiz").style.opacity = "1";
	
	document.getElementById("mcquestion1").innerHTML = thequestion1[0];
	document.getElementById("mcquestion2").innerHTML = thequestion2[0];
	document.getElementById("mcquestion3").innerHTML = thequestion3[0];
	document.getElementById("mcquestion4").innerHTML = thequestion4[0];
	document.getElementById("mcquestion5").innerHTML = thequestion5[0];
	document.getElementById("mcquestion6").innerHTML = thequestion6[0];
	document.getElementById("mcquestion7").innerHTML = thequestion7[0];
	document.getElementById("mcquestion8").innerHTML = thequestion8[0];
	document.getElementById("mcquestion9").innerHTML = thequestion9[0];
	document.getElementById("mcquestion10").innerHTML = thequestion10[0];
	
	document.thequiz.radiobutton1a.value = thequestion1[1];
	document.thequiz.radiobutton1b.value = thequestion1[2];
	document.thequiz.radiobutton1c.value = thequestion1[3];
	document.thequiz.radiobutton1d.value = thequestion1[4];
	
	document.thequiz.radiobutton2a.value = thequestion2[1];
	document.thequiz.radiobutton2b.value = thequestion2[2];
	document.thequiz.radiobutton2c.value = thequestion2[3];
	document.thequiz.radiobutton2d.value = thequestion2[4];
	
	document.thequiz.radiobutton3a.value = thequestion3[1];
	document.thequiz.radiobutton3b.value = thequestion3[2];
	document.thequiz.radiobutton3c.value = thequestion3[3];
	document.thequiz.radiobutton3d.value = thequestion3[4];
	
	document.thequiz.radiobutton4a.value = thequestion4[1];
	document.thequiz.radiobutton4b.value = thequestion4[2];
	document.thequiz.radiobutton4c.value = thequestion4[3];
	document.thequiz.radiobutton4d.value = thequestion4[4];
	
	document.thequiz.radiobutton5a.value = thequestion5[1];
	document.thequiz.radiobutton5b.value = thequestion5[2];
	document.thequiz.radiobutton5c.value = thequestion5[3];
	document.thequiz.radiobutton5d.value = thequestion5[4];
	
	document.thequiz.radiobutton6a.value = thequestion6[1];
	document.thequiz.radiobutton6b.value = thequestion6[2];
	document.thequiz.radiobutton6c.value = thequestion6[3];
	document.thequiz.radiobutton6d.value = thequestion6[4];
	
	document.thequiz.radiobutton7a.value = thequestion7[1];
	document.thequiz.radiobutton7b.value = thequestion7[2];
	document.thequiz.radiobutton7c.value = thequestion7[3];
	document.thequiz.radiobutton7d.value = thequestion7[4];

	document.thequiz.radiobutton8a.value = thequestion8[1];
	document.thequiz.radiobutton8b.value = thequestion8[2];
	document.thequiz.radiobutton8c.value = thequestion8[3];
	document.thequiz.radiobutton8d.value = thequestion8[4];
		
	document.thequiz.radiobutton9a.value = thequestion9[1];
	document.thequiz.radiobutton9b.value = thequestion9[2];
	document.thequiz.radiobutton9c.value = thequestion9[3];
	document.thequiz.radiobutton9d.value = thequestion9[4];
	
	document.thequiz.radiobutton10a.value = thequestion10[1];
	document.thequiz.radiobutton10b.value = thequestion10[2];
	document.thequiz.radiobutton10c.value = thequestion10[3];
	document.thequiz.radiobutton10d.value = thequestion10[4];
	
	document.getElementById("q1a1").innerHTML = thequestion1[1];
	document.getElementById("q1a2").innerHTML = thequestion1[2];	
	document.getElementById("q1a3").innerHTML = thequestion1[3];
	document.getElementById("q1a4").innerHTML = thequestion1[4];		
	
	document.getElementById("q2a1").innerHTML = thequestion2[1];
	document.getElementById("q2a2").innerHTML = thequestion2[2];	
	document.getElementById("q2a3").innerHTML = thequestion2[3];
	document.getElementById("q2a4").innerHTML = thequestion2[4];
			
	document.getElementById("q3a1").innerHTML = thequestion3[1];
	document.getElementById("q3a2").innerHTML = thequestion3[2];	
	document.getElementById("q3a3").innerHTML = thequestion3[3];
	document.getElementById("q3a4").innerHTML = thequestion3[4];	
		
	document.getElementById("q4a1").innerHTML = thequestion4[1];
	document.getElementById("q4a2").innerHTML = thequestion4[2];	
	document.getElementById("q4a3").innerHTML = thequestion4[3];
	document.getElementById("q4a4").innerHTML = thequestion4[4];	
		
	document.getElementById("q5a1").innerHTML = thequestion5[1];
	document.getElementById("q5a2").innerHTML = thequestion5[2];	
	document.getElementById("q5a3").innerHTML = thequestion5[3];
	document.getElementById("q5a4").innerHTML = thequestion5[4];
			
	document.getElementById("q6a1").innerHTML = thequestion6[1];
	document.getElementById("q6a2").innerHTML = thequestion6[2];	
	document.getElementById("q6a3").innerHTML = thequestion6[3];
	document.getElementById("q6a4").innerHTML = thequestion6[4];	
		
	document.getElementById("q7a1").innerHTML = thequestion7[1];
	document.getElementById("q7a2").innerHTML = thequestion7[2];	
	document.getElementById("q7a3").innerHTML = thequestion7[3];
	document.getElementById("q7a4").innerHTML = thequestion7[4];
			
	document.getElementById("q8a1").innerHTML = thequestion8[1];
	document.getElementById("q8a2").innerHTML = thequestion8[2];	
	document.getElementById("q8a3").innerHTML = thequestion8[3];
	document.getElementById("q8a4").innerHTML = thequestion8[4];
			
	document.getElementById("q9a1").innerHTML = thequestion9[1];
	document.getElementById("q9a2").innerHTML = thequestion9[2];	
	document.getElementById("q9a3").innerHTML = thequestion9[3];
	document.getElementById("q9a4").innerHTML = thequestion9[4];
			
	document.getElementById("q10a1").innerHTML = thequestion10[1];
	document.getElementById("q10a2").innerHTML = thequestion10[2];	
	document.getElementById("q10a3").innerHTML = thequestion10[3];
	document.getElementById("q10a4").innerHTML = thequestion10[4];
			
	if(thequestion1[6] == "Y"){
		document.getElementById("question1pic").style.opacity = "1";
	}
	if(thequestion2[6] == "Y"){
		document.getElementById("question2pic").style.opacity = "1";
	}
	if(thequestion3[6] == "Y"){
		document.getElementById("question3pic").style.opacity = "1";
	}
	if(thequestion4[6] == "Y"){
		document.getElementById("question4pic").style.opacity = "1";
	}
	if(thequestion5[6] == "Y"){
		document.getElementById("question5pic").style.opacity = "1";
	}
	if(thequestion6[6] == "Y"){
		document.getElementById("question6pic").style.opacity = "1";
	}
	if(thequestion7[6] == "Y"){
		document.getElementById("question7pic").style.opacity = "1";
	}
	if(thequestion8[6] == "Y"){
		document.getElementById("question8pic").style.opacity = "1";
	}
	if(thequestion9[6] == "Y"){
		document.getElementById("question9pic").style.opacity = "1";
	}
	if(thequestion10[6] == "Y"){
		document.getElementById("question10pic").style.opacity = "1";
	}

	document.body.style.overflowY = "auto";
}
function check() {
    var question1 = document.thequiz.question1.value;
    var question2 = document.thequiz.question2.value;
    var question3 = document.thequiz.question3.value;
    var question4 = document.thequiz.question4.value;
    var question5 = document.thequiz.question5.value;
    var question6 = document.thequiz.question6.value;
    var question7 = document.thequiz.question7.value;
    var question8 = document.thequiz.question8.value;
    var question9 = document.thequiz.question9.value;
    var question10 = document.thequiz.question10.value;
    var correct = 0;

	if(question1 == thequestion1[5]) {
	   correct++;
}
	if(question2 == thequestion2[5]) {
	   correct++;
}
    if(question3 == thequestion3[5]) {
        correct++;
}
    if(question4 == thequestion4[5]) {
        correct++;
}  
    if(question5 == thequestion5[5]) {
        correct++;
}
    if(question6 == thequestion6[5]) {
        correct++;
}
    if(question7 == thequestion7[5]) {
        correct++;
}
    if(question8 == thequestion8[5]) {
        correct++;
}    
    if(question9 == thequestion9[5]) {
        correct++;
}
    if(question10 == thequestion10[5]) {
        correct++;
}    
    var messages = ["That is excellent","That is good","That is barely okay", "This is bad"];
    var range;
    
	if (correct < 3) {
	   range = 3;
}
    if(correct >= 3) {
        range = 2;
}
	if(correct >= 6) {
	   range = 1;
}
    if(correct > 8) {
        range = 0;
}    
    var studentname = document.entryform.studentname.value;
    var studentclass = document.entryform.studentclass.value;
    var studenthouse = document.entryform.studenthouse.value;
    
    document.getElementById("roller1").style.top = "0vh";
    document.getElementById("roller2").style.top = "0vh";
    document.getElementById("roller3").style.top = "0vh";
    document.getElementById("roller4").style.top = "0vh";
    document.getElementById("roller5").style.top = "0vh";
    document.getElementById("roller6").style.top = "0vh";
    document.getElementById("roller7").style.top = "0vh";
    document.getElementById("roller8").style.top = "0vh";
    document.getElementById("roller9").style.top = "0vh";
    document.getElementById("roller10").style.top = "0vh";
    document.getElementById("roller11").style.top = "0vh";
    document.getElementById("smashed").style.top = "0vh";
    document.getElementById("thequiz").style.opacity = "0";
    document.getElementById("thenames").style.opacity = "0";
    document.body.style.overflow = "hidden";
    
    document.getElementById("message").innerHTML = messages[range] + " " + studentname + "!";
    document.getElementById("number_correct").innerHTML ="You got " + correct + "/10 correct.";
    document.getElementById("namevalue").innerHTML = studentname;
    document.getElementById("classvalue").innerHTML = studentclass;
    document.getElementById("housevalue").innerHTML = studenthouse;    
}

function next(){
    document.getElementById("thequiz").style.transform="translateX(-150vw)";
}