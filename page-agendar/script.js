function redirectTo(url) {
    window.location.href = url;
}

/*Menu*/
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
/*Menu*/

imgHeader.addEventListener('click', ()=>{
    location.href = '../page1.html'
})


document.addEventListener('DOMContentLoaded', function(){
    const nome = sessionStorage.getItem('nome')
    const telefone = sessionStorage.getItem('telefone')
    const hora = sessionStorage.getItem('hora')
    

    if(nome && telefone && hora){
        const MostrarDados = document.getElementById('col-nome1')
        const MostrarDados2 = document.getElementById('col-nome2')
        const MostrarDados3 = document.getElementById('col-nome3')

        MostrarDados.innerHTML += `${nome}`
        MostrarDados2.innerHTML += `${telefone}`
        MostrarDados3.innerHTML += `${hora}` 
    }
})