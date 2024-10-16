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
let mostrarDia = document.getElementById('mostrarDia')
let mostrarData = document.getElementById('mostrarData')
let tabelaHorario = document.getElementById('tabela-horario')
let btn1 = document.getElementById('agendamentoDia')
let btn2 = document.getElementById('agendamentoProx')

dayName = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
const data = new Date
let hora = data.getHours()

if(hora >=21){
    mostrarDia.innerHTML = `${dayName[data.getDay() + 1]}`
    mostrarData.innerHTML = `${data.getDate() + 1}/${data.getMonth() + 1}/${data.getFullYear()}`
}else{
     mostrarDia.innerHTML = `${dayName[data.getDay()]}`
     mostrarData.innerHTML = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
}


let permissao = localStorage.getItem('permitir');
console.log(permissao)
if(permissao === 'false'){
  document.getElementById('permissao_remover').style.display = 'none';
  console.log('ENTROU')
} else {
    console.log('NÃO ENTROU')
}




button.onclick = function(){
    modal.showModal()
}

buttonClose.onclick = function(){
modal.close()
}


BtnAgendar.addEventListener('click', ()=>{
    location.href = '../serviços/agendar/agendar.html'
})

imgHeader.addEventListener('click', ()=>{
    location.href = '../page1.html'
});



document.addEventListener('DOMContentLoaded', function() {
    // Função para buscar dados do servidor
    fetch('/dados')
        .then(response => response.json())
        .then(data => {
            const MostrarDados1 = document.getElementById('col-nome1');
            const MostrarDados2 = document.getElementById('col-nome2');
            const MostrarDados3 = document.getElementById('col-nome3');

            MostrarDados1.style.fontSize = '18px';
            MostrarDados2.style.fontSize = '18px';
            MostrarDados3.style.fontSize = '18px';
          
            
            

            // Adicionar novos dados
            data.forEach(dado => {
                MostrarDados1.innerHTML += `<p>${dado.nome}</p>`;
                MostrarDados2.innerHTML += `<p>${dado.telefone}</p>`;
                MostrarDados3.innerHTML += `<p>${dado.hora} </p>`;
            });
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
});

document.getElementById('delete-user').addEventListener('submit', function(event){
   event.preventDefault();

   const nome = document.getElementById('remover-cliente').value;

   fetch('/delete', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({nome: nome})
   })
   .then(response => response.json())
   .then(data => {
    const responseMessage = document.getElementById('responseMessage');
    if(data.error){
        responseMessage.textContent = `Erro: ${data.error}`;
    }else{
        responseMessage.textContent = data.message;

        const removeNome = document.querySelectorAll(`[id^=nome-]`);
        const removeTelefone = document.querySelectorAll(`[id^=telefone-]`);
        const removeHora = document.querySelectorAll(`[id^hora-]`);

        removeNome.forEach((elemento, index) => {
            if(elemento.textContent === nome){
               elemento.remove();
               removeTelefone[index].remove();
               removeHora[index].remove();
            }

        });
    }

   })
   .catch(error => console.error('Error:', error));
});

