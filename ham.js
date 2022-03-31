// Hamburger menu code
let ham = document.querySelector('.hamburger');
let hamItem = document.querySelectorAll('.hammenu-item');
ham.addEventListener('click', e=>{
    document.querySelector('.hammenu').classList.toggle('hammenu-on');
    for(let i = 0; i<hamItem.length; i++){
        hamItem[i].classList.toggle('itemOn')
    }
})


