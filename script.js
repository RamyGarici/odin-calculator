let currentValue = null;
let secondValue = null;
let operator = null;
const screen = document.querySelector('.screen');
screen.textContent = '';

function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function mul(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}


function clearScreen() {
    currentValue = null;
    secondValue = null;
    operator = null;
    screen.textContent = '';
}


function calculate(){
    if(currentValue!==null && secondValue!== null && operator !==null){
        if(operator == "+"){currentValue= add(currentValue,secondValue)}
         if(operator == "-"){currentValue= sub(currentValue,secondValue)}
          if(operator == "*"){currentValue= mul(currentValue,secondValue)}
           if(operator == "/"){currentValue= divide(currentValue,secondValue)}
           secondValue = null;
           operator = null;
           screen.textContent = "";
    }

}