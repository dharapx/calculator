let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let equation = "";
let btnarr = Array.from(buttons);

btnarr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            equation = eval(equation);
        }
        else if(e.target.innerHTML == 'AC'){
            equation = "";
        }
        else if(e.target.value == 'C'){
            if(equation.length > 0){
                equation = equation.substring(0, equation.length - 1);
            }
            else{
                equation = "";
            }
        }
        else if(e.target.value == '%'){
            equation = equation + '/100'
        }
        else{
            equation += e.target.value;
        }
        input.value = equation
    })
})