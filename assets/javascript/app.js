
// list of questions and answers
var questions = [
    {question : "What is Sam and Dean's Mom's name?",
    choice_one : "Ruby", 
    choice_two : "Jo", 
    choice_three : "Mary",
    choice_four : "Jessica",  
    correct_answer : "Mary",
    correct_img : "assets/images/Mary.jpg"
    }
    ,

    {question : "What's the make and model of 'Dean's baby,' the signature Winchester car?",
    choice_one : "'67 Chevvy Impala",
    choice_two : "'65 Ford Mustang",
    choice_three : "'69 Pontiac Firebird",
    choice_four : "'68 Chevvy Chevelle",
    correct_answer : "'67 Chevvy Impala",
    correct_img : "assets/images/Impala.jpg"
    },

    {question : "Who was the first Winchester to come back to life?",
    choice_one : "Dean",
    choice_two : "Sam",
    choice_three : "John",
    choice_four : "Mary",
    correct_answer : "John",
    correct_img : "assets/images/John.jpg"
    },

    {question : "Which angel is secretly a trickster?",
    choice_one : "Ezekiel",
    choice_two : "Gabriel",
    choice_three : "Lucifer",
    choice_four : "Raphael",
    correct_answer : "Gabriel",
    correct_img : "assets/images/Gabriel.jpg"
    },

    {question : "How did Dean escape from Hell?",
    choice_one : "Sam made a deal with the Crossroads Demon",
    choice_two : "Castiel dragged him out of Hell",
    choice_three : "Dean proved his goodness and was saved by God",
    choice_four : "John traded his soul to save Dean from eternal damnation",
    correct_answer : "Castiel dragged him out of Hell",
    correct_img : "assets/images/Lucifer.jpg"
    },

    {question : "What was Castiel's plan to become God?",
    choice_one : "To steal all the other Angels' light",
    choice_two : "To drink demon blood to make him all powerful",
    choice_three : "To absorb all the souls in Purgatory",
    choice_four : "To destract God and murder him while he was unseeing",
    correct_answer : "To absorb all the souls in Purgatory",
    correct_img : "assets/images/Castiel.jpg"
    },

    {question : "Who is God's long lost sister?",
    choice_one : "Lillith",
    choice_two : "The Darkness",
    choice_three : "Death",
    choice_four : "Ruby",
    correct_answer : "The Darkness",
    correct_img : "assets/images/Darkness.jpg"
    },

    {question : "Which does NOT exist in the Supernatural universe",
    choice_one : "Vampires",
    choice_two : "Witches",
    choice_three : "Aliens",
    choice_four : "Werewolves",
    correct_answer : "Aliens",
    correct_img : "assets/images/Aliens.jpg"
    },

    {question : "After the previous ruler vacates, who crowns himself the King of Hell?",
    choice_one : "Crowley",
    choice_two : "Lucifer",
    choice_three : "Castiel",
    choice_four : "Chuck",
    correct_answer : "Crowley",
    correct_img : "assets/images/Crowley.jpg"
    },

    {question : "What year was season 1 released?",
    choice_one : "1999",
    choice_two : "2001",
    choice_three : "2005",
    choice_four : "2008",
    correct_answer : "2005",
    correct_img : "assets/images/John.jpg"
    },
]

// global beginning variables
var q = 0;
var countDownIntervalThirty;
var countDownIntervalFive;
var correctAns = 0;
var incorrectAns = 0;

// set timer to 30 seconds and adds to page
var timerThirty = 30;
$('#timer').text(timerThirty);

// countdown function, clear when timer = 0
function countDownThirty(){
    $('#timer').show();
    $('#timerText').show();
    timerThirty = timerThirty - 1;
   if (timerThirty < 10 && timerThirty >= 0){
       timerThirty = '0' + timerThirty;
   }
   if (timerThirty == -1){
    timerThirty = 0;
    $('#timer').hide();
    $('#timerText').hide();
    clearInterval(countDownIntervalThirty);
    countDownIntervalFive = setInterval(countDownFive, 1000);

        $('#mainImage').attr('class', 'hideMe');
        $('#questionHere').attr('class', 'hideMe');
        $('#choice_one').attr('class', 'hideMe');
        $('#choice_two').attr('class', 'hideMe');
        $('#choice_three').attr('class', 'hideMe');
        $('#choice_four').attr('class', 'hideMe');

        $('#timerFive').attr('class', 'showMe');
        $('#reveal').attr('class', 'showMe bigRedText');
        $('#reveal').html("Time's up, idjit... The answer was:");
        $('#reveal').append('<div class="answerText" id="answer">');
        $('#answer').append(questions[q]['correct_answer']);
        $('#answer').append('<br><img class="answerImg" src="'+questions[q]['correct_img']+'">');
        q++;
        incorrectAns++;
    }
   $('#timer').text(timerThirty);
} 

