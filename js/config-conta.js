function verificarUsuarioAtual() {
    var usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual'));
    return usuarioAtual;
}

function mostrarConfiguracoesConta() {
    const conteudoPerfil = document.querySelector(".conteudo");
    const usuarioAtual = verificarUsuarioAtual();
    const token = localStorage.getItem('token');

    if (usuarioAtual && token) {
        conteudoPerfil.innerHTML = `
            <div class="config-contaConteudo">
                <div>
                    <h2>Configurações da Conta</h2> <button>Configurar</button>
                </div>
                <p><strong>Nome de Usuário:</strong><br> ${usuarioAtual.usuariocad}</p>
                <p><strong>E-mail:</strong><br> ${usuarioAtual.emailcad}</p>
                <p><strong>Telefone:</strong><br> ${usuarioAtual.telefonecad}</p>
                <p><strong>CPF:</strong><br> ${usuarioAtual.cpfcad}</p>
                <p><strong>Data de Nascimento:</strong><br> ${usuarioAtual.nascimentocad}</p>
                <p><strong>CEP:</strong><br> ${usuarioAtual.cepcad}</p>
                <p><strong>Senha:</strong><br> ${usuarioAtual.senhacad}</p>
                <button class="save">SALVAR</button>
            </div>
        `;
    } else {
        conteudoPerfil.innerHTML = `<h2>Nenhum usuário encontrado ou logado</h2>`;
    }
}
window.addEventListener("load", mostrarConfiguracoesConta);
