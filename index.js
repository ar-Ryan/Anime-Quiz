var readlineSync = require('readline-sync');
var username = readlineSync.question(" Tell me your name : ");
var score = 0;
console.log(`Welcome ${username}, you think you know Anime?`)

function QandA(question,answer){

 var userAns = readlineSync.question(question);

 if(userAns.toLowerCase() === answer.toLowerCase()){
   console.log("That's Correct!")
   score+=2 ;
   console.log(` Your current score: ${score} `)
   console.log("-----------")
 } else {
   console.log(" Oh no that's wrong ")
   score-=1 ;
   console.log(`The answer is: ${answer}`)
   console.log(` Your current score: ${score} `)
   console.log("-----------")
 }
}
 console.log(` Your score is: ${score} `)
  console.log("-------------")


var questions = [{
  question : " Name every anime ",
  answer : "just having fun with this one xD"
}, {
  question : " what is the name of the longest running anime ever? ",
  answer : "sazae san"
},{
  question : " Unravel is a very popular opening song of which anime series? ",
  answer : "Tokyo Ghoul"
}
];

for(i=0; i < questions.length; i++){
  var currentQuestion = questions[i];
  QandA(currentQuestion.question,currentQuestion.answer)
};

var mcqs = [
  {
   array : ["No lol","Saitama","Chichi","Vegeta"],
  question : "Can anyone beat goku?",
  answer : "Chichi"
}, {
  array : ["Naruto","Attack on Titan","Demon Slayer","My Hero Academia"],
  question : "Which of the following has the most toxic fandom? :P",
  answer : "Attack on Titan"
}
];

function MCQ(question,array,answer){
  var userans = readlineSync.keyInSelect(array,question);
  console.log('\n')
  if(array[userans] === answer){
    console.log("You are right !!");
    score+=2 ;
    console.log(` Your current score: ${score} `)
    console.log("-----------")
  }else{
    console.log(" Oh no that's wrong ")
    console.log(`The answer is: ${answer}`)
    score-=1 ;
    console.log(` Your current score: ${score} `)
    console.log("-----------")
  }
};

for(i=0;i<mcqs.length;i++){
currques = mcqs[i]
MCQ(currques.question,currques.array,currques.answer)
}

if(score>5){
  console.log(`Your final score: ${score}`)
  console.log(`Looks like you know Anime well ${username}-kun ;)`)
}else{
  console.log(`Your final score: ${score}`)
  console.log("oops! seems like you gotta up your anime game :)")
}