const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){

}

function clearDisplay(){
    display.value = "";
}
function back(){
    display.value = display.value.slice(0,-1);
}