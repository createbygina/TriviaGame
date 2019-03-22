$(document).ready(function () {

  var office = [{
      question: "What is Erin's first name?",
      choices: ["Katy", "Kelly", "Carol", "Kim"],
      answer: 1
    },
    {
      question: "Who does Angela name her son after?",
      choices: ["Her mom", "Her aunt", "Her cat", "Her great grandmother"],
      answer: 2
    },
    {
      question: "Bears, Beets, __________.",
      choices: ["Beatles", "Basketball", "Bottoms Up", "Battlestar Galactica"],
      answer: 3
    },
    {
      question: "Who is Dwight's Bestish Minch?",
      choices: ["Jim Halpert", "Michael Scott", "Ryan Howard", "Andy Bernard"],
      answer: 1
    },
    {
      question: "Who is the main character in threat level midnight?",
      choices: ["Goldenface", "Cherokee Jack", "Michael Scarn", "President Jackson"],
      answer: 2
    },
    {
      question: "What is the name of Andy's college acapella group?",
      choices: ["Give Me Some Bass", "Treble Notes", "Bring the Treble", "Here Comes Treble"],
      answer: 3
    },
    {
      question: "Who complains about Pam planning her wedding to Roy at the office?",
      choices: ["Jim", "Angela", "Toby", "Phyllis"],
      answer: 0
    },
    {
      question: "What is Michael's online profile name for the dating website?",
      choices: ["WorldsBestBoss", "LittleKidLover", "MichaelGScott", "LoveDunderMifflin"],
      answer: 1
    },
    {
      question: "Which celebrity does Gabe dress up as for the costume contest?",
      choices: ["Britney Spears", "Beyonce", "Taylor Swift", "Lady Gaga"],
      answer: 3
    },
    {
      question: "What type of farm does Dwight own?",
      choices: ["Bear Farm", "Carrot Farm", "Beet Farm", "Animal Farm"],
      answer: 2
    },
    {
      question: "What name did Pam and Angela fight over for their babies?",
      choices: ["Andrew", "Timothy", "Phillip", "James"],
      answer: 2
    },
    {
      question: "Which of Angela's cats does Dwight freeze?",
      choices: ["Sprinkles", "Princess", "Sparkles", "Penny"],
      answer: 0
    }
  ];
  var rightAnswer;
  var options;
  var guessedChoice = "";

  //score
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0;

  //stop watch
  var intervalId;
  var timer = 5;
  var i = 0;

  // function resetGame() {
  //     var intervalId;
  //     var timer = 5;

  // }


  // function startTimer() {
  //     intervalID = setInterval(decrement, 1000);
  // }
  // function stop() {
  //     clearInterval(intervalId);
  // }
  // function decrement() {
  //     timer--;
  //     $("#timer").html("Time Remaining: " + timer);

  //     if (timer === 0) {
  //         stop();
  //         alert("timeup");
  //         //TIMER IS RUNNING NEGATIVE
  //     }

  // }
  // startTimer();

  function showQuestion() {
      console.log(i)
    if (office[i]) {
      var questionSection = $("<div>");
      var choiceSection = $("<div>");

      questionSection.text(office[i].question);

      office[i].choices.forEach(function (choose) {
        var createButton = $("<button>").text(choose).click(function(){
            alert("I've been clicked!");
            
        })
        console.log(createButton);
        choiceSection.append(createButton);
    });
        $("#question").html(questionSection);
        $("#choices").html(choiceSection);

        function answerCheck(answers) {
            if (choose === office[i].answer){
            alert("true");
            correctAnswers++;
            showQuestion();
        
        }
        }



    }
    i++;

}





  $("#restart").hide();
  $("#start").on("click", function () {
    showQuestion();
   
    // $("#start").hide();

  });
  // display question, choices, 
  // after guess, show answer
  // timer up = next question








});
