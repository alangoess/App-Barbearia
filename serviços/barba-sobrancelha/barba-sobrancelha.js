function redirectTo(url) {
    window.location.href = url;
}
/*Menu*/
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let imgHeader = document.getElementById('img-header');


imgHeader.addEventListener('click', ()=>{
    location.href = '../../page1.html'
})


