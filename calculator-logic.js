buttons = document.getElementsByClassName("btn");
display = document.getElementById("result");
displayValue = 0;
let num1 = null;
let num2 = null;
operation = 0;

function calculate(n1, n2, c){
    console.log(n1 + c + n2);
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    if(c == '+'){
        return n1 + n2;
    }
    if(c == '-'){
        return n1 - n2;
    }
    if(c == '*'){
        return n1 * n2;
    }
    if(c == '/'){
        return n1 / n2;
    }
}

for (let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        value = this.value;
        //
        if(!isNaN(value)){
            if (displayValue != 0){
            displayValue += value;}
            else{displayValue = value}
        }
        
        //7
        else{
            if( value == 'AC'){
                num1 = null;
                num2 = null;
                operation = 0;
                displayValue = 0;
                value = 0;
            
        }
            else if (num1 == null){
                num1 = displayValue;
                displayValue = 0;
                operation = value;
            }
            else{
                num2 = displayValue;
                var res = calculate(num1, num2, operation)
                num1 = null;
                num2 = null;
                operation = 0;
                displayValue = res;
            
        }
    }
          display.innerHTML = displayValue;  
        }
    }

    
    





