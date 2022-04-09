let input = document.querySelector('.firstUnit__number--input');
let output = document.querySelector('.secondUnit__number--input');
let convertButton = document.querySelector('.switch');
let inputUnit = document.querySelector('#firstUnit__input--Units');
let outputUnit = document.querySelector('#secondUnit__input--Units');
inputUnit.addEventListener('change', convert);
outputUnit.addEventListener('change', convert);

input.addEventListener('input', convert);
function convert(e){
    // bit to others
    if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 0){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/1024;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/1.049e+6;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/1e+9;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1.074e+9;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/1e+12;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/1.1e+12;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1e+15;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1.126e+15;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 11){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/8000;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 13){
        output.innerText = input.value/8192;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 14){
        output.innerText = input.value/8e+6;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 15){
        output.innerText = input.value/8.389e+6;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 16){
        output.innerText = input.value/8e+9;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 17){
        output.innerText = input.value/8.59e+9;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/8e+12;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/8.796e+12;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/8e+15;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/9.007e+15;
    }
    // kilobit to others
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 1){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/1.024;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/1049;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1.074e+6;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/1e+9;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/1.1e+9;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1e+12;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1.126e+12;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*125;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 13){
        output.innerText = input.value/8.192;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 14){
        output.innerText = input.value/8000;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 15){
        output.innerText = input.value/8389;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 16){
        output.innerText = input.value/8e+6;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 17){
        output.innerText = input.value/8.59e+6;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/8e+9;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/8.796e+9;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/8e+12;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/9.007e+12;
    }
    // Kibibit to others
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1.024;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 2){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/977;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/1024;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/976563;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1.049e+6;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/9.766e+8;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/1.074e+9;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/9.766e+11;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1.1e+12;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*128;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/7.812;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 13){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 14){
        output.innerText = input.value/7813;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 15){
        output.innerText = input.value/8192;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 16){
        output.innerText = input.value/7.812e+6;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 17){
        output.innerText = input.value/8.389e+6;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/7.812e+9;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/8.59e+9;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/7.812e+12;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/8.796e+12;
    }
    // Megabit to others
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*977;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 3){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/1.049;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1074;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/1.1e+6;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1e+9;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1.126e+9;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*125000;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*125;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*122;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 14){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 15){
        output.innerText = input.value/8.389;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 16){
        output.innerText = input.value/8000;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 17){
        output.innerText = input.value/8590;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/8e+6;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/8.796e+6;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/8e+9;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/9.007e+9;
    }
    // Mebibit to others
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1.049e+6;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1049;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1.049;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 4){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/954;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1024;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/953674;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/1.049e+6;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/9.537e+8;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1.074e+9;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*131072;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*131;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*128;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 14){
        output.innerText = input.value/7.629;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 15){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 16){
        output.innerText = input.value/7629;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 17){
        output.innerText = input.value/8192;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/7.629e+6;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/8.389e+6;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/7.629e+9;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/8.59e+9;
    }
    // Gigabit to others
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1e+9;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*976563;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*954;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 5){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1.074;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/1100;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1.126e+6;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1.25e+8;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*125000;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*122070;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 14){
        output.innerText = input.value/125;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 15){
        output.innerText = input.value/119;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 16){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 17){
        output.innerText = input.value/8.59;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/8000;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/8796;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/8e+6;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/9.007e+6;
    }
    // Gigibit to others
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1.074e+9;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1.074e+6;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*1.049e+6;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1074;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1.074;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 6){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/931;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/1024;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/931323;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1.049e+6;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1.342e+8;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*134218;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*131072;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 14){
        output.innerText = input.value*134;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 15){
        output.innerText = input.value/128;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 16){
        output.innerText = input.value/7.451;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 17){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/7451;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/8192;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/7.451e+6;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/8.389e+6;
    }
    // Terabit to others
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1e+12;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1e+9;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*9.766e+8;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*953674;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*931;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 7){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/1.1;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1126;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1.25e+11;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*1.25e+8;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*1.221e+8;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 14){
        output.innerText = input.value*125000;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 15){
        output.innerText = input.value*119209;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 16){
        output.innerText = input.value*125;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 17){
        output.innerText = input.value*116;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/8.796;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/8000;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/9007;
    }
    // Tebibit to others
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1.1e+12;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1.1e+9;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*1.074+9;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1.1e+6;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1.049e+6;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1100;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*1.1;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 8){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/909;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1024;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1.374+11;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*1.374e+8;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*1.342e+8;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 14){
        output.innerText = input.value*137439;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 15){
        output.innerText = input.value*131072;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 16){
        output.innerText = input.value*137;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 17){
        output.innerText = input.value*128;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/7.276;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/7276;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/8192;
    }
    // Petabit to others
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1e+15;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1e+12;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*9.766e+11;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1e+9;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*9.537e+8;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*931323;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*909;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 9){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 10){
        output.innerText = input.value*1.126;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1.25e+14;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*1.25e+11;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*1.221e+11 ;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 14){
        output.innerText = input.value*1.25e+8;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 15){
        output.innerText = input.value*1.192e+8;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 16){
        output.innerText = input.value*125000;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 17){
        output.innerText = input.value*116415;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 18){
        output.innerText = input.value*125;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 19){
        output.innerText = input.value*114;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/9.007;
    }
    // Petabit to others
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1.126e+15;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1.126e+12;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*1.1e+12;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1.126e+9;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1.074e+9;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1.126e+6;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*1.049e+6;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*1126;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*1.126;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 10){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1.407e+14;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*1.407e+11;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*1.374e+11 ;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 14){
        output.innerText = input.value*1.407e+8;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 15){
        output.innerText = input.value*1.342e+8;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 16){
        output.innerText = input.value*140737;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 17){
        output.innerText = input.value*131072;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 18){
        output.innerText = input.value*141;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 19){
        output.innerText = input.value*128;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/7.105;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/8;
    }
    // Byte to others
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 1){
        output.innerText = input.value/125;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/128;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/125000;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/131072;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1.25e+8;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*1.342e+8;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*1.25e+11;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*1.374e+11;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*1.125e+14;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1.407e+14;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 11){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 13){
        output.innerText = input.value/1024 ;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 14){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 15){
        output.innerText = input.value/1.049e+6;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 16){
        output.innerText = input.value/1e+9;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 17){
        output.innerText = input.value/1.074e+9;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/1e+12;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/1.1e+12;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/1e+15;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/1.126e+15;
    }
    // Kilobyte to others
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8000;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*7.812;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/125;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/131;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/125000;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/134218;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/1.25e+8;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/1.374e+8;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1.125e+11;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1.407e+11;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 12){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 13){
        output.innerText = input.value/1.024 ;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 14){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 15){
        output.innerText = input.value/1049;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 16){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 17){
        output.innerText = input.value/1.074e+6;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/1e+9;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/1.1e+9;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/1e+12;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/1.126e+12;
    }
    // Kibibyte to others
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8192;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*8.192;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/122;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/128;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/122070;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/131072;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/1.221e+8;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/1.342e+8;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1.221e+11;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1.374e+11;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*1.024;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 13){
        output.innerText = input.value ;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 14){
        output.innerText = input.value/977;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 15){
        output.innerText = input.value/1024;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 16){
        output.innerText = input.value/976562;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 17){
        output.innerText = input.value/1.049e+6;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/9.766e+8;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/1.074e+9;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/9.766e+11;
    }
    else if(inputUnit.selectedIndex == 13 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/1.1e+12;
    }
    // Megabyte to others
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8e+6;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*8000;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*7813;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*7.629;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/125;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/134;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/125000;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/137439;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1.25e+8;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1.407e+8;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*977;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 14){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 15){
        output.innerText = input.value/1.049;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 16){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 17){
        output.innerText = input.value/1074;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/1.1e+9;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/1e+9;
    }
    else if(inputUnit.selectedIndex == 14 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/1.26e+9;
    }
    // Mebibyte to others
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8.389e+6;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*8389;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*8192;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*8.389;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/119;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/128;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/119209;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/131072;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1.192e+8;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1.342e+8;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1.049e+6;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*1049;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 14){
        output.innerText = input.value*1.049;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 15){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 16){
        output.innerText = input.value/954;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 17){
        output.innerText = input.value/1024;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/953674;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/1.049e+6;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/9.537e+8;
    }
    else if(inputUnit.selectedIndex == 15 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/1.074e+9;
    }
    // Gigabyte to others
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8e+9;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*8e+6;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*7.812e+6;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*8000;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*7629;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*7.451;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/125;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/137;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/125000;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/140737;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1e+9;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*976563;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 14){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 15){
        output.innerText = input.value*954;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 16){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 17){
        output.innerText = input.value/1.074;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/1100;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 16 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/1.126e+6;
    }
    // Gibibyte to others
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8.59e+9;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*8.59e+6;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*8.389e+6;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*8590;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*8192;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*8.59;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/116;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/128;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/116415;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/11072;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1.074e+9;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*1.074e+6;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*1.049e+6;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 14){
        output.innerText = input.value*1074;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 15){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 16){
        output.innerText = input.value*1.074;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 17){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 18){
        output.innerText = input.value/931;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/1024;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/931323;
    }
    else if(inputUnit.selectedIndex == 17 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/1.049e+6;
    }
    // Terabyte to others
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8e+12;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*8e+9;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*7.812e+9;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*8e+6;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*7.629e+6;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*8000;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*7451;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/7.276;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/125;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/141;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1e+12;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*1e+9;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*9.766e+8;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 14){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 15){
        output.innerText = input.value*953674;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 16){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 17){
        output.innerText = input.value*931;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 18){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 19){
        output.innerText = input.value/1.1;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/11000;
    }
    else if(inputUnit.selectedIndex == 18 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/1126;
    }
    // Tebibyte to others
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8.796e+12;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*8.796e+9;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*8.59e+9;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*8.796e+6;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*8.389e+6;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*8796;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*8192;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*8.796;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/114;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/128;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1.1e+12;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*1.1e+9;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*1.074e+9;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 14){
        output.innerText = input.value*1.1e+6;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 15){
        output.innerText = input.value*1.049e+6;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 16){
        output.innerText = input.value*1100;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 17){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 18){
        output.innerText = input.value*1.1;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 19){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 20){
        output.innerText = input.value/909;
    }
    else if(inputUnit.selectedIndex == 19 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/1024;
    }
    // Petabybte to others
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8e+15;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*8e+12;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*7.812e+12;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*8e+9;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*7.629e+9;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*8e+6;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*7.451e+6;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*8000;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*7276;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 10){
        output.innerText = input.value*7.105;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1e+15;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*1e+12;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*9.766e+11;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 14){
        output.innerText = input.value*1e+9;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 15){
        output.innerText = input.value*9.537e+8;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 16){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 17){
        output.innerText = input.value*931323;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 18){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 19){
        output.innerText = input.value*909;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 20){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 20 && outputUnit.selectedIndex == 21){
        output.innerText = input.value/1.126;
    }
    // Pebibyte to others
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*9.007e+15;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*9.007e+12;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*8.796+12;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*9.007e+9;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*8.59e+9;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*9.007e+6;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*8.289e+6;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*9007;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*8192;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*9.007;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 10){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 11){
        output.innerText = input.value*1.126e+15;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*1.126e+12;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 13){
        output.innerText = input.value*1.1e+12;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 14){
        output.innerText = input.value*1.126e+9;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 15){
        output.innerText = input.value*1.074e+9;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 16){
        output.innerText = input.value*1.126e+6;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 17){
        output.innerText = input.value*1.049e+6;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 18){
        output.innerText = input.value*1126;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 19){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 20){
        output.innerText = input.value*1.126;
    }
    else if(inputUnit.selectedIndex == 21 && outputUnit.selectedIndex == 21){
        output.innerText = input.value;
    }
       }   