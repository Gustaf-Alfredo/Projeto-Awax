


// Aqui crio duas variaveis que retornarão um array com os elementos do html com a class ('.slide') e ('.pointer')
var sliders = document.querySelectorAll('.slide');
var pointers = document.querySelectorAll('.pointer')
// crio os addEventListener para click e chamo a função bannerloop por meio do setInterval que fará o callback a cada 3 segundos.
pointers[0].addEventListener('click', show1)
pointers[1].addEventListener('click', show2)
pointers[2].addEventListener('click', show3)
var atualizar = setInterval(bannerLoop, 3000)

// aqui crio as funções para o loop funcionar
function bannerLoop() {
    if (sliders[0].style.marginLeft == '0px') {
        sliders[0].style.marginLeft = '-100vw'
        pointers[0].classList.remove('active');
        pointers[1].classList.add('active')
    } else if (sliders[0].style.marginLeft == '-100vw') {
        sliders[0].style.marginLeft = '-200vw'
        pointers[1].classList.remove('active');
        pointers[2].classList.add('active')
    } else {
        sliders[0].style.marginLeft = '0px'
        pointers[2].classList.remove('active');
        pointers[0].classList.add('active')
    }


}
function show1() {
    sliders[0].style.marginLeft = '0px';
    pointers[2].classList.remove('active');
    pointers[1].classList.remove('active');
    pointers[0].classList.add('active');
    clearInterval(atualizar)
    atualizar = setInterval(bannerLoop, 3000)
}
function show2(){
        sliders[0].style.marginLeft = '-100vw'
        pointers[0].classList.remove('active');
        pointers[2].classList.remove('active');
        pointers[1].classList.add('active')
        clearInterval(atualizar)
        atualizar = setInterval(bannerLoop, 3000)
}
function show3(){
    sliders[0].style.marginLeft = '-200vw'
    pointers[0].classList.remove('active');
    pointers[1].classList.remove('active');
    pointers[2].classList.add('active')
    clearInterval(atualizar)
    atualizar = setInterval(bannerLoop, 3000)
} 




/* 
// Aqui crio duas variaveis que retornarão um array com os elementos do html com a class ('.slide') e ('.pointer')
var sliders = document.querySelectorAll('.slide');
var pointers = document.querySelectorAll('.pointer')
// crio os addEventListener para click e chamo a função bannerloop por meio do setInterval que fará o callback a cada 3 segundos.
pointers[3].addEventListener('click', show4)
pointers[4].addEventListener('click', show5)
pointers[5].addEventListener('click', show6)
var atualizar = setInterval(bannerLoop2, 3000)

// aqui crio as funções para o loop funcionar
function bannerLoop2() {
    if (sliders[3].style.marginLeft == '0px') {
        sliders[3].style.marginLeft = '-100vw'
        pointers[3].classList.remove('active');
        pointers[4].classList.add('active')
    } else if (sliders[3].style.marginLeft == '-100vw') {
        sliders[3].style.marginLeft = '-200vw'
        pointers[4].classList.remove('active');
        pointers[5].classList.add('active')
    } else {
        sliders[3].style.marginLeft = '0px'
        pointers[5].classList.remove('active');
        pointers[3].classList.add('active')
    }


}
function show4() {
    sliders[3].style.marginLeft = '0px';
    pointers[5].classList.remove('active');
    pointers[4].classList.remove('active');
    pointers[3].classList.add('active');
    clearInterval(atualizar)
    atualizar = setInterval(bannerLoop2, 3000)
}
function show5(){
        sliders[3].style.marginLeft = '-100vw'
        pointers[3].classList.remove('active');
        pointers[5].classList.remove('active');
        pointers[4].classList.add('active')
        clearInterval(atualizar)
        atualizar = setInterval(bannerLoop2, 3000)
}
function show6(){
    sliders[3].style.marginLeft = '-200vw'
    pointers[3].classList.remove('active');
    pointers[4].classList.remove('active');
    pointers[5].classList.add('active')
    clearInterval(atualizar)
    atualizar = setInterval(bannerLoop2, 3000)
} 

 */
