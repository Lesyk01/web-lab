
function calculator() {
    let firstNumber = parseFloat(prompt("Вкажіть перше число:"));
    let operator = prompt("Введіть знак операції (+, -, *, /):");
    let secondNumber = parseFloat(prompt("Введіть друге число:"));
    let result;
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber === 0) {
                result = "На нуль ділити не можна!";
            } else {
                result = firstNumber / secondNumber;
            }
            break;
        default:
            result = "Невірний оператор!";
    }
    
    alert("Результат: " + result);
}

calculator();
