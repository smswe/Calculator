let currentnum = "";
let previousnum = "";
let operation = null;
 
function updatedisplay() {
    const displayValue = previousnum + (operation ? " " + operation + " " : "") + currentnum;
    document.getElementById("display").value = displayValue;
}
 
function addnum(num) {
    currentnum = currentnum + num;
    updatedisplay();
}
 
function cleardisplay() {
    currentnum = "";
    previousnum = "";
    operation = "";
    updatedisplay();
}
 
function setoperation(op) {
    if (currentnum === "")
        return;
    if (previousnum !== "") {
        calculate();
    }
    operation = op;
    previousnum = currentnum;
    currentnum = "";
    updatedisplay()
}
 
function calculate() {
    if (previousnum === "" || currentnum === "")
        return;
    let result;
    const prev = parseFloat(previousnum);
    const current = parseFloat(currentnum);
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            return;
    }
    currentnum = result.toString();
    operation = null;
    previousnum = "";
    updatedisplay();
}