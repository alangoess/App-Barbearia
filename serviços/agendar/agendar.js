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


document.getElementById('botao_confirmar').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const hora = document.getElementById('hora').value;
    const infoAgendamento = document.getElementById('info-agendamento');
    const data = document.getElementById('data').value;

    const data_formatada = data.split('-').reverse().join('/');
   

    if (nome === "" || telefone === "" || hora === "" || data === "") {
        alert('Preencha todos os campos em branco');
    } else {
        // Enviar os dados para o servidor
        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome: nome, telefone: telefone, hora: hora, data: data_formatada })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                // Verifica se há um erro (por exemplo, nome duplicado)
                infoAgendamento.innerHTML = data.error
                infoAgendamento.style.color = 'yellow'
            } else {
                // Armazena os dados no sessionStorage e redireciona
                sessionStorage.setItem('nome', nome);
                sessionStorage.setItem('telefone', telefone);
                sessionStorage.setItem('hora', hora);
                sessionStorage.setItem('data', data_formatada);
                location.href = '../../page-agendar/index.html';
                
            }
        })
        .catch(error => {
            document.getElementById('resultado').innerText = 'Erro ao enviar os dados.';
            console.error('Erro:', error);
        });
    }
});

