const h = document.querySelector('.nome')
const botao = document.querySelector('.btn')

if (botao){
    botao.addEventListener('click', (event) => {
        event.preventDefault();
        h.innerHTML  = 'Ola Gustavo'
    })

}



const soma = (a = 1, b = 1) => {
    return a + b
}

/* status.innerHTML = 'Status:Login Válido,sistema de busca logo embaixo. O formulário será apagado em alguns segundos';3*/

