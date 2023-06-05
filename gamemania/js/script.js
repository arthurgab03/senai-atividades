//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            top: 0, 
            left: 0,
            behavior:'smooth'
        }
    )
}

//Validação de Login

function login(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var erro = document.querySelector('.login-erro');

    if(usuario == 'admin' && senha == 'arthur123'){
        window.location = 'logado.html';
    } else {
        erro.classList.add('mostra');   
        
    }
}

//Ativar alert no botão cadastrar

function cadastro(){
    window.location = 'logado.html'
}
