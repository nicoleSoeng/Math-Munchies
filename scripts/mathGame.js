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

let state= {
    score: 0,
    wrongAnswers: 0
};

operatorChoice.forEach(item => {item.addEventListener("click", updateProblem)})
// operatorChoice.forEach(item => {item.addEventListener("click", autoSubmit)})


function updateProblem() {
    stopTimer();
    problemElement.style.display = "block";
    state.currentProblem = generateProblem()
    problemElement.innerHTML= `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`
    ourField.value = ""
    ourField.focus()
    startTimer();
};

function startTimer() {
    timer = setTimeout(handleAutoSubmit, 10000)
};

function stopTimer() {
    clearTimeout(timer)
};
function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1))
};

function generateProblem() {
    //clearTimeout(handleAutoSubmit)
    updatePugQuotes();
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

// function autoSubmit() {
//     setTimeout(handleAutoSubmit, 10000)

// var sec = 15
// function decreaseSec {
//     sec=15;
//     sec--
// }

// function myTimer() {
//     // sec= document.querySelector(".seconds").value
//     var sec= 15
//     document.getElementById('timer').innerHTML = sec + " seconds left";
//     do {   
//         setInterval(decreaseSec, 1000)
//     }
//     while (sec > -1)
//         handleAutoSubmit();

//     sec--;
//     if (sec == -1) {
//         // clearTimeout(myTimer, 1000);
//         // handleAutoSubmit();
//     }
// }


function handleAutoSubmit() {
    ourForm.submit
    state.wrongAnswers++
    mistakesAllowed.textContent = 2 - state.wrongAnswers
    problemElement.classList.add("animate-wrong")
    setTimeout(()=> problemElement.classList.remove("animate-wrong"), 331)
    // ourField.value=""
    // ourField.focus()
//    clearTimeout(handleAutoSubmit)
    updateProblem()
    checkLogic()
   // setTimeOut(myTimer, 1000) 
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
        //clearTimeout(handleAutoSubmit)
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
   // setTimeOut(myTimer, 1000)
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
// additionButton.addEventListener("click", updateProblem)
// multiplicationButton.addEventListener("click", updateProblem)

// function updateProblem() {
//     state.currentProblem = generateProblem()
//     if (state.currentProblem.numberOne > state.currentProblem.numberTwo) {
//     problemElement.innerHTML= `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`
//     ourField.value = ""
//     ourField.focus()
//     return true
//     }
//     else if (state.currentProblem.numberOne < state.currentProblem.numberTwo) {
//     problemElement.innerHTML= `${state.currentProblem.numberTwo} ${state.currentProblem.operator} ${state.currentProblem.numberOne}`
//     ourField.value = ""
//     ourField.focus()
//     return false
//     }
// };

// function updateAddProblem() {
//     state.currentProblem = generateAddProblem()
//     problemElement.innerHTML= `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`
//     ourField.value = ""
//     ourField.focus()
// };

// function updateSubtProblem() {
//     state.currentProblem = generateSubtProblem()
//     problemElement.innerHTML= `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`
//     ourField.value = ""
//     ourField.focus()
// };

// function updateMultProblem() {
//     state.currentProblem = generateMultProblem()
//     problemElement.innerHTML= `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`
//     ourField.value = ""
//     ourField.focus()
// };

// function generateMultProblem() {
//     return {
//         numberOne: generateNumber(10),
//         numberTwo: generateNumber(10),
//         operator: "x"
//     }
// };

// function generateAddProblem() {
//     return {
//         numberOne: generateNumber(10),
//         numberTwo: generateNumber(10),
//         operator: "+"
//     }
// };

// function generateSubtProblem() {
//     return {
//         numberOne: generateNumber(10),
//         numberTwo: generateNumber(10),
//         operator: "-"
//     }
// };
// function resetAddGame() {
//     updateAddProblem()
//     state.score=0
//     state.wrongAnswers= 0
//     pointsNeeded.textContent = 10
//     mistakesAllowed.textContent = 2
// }

// function resetSubtGame() {
//     updateSubtProblem()
//     state.score=0
//     state.wrongAnswers= 0
//     pointsNeeded.textContent = 10
//     mistakesAllowed.textContent = 2
// }
// function resetMultGame() {
//     updateMultProblem()
//     state.score=0
//     state.wrongAnswers= 0
//     pointsNeeded.textContent = 10
//     mistakesAllowed.textContent = 2
// }

// addition.addEventListener("click", resetAddGame);
// subtraction.addEventListener("click", resetSubtGame);
// multiplication.addEventListener("click", resetMultGame);

// function updateProblemSubtract() {
//     sOperator = "-"
//     state.currentProblem = generateProblem()
//     problemElement.innerHTML= `${state.currentProblem.numberOne}` + " " + sOperator + " " + `${state.currentProblem.numberTwo}`
//     ourField.value = ""
//     ourField.focus()
// };

// function updateProblemAdd() {
//     aOperator = "+"
//     state.currentProblem = generateProblem()
//     problemElement.innerHTML= `${state.currentProblem.numberOne}` + " " + aOperator + " " + `${state.currentProblem.numberTwo}`
//     ourField.value = ""
//     ourField.focus()
// };

// function updateProblemMultiply() {
//     mOperator = "x"
//     state.currentProblem = generateProblem()
//     problemElement.innerHTML= `${state.currentProblem.numberOne}` + " " + mOperator + " " + `${state.currentProblem.numberTwo}`
//     ourField.value = ""
//     ourField.focus()
// };

// function setOperatorSubtract() {
//     p.operator.value = "-"
// }

// function setOperatorAdd() {
//     p.operator.value = "+"
// }

// function setOperatorMultiply() {
//     p.operator.value = "x"
// }
