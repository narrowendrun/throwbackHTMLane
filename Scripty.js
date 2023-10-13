function check(){
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var correct = 0;

	if(question1 == "Dovahkiin") {
	correct++;
}
	if(question2 == "Lorkhan") {
	correct++;
}

var messages = ["Great job!", "Bad!"];
var range;
	if (correct < 1) {
	range = 1;
}
	if(correct > 0) {
	range = 0;
}

document.getElementById("smashed").style.opacity = "1";

document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

}
