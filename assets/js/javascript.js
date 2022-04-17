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
