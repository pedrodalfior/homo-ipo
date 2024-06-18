/*scroll reaction*/
const deskMenu = document.querySelector('.navbar-desktop');
const banner = document.querySelector('.banner-mobile');
const mobMenu = document.querySelector('.menu-mobile');

let last_scroll = 0;

window.addEventListener('scroll', function(){
    let current_scroll = window.pageYOffset;

    if (current_scroll > last_scroll){
        deskMenu.classList.add('scroll');
        banner.classList.add('scroll');
        mobMenu.classList.add('scroll');
    }else{
        deskMenu.classList.remove('scroll');
        banner.classList.remove('scroll');
        mobMenu.classList.remove('scroll');
    }

    if(current_scroll > 620){
        deskMenu.classList.add('navbg');
        banner.classList.add('navbg');
    }
    else {
        deskMenu.classList.remove('navbg');
        banner.classList.remove('navbg');
    }

    last_scroll = current_scroll;
})

const btns = document.querySelectorAll('.navbar-desktop .menu a');

btns.forEach(btn => btn.addEventListener('click', function(){
    btns.forEach(btn => btn.classList.remove('actived'));
    btn.classList.add('actived');
}))
const open = document.querySelector('.open-menu');
const close = document.querySelector('.close-menu');

open.addEventListener('click', function(){
    banner.classList.add('hidden');
    mobMenu.classList.remove('hidden');
})
close.addEventListener('click', function(){
    banner.classList.remove('hidden');
    mobMenu.classList.add('hidden');
})
