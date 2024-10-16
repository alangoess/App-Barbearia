function redirectTo(url) {
    window.location.href = url;
}

/*Menu*/
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
/*Menu*/



let imgHeader = document.getElementById('img-header');
let BtnAgendar = document.getElementById('icone')
let button = document.querySelector('#open-dialog')
let modal = document.querySelector('dialog')
let buttonClose = document.querySelector("#remover")
let greenStatus = document.getElementById('tabela-hora')
const emoji = document.createElement('span');



let permissao = localStorage.getItem('permitir');
console.log(permissao)
if(permissao === 'false'){
  document.getElementById('permissao_remover').style.display = 'none';
  console.log('ENTROU')
} else {
    console.log('NÃO ENTROU')
}


imgHeader.addEventListener('click', ()=>{
    location.href = '../page1.html'
})


document.addEventListener('DOMContentLoaded', function() {
    // Função para buscar dados do servidor
    fetch('/dados')
        .then(response => response.json())
        .then(data => {
            const MostrarDados1 = document.getElementById('col-nome1');
            const MostrarDados2 = document.getElementById('col-nome2');
            const MostrarDados3 = document.getElementById('col-nome3');
            const MostrarDados4 = document.getElementById('col-nome4');

            // Adicionar novos dados
            data.forEach(dado => {
                MostrarDados1.innerHTML += `<p>${dado.nome}</p>`;
                MostrarDados2.innerHTML += `<p>${dado.telefone}</p>`;
                MostrarDados3.innerHTML += `<p>${dado.hora}</p>`;
                MostrarDados4.innerHTML += `<p>${dado.data} </p>`;
            });
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
});

