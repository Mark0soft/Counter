let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function addOne() {
    count += + 1
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
    saveEl.textContent = "Previous Entries: "
    count = 0
}

function total() {
    let total = countStr
}

