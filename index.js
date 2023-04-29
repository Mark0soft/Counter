let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let sumEl = document.getElementById("sum-el")
let count = 0
let sum = 0

function addOne() {
    count += + 1
    sum += + 1
    countEl.textContent = count
}

function savingCount() {
    let countStr = count + " - "
    saveEl.textContent += countStr 
    countEl.textContent = 0 
    count = 0
}

function clearBoard() {
    countEl.textContent = 0
    saveEl.textContent = 0
    sumEl.textContent = 0
    count = 0
    sum = 0
}

function displaySum() {
    sumEl.textContent = sum
}




