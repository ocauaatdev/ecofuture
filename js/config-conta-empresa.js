function verificarEmpresaAtual() {
    var empresaAtual = JSON.parse(localStorage.getItem('empresaAtual'));
    return empresaAtual;
}

function mostrarConfiguracoesConta() {
    const conteudoPerfil = document.querySelector(".conteudo");
    const empresaAtual = verificarEmpresaAtual();
    const token = localStorage.getItem('token');

    if (empresaAtual && token) {
        conteudoPerfil.innerHTML = `
            <div class="config-contaConteudo">
                <div>
                    <h2>Configurações da Conta</h2> <button>Configurar</button>
                </div>
                <p><strong>Nome de Usuário:</strong><br> ${empresaAtual.empresacad}</p>
                <p><strong>E-mail:</strong><br> ${empresaAtual.emailcad}</p>
                <p><strong>Telefone:</strong><br> ${empresaAtual.telefonecad}</p>
                <p><strong>CNPJ:</strong><br> ${empresaAtual.cnpjcad}</p>
                <p><strong>CEP:</strong><br> ${empresaAtual.cepcad}</p>
                <button class="save">SALVAR</button>
            </div>
        `;
    } else {
        conteudoPerfil.innerHTML = `<h2>Nenhum usuário encontrado ou logado</h2>`;
    }
}
window.addEventListener("load", mostrarConfiguracoesConta);