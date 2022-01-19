window.addEventListener('load', (event) => {
    var startButton = document.getElementsByClassName("start-button");
    var quizHeader = document.querySelector(".quiz-header");
    var quizBody = document.querySelector(".quiz-body");
    var quizFooter = document.querySelector(".quiz-footer");

    var curentNumber = 1;

    var questions;
    
    var questionAnswer = {
        q0: {
            question: "This is some a question ?",
            options: {
                o0: "This is an option 1",
                o1: "This is an option 2",
                o2: "This is an option 3",
                o3: "This is an option 4"
            },
            rightAnswer: "o3"
        },
        q1: {
            question: "This is some a question 1 ?",
            options: {
                o0: "This is an option 1",
                o1: "This is an option 2",
                o2: "This is an option 3",
                o3: "This is an option 4"
            },
            rightAnswer: "o2"
        },
        q2: {
            question: "This is some a question 2 ?",
            options: {
                o0: "This is an option 1",
                o1: "This is an option 2",
                o2: "This is an option 3",
                o3: "This is an option 4"
            },
            rightAnswer: "o1"
        },
        q3: {
            question: "This is some a question 3 ?",
            options: {
                o0: "This is an option 1",
                o1: "This is an option 2",
                o2: "This is an option 3",
                o3: "This is an option 4"
            },
            rightAnswer: "o4"
        },
        q4: {
            question: "This is some a question 4 ?",
            options: {
                o0: "This is an option 1",
                o1: "This is an option 2",
                o2: "This is an option 3",
                o3: "This is an option 4"
            },
            rightAnswer: "o0"
        }
    }

    let numberAllQuestion = Object.keys(questionAnswer).length;
    
    startButton[0].addEventListener("mouseenter", function () {
        quizFooter.style.backgroundColor = "#1FD9FF";
    });

    startButton[0].addEventListener("mouseleave", () => {
        quizFooter.removeAttribute("style");
    });

    questions = randomQuestion()

    startButton[0].addEventListener("click", startQuiz);

    function startQuiz(){
        while(quizHeader.firstElementChild){
            quizHeader.removeChild(quizHeader.firstElementChild);
        }

        while(quizBody.firstElementChild){
            quizBody.removeChild(quizBody.firstElementChild);
        }

        while(quizFooter.firstElementChild){
            quizFooter.removeChild(quizFooter.firstElementChild);
        }
        
        quizFooter.removeAttribute("style");

        let controllerSectionTag = document.createElement("div");

        var curentNumberDescTag = document.createElement("div");
        curentNumberDescTag.className = "curent-number";
        var curentNumberDescContent = document.createTextNode("Question Number " + curentNumber);
        curentNumberDescTag.appendChild(curentNumberDescContent);

        controllerSectionTag.classList.add("controller");
        
        let submitButtonTag = document.createElement("button");
        let submitButtonContent = document.createTextNode("SUBMIT");
        submitButtonTag.setAttribute("type", "submit");
        submitButtonTag.addEventListener("click", nextQuestion);
       
        submitButtonTag.appendChild(submitButtonContent);
        
        controllerSectionTag.appendChild(curentNumberDescTag);
        controllerSectionTag.appendChild(submitButtonTag);
        
        quizFooter.appendChild(controllerSectionTag);

        showQuestion(questionAnswer[questions[(curentNumber - 1)]].question);

        var optionsAnswer = randomOptions(questionAnswer[questions[(curentNumber - 1)]].options);

        showOptionsAnswer(optionsAnswer, questions, (curentNumber - 1));
    }
    
    function nextQuestion(){
        chooseAnswer();
        checkAnswer();
        if(curentNumber < numberAllQuestion){
            curentNumber += 1;
            startQuiz();
        }else{
            alert("Sudah Habis");
        }
    }

    function chooseAnswer(){
        alert("choose answer");
    }
    function checkAnswer(){
        alert("check answer");
    }

    function randomQuestion(){
        var keys = Object.keys(questionAnswer);
        var sortIndex = [];
        var randomKeys = [];
        var i = 0;

        while(i < keys.length){
            while(true){
                var random = keys.length * Math.random() << 0;
                if(!sortIndex.includes(random)){
                    sortIndex.push(random);
                    break;
                }
            }
            i++;
        }

        for(index in sortIndex){
            randomKeys.push(keys[sortIndex[index]]);
        }
        
        //console.log(keys);
        //console.log(sortIndex);
        //console.log(randomKeys);
        
        return randomKeys;
    }

    function showQuestion(question){
        var questionTag = document.createElement("p");
        var questionContent = document.createTextNode(question);
        questionTag.classList.add("question");
        questionTag.appendChild(questionContent);
        quizHeader.appendChild(questionTag);
    }

    function randomOptions(optionsInQuestion){
        var keys = Object.keys(optionsInQuestion);
        var sortIndex = [];
        var randomKeys = [];

        for(var i = 0; i < keys.length; i++){
            while(true){
                var random = keys.length * Math.random() << 0;
                if(!sortIndex.includes(random)){
                    sortIndex.push(random);
                    break;
                }
            }
        }

        for(index in sortIndex){
            randomKeys.push(keys[sortIndex[index]]);
        }

        //console.log(keys);
        //console.log(sortIndex);
        //console.log(randomKeys);

        return randomKeys;
    }

    function showOptionsAnswer(optionsAnswer, questions, questionNumber){
        var optionsTag = [];
        var abcd = ['A', 'B', 'C', 'D'];
        

        var optionTag = document.createElement("div");
        optionTag.className = "optionContainer";
        
        var add
        
        for(optionPick in optionsAnswer){
            var optionRadioButton = document.createElement("input")
            optionRadioButton.setAttribute("type", "radio");
            optionRadioButton.setAttribute("name", "optionAnswer");
            var optionId = abcd[optionPick];
            var optionKey = optionsAnswer[optionPick];
            optionRadioButton.setAttribute("value", optionKey);
            optionRadioButton.setAttribute("id", optionId);

            var optionLabel = document.createElement("label")
            optionLabel.setAttribute("for", optionId);

            var optionContent = document.createTextNode(abcd[optionPick] + ". " + questionAnswer[questions[questionNumber]].options[optionsAnswer[optionPick]]);

            optionLabel.appendChild(optionContent);

            var optionWrap = document.createElement("div");
            optionWrap.className = "optionWrap";
            optionWrap.appendChild(optionRadioButton);
            optionWrap.appendChild(optionLabel);

            optionsTag.push(optionWrap);
        }

        for(createOption in optionsTag){
            optionTag.appendChild(optionsTag[createOption]);
        }

        quizBody.appendChild(optionTag);
    }
});
