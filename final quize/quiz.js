var myQuestions = [

    {
        
        question: "1.which is the part of the computer system that one can physically touch ?",
        answers: {
            a: 'data',
            b: 'operting system',
            c: 'hardware',
            d:'software'

        },
        correctAnswer: 'c'
    },
    {
        question: "2.What is 1 MB?",
        answers: {
            a: '1024Bits',
            b: '1024Bytes',
            c: '1024KB',
            d:'1023KB'
        },
        correctAnswer: 'c'
    },
    {
        question: "3.ALU stands for ?",
        answers: {
            a: 'Arithmetics logic unit',
            b: 'All longer unit',
            c: 'Around logic unit ',
            d:'Arithmetics and logic unit'
        },
        correctAnswer: 'd'
    },
    {
        question: "4.which of the following is not a input devices?",
        answers: {
            a: 'mouse',
            b: 'light pen',
            c: 'keyboard',
            d:'VDU'
        },
        correctAnswer: 'd'
    },
    {
        question: "5.Which one of the following is a programming langauge?",
        answers: {
            a: 'HTTP',
            b: 'HTML',
            c: 'HPML',
            d:'FTP'
        },
        correctAnswer: 'b'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function buildQuiz(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label id ="ram">'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'green';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    buildQuiz(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}