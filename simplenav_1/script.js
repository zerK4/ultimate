
function showMenu(){
    const list = document.querySelector('.bi-list')
    const closeList = document.querySelector('.bi-x-lg')
    const hNav = document.querySelector('.hidden-nav')
    const hNavContainer = document.querySelector('.h-nav-container')
    const navigation = document.querySelector('.navigation')
    list.addEventListener('click', ()=>{
        list.style.display = 'none'
        closeList.style.display = 'flex'
        hNav.style.display = 'flex'
        hNavContainer.style.display = 'flex'
        hNav.style.transition = '1s'
        hNav.style.height = 'calc(100vh - 10rem)'
    })
    closeList.addEventListener('click',()=>{
        list.style.display = 'flex'
        closeList.style.display = 'none'
        hNavContainer.style.display = 'none'
    })

}

showMenu();
