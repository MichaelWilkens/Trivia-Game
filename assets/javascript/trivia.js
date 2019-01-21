
var newQuestionTimer;
var timerRunning = false;
var time;
var intervalID;
var questionNumber = 0;
var correctAnswers = 0;
var currentQuestion;


$('#start-button').on('click', function(){
    $(this).css('display','none');
    $('#question').css('display','block');
    $('h1').css('display','none');
    $('.option').css('display','block');
    $('#game-logic').css('display','flex')
});

function newQuestion(){
    var random = [Math.floor(Math.random()*questions.length)];
    currentQuestion = questions[random];
    questions.splice(random, 1);
    $('#correct-answers').text('Correct Answers = ' + correctAnswers + '/20');
    $('#question').text(currentQuestion.question);
    $('#a').text(currentQuestion.a);
    $('#b').text(currentQuestion.b);
    $('#c').text(currentQuestion.c);
    $('#d').text(currentQuestion.d);
    timerCountdown();
    $('#answer').text("");
    questionNumber ++;
    $('#question-number').text('Question ' + questionNumber + "/20");
}

function checkMaxQuestions(){
    if(questionNumber === 20){
        $('#game-logic').css('display', 'none')
        $('.option').css('display','none')
        $('#answer').css('display','none')
        $('#question-number').text('Question 20/20');
        if(correctAnswers >= 18){
            $('#question').text("You get the 'Office Champion' Dundee. You got " + correctAnswers + " Correct.");
        } else if (correctAnswers<18 && correctAnswers>=12){
            $('#question').text("You get the 'Assistant TO the Regional Manager Dundee'. You got " + correctAnswers + " Correct.");
        } else if (correctAnswers<18 && correctAnswers>=12){
            $('#question').text("You get the 'Worst Salesman of the Year'. You got " + correctAnswers + " Correct.");
        };    
        timerReset();
        clearTimeout(newQuestionTimer);
    };
};


function timerCountdown(){
    if(!timerRunning){
        timerRunning = true;
        time = 30;
        $('#timer').text(time);

        intervalID = setInterval(function(){
            time --;
            $('#timer').text(time);

            if(time === 0){
                timerReset();
                $('#question').text("Time's up!");
                $('#answer').text("Answer: " + currentQuestion.Answer);
                newQuestionTimer = setTimeout(newQuestion, 2000);
                checkMaxQuestions();
            };
        }, 1000);
    };
};

function timerReset(){
    timerRunning = false;
    time = 0;
    $('#timer').text(time);
    clearInterval(intervalID);
};


$('#start-button').on('click', function(){
    newQuestion();
});


$('.option').on('click', function(){
    if(timerRunning){
        timerReset();
        if($(this).text()=== currentQuestion.Answer){
            correctAnswers ++;
            $('#correct-answers').text('Correct Answers = ' + correctAnswers + '/20');
            $('#question').text("Correct!");
            newQuestionTimer = setTimeout(newQuestion, 2000);
            checkMaxQuestions();
        } else {
            $('#question').text("Incorrect!");
            $('#answer').text("Answer: " + currentQuestion.Answer);
            newQuestionTimer = setTimeout(newQuestion, 2000);
            checkMaxQuestions();
        };
    };
});

$.ajax({
    url: "https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/H6DsRPlp0zMUE?api_key=2WU4PYcRUv7T886W3C56ImE48Qdl0J7U",
    method: 'GET',
    responseType:'application/json',
}).then(function(response){
    var string = response.data.images.fixed_height.url
    $('#background').css('background-image', 'url('+string+')')
})

