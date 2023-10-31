function mostrarSenha(){
    var inputPass = document.getElementById('senha');
    var btnShowPass = document.getElementById('btn-senha');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text');
        btnShowPass.classList.replace('fa-eye','fa-eye-slash')
    }else{
        inputPass.setAttribute('type','password');
        btnShowPass.classList.replace('fa-eye-slash','fa-eye')
    }
}
// LOGIN
function entrar() {
    var usuario = document.querySelector('#usuario');
    var senha = document.querySelector('#senha');
    let listaUser = [];

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    let usuarioLogado = null;

    listaUser.forEach((item) => {
        if (usuario.value == item.usuariocad && senha.value == item.senhacad) {
            usuarioLogado = item;
        }
    });

    if (usuarioLogado) {
        alert('Login efetuado com sucesso!');

        // Assim que o usuario logar, ele sera definido como o usuario atual do site, se alguém sair do perfil dele e logar no seu lugar, essa pessoa sera a nova "usarioAtual"
        localStorage.setItem('usuarioAtual', JSON.stringify(usuarioLogado));

        //Após fazer o login a pessoa é redirecionada para a ultima pagina salva em que ela esteve
        var ultimaPagina = localStorage.getItem('ultimaPagina');
        if (ultimaPagina) {
            window.location.href = ultimaPagina;
        }

        //Se o usuario conseguir logar ele gera um token que vai ser usado para verificar se o usuario está logado ou não
        let token = Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);
    } else {
        alert('Algo deu errado');
        usuarioLabel.setAttribute('style', 'background-color:red')
        senhaLabel.setAttribute('style', 'background-color:red')
        usuarioLabel.innerHTML = 'Usuario <span>*Usuario ou senha incorretos</span>'
        senhaLabel.innerHTML = 'Senha <span>*Senha incorreta</span>'
    }
}

// Método para verificar o usuário atualmente logado
function verificarUsuarioAtual() {
    var usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual'));

    if (usuarioAtual) {
        alert('Usuário atualmente logado: ' + usuarioAtual.usuariocad);
    } else {
        alert('Nenhum usuário logado no momento.');
    }
}