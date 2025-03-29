let currentDisplay = "";
let history = JSON.parse(localStorage.getItem("history")) || [];

document.querySelector('#display').value = currentDisplay;

// update the display
function updateDisplay()
{
    document.querySelector('#display').value = currentDisplay;
}

// number buttons
function btnOne()
{
    currentDisplay += '1';
    updateDisplay()
}

function btnTwo()
{
    currentDisplay += '2';
    updateDisplay();
}

function btnThree()
{
    currentDisplay += '3';
    updateDisplay();
}

function btnFour()
{
    currentDisplay += '4';
    updateDisplay();
}

function btnFive()
{
    currentDisplay += '5';
    updateDisplay();
}

function btnSix()
{
    currentDisplay += '6';
    updateDisplay();
}

function btnSeven()
{
    currentDisplay += '7';
    updateDisplay();
}

function btnEight()
{
    currentDisplay += '8';
    updateDisplay();
}

function btnNine()
{
    currentDisplay += '9';
    updateDisplay();
}

function btnZero()
{
    currentDisplay += '0';
    updateDisplay();
}

// decimal(DOT) button
function btnDot()
{
    currentDisplay = currentDisplay + '.';
    updateDisplay();
}

// operator buttons
function btnPlus()
{
    currentDisplay += '+';
    updateDisplay();
}

function btnMinus()
{
    currentDisplay += '-';
    updateDisplay();
}

function btnMultiply()
{
    currentDisplay += '*';
    updateDisplay();
}

function btnDivide()
{
    currentDisplay += '/';
    updateDisplay();
}

// handle result calculation
function btnResult()
{
    // currentDisplay = eval(currentDisplay);
    // updateDisplay();

    try {
        let result = eval(currentDisplay);
        addToHistory(currentDisplay, result);
        currentDisplay = result.toString();
        updateDisplay();
    }
    catch (error) {
        currentDisplay = 'Error';
        updateDisplay();
    }
}

// clear button

function btnClear()
{
    currentDisplay = "";
    updateDisplay();
}

// saving history to localStorage
function saveHistoryToLocalStorage()
{
    localStorage.setItem("history", JSON.stringify(history));
}

// appending calculations to history and updating the display
function addToHistory(expression, result)
{
    history.push({ expression, result });
    saveHistoryToLocalStorage();
    updateHistoryDisplay();
}

// update the history display in the DOM
function updateHistoryDisplay()
{
    const historyContainer = document.querySelector('#history');
    historyContainer.innerHTML = "";
    
    history.forEach((entry) => {
        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.textContent = `${entry.expression} = ${entry.result}`;
        historyItem.onclick = () => {
            currentDisplay = entry.result.toString();
            updateDisplay();
        };
        historyContainer.appendChild(historyItem);
    });
}

// handle clear history
function btnClearHistory()
{
    history = [];
    saveHistoryToLocalStorage();
    updateHistoryDisplay();
}

// intialize history display on the page load
document.addEventListener("DOMContentLoaded", () => {
    updateHistoryDisplay();
});