let input = document.querySelector('.firstUnit__number--input');
let output = document.querySelector('.secondUnit__number--input');
let convertButton = document.querySelector('.switch');
let inputUnit = document.querySelector('#firstUnit__input--Units');
let outputUnit = document.querySelector('#secondUnit__input--Units');
inputUnit.addEventListener('change', convert);
outputUnit.addEventListener('change', convert);

input.addEventListener('input', convert);
function convert(e){
    // e.preventDefault();
    // Kilometer to others
    if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 0){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*100000;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1e+9;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1e+12;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1.609;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*1094;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*3281;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*39370;
    }
    // meter to others
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 1){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*100;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1e+9;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*1609;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*1.094;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*3.281;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*39.37;
    }
    // cm to others
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/100000;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/100;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 2){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*10;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*10000;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1e+7;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*160934;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/91.44;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*30.48;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/2.54;
    }
    // millimeter into others
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/10;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 3){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*1.609e+6;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/914;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/305;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/25.4;
    }
    // Micrometers into others
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/1e+9;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/10000;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 4){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1.609e+9;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/914400;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/304800;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/25400;
    }
    // Nanometer into others
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/1e+12;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/1e+9;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/1e+7;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/1e+7;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 5){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1.609e+12;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/9.114e+8;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/3.048e+8;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/2.54e+7;
    }
    // miles into others
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1.609;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1609;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*160934;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1.609e+6;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1.609e+9;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1.609e+12;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 6){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*1760;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*5280;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*63360;
    }
    // yards into others
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/1094;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/1.094;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*91.44;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*914;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*914400;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*9.144e+8;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1760;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 7){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*3;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*36;
    }
    // feet into others
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/3281;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/3.281;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*30.48;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*305;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*304800;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*3.048e+8;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/5280;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/3;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 8){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*12;
    }
    // feet into others
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 0){
        output.innerText = input.value/39370;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/39.37;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*2.54;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*25.4;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*25400;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*2.54e+7;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/63360;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/36;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/12;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 9){
        output.innerText = input.value;
    }
}