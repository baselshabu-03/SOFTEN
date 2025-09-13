function Greatest() {
    number1 = parseInt(document.getElementById("num1").value);
    number2 = parseInt(document.getElementById("num2").value);
    number3 = parseInt(document.getElementById("num3").value);
    number4 = parseInt(document.getElementById("num4").value);

    if (number1 > number2 && number1 > number3 && number1 > number4) {
        document.getElementById("result").textContent = number1;
    }
    else if (number2 > number1 && number2 > number3 && number2 > number4) {
        document.getElementById("result").textContent = number2;
    }
    else if (number3 > number1 && number3 > number2 && number3 > number4) {
        document.getElementById("result").textContent = number3;
    }
    else {
        document.getElementById("result").textContent = number4;
    }
}