const form_encontrar = document.querySelector('#form-encontrar')
const cadastro_btn = document.querySelector('#cadastro-btn')
const opcao_inicial = document.querySelector('.opcao_inicial')
const form_cadastro = document.querySelector('#form-cadastro')
const encontrar_cliente = document.querySelector('#encontrar_cliente')
const cadastrar_btn = document.querySelector('#cadastrar-btn')
const lista = document.querySelector('#lista')
const ver_clientes = document.querySelector('#ver-clientes')

var n1 = 1
const n2 = 2
let n3 = 3






/*eventos*/
encontrar_cliente.addEventListener('click', (e) => {
    e.preventDefault()
    form_encontrar.classList.remove('hiden')
    form_cadastro.classList.add('hiden')
    opcao_inicial.classList.add('hiden')

})

form_encontrar.addEventListener('click', (e) => {
    e.preventDefault();
    focus();
    
})

const fn_cadastro = cadastro_btn.addEventListener('click', (e) => {
    e.preventDefault()
    form_cadastro.classList.remove('hiden')
    form_encontrar.classList.add('hiden')
    opcao_inicial.classList.add('hiden')
})
cadastrar_btn.addEventListener('click', (e) => {    
    e.preventDefault()
    form_cadastro.classList.remove('hiden')
    form_encontrar.classList.add('hiden')
    opcao_inicial.classList.add('hiden')
    const nome = document.querySelector('#nome').value.toupperCase()
    const email = document.querySelector('#email').value.tolowerCase()
    const telefone = document.querySelector('#telefone').value
    const nascimento = document.querySelector('#data_nascimento').value
    
})

ver_clientes.addEventListener('click', (e) => {
    e.preventDefault()
    lista.classList.remove('hiden')
})




