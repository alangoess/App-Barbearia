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


document.addEventListener('DOMContentLoaded', function() {
    // Tenta recuperar e desserializar a string JSON armazenada no sessionStorage sob a chave 'dados'.
    // Se não houver dados, inicializa a variável 'dados' como um array vazio.
    let dados = JSON.parse(sessionStorage.getItem('dados')) || [];

    // Recupera os valores armazenados no sessionStorage para 'nome', 'telefone' e 'hora'.
    const nome = sessionStorage.getItem('nome');
    const telefone = sessionStorage.getItem('telefone');
    const hora = sessionStorage.getItem('hora');

    // Se os valores de 'nome', 'telefone' e 'hora' existem (não são nulos),
    // cria um novo objeto com esses valores e o adiciona ao array 'dados'.
    if (nome && telefone && hora) {
        dados.push({ nome, telefone, hora });
        // Atualiza o sessionStorage com a string JSON do array atualizado 'dados'.
        sessionStorage.setItem('dados', JSON.stringify(dados));
        // Remove os itens 'nome', 'telefone' e 'hora' do sessionStorage para evitar duplicações futuras.
        sessionStorage.removeItem('nome');
        sessionStorage.removeItem('telefone');
        sessionStorage.removeItem('hora');
    }

    // Obtém referências aos elementos do DOM onde os dados serão exibidos.
    const MostrarDados1 = document.getElementById('col-nome1');
    const MostrarDados2 = document.getElementById('col-nome2');
    const MostrarDados3 = document.getElementById('col-nome3');

    // Itera sobre o array 'dados' e adiciona os valores de 'nome', 'telefone' e 'hora' aos elementos do DOM.
    dados.forEach(dado => {
        MostrarDados1.innerHTML += `<p>${dado.nome}</p>`;
        MostrarDados2.innerHTML += `<p>${dado.telefone}</p>`;
        MostrarDados3.innerHTML += `<p>${dado.hora}</p>`;
    });
});
