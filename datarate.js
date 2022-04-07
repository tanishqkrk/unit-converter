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
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/8000;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/1024;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/8e+6;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1.049e+6;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/1e+9;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/8e+9;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1.074e+9;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1e+12;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 11){
        output.innerText = input.value/8e+12;
    }
    else if(inputUnit.selectedIndex == 0 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/1.1e+12;
    }
// kilobit to others
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 1){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 3){
        output.innerText = input.value/1.024;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/8000;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1049;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/8e+6;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1.074e+6;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1e+9;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 11){
        output.innerText = input.value/8e+9;
    }
    else if(inputUnit.selectedIndex == 1 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/1.1e+9;
    }
// kilobyte to others
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8000;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 2){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*7.812;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/125;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/131;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/125000;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/134218;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1.25e+8;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 11){
        output.innerText = input.value/1e+9;
    }
    else if(inputUnit.selectedIndex == 2 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/1.374e+8;
    }
// kibibit to others
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1.024;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 2){
        output.innerText = input.value/7.812;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 3){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 4){
        output.innerText = input.value/977;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/7813;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1024;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/976562;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/7.812e+6;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1.049e+6;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/9.766e+8;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 11){
        output.innerText = input.value/7.812e+9;
    }
    else if(inputUnit.selectedIndex == 3 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/1.074e+9;
    }
// Megabit to others
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*125;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*977;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 4){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 6){
        output.innerText = input.value/1.049;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/8000;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1074;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 11){
        output.innerText = input.value/8e+6;
    }
    else if(inputUnit.selectedIndex == 4 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/1.1e+6;
    }
    
// Megabyte to others
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8e+6;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*8000;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*7813;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 5){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*7.629;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/125;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/134;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/125000;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 11){
        output.innerText = input.value/1e+6;
    }
    else if(inputUnit.selectedIndex == 5 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/137439;
    }
// Mebibit to others
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1.049e+6;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1049;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*131;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1.049;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 5){
        output.innerText = input.value/7.629;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 6){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 7){
        output.innerText = input.value/954;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/7629;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1024;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/953674;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 11){
        output.innerText = input.value/7.629e+6;
    }
    else if(inputUnit.selectedIndex == 6 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/1.049e+6 ;
    }   
// Gigabit to others
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1e+9;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*125000;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*976563;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*125;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*954;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 7){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/1.074;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 11){
        output.innerText = input.value/8000;
    }
    else if(inputUnit.selectedIndex == 7 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/1100 ;
    }   
// Gigabyte to others
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8e+9;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*8e+6;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*7.812e+6;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*8000;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*7629;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 8){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 9){
        output.innerText = input.value/7.451;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/125;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 11){
        output.innerText = input.value/1000;
    }
    else if(inputUnit.selectedIndex == 8 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/137 ;
    }   
// Gibibit to others
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1.074e+9;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1.074e+6;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*134218;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1.049e+6;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1074;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*134;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*1.074;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 8){
        output.innerText = input.value/7.451;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 9){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 10){
        output.innerText = input.value/931;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 11){
        output.innerText = input.value/7451;
    }
    else if(inputUnit.selectedIndex == 9 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/1024;
    }   
// Terabit to others
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1e+12;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1e+9;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*1.25e+6;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*9.766e+8;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*125000;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*953674;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*125;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*931;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 10){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 11){
        output.innerText = input.value/8;
    }
    else if(inputUnit.selectedIndex == 10 && outputUnit.selectedIndex == 12){
        output.innerText = input.value/1.1;
    }   
// Terabyte to others
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*8e+12;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*8e+9;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*1e+9;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*7.812e+9;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*8e+6;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*1e+6;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*7.629e+6;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*8000;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*1000;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*7451;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 10){
        output.innerText = input.value*8;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 11){
        output.innerText = input.value;
    }
    else if(inputUnit.selectedIndex == 11 && outputUnit.selectedIndex == 12){
        output.innerText = input.value*7.276;
    }   
// Tebibit to others
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 0){
        output.innerText = input.value*1.1e+12;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 1){
        output.innerText = input.value*1.1e+9;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 2){
        output.innerText = input.value*1.374e+9;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 3){
        output.innerText = input.value*1.074e+9;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 4){
        output.innerText = input.value*1.1e+6;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 5){
        output.innerText = input.value*137439;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 6){
        output.innerText = input.value*1.049e+6;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 7){
        output.innerText = input.value*1100;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 8){
        output.innerText = input.value*137;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 9){
        output.innerText = input.value*1024;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 10){
        output.innerText = input.value*1.1;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 11){
        output.innerText = input.value/7.276;
    }
    else if(inputUnit.selectedIndex == 12 && outputUnit.selectedIndex == 12){
        output.innerText = input.value;
    }   
}