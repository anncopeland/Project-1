//this is trivia question object.
const questions = [
    {
      name: "1. What was Superman's birth name?",
      answers: ["Alfred", "Kal-El", "Peter Parker", "Clark Kent"],
      correctAnswer: "Kal-El"
    },
    {
      name: "2. What is the name of the man who launced eBay back in 1995?",
      answers: ["Charles Babbage", "Sam Mills", "Pierre Omidyar", "Jeff Bezos"],
      correctAnswer: "Pierre Omidyar"
    },
    {
      name: "3. Who is often credited with creating the world's first car?",
      answers: ["Nash Motors", "BMW", "Ford", "Karl Benz"],
      correctAnswer: "Karl Benz"
    },
    {
      name: "4. Which country produces the most coffee in the world?",
      answers: ["Brazil", "Spain", "Italy", "United States"],
      correctAnswer: "Brazil"
    },
    {
      name: "5. Which bone, are babies born without?",
      answers: ["sternum", "pelvis", "fibula", "patella"],
      correctAnswer: "patella"
    }
];

//grabbing the questions id element.
const questionDiv = document.getElementById('questions');
//console.log(questionDiv);

questions.forEach(function(value, index){
    //creating the question div
   const question = document.createElement('div');
   question.setAttribute("id", "question" + index);
//populating questions from the questions array & assigning to the newly created div.
   //console.log(question);
   question.innerHTML = questions[index]["name"];
//populating answer choices from the questions array objects. 
   let numberOfAnswers = questions[index]["answers"];
   //console.log(numberOfAnswers);
//creating button for each answer.
    numberOfAnswers.forEach(function(q, i){
        const answer = document.createElement("button");
        //creating  id for each answer in the questions object.
        answer.setAttribute("id", "answer" + i);
        //console.log(answer);
        //Create an eventListener for each button.
        answer.addEventListener("click", function foo(){
        winLogic(answer.parentElement.getAttribute("id"), answer.innerHTML, answer);
        });

        answer.innerHTML = numberOfAnswers[i];
        question.appendChild(answer);
 
    });
        questionDiv.appendChild(question);
});

function winLogic(question, selectedAnswer, answerObject) {
    //Trying to extract a number from a given string. ref. slack Suresh.
    let q = question.match(/\d/g);
    let currentQuestion = q.join("");
    //console.log(currentQuestion);
    if (questions[currentQuestion]["correctAnswer"]===selectedAnswer){
        alert ("correct");
        answerObject.parentElement.style.display = "none";
    } else {
        alert ("incorrect");
        answerObject.parentElement.style.display = "none";
    }
};

    //Create a scoreCount div.
    const scoreCount = document.createElement('div');
    scoreCount.setAttribute("id", "scoreCount");
    //console.log(scoreCount);

    /*
    //Create and update score as game progresses.
    function correctAnswers = (questions, selectedAnswer, correctAnswers);
      //Gather answer containers from our trivia.
      let answerContainers = questions.quesrySelectorAll(".answers");
      
      //keep track of user's answers.
      let playerAnswer = "";
      scoreCount = 0;

      //For each question..
      for(i = 0; i < questions.length; i++);
        //Find selected answer
        playerAnswer = (selectedAnswers[i].querySelector("input[name = question" +
          i + "]:checked") || {}).value;
        
          console.log(playerAnswer); */
   

      
       
      
        
     
   

     
     
    

        
      
    









