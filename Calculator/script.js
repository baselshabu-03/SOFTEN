function appendToDisplay(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = '';
}

function calculateResult(){
    const display = document.getElementById("display");
    try{
        display.value = new Function('return ' + display.value)();
    }catch(error){
        display.value = "Error"
    }
}