// Start the game
$('#start').on('click', function(){
    countDownIntervalThirty = setInterval(countDownThirty, 1000);

    $('#questionHere').text(questions[q]['question']);

    $('#choice_one').text(questions[q]['choice_one']);
    $('#choice_two').text(questions[q]['choice_two']);
    $('#choice_three').text(questions[q]['choice_three']);
    $('#choice_four').text(questions[q]['choice_four']);

    $('#start').attr('class', 'hideMe');
});


 
// set timer (between questions) to 5 seconds and go to next question
var timerFive = 5;
function countDownFive(){
    timerFive = timerFive - 1;

    if (timerFive < 1){
    clearInterval(countDownIntervalFive);
    clearInterval(countDownIntervalThirty);

    timerFive = 5;
    timerThirty = 31;
    
    $('#timer').text(timerThirty);
    countDownIntervalThirty = setInterval(countDownThirty, 1000);
   
    
    $('#reveal').attr('class', 'hideMe');

    $('#questionHere').text(questions[q]['question']);

    $('#choice_one').text(questions[q]['choice_one']);
    $('#choice_two').text(questions[q]['choice_two']);
    $('#choice_three').text(questions[q]['choice_three']);
    $('#choice_four').text(questions[q]['choice_four']);

    $('#questionHere').attr('class', 'showMe bigRedText');

    $('#choice_one').attr('class', 'showMe answerText');
    $('#choice_two').attr('class', 'showMe answerText');
    $('#choice_three').attr('class', 'showMe answerText');
    $('#choice_four').attr('class', 'showMe answerText');
    $('#timer').show();

 }
}
   
    
$('.answerText').on('click', function(){
    var choice = $(this).text();
    var totalScore = correctAns + incorrectAns;
    var correctChoice = questions[q]['correct_answer'];
    countDownIntervalFive = setInterval(countDownFive, 1000);

    if (choice == correctChoice){
        $('#timer').hide();
        $('#timerText').hide();
        clearInterval(countDownIntervalThirty);
        
        $('#mainImage').attr('class', 'hideMe');
        $('#questionHere').attr('class', 'hideMe');
        $('#choice_one').attr('class', 'hideMe');
        $('#choice_two').attr('class', 'hideMe');
        $('#choice_three').attr('class', 'hideMe');
        $('#choice_four').attr('class', 'hideMe');

        $('#reveal').attr('class', 'showMe bigRedText');
        $('#reveal').html("Right on! The correct answer is:<br>");
        $('#reveal').append('<div class="answerText" id="answer">');
        $('#answer').append(questions[q]['correct_answer']);
        $('#answer').append('<br><img class="answerImg" src="'+questions[q]['correct_img']+'">');
        correctAns++;
        q++;


    }else {
        $('#timer').hide();
        $('#timerText').hide();
        clearInterval(countDownIntervalThirty);

        $('#mainImage').attr('class', 'hideMe');
        $('#questionHere').attr('class', 'hideMe');
        $('#choice_one').attr('class', 'hideMe');
        $('#choice_two').attr('class', 'hideMe');
        $('#choice_three').attr('class', 'hideMe');
        $('#choice_four').attr('class', 'hideMe');

        $('#reveal').attr('class', 'showMe bigRedText');
        $('#reveal').html("That's wrong, dude... The answer was:");
        $('#reveal').append('<div class="answerText" id="answer">');
        $('#answer').append(questions[q]['correct_answer']);
        $('#answer').append('<br><img class="answerImg" src="'+questions[q]['correct_img']+'">');
        incorrectAns++;
        q++;
    }
    if (questions[q] == undefined){
        $('#timer').hide();
        $('#timerText').hide();
        clearInterval(countDownIntervalThirty);
        clearInterval(countDownIntervalFive);
        timerThirty = 0;
        timerFive = 1;

        $('#questionHere').attr('class', 'hideMe');
        $('#choice_one').attr('class', 'hideMe');
        $('#choice_two').attr('class', 'hideMe');
        $('#choice_three').attr('class', 'hideMe');
        $('#choice_four').attr('class', 'hideMe');

        $('#reveal').attr('class', 'showMe bigRedText');
        $('#reveal').html("How'd ya do?");
        $('#reveal').append('<div class="answerText" id="total">');
        $('#total').append('Total correct: ' + correctAns + '<br>');
        $('#total').append('Total incorrect: ' + incorrectAns + '<br>');

        var button = $('<button>');
        button.html('<a href="">Try again?</a>');

        // could not make this work, but this was my intention

        // $('button').on('click', function(){
        //     q=0;
        //     correctAns = 0;
        //     incorrectAns = 0;
        //     countDownIntervalThirty = setInterval(countDownThirty, 1000);

        //     $('#questionHere').text(questions[q]['question']);
        
        //     $('#choice_one').text(questions[q]['choice_one']);
        //     $('#choice_two').text(questions[q]['choice_two']);
        //     $('#choice_three').text(questions[q]['choice_three']);
        //     $('#choice_four').text(questions[q]['choice_four']);
        // });
        $('#total').append(button);        
    }
});














