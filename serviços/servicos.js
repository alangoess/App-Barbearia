function redirectTo(url) {
    window.location.href = url;
}
/*Menu*/
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
<<<<<<< HEAD
let imgHeader = document.getElementById('img-header');
=======
>>>>>>> 5df2d8352d8d2ceb95df5f6fbedb9097af596da8

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
/*Menu*/

<<<<<<< HEAD
imgHeader.addEventListener('click', ()=>{
    location.href = '../page1.html'
})
=======
>>>>>>> 5df2d8352d8d2ceb95df5f6fbedb9097af596da8


