function redirectTo(url) {
    window.location.href = url;
}


let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


function Sair(){
    localStorage.setItem('permitir', false);
    // localStorage.clear()    #limpar todo cache do localStorage se necessário
    location.href = '../login/login.html'
    
 }
  



