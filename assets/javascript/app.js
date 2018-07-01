
// list of questions and answers
var questions = [
    {question : "What is Sam and Dean's Dad's name?",
    choice_one : "Bobby", 
    choice_two : "Castiel", 
    choice_three : "John",
    choice_four : "Gabriel",  
    correct_answer : "John",
    correct_img : "assets/images/John.jpg"
    }
    ,

    {question : "What's the make and model of 'Dean's baby,' the signature Winchester car?",
    choice_one : "'67 Impala",
    choice_two : "'65 Mustang",
    choice_three : "'69 Firebird",
    choice_four : "'68 Chevelle",
    correct_answer : "'67 Impala"
    },

    {question : "Who was the first Winchester to die?",
    choice_one : "Dean",
    choice_two : "Sam",
    choice_three : "John",
    choice_four : "Mary",
    correct_answer : "John"
    },

    {question : "Which angel is secretly a trickster?",
    choice_one : "Ezekiel",
    choice_two : "Gabriel",
    choice_three : "Lucifer",
    choice_four : "Raphael",
    correct_answer : "Gabriel"
    },

    {question : "How did Dean escape from Hell?",
    choice_one : "Sam made a deal with the Crossroads Demon",
    choice_two : "Castiel dragged him out of Hell",
    choice_three : "Dean proved his goodness and was saved by God",
    choice_four : "John traded his soul to save Dean from eternal damnation",
    correct_answer : "Castiel dragged him out of Hell"
    },

    {question : "What was Castiel's plan to become God?",
    choice_one : "To steal all the other Angels' light",
    choice_two : "To drink demon blood to make him all powerful",
    choice_three : "To absorb all the souls in Purgatory",
    choice_four : "To destract God and murder him while he was unseeing",
    correct_answer : "To absorb all the souls in Purgatory"
    },

    {question : "Who is God's long lost sister?",
    choice_one : "Lillith",
    choice_two : "The Darkness",
    choice_three : "Death",
    choice_four : "Ruby",
    correct_answer : "The Darkness"
    },

    {question : "What year was season 1 released?",
    choice_one : "1999",
    choice_two : "2001",
    choice_three : "2005",
    choice_four : "2008",
    correct_answer : "2005"
    },

    {question : "What year was season 1 released?",
    choice_one : "1999",
    choice_two : "2001",
    choice_three : "2005",
    choice_four : "2008",
    correct_answer : "2005"
    },

    {question : "What year was season 1 released?",
    choice_one : "1999",
    choice_two : "2001",
    choice_three : "2005",
    choice_four : "2008",
    correct_answer : "2005"
    },
]

// global beginning variables
var q = 0;
var countDownInterval;
var correctAns = 0;
var incorrectAns = 0;

// Start the game
$('#start').on('click', function(){
    countDownInterval = setInterval(countDown, 1000);

    $('#questionHere').text(questions[q]['question']);

    $('#choice_one').text(questions[q]['choice_one']);
    $('#choice_two').text(questions[q]['choice_two']);
    $('#choice_three').text(questions[q]['choice_three']);
    $('#choice_four').text(questions[q]['choice_four']);

    $('#start').attr('class', 'hideMe');

});


 // set timer to 30 seconds and adds to page
var timerThirty = 30;
$('#timer').text(timerThirty);

// set timer two (between questions) to 10 seconds for later use
var timerTen = 10;

// countdown function, clear when timer = 0
function countDown(){
   timerThirty = timerThirty-1;
   if (timerThirty < 10){
       timerThirty = '0' + timerThirty;
   }
   $('#timer').text(timerThirty);

    if (timerThirty < 1){
    clearInterval(countDownInterval);
    $('#questionHere').attr('class', 'hideMe');

    $('#choice_one').attr('class', 'hideMe');
    $('#choice_two').attr('class', 'hideMe');
    $('#choice_three').attr('class', 'hideMe');
    $('#choice_four').attr('class', 'hideMe');

    $('#reveal').attr('class', '.showMe bigRedText');
    $('#reveal').html("Time's up! The correct answer was:<br>");
    $('#reveal').append('<div class="answerText" id="answer">');
    $('#answer').append(questions[q]['correct_answer']);
    $('#answer').append('<br><img class="answerImg" src="'+questions[q]['correct_img']+'">');
 }
}
$(document).on('click', '.answerText', function(){
    var choice = $(this).text();
    var correctChoice = questions[q]['correct_answer'];
    if (choice == correctChoice){
        clearInterval(countDownInterval);
        
        $('#mainImage').attr('class', 'hideMe');
        $('#questionHere').attr('class', 'hideMe');
        $('#choice_one').attr('class', 'hideMe');
        $('#choice_two').attr('class', 'hideMe');
        $('#choice_three').attr('class', 'hideMe');
        $('#choice_four').attr('class', 'hideMe');

        $('#reveal').attr('class', '.showMe bigRedText');
        $('#reveal').html("That's right! The correct answer is:<br>");
        $('#reveal').append('<div class="answerText" id="answer">');
        $('#answer').append(questions[q]['correct_answer']);
        $('#answer').append('<br><img class="answerImg" src="'+questions[q]['correct_img']+'">');
        q++;
        correctAns++;

    }else {
        clearInterval(countDownInterval);
        countDownInterval = setInterval(countDown, 1000);
        $('#mainImage').attr('class', 'hideMe');
        $('#questionHere').attr('class', 'hideMe');
        $('#choice_one').attr('class', 'hideMe');
        $('#choice_two').attr('class', 'hideMe');
        $('#choice_three').attr('class', 'hideMe');
        $('#choice_four').attr('class', 'hideMe');

        $('#reveal').attr('class', '.showMe bigRedText');
        $('#reveal').html("That's wrong, dude... The answer was:");
        $('#reveal').append('<div class="answerText" id="answer">');
        $('#answer').append(questions[q]['correct_answer']);
        $('#answer').append('<br><img class="answerImg" src="'+questions[q]['correct_img']+'">');
        q++;
        incorrectAns++;
    }
})








