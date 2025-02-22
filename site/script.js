const form_encontrar = document.querySelector('#form-encontrar')
const cadastro_btn = document.querySelector('#cadastro-btn')
const opcao_inicial = document.querySelector('.opcao_inicial')
const form_cadastro = document.querySelector('#form-cadastro')
const encontrar_cliente = document.querySelector('#encontrar_cliente')
const cadastrar_btn = document.querySelector('#cadastrar-btn')
const lista = document.querySelector('#lista')
const ver_clientes = document.querySelector('#ver-clientes')
const voltar_btn = document.querySelector('#voltar-btn')

let n1 = 1
const n2 = 2
let n3 = 3

const clientes = [
    { id: 1, nome: "Lucas Silva", email: "lucas@email.com" },
    { id: 2, nome: "Ana Souza", email: "ana@email.com" },
    { id: 3, nome: "Carlos Pereira", email: "carlos@email.com" }
];

function carregarClientes() {
    const tabela = document.getElementById("clientesTabela");
    tabela.innerHTML = "";
    clientes.forEach(cliente => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${cliente.id}</td><td>${cliente.nome}</td><td>${cliente.email}</td>`;
        tabela.appendChild(row);
    });
}

carregarClientes();

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

voltar_btn.addEventListener('click', (e) => {
    e.preventDefault()
    form_cadastro.classList.remove('hiden')
    form_encontrar.classList.add('hiden')
    opcao_inicial.classList.add('hiden')
})

cadastrar_btn.addEventListener('click', (e) => {    
    e.preventDefault();

    clientes.push({
        id: 10,
        nome: document.querySelector('#nome').value.toUpperCase(),
        email: document.querySelector('#email').value.toLowerCase()
    });

    carregarClientes();
})

ver_clientes.addEventListener('click', (e) => {
    e.preventDefault()
    lista.classList.remove('hiden')
})
