var Question = function(question, answer, number) {
  this.question = question;
  this.answer = answer;
  this.number = number;
}

Question.prototype.displayQuestion = function() {
  console.log(this.question);
  for(var i=0;i<this.answer.length;i++) {
    console.log(i+":"+this.answer[i]);
  }
}

Question.prototype.displayAnswer= function(ans) {
  if(ans ===this.number) {
    console.log("Correct answer!")
  } else {
    console.log("Wrong answer")
  }


}


var quest1 = new Question('What\'s your age?',[25,30,34],2);

var quest2 = new Question('What\'s your wife\'s name?',['Tania','Sveta','Nadia'],0);

var quest3 = new Question('What\'s your country of residence?',['US','CA','UA'],1);

// console.log(quest1.answer);
var arrquest = [quest1,quest2,quest3];

// console.log(arrquest);

var num = Math.floor(Math.random()*3);

arrquest[num].displayQuestion();
// arrquest[num].displayAnswers();
// var myNum = 2;
var userInput = parseInt(prompt("Enter your answer"));
arrquest[num].displayAnswer(userInput);
