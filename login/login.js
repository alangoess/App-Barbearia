function redirectTo(url) {
    window.location.href = url;
}

/*Menu*/
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let imgHeader = document.getElementById('img-header');
let BtnAgendar = document.getElementById('icone')
let button = document.querySelector('#open-dialog')
let modal = document.querySelector('dialog')
let buttonClose = document.querySelector("#remover")
let greenStatus = document.getElementById('tabela-hora')
const emoji = document.createElement('span');


button.onclick = function(){
    modal.showModal()
}

buttonClose.onclick = function(){
modal.close()
}

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

BtnAgendar.addEventListener('click', ()=>{
    location.href = '../serviços/agendar/agendar.html'
})


menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
/*Menu*/

imgHeader.addEventListener('click', ()=>{
    location.href = '../page1.html'
})

function logar(){
    let user = document.getElementById('inp-login').value;
    let senha = document.getElementById('inp-senha').value;

    if(user === 'admin' && senha === 'admin'){
       location.href = '../page1.html'
       localStorage.setItem('permitir', true)
    } else {
        alert('SENHA ERRADA!')
    }
}