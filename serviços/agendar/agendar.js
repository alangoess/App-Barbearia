function redirectTo(url) {
    window.location.href = url;
}


let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let imgHeader = document.getElementById('img-header');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

imgHeader.addEventListener('click', ()=>{
    location.href = '../../page1.html'
})





function Confirmar(){
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let hora = document.getElementById('hora').value;
    
    if(nome === "" || telefone === "" || hora === ""){
        alert('Preencha todos os campos em branco')

    }else{
        
        location.href = '../../page-agendar/index.html'
        sessionStorage.setItem('nome', nome)
        sessionStorage.setItem('telefone', telefone)
        sessionStorage.setItem('hora', hora)
    }
}