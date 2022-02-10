const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const nav = document.querySelector('.nav')
const copy = document.querySelector('.copy')
const wTitle = document.querySelector('.w-title')
const eTitle = document.querySelectorAll('.e-title')
const lTitle = document.querySelector('.l-title')
const cTitle = document.querySelector('.c-title')
const oTitle = document.querySelector('.o-title')
const mTitle = document.querySelector('.m-title')
const and = document.querySelector('.and')
const enjoy = document.querySelector('.enjoy')
const exc = document.querySelector('.exc')
const home = document.querySelector('.home')
const project = document.querySelector('.project')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')
const closeOnClick = document.querySelectorAll('.close-on-click')
const projectCard = document.querySelectorAll('.project-card')

projectCard.forEach((projectCard)=>{
    projectCard.addEventListener('mouseover', ()=>{
        projectCard.style.transform = 'translateY(-5px)'
        projectCard.style.transition = '.5s'
    })
    projectCard.addEventListener('mouseout', ()=>{
        projectCard.style.transform = '';
    })
})

closeOnClick.forEach((closeOnClick)=>{
    closeOnClick.addEventListener('click', ()=>{
        closeMenu.style.display = 'none'
        openMenu.style.display = 'block'
        nav.style.display = 'none'
        copy.style.borderLeft = ''
    })
})

wTitle.addEventListener('mouseover',()=>{
    wTitle.style.transform = 'translateY(-1rem)'
    wTitle.style.transition = '.2s'
    wTitle.style.color = 'red'
})
wTitle.addEventListener('mouseout',()=>{
    wTitle.style.transform = ''
    wTitle.style.color = ''
})
eTitle.forEach((eTitle)=>{
    eTitle.addEventListener('mouseover',() =>{
        eTitle.style.transform = 'translateY(-1rem)'
        eTitle.style.transition = '.2s'
        eTitle.style.color = 'red'
    })
    eTitle.addEventListener('mouseout',() =>{
        eTitle.style.transform = ''
        eTitle.style.color = ''
    })
})
lTitle.addEventListener('mouseover',()=>{
    lTitle.style.transform = 'translateY(-1rem)'
    lTitle.style.transition = '.2s'
    lTitle.style.color = 'red'
})
lTitle.addEventListener('mouseout',()=>{
    lTitle.style.transform = ''
    lTitle.style.color = ''
})
cTitle.addEventListener('mouseover',()=>{
    cTitle.style.transform = 'translateY(-1rem)'
    cTitle.style.transition = '.2s'
    cTitle.style.color = 'red'
})
cTitle.addEventListener('mouseout',()=>{
    cTitle.style.transform = ''
    cTitle.style.color = ''
})
oTitle.addEventListener('mouseover',()=>{
    oTitle.style.transform = 'translateY(-1rem)'
    oTitle.style.transition = '.2s'
    oTitle.style.color = 'red'
})
oTitle.addEventListener('mouseout',()=>{
    oTitle.style.transform = ''
    oTitle.style.color = ''
})
mTitle.addEventListener('mouseover',()=>{
    mTitle.style.transform = 'translateY(-1rem)'
    mTitle.style.transition = '.2s'
    mTitle.style.color = 'red'
})
mTitle.addEventListener('mouseout',()=>{
    mTitle.style.transform = ''
    mTitle.style.color = ''
})
and.addEventListener('mouseover',()=>{
    and.style.transform = 'translateY(-1rem)'
    and.style.transition = '.2s'
    and.style.color = 'red'
})
and.addEventListener('mouseout',()=>{
    and.style.transform = ''
    and.style.color = ''
})
enjoy.addEventListener('mouseover',()=>{
    enjoy.style.transform = 'translateY(-1rem)'
    enjoy.style.transition = '.2s'
    enjoy.style.color = 'red'
})
enjoy.addEventListener('mouseout',()=>{
    enjoy.style.transform = ''
    enjoy.style.color = ''
})
exc.addEventListener('mouseover',()=>{
    exc.style.transform = 'translateY(-1rem)'
    exc.style.transition = '.2s'
    exc.style.color = 'red'
})
exc.addEventListener('mouseout',()=>{
    exc.style.transform = ''
    exc.style.color = ''
})

closeMenu.style.display = 'none'

openMenu.addEventListener('mouseover', ()=>{
    wTitle.style.transform = 'translateY(-1rem)'
    wTitle.style.transition = '.2s'
    wTitle.style.color = 'red'
})
openMenu.addEventListener('mouseout', ()=>{
    wTitle.style.transform = ''
    wTitle.style.color = ''
})
home.addEventListener('mouseover', ()=>{
    lTitle.style.transform = 'translateY(-1rem)'
    lTitle.style.transition = '.2s'
    lTitle.style.color = 'red'
})
home.addEventListener('mouseout', ()=>{
    lTitle.style.transform = ''
    lTitle.style.color = ''
})
eTitle.forEach((eTitle)=>{
    project.addEventListener('mouseover', ()=>{
        eTitle.style.transform = 'translateY(-1rem)'
        eTitle.style.transition = '.2s'
        eTitle.style.color = 'red'
    })
    project.addEventListener('mouseout', ()=>{
        eTitle.style.transform = ''
        eTitle.style.color = ''
    })
})
about.addEventListener('mouseover', ()=>{
    cTitle.style.transform = 'translateY(-1rem)'
    cTitle.style.transition = '.2s'
    cTitle.style.color = 'red'
})
about.addEventListener('mouseout', ()=>{
    cTitle.style.transform = ''
    cTitle.style.color = ''
})
contact.addEventListener('mouseover', ()=>{
    and.style.transform = 'translateY(-1rem)'
    and.style.transition = '.2s'
    and.style.color = 'red'
})
contact.addEventListener('mouseout', ()=>{
    and.style.transform = ''
    and.style.color = ''
})

openMenu.addEventListener('click', ()=>{
    closeMenu.style.display = 'block'
    openMenu.style.display = 'none'
    nav.style.display = 'flex'
    copy.style.borderLeft = '1px solid red'
    copy.style.transition = '1s'
    closeMenu.style.color = 'red'
})
closeMenu.addEventListener('click', ()=>{
    closeMenu.style.display = 'none'
    openMenu.style.display = 'block'
    nav.style.display = 'none'
    copy.style.borderLeft = ''
})