var questions = [
    {"question": "What type of farm does dwight own?",
    "a":"Cow",
    "b": "Beet",
    "c": "celery",
    "d": "Yogurt",
    "Answer": "Beet"
    },

    {"question": "What is Roy's last name?",
        "a": "Beesley",
        "b": "Kim",
        "c": "Anderson",
        "d": "Scott",
        "Answer": "Anderson"
    },

    {"question": "What does michael burn his foot on?",
        "a": "Lighter",
        "b": "Coal",
        "c": "Pavement",
        "d": "George foreman grill",
        "Answer": "George foreman grill"
    },

    {"question": "Which restaurant was Pam banned from?",
    "a": "Chili's",
    "b": "Poor Richards",
    "c": "Public School",
    "d": "Benihana",
    "Answer": "Chili's"
    },

    {"question": "What is the name of the Scranton Strangler?",
    "a": "Albert Henry DeSalvo",
    "b": "George Howard Scub",
    "c": "Charles Walter Fink",
    "d": "Benihana",
    "Answer": "George Howard Scub"
    },

    {"question": "Which character has NEVER been the chair of the party planning committee?",
    "a": "Kelly",
    "b": "Phyllis",
    "c": "Angela",
    "d": "Dwight",
    "Answer": "Kelly"
    },

    {"question": "Which character attended high school with Michael?",
    "a": "Todd Packer",
    "b": "Phyllis",
    "c": "Kevin",
    "d": "Dwight",
    "Answer": "Phyllis"
    },

    {"question": "What is the number Kevin invents to compensate for his accounting errors?",
    "a": "Dundereight",
    "b": "Thirtween",
    "c": "Slevin",
    "d": "Keleven",
    "Answer": "Keleven"
    },

    {"question": "What is the name of Ryan's social networking venture?",
    "a": "WUPHF.com",
    "b": "ARPHF.com",
    "c": "RUPHF.com",
    "d": "BARQ.com",
    "Answer": "WUPHF.com"
    },

    {"question": "Which character is NOT chosen for Michael's basketball team in their match against the warehouse?",
    "a": "Phyllis",
    "b": "Stanley",
    "c": "Ryan",
    "d": "Oscar",
    "Answer": "Oscar"
    },

    {"question": "What prize does Phyllis auction off at Michael's C.R.I.M.E.A.I.D. fundraiser?",
    "a": "Hand-knit mittens",
    "b": "A makeover",
    "c": "A hug",
    "d": "A Vance min-fridge",
    "Answer": "A hug"
    },

    {"question": "Which Dunder Mifflin salesman did Pam date before Jim?",
    "a": "Todd Packer",
    "b": "Danny Cordray",
    "c": "Lloyd Gross",
    "d": "Clark Green",
    "Answer": "Danny Cordray"
    },

    {"question": "Which of the following is NOT a theme of one of the guest rooms at Schrute Farms?",
    "a": "America",
    "b": "Irrigation",
    "c": "Goats",
    "d": "Nighttime",
    "Answer": "Goats"
    },

    {"question": "According to Aunt Shirley, Dwight's cousin Mose had a romantic infatuation with what common farm equipment?",
    "a": "Lady Scarecrow",
    "b": "Tractor",
    "c": "Rake",
    "d": "Milking Machine",
    "Answer": "Lady Scarecrow"
    },

    {"question": "What does the 'B' in Creed's acronym B.O.B.O.D.D.Y. stand for?",
    "a": "Blasphemy",
    "b": "Bold",
    "c": "Bizniss",
    "d": "Brain",
    "Answer": "Bizniss"
    },

    {"question": "What is the name of Jim and Pam's eldest child?",
    "a": "Fifi",
    "b": "Cece",
    "c": "Deedee",
    "d": "Bebe",
    "Answer": "Cece"
    },


    {"question": "What is the name of the 'mobster' who tries to sell Michael an insurance policy?",
    "a": "Angelo Luciano",
    "b": "Angelo Grotti",
    "c": "Angelo Capone",
    "d": "Angelo Corleone",
    "Answer": "Angelo Grotti"
    },

    {"question": "Which of the following was NOT included in the teapot Jim gave Pam at the office Christmas party?",
    "a": "Hot sauce packet",
    "b": "Golf pencil",
    "c": "Baseball card",
    "d": "Jim's yearbook picture",
    "Answer": "Baseball card"
    },

    {"question": "Which talk show host did NOT appear in a cameo on The Office?",
    "a": "Jimmy Fallon",
    "b": "Stephen Colbert",
    "c": "Larry Wilmore",
    "d": "Conan O'brien",
    "Answer": "Jimmy Fallon"
    },

    {"question": "Which of the following was Erin's 'room' when she was growing up in foster care?",
    "a": "Her hair",
    "b": "The attic",
    "c": "A sofa-cushion fort",
    "d": "Underneath the stairs",
    "Answer": "Her hair"
    },

    
]