////////////////////////////////////////////////////////////
/* 
// Aqui crio duas variaveis que retornarão um array com os elementos do html com a class ('.slide') e ('.pointer')
var sliders = document.querySelectorAll('.slide');
var pointers = document.querySelectorAll('.pointer')
// crio os addEventListener para click e chamo a função bannerloop por meio do setInterval que fará o callback a cada 3 segundos.
pointers[6].addEventListener('click', show7)
pointers[7].addEventListener('click', show8)
pointers[8].addEventListener('click', show9)
var atualizar = setInterval(bannerLoop3, 3000)

// aqui crio as funções para o loop funcionar
function bannerLoop3() {
    if (sliders[6].style.marginLeft == '0px') {
        sliders[6].style.marginLeft = '-100vw'
        pointers[6].classList.remove('active');
        pointers[7].classList.add('active')
    } else if (sliders[6].style.marginLeft == '-100vw') {
        sliders[6].style.marginLeft = '-200vw'
        pointers[7].classList.remove('active');
        pointers[8].classList.add('active')
    } else {
        sliders[6].style.marginLeft = '0px'
        pointers[8].classList.remove('active');
        pointers[6].classList.add('active')
    }


}
function show7() {
    sliders[6].style.marginLeft = '0px';
    pointers[8].classList.remove('active');
    pointers[7].classList.remove('active');
    pointers[6].classList.add('active');
    clearInterval(atualizar)
    atualizar = setInterval(bannerLoop3, 3000)
}
function show8(){
        sliders[6].style.marginLeft = '-100vw'
        pointers[6].classList.remove('active');
        pointers[8].classList.remove('active');
        pointers[7].classList.add('active')
        clearInterval(atualizar)
        atualizar = setInterval(bannerLoop3, 3000)
}
function show9(){
    sliders[6].style.marginLeft = '-200vw'
    pointers[6].classList.remove('active');
    pointers[7].classList.remove('active');
    pointers[8].classList.add('active')
    clearInterval(atualizar)
    atualizar = setInterval(bannerLoop3, 3000)
}  */

///////////////////////////////////////////////////////////

/* // Aqui crio duas variaveis que retornarão um array com os elementos do html com a class ('.slide') e ('.pointer')
var sliders = document.querySelectorAll('.slide');
var pointers = document.querySelectorAll('.pointer')
// crio os addEventListener para click e chamo a função bannerloop por meio do setInterval que fará o callback a cada 3 segundos.
pointers[9].addEventListener('click', show10)
pointers[10].addEventListener('click', show11)
pointers[11].addEventListener('click', show12)
var atualizar = setInterval(bannerLoop4, 3000)

// aqui crio as funções para o loop funcionar
function bannerLoop4() {
    if (sliders[9].style.marginLeft == '0px') {
        sliders[9].style.marginLeft = '-100vw'
        pointers[9].classList.remove('active');
        pointers[10].classList.add('active')
    } else if (sliders[9].style.marginLeft == '-100vw') {
        sliders[9].style.marginLeft = '-200vw'
        pointers[10].classList.remove('active');
        pointers[11].classList.add('active')
    } else {
        sliders[9].style.marginLeft = '0px'
        pointers[11].classList.remove('active');
        pointers[9].classList.add('active')
    }


}

function show10() {
    sliders[9].style.marginLeft = '0px';
    pointers[11].classList.remove('active');
    pointers[10].classList.remove('active');
    pointers[9].classList.add('active');
    clearInterval(atualizar)
    atualizar = setInterval(bannerLoop4, 3000)
}
function show11(){
        sliders[9].style.marginLeft = '-100vw'
        pointers[9].classList.remove('active');
        pointers[11].classList.remove('active');
        pointers[10].classList.add('active')
        clearInterval(atualizar)
        atualizar = setInterval(bannerLoop4, 3000)
}
function show12(){
    sliders[9].style.marginLeft = '-200vw'
    pointers[9].classList.remove('active');
    pointers[10].classList.remove('active');
    pointers[11].classList.add('active')
    clearInterval(atualizar)
    atualizar = setInterval(bannerLoop4, 3000)
}  
 */

window.onload = function() {
    document.querySelector(".menu-mobile").addEventListener("click", function() {
        if(document.querySelector(".menu nav").style.display == 'block') {
            document.querySelector(".menu nav").style.display = 'none'
        } else {
            document.querySelector(".menu nav").style.display = 'block'
        }
    })
}