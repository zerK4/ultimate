const showMenu = document.querySelector('.bi-list');
const hideMenu = document.querySelector('.bi-x-lg');
const slidingMenu = document.querySelector('.sliding-menu');
const goUpBtn = document.querySelector('.go-top');

function scrollFunction(){
    if(document.body.scroll > 20 || document.documentElement.scrollTop > 20) {
        goUpBtn.style.display = 'block'
    }else{
        goUpBtn.style.display = 'none'
    }
}
function toTopFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.onscroll = function(){scrollFunction()};

//Header//
showMenu.addEventListener('mouseover', ()=>{
    slidingMenu.style.display = 'flex';
    slidingMenu.style.transition = '.5s'
    showMenu.style.display = 'flex'
    slidingMenu.style.opacity = '1'
})
slidingMenu.addEventListener('mouseover', ()=>{
    slidingMenu.style.display = 'flex';
    slidingMenu.style.transition = '.5s'
})
slidingMenu.addEventListener('mouseout',()=>{
    slidingMenu.style.display = 'none'
})

//content//

const gotoButton = document.querySelector('.goto')

gotoButton.addEventListener('mouseover', ()=>{
    gotoButton.style.transition = ".5s"
})

//footer//

const item = document.querySelectorAll('.item');
const email = document.querySelector('.email')
const phone = document.querySelector('.phone')
const address = document.querySelector('.address')

item.forEach((item)=>{
    item.style.transition = '.5s'
})
email.addEventListener('mouseover',()=>{
    email.style.transition = '1s'
})
phone.addEventListener('mouseover',()=>{
    phone.style.transition = '1s'
})
address.addEventListener('mouseover',()=>{
    address.style.transition = '1s'
})

