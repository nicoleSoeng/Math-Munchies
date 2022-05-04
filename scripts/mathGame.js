const problemElement= document.querySelector(".problem");
const ourForm= document.querySelector(".our-form");
const ourField= document.querySelector(".our-field");
const pointsNeeded= document.querySelector(".points-needed");
const mistakesAllowed= document.querySelector(".mistakes-allowed");
const progressBar= document.querySelector(".progress");
const progressFill= document.querySelector(".progress-inner");
const endMessage= document.querySelector(".end-message");
const resetButton= document.querySelector(".reset-button");
const submitButton= document.querySelector(".submit");
const subtractButton= document.querySelector(".subtraction");
const additionButton= document.querySelector(".addition");
const multiplicationButton= document.querySelector(".multiplication");
const operatorChoice= document.querySelectorAll('input[name="operator-choice"]')
const setTimerButton= document.querySelector(".set-timer")
const stopTimerButton= document.querySelector(".stop-timer")
const timerHead= document.querySelector(".timer-head")
const seconds= document.querySelector(".seconds")
const sec= document.querySelector(".sec")
const timerContainer= document.querySelector(".timerContainer")
const StartBtn = document.getElementById("start-btn")
const settingsContent= document.querySelector(".settings-main-content-index")
const MainUI= document.querySelector(".main-ui")
const timerEl = document.getElementById('timer'); 
const timerValue = document.querySelectorAll(".timer-seconds-btn").value;
const noTimer= document.getElementById("no-timer");
const fiveSecBtn= document.getElementById("five-seconds-btn");
const tenSecBtn= document.getElementById("ten-seconds-btn");
const fifteenSecBtn= document.getElementById("fifteen-seconds-btn");
const twentySecBtn= document.getElementById("twenty-seconds-btn");
var countdownTimer
var timerSeconds
const successSound= document.getElementById("successSound");
const wrongSound= document.getElementById("wrongSound")
const winSound= document.getElementById("winSound")
const failSound= document.getElementById("failSound")
const wrongSymbol= document.getElementById("wrongSymbol");
const correctSymbol= document.getElementById("correctSymbol");

let state= {
    score: 0,
    wrongAnswers: 0
};




function showSettings() {
    stopTimer();
    state.score=0
    state.wrongAnswers= 0
    pointsNeeded.textContent = 10
    mistakesAllowed.textContent = 2
    renderProgressBar()
    settingsContent.style.display="flex";
    MainUI.style.display="none";
}

function showMainUI() {
    settingsContent.style.display="none";
    MainUI.style.display="block";
    updateProblem();
}
// operatorChoice.forEach(item => {item.addEventListener("click", updateProblem)})
// operatorChoice.forEach(item => {item.addEventListener("click", autoSubmit)})

function changeAvatarPug() {
    document.getElementById("avatar").src="images/pug-2.png";
    document.getElementById("pugAvatar").style.backgroundColor="rgb(52, 101, 206)";
    document.querySelector(".problem").style.backgroundImage="url('images/bone-white.png')";
    document.getElementById("huskyAvatar").style.backgroundColor="transparent";
    document.getElementById("catAvatar").style.backgroundColor="transparent";
    document.getElementById("pandaAvatar").style.backgroundColor="transparent";
    document.getElementById("monkeyAvatar").style.backgroundColor="transparent";
    document.getElementById("owlAvatar").style.backgroundColor="transparent";
}
function changeAvatarHusky() {
    document.getElementById("avatar").src="images/husky.png";
    document.getElementById("huskyAvatar").style.backgroundColor="rgb(52, 101, 206)";
    document.querySelector(".problem").style.backgroundImage="url('images/bone-white.png')";
    document.getElementById("catAvatar").style.backgroundColor="transparent";
    document.getElementById("pandaAvatar").style.backgroundColor="transparent";
    document.getElementById("monkeyAvatar").style.backgroundColor="transparent";
    document.getElementById("owlAvatar").style.backgroundColor="transparent";
    document.getElementById("pugAvatar").style.backgroundColor="transparent";
}
function changeAvatarCat() {
    document.getElementById("avatar").src="images/cat.png";
    document.getElementById("catAvatar").style.backgroundColor="rgb(52, 101, 206)";
    document.querySelector(".problem").style.backgroundImage="url('images/fish.png')";
    document.getElementById("huskyAvatar").style.backgroundColor="transparent";
    document.getElementById("pandaAvatar").style.backgroundColor="transparent";
    document.getElementById("monkeyAvatar").style.backgroundColor="transparent";
    document.getElementById("owlAvatar").style.backgroundColor="transparent";
    document.getElementById("pugAvatar").style.backgroundColor="transparent";
}
function changeAvatarPanda() {
    document.getElementById("avatar").src="images/panda.png";
    document.querySelector(".problem").style.backgroundImage="url('images/cloud.png')"
    document.getElementById("pandaAvatar").style.backgroundColor="rgb(52, 101, 206)";
    document.getElementById("huskyAvatar").style.backgroundColor="transparent";
    document.getElementById("catAvatar").style.backgroundColor="transparent";
    document.getElementById("monkeyAvatar").style.backgroundColor="transparent";
    document.getElementById("owlAvatar").style.backgroundColor="transparent";
    document.getElementById("pugAvatar").style.backgroundColor="transparent";
}
function changeAvatarMonkey() {
    document.getElementById("avatar").src="images/monkey.png";
    document.querySelector(".problem").style.backgroundImage="url('images/cloud.png')"
    document.getElementById("monkeyAvatar").style.backgroundColor="rgb(52, 101, 206)";
    document.getElementById("huskyAvatar").style.backgroundColor="transparent";
    document.getElementById("catAvatar").style.backgroundColor="transparent";
    document.getElementById("pandaAvatar").style.backgroundColor="transparent";
    document.getElementById("owlAvatar").style.backgroundColor="transparent";
    document.getElementById("pugAvatar").style.backgroundColor="transparent";
}
function changeAvatarOwl() {
    document.getElementById("avatar").src="images/owl.png";
    document.querySelector(".problem").style.backgroundImage="url('images/cloud.png')"
    document.getElementById("owlAvatar").style.backgroundColor="rgb(52, 101, 206)";
    document.getElementById("huskyAvatar").style.backgroundColor="transparent";
    document.getElementById("catAvatar").style.backgroundColor="transparent";
    document.getElementById("pandaAvatar").style.backgroundColor="transparent";
    document.getElementById("monkeyAvatar").style.backgroundColor="transparent";
    document.getElementById("pugAvatar").style.backgroundColor="transparent";
}
function updateProblem() {
    clearInterval(countdownTimer);
    // stopCountdown();
    // stopStartCountdown();
    stopTimer();
    resetCountdown();
    timerEl.innerHTML = timerSeconds + " seconds left";
    problemElement.style.visibility = "visible";
    state.currentProblem = generateProblem()
    problemElement.innerHTML= `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`
    ourField.value = ""
    ourField.focus()
    startTimer();
    countdownTimer = setInterval(setTimerDisplay, 1000);  
};

