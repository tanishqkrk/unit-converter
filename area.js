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
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/2.59;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1.196e+6;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1.076e+7;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1.55e+9;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*100;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*247;
    }
    // Sq meter to others
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 1){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/2.59e+6;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1.196;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*10.764;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1550;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/10000;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/4047;
    }
    // Sq mile to others
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*2.59;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*2.59e+6;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 2){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*3.098e+6;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*2.788e+7;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*4.014e+9;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*259;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*640;
    }
    // Sq yard to others
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/1.196e+6;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/1.196;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/3.098e+6;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 3){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*9;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1296;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/11960;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/4840;
    }
    // Sq foot to others
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/1.076e+7;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/10.764;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/2.788e+7;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/9;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 4){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*144;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/107639;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/43560;
    }
    // Sq inch to others
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/1.55e+9;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/1550;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/4.014e+9;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/1296;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/144;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 5){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1.55e+7;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/6.273e+6;
    }
    // hectare to others
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/100;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*10000;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/259;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*11960;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*107639;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1.55e+7;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 6){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*2.471;
    }
    // acre to others
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/247;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*4047;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/640;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*4840;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*43560;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*6.273e+6;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/2.471;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 7){
        output.innerText = input.value;
    }
}