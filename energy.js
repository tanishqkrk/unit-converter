let input = document.querySelector('.firstUnit__number--input');
let output = document.querySelector('.secondUnit__number--input');
let convertButton = document.querySelector('.switch');
let inputUnit = document.querySelector('#firstUnit__input--Units');
let outputUnit = document.querySelector('#secondUnit__input--Units');
inputUnit.addEventListener('change', convert);
outputUnit.addEventListener('change', convert);

input.addEventListener('input', convert);
function convert(e){
    // Sq Kilometer to others
    if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 0){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/4.184;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/4184;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/3600;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/3.3e+6;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*6.242e+18;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/1055;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/1.055e+8;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1.356;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 1){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*239;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/4.184;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/3.6;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/3600;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*9.223e+18;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/1.055;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/105480;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*728;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*4.184;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/239;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 2){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/860;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/860421;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*9.223e+18;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/252;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/2.521e+7;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*3.086;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*4184;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*4.184;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 3){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1.162;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/860;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*9.223e+18;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*3.966;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/25210;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*3086;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*3600;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*3.6;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*860;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/1.162;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 4){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*9.223e+18;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*3.412;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/29300;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*2665;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*3.6e+6;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*3600;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*860421;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*860;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 5){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*9.223e+18;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*3412;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/29.3;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*2.665e+9;
    }
    
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*3.6e+6;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*3600;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*860421;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*860;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 5){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*9.223e+18;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*3412;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/29.3;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*2.665e+9;
    }
    
}