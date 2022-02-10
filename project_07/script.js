const corner = document.querySelectorAll('.corner')
const topLeft = document.querySelector('.top-left')
const topRight = document.querySelector('.top-right')
const bottomLeft = document.querySelector('.bottom-left')
const bottomRight = document.querySelector('.bottom-right')
const menuContainer = document.querySelector('.menu-container')
const title = document.querySelector('.section-title')
const projects = document.querySelector('.projects')

corner.forEach((corner)=>{
    corner.addEventListener('mouseover',()=>{
        corner.style.transition = '.5s'
    })
})
menuContainer.style.width = '0'
menuContainer.style.borderBottom = '1px solid white'
menuContainer.style.textAlign = 'center'

topLeft.addEventListener('mouseover',()=>{
    title.innerHTML = 'Projects'
    menuContainer.style.width = '100%'
    menuContainer.style.transition = '1s'
})
topLeft.addEventListener('mouseout',()=>{
    title.innerHTML = ''
    menuContainer.style.width = '0'
    menuContainer.style.transition = '1s'
})
/*Click event projects*/


/*Click event projects end*/
topRight.addEventListener('mouseover',()=>{
    title.innerHTML = 'Home'
    menuContainer.style.width = '100%'
    menuContainer.style.transition = '1s'
})
topRight.addEventListener('mouseout',()=>{
    title.innerHTML = ''
    menuContainer.style.width = '0'
    menuContainer.style.transition = '1s'
})
bottomLeft.addEventListener('mouseover',()=>{
    title.innerHTML = 'Contact'
    menuContainer.style.width = '100%'
    menuContainer.style.transition = '1s'
})
bottomLeft.addEventListener('mouseout',()=>{
    title.innerHTML = ''
    menuContainer.style.width = '0'
    menuContainer.style.transition = '1s'
})
bottomRight.addEventListener('mouseover',()=>{
    title.innerHTML = 'About'
    menuContainer.style.width = '100%'
    menuContainer.style.transition = '1s'
})
bottomRight.addEventListener('mouseout',()=>{
    title.innerHTML = ''
    menuContainer.style.width = '0'
    menuContainer.style.transition = '1s'
})
