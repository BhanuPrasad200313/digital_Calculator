const display = document.getElementById("display");
function appendToDisplay(input){
    display.value +=input;

}
function calculate(){
    try{
    display.value = eval(display.value)
}
catch(error){
    display.value = 'error'
}
}
function clearscreen(){
    display.value = ""
}
function deleten(){
    display.value = display.value.toString().slice(0,-1)
}
function percentage() {
    display.value = (parseFloat(display.value) / 100).toString();
}


// Event listener for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key)) {       // If the key is a number
        appendToDisplay(key);
    } else if (key === '+') {
        appendToDisplay('+');
    } else if (key === '-') {
        appendToDisplay('-');
    } else if (key === '*') {
        appendToDisplay('*');
    } else if (key === '/') {
        appendToDisplay('/');
    } else if (key === 'Enter') {      // Enter key to calculate
        calculate();
    } else if (key === 'Backspace') {        // Backspace to delete
        deleten();
    } else if (key === 'Escape') {        // Escape key to clear screen
        clearscreen();
    } else if (key === '%') {           // Percentage key
        percentage();
    } else if (key === '.') {        // Decimal point
        appendToDisplay('.');
    }
});