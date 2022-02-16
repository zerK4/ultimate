let header = document.querySelector('header')
let goTop = document.querySelector('.go-top')

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        header.style.height = '3rem'
        header.style.transition = '.5s'
        header.style.background = 'black'
        header.style.boxShadow = '1px 1px 5px 1px black'
        goTop.style.display = 'block'
        goTop.style.transition = '.3s'
    }
    else{
        header.style.height = ''
        header.style.background = ''
        goTop.style.display = 'none'
        header.style.boxShadow = ''
    }
}
function topFunction(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}