function resetCountdown() {
    if (noTimer.checked == true) {
        document.getElementById("timer").style.display="none";
    }
    if (fiveSecBtn.checked == true) {
        document.getElementById("timer").style.display="block"
        timerSeconds = 5
    }
    if (tenSecBtn.checked== true) {
        document.getElementById("timer").style.display="block"
        timerSeconds = 10
    }
    if (fifteenSecBtn.checked== true) {
        document.getElementById("timer").style.display="block"
        timerSeconds = 15
    }
    if (twentySecBtn.checked== true) {
        document.getElementById("timer").style.display="block"
        timerSeconds = 20
    }
    document.getElementById("timer").style.color="black";
}

function setTimerDisplay() {
    let seconds = Math.floor(timerSeconds - 1);
    timerEl.innerHTML = seconds + " seconds left";
    timerSeconds--;
    if (timerSeconds < 4) {
        document.getElementById("timer").style.color="rgb(204, 7, 7)";
        document.getElementById("timer").style.fontWeight="bold";
    }
    else if (timerSeconds >= 4) {
        document.getElementById("timer").style.color="black"
    }
};

function startTimer() {
    // timer= setTimeout(handleAutoSubmit, 10000);
    if (fiveSecBtn.checked == true) {
        timer= setTimeout(handleAutoSubmit, 5000)
    }
    else if (tenSecBtn.checked == true) {
        timer= setTimeout(handleAutoSubmit, 10000)
    }
    else if (fifteenSecBtn.checked == true) {
        timer= setTimeout(handleAutoSubmit, 15000)
    }
    else if (twentySecBtn.checked == true) {
        timer= setTimeout(handleAutoSubmit, 20000)
    }

};

function stopTimer() {
    clearTimeout(timer);
};

function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1))
};

function generateProblem() {
    // updatePugQuotes();
    if (document.getElementById("subtractButton").checked == true) {
        operator = "-"
        numberOne = generateNumber(20)
        numberTwo = generateNumber(20)
        while (numberOne < numberTwo || numberOne - numberTwo > 10) {
            generateProblem()
        }
    }
    if (document.getElementById("addButton").checked == true) {
        operator = "+" 
        numberOne = generateNumber(12)
        numberTwo = generateNumber(12)
    } 
    if (document.getElementById("multiplyButton").checked == true) {
        operator = "x" 
        numberOne = generateNumber(10)
        numberTwo = generateNumber(10)
    }

    if (document.getElementById("divideButton").checked == true) {
        operator = "/" 
        numberOne = generateNumber(144)
        numberTwo = generateNumber(12)
        if (numberOne < numberTwo || (numberOne/numberTwo) % 1 != 0 || numberTwo == 1 || numberOne/numberTwo > 12) {
            generateProblem()
        }
    }
    return {
        numberOne,
        numberTwo,
        operator
    }
    
}

ourForm.addEventListener("submit", handleSubmit);

const wrongAnswerMessage= document.getElementById("wrong-answer-notification");

