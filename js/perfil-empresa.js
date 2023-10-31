//PARA ACESSAR A PAGINA PRECISA ESTAR LOGADO
if(localStorage.getItem('token') == null){
    window.location.href = '../pages/erro-login.html'
}

//OUVINTES DO CLICK PARA EXECUTAR AS FUNCTIONS
document.querySelector(".config-conta").addEventListener("click", mostrarConfiguracoesConta);
document.querySelector(".meus-produtos").addEventListener("click", mostrarMeusProdutos);
document.querySelector(".envio").addEventListener("click", mostrarEnvio);
document.querySelector(".notificacoes").addEventListener("click",mostrarNotificacoes)

function verificarEmpresaAtual() {
    var empresaAtual = JSON.parse(localStorage.getItem('empresaAtual'));
    return empresaAtual;
}

// Função para exibir informações de Configurações da Conta
//essa função verifica se o usuario esta logado, coleta as informações do usuario atual no localstorage e exibe elas
function mostrarConfiguracoesConta() {
    const conteudoPerfil = document.querySelector(".conteudo-perfil");
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


// Função para exibir informações de Produtos Favoritos
function mostrarMeusProdutos() {
    const conteudoPerfil = document.querySelector(".conteudo-perfil");
    conteudoPerfil.innerHTML = `
        <div class="meusProdutosConteudo">
            <div>
            <h2 class="titulo">Meus Produtos</h2>
            </div>

            <div class="meu-produto">
            <img src="../imgs/camisetas/camisa-2.png" alt="">
                <div class="infoProduto">
                    <h2>Produto - R$00,00</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo nobis rem nemo laudantium, laborum hic odio debitis fugit suscipit voluptatum veniam assumenda, blanditiis vitae temporibus sint iure, perspiciatis sequi!</p>
                </div>
                <div class="opcoes-produto">
                    <button>Apagar</button>
                    <button>Esgotado</button>
                </div>
            </div>
        
        </div> <!--FIM meusProdutosConteudo-->
        
    `;
}

function mostrarEnvio() {
    const conteudoPerfil = document.querySelector(".conteudo-perfil");
    conteudoPerfil.innerHTML = `
    <div class="mostrarEnvioConteudo">
        <div>
            <h2 class="titulo">Envio de Pedidos</h2>
        </div>
    
        <div class="pedido">
            <img src="../imgs/camisetas/camisa-2.png" alt="">
            <div class="info-pedido">
                <h2>Produto - R$00,00</h2>
                <p>Pedido feito por (nome do cliente)</p>
                <button onclick="mostrarConfirmacao()">Pronto Para Envio</button>
            </div>
        </div>

        <div class="conteiner-confirm">
            <div class="confirmacao" id="confirmacao" style="display: none;">
                <div class="tituloConfirm">
                    <h1>Deseja confirmar o envio?</h1> <i id="xmark" class="fa-solid fa-xmark" onclick="fecharConfirm()"></i>
                </div>
                <p>Certifique-se que os produtos estão embalados, identificados e sem falhas. Este aviso serve para evitarmos futuros problemas.  Notificaremos os entregadores para retirar o produto e realizar a entrega.</p>
                <button onclick="ocultarConfirmacao()">Confirmar</button>
            </div>
        </div>
    </div>
    `;
}

function mostrarConfirmacao() {
    var confirmacao = document.getElementById("confirmacao");
    confirmacao.style.display = "block";
}

function ocultarConfirmacao() {
    var confirmacao = document.getElementById("confirmacao");
    confirmacao.style.display = "none";
}
function fecharConfirm(params) {
    var confirmacao = document.getElementById("confirmacao");
    confirmacao.style.display = "none";
}

function mostrarNotificacoes() {
    const conteudoPerfil = document.querySelector(".conteudo-perfil");
    conteudoPerfil.innerHTML = `
    <div class="notificacoesConteudo">
        <div>
            <h2>Notificações</h2>
        </div>

        <div class="notificacao">
            <i class="fa-solid fa-bell"></i>
            <h3>Venda Realizada! Produto 1 (nome do cliente)</h3> <span>09:30 - 09/10/2023</span>
        </div>
        <div class="notificacao">
            <i class="fa-solid fa-bell"></i>
            <h3>Pedido 3 Concluido</h3> <span>11:30 - 01/10/2023</span>
        </div>
    </div>
    `;
}

//A FUNÇÃO MOSTRAR CONFIG CONTA FICA EXIBIDA ASSIM QUE A PAGINA CARREGA
window.addEventListener("load", mostrarConfiguracoesConta);

//FUNÇÕES PARA REDIRECIONAR (QUANDO ESTIVER NO MOBILE)
function abrirconfigs(params) {
    window.location.href = '../pages/perfil-empresa-opcoes/config-conta.html'
}
function abrirProdutos(params) {
    window.location.href = '../pages/perfil-empresa-opcoes/meus-produtos.html'
}
function abrirEnvios(params) {
    window.location.href = '../pages/perfil-empresa-opcoes/envios.html'
}
function abrirnotificacoes(params) {
    window.location.href = '../pages/perfil-empresa-opcoes/notificacoes.html'
}