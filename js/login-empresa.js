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
    var empresa = document.querySelector('#empresa');
    var senha = document.querySelector('#senha');
    let listaParceiros = [];

    listaParceiros = JSON.parse(localStorage.getItem('listaParceiros'));

    let empresaLogada = null;

    listaParceiros.forEach((item) => {
        if (empresa.value == item.empresacad && senha.value == item.senhacad) {
            empresaLogada = item;
        }
    });

    if (empresaLogada) {
        alert('Login efetuado com sucesso!');

        // Assim que o empresa logar, ele sera definido como o empresa atual do site, se alguém sair do perfil dele e logar no seu lugar, essa pessoa sera a nova "usarioAtual"
        localStorage.setItem('empresaAtual', JSON.stringify(empresaLogada));

        //Se o empresa conseguir logar ele gera um token que vai ser usado para verificar se o empresa está logado ou não
        let token = Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);

        window.location.href = ("../pages/perfil-empresa.html")
    } else {
        alert('Algo deu errado');
        empresaLabel.setAttribute('style', 'background-color:red')
        senhaLabel.setAttribute('style', 'background-color:red')
        empresaLabel.innerHTML = 'Nome <span>*Nome ou senha incorretos</span>'
        senhaLabel.innerHTML = 'Senha <span>*Senha incorreta</span>'
    }
}

// Método para verificar o usuário atualmente logado
function verificarempresaAtual() {
    var empresaAtual = JSON.parse(localStorage.getItem('empresaAtual'));

    if (empresaAtual) {
        alert('Usuário atualmente logado: ' + empresaAtual.empresacad);
    } else {
        alert('Nenhum usuário logado no momento.');
    }
}