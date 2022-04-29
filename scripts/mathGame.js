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
// let timerSeconds= 10
const timerEl = document.getElementById('timer'); 
const timerValue = document.querySelectorAll(".timer-seconds-btn").value;
const noTimer= document.getElementById("no-timer");
const fiveSecBtn= document.getElementById("five-seconds-btn");
const tenSecBtn= document.getElementById("ten-seconds-btn");
const fifteenSecBtn= document.getElementById("fifteen-seconds-btn");
const twentySecBtn= document.getElementById("twenty-seconds-btn");
var countdownTimer
var timerSeconds

let state= {
    score: 0,
    wrongAnswers: 0
};

function showSettings() {
    stopTimer();
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
    document.getElementById("avatar").src="/images/pug-2.png";
    document.getElementById("pugAvatar").style.backgroundColor="rgb(52, 101, 206)";
    document.querySelector(".problem").style.backgroundImage="url('../images/bone-white.png')";
    document.getElementById("huskyAvatar").style.backgroundColor="transparent";
    document.getElementById("catAvatar").style.backgroundColor="transparent";
    document.getElementById("pandaAvatar").style.backgroundColor="transparent";
    document.getElementById("monkeyAvatar").style.backgroundColor="transparent";
    document.getElementById("owlAvatar").style.backgroundColor="transparent";
}
function changeAvatarHusky() {
    document.getElementById("avatar").src="/images/husky.png";
    document.getElementById("huskyAvatar").style.backgroundColor="rgb(52, 101, 206)";
    document.querySelector(".problem").style.backgroundImage="url('../images/bone-white.png')";
    document.getElementById("catAvatar").style.backgroundColor="transparent";
    document.getElementById("pandaAvatar").style.backgroundColor="transparent";
    document.getElementById("monkeyAvatar").style.backgroundColor="transparent";
    document.getElementById("owlAvatar").style.backgroundColor="transparent";
    document.getElementById("pugAvatar").style.backgroundColor="transparent";
}
function changeAvatarCat() {
    document.getElementById("avatar").src="/images/cat.png";
    document.getElementById("catAvatar").style.backgroundColor="rgb(52, 101, 206)";
    document.querySelector(".problem").style.backgroundImage="url('../images/fish.png')";
    document.getElementById("huskyAvatar").style.backgroundColor="transparent";
    document.getElementById("pandaAvatar").style.backgroundColor="transparent";
    document.getElementById("monkeyAvatar").style.backgroundColor="transparent";
    document.getElementById("owlAvatar").style.backgroundColor="transparent";
    document.getElementById("pugAvatar").style.backgroundColor="transparent";
}
function changeAvatarPanda() {
    document.getElementById("avatar").src="/images/panda.png";
    document.getElementById("pandaAvatar").style.backgroundColor="rgb(52, 101, 206)";
    document.getElementById("huskyAvatar").style.backgroundColor="transparent";
    document.getElementById("catAvatar").style.backgroundColor="transparent";
    document.getElementById("monkeyAvatar").style.backgroundColor="transparent";
    document.getElementById("owlAvatar").style.backgroundColor="transparent";
    document.getElementById("pugAvatar").style.backgroundColor="transparent";
}
function changeAvatarMonkey() {
    document.getElementById("avatar").src="/images/monkey.png";
    document.getElementById("monkeyAvatar").style.backgroundColor="rgb(52, 101, 206)";
    document.getElementById("huskyAvatar").style.backgroundColor="transparent";
    document.getElementById("catAvatar").style.backgroundColor="transparent";
    document.getElementById("pandaAvatar").style.backgroundColor="transparent";
    document.getElementById("owlAvatar").style.backgroundColor="transparent";
    document.getElementById("pugAvatar").style.backgroundColor="transparent";
}
function changeAvatarOwl() {
    document.getElementById("avatar").src="/images/owl.png";
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
        while (numberOne < numberTwo) {
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
        numberOne = generateNumber(30)
        numberTwo = generateNumber(10)
        if (numberOne < numberTwo || (numberOne/numberTwo) % 1 != 0 || numberTwo == 1) {
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



function handleAutoSubmit() {
    ourForm.submit
    state.wrongAnswers++
    mistakesAllowed.textContent = 2 - state.wrongAnswers
    problemElement.classList.add("animate-wrong")
    setTimeout(()=> problemElement.classList.remove("animate-wrong"), 331)
    updateProblem()
    checkLogic()
}

function handleSubmit(e) {
    e.preventDefault()
    let correctAnswer
    const p = state.currentProblem
    if (p.operator == "+") correctAnswer = p.numberOne + p.numberTwo
    if (p.operator == "-") correctAnswer = p.numberOne - p.numberTwo
    if (p.operator == "x") correctAnswer = p.numberOne * p.numberTwo
    if (p.operator == "/") correctAnswer = p.numberOne / p.numberTwo
    if(parseInt(ourField.value, 10) === correctAnswer) {
        state.score++
        pointsNeeded.textContent = 10 - state.score
        updateProblem()
        renderProgressBar()
    }
    
    else {
        stopTimer()
        state.wrongAnswers++
        mistakesAllowed.textContent = 2 - state.wrongAnswers
        problemElement.classList.add("animate-wrong")
        setTimeout(()=> problemElement.classList.remove("animate-wrong"), 331)
        ourField.value=""
        ourField.focus()
        startTimer()
    }
    checkLogic()
    };

function checkLogic() {
    //if you won
    if (state.score === 10) {
        endMessage.textContent = "Congrats! You won."
        document.body.classList.add("overlay-is-open")
        setTimeout(() => resetButton.focus(), 331)
    }
    //if you lost
    if (state.wrongAnswers === 3) {
        endMessage.textContent = "Sorry, you lost."
        document.body.classList.add("overlay-is-open")
        setTimeout(() => resetButton.focus(), 331)
    }
}

resetButton.addEventListener("click", resetGame)

function resetGame() {
    document.body.classList.remove("overlay-is-open")
    updateProblem()
    state.score=0
    state.wrongAnswers= 0
    pointsNeeded.textContent = 10
    mistakesAllowed.textContent = 2
    renderProgressBar()
}

function renderProgressBar() {
    progressFill.style.transform = `scaleX(${1-(state.score/10)})`;
    progressFill.style.borderTopLeftRadius = "0px";
    progressFill.style.borderBottomLeftRadius = "0px";
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
