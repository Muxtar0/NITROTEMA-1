const HamburgerMenuBtn = document.querySelector('.HamburgerMenuBtn');
const MobileOpenMenu = document.querySelector('.MobileOpenMenu');
const header = document.querySelector('.header')
HamburgerMenuBtn.addEventListener('click' , (e) => {
    HamburgerMenuBtn.classList.toggle('is-active');
    MobileOpenMenu.classList.toggle('active');
})
window.addEventListener('scroll' , (e) => {
    if(window.scrollY > 1){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
})