function handleAutoSubmit() {
    wrongSound.play();
    ourForm.submit
    state.wrongAnswers++
    mistakesAllowed.textContent = 2 - state.wrongAnswers
    // problemElement.classList.add("animate-wrong")
    // setTimeout(()=> problemElement.classList.remove("animate-wrong"), 331)
    wrongSymbol.style.display="block";
        setTimeout(()=> wrongSymbol.style.display="none", 400);
    updateProblem()
    checkLogic()
}

function handleSubmit(e) {
    successSound.pause()
    successSound.currentTime= 0
    wrongSound.pause()
    wrongSound.currentTime= 0
    e.preventDefault()
    let correctAnswer
    const p = state.currentProblem
    if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo
    if (p.operator == "-") correctAnswer = p.numberOne - p.numberTwo
    if (p.operator == "x") correctAnswer = p.numberOne * p.numberTwo
    if (p.operator == "/") correctAnswer = p.numberOne / p.numberTwo
    if(parseInt(ourField.value, 10) === correctAnswer) {
        successSound.play();
        correctSymbol.style.display="block";
    setTimeout(()=> correctSymbol.style.display="none", 400);
        state.score++
        pointsNeeded.textContent = 10 - state.score
        updateProblem()
        renderProgressBar()
    }
    else {
        wrongSound.play();
        stopTimer()
        // clearInterval(countdownTimer);
        state.wrongAnswers++
        mistakesAllowed.textContent = 2 - state.wrongAnswers
        // problemElement.classList.add("animate-wrong")
        // setTimeout(()=> problemElement.classList.remove("animate-wrong"), 331)
        wrongSymbol.style.display="block";
        setTimeout(()=> wrongSymbol.style.display="none", 400);
        // wrongAnswerMessage.style.display="block";
        // setTimeout(()=> wrongAnswerMessage.style.display="none", 1000);
        ourField.value=""
        ourField.focus()
        startTimer();
        resetCountdown();
        timerEl.innerHTML = timerSeconds + " seconds left";
        // countdownTimer = setInterval(setTimerDisplay, 1000);
    }
    checkLogic()
    };

function checkLogic() {
    //if you won
    if (state.score === 10) {
        problemElement.style.visibility= "hidden";
        successSound.pause();
        stopTimer();
        winSound.play();
        clearInterval(countdownTimer);
        endMessage.textContent = "Congratulations! You won."
        document.body.classList.add("overlay-is-open")
        setTimeout(() => resetButton.focus(), 331)
    }
    //if you lost
    if (state.wrongAnswers === 3) {
        problemElement.style.visibility= "hidden";
        wrongSound.pause();
        failSound.play();
        stopTimer();
        clearInterval(countdownTimer);
        mistakesAllowed.innerHTML = "0";
        endMessage.textContent = "Sorry, you lost this time. Do you want to try again?"
        document.body.classList.add("overlay-is-open")
        setTimeout(() => resetButton.focus(), 331)
    }
}
const stopButton= document.querySelector(".stop-button");
resetButton.addEventListener("click", resetGame)
stopButton.addEventListener("click", stopGame)

function stopGame() {
    document.body.classList.remove("overlay-is-open")
    failSound.pause()
    failSound.currentTime = 0
    winSound.pause()
    winSound.currentTime = 0
    showSettings()
    document.querySelector(".problem").style.visibility="hidden";
    document.getElementById("timer").style.display="none";
    state.score=0
    state.wrongAnswers= 0
    pointsNeeded.textContent = 10
    mistakesAllowed.textContent = 2
    renderProgressBar()
}

function resetGame() {
    document.body.classList.remove("overlay-is-open")
    updateProblem()
    failSound.pause()
    failSound.currentTime = 0
    winSound.pause()
    winSound.currentTime = 0
    state.score=0
    state.wrongAnswers= 0
    pointsNeeded.textContent = 10
    mistakesAllowed.textContent = 2
    renderProgressBar()
}

function renderProgressBar() {
    progressFill.style.transform = `scaleX(${1-(state.score/10)})`;
    if (state.score == 0) {
        progressFill.style.borderTopLeftRadius = "5px";
        progressFill.style.borderBottomLeftRadius = "5px";
    }
    else if (state.score != 0) {
        progressFill.style.borderTopLeftRadius = "0px";
        progressFill.style.borderBottomLeftRadius = "0px";
    }

}

function updatePugQuotes() {
    var pugQuote = document.getElementById("pugQuote");
    if(state.score == 0) {
        pugQuote.innerHTML= "I'm so hungry!";
    }
    else if(state.score > 0 && state.score <= 3) {
        pugQuote.innerHTML= "Yay! A little food for my belly.";
    }
    else if(state.score > 3 && state.score <= 7) {
        pugQuote.innerHTML= "Yum! This food is good.";
    }
    else if(state.score > 7 && state.score < 10) {
        pugQuote.innerHTML= "Almost full!";
    }
    else if(state.score ==10) {
        pugQuote.innerHTML= "Yay! I'm full.";
    }
}
