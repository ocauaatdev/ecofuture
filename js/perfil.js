//PARA ACESSAR A PAGINA PRECISA ESTAR LOGADO
if(localStorage.getItem('token') == null){
    window.location.href = '../pages/erro-login.html'
}

//OUVINTES DO CLICK PARA EXECUTAR AS FUNCTIONS
document.querySelector(".config-conta").addEventListener("click", mostrarConfiguracoesConta);
document.querySelector(".favoritos").addEventListener("click", mostrarProdutosFavoritos);
document.querySelector(".meus-pedidos").addEventListener("click", mostrarMeusPedidos);
document.querySelector(".acompanhar-pedido").addEventListener("click", mostrarAcompanharPedidos);
document.querySelector(".cancelar").addEventListener("click", mostrarCancelar);
document.querySelector(".trocar").addEventListener("click",mostrarTrocar);
document.querySelector(".premium").addEventListener("click", mostrarPremium);
document.querySelector(".notificacoes").addEventListener("click",mostrarNotificacoes)

function verificarUsuarioAtual() {
    var usuarioAtual = JSON.parse(localStorage.getItem('usuarioAtual'));
    return usuarioAtual;
}


//Função para exibir nome do usuario nas opções
function nomeUsuario() {
    const opcoesPerfil = document.querySelector(".opcoes-perfil");
    const nomeUsuarioSpan = opcoesPerfil.querySelector(".perfil-infos span");
    const token = localStorage.getItem('token');
    const usuarioAtual = verificarUsuarioAtual();

    if (usuarioAtual && token) {
        //Se o usuario estiver logado exiba o nome dele (do usuario atual)
        nomeUsuarioSpan.innerHTML = usuarioAtual.usuariocad;
    } else {
        //Se não estiver logado deixe "Nome de Usuario"
        nomeUsuarioSpan.innerHTML = "Nome de Usuario";
    }
}

// Função para exibir informações de Configurações da Conta
//essa função verifica se o usuario esta logado, coleta as informações do usuario atual no localstorage e exibe elas
function mostrarConfiguracoesConta() {
    const conteudoPerfil = document.querySelector(".conteudo-perfil");
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
                <button class="save">SALVAR</button>
            </div>
        `;
    } else {
        conteudoPerfil.innerHTML = `<h2>Nenhum usuário encontrado ou logado</h2>`;
    }
}


// Função para exibir informações de Produtos Favoritos
function mostrarProdutosFavoritos() {
    const conteudoPerfil = document.querySelector(".conteudo-perfil");
    conteudoPerfil.innerHTML = `
        <div class="favoritosConteudo">
            <div>
            <h2>Produtos Favoritos</h2>
            </div>
        
            <div class="destaques">
        
            <div class="cards">
        
                <!--CARD 1-->
            <div id="card1" class="produto">
                <a href="../pages/produtos/camiseta15.html"><img class="imgproduto" src="../imgs/camisetas/camisa.webp" alt="camisa"></a>
                <h3>Camiseta Eco</h3>
                <div class="preco-parcelado">
                    <label for="span">3x </label><span>R$00,00</span>
                </div>
                <div class="precoVista">
                    <label for="span">À vista </label><span class="preco">R$00,00</span>
                <i class="fa-sharp fa-solid fa-bag-shopping" onclick="addToCart('card1')"></i>
                </div>
                
            </div>
        
            <!--CARD 2-->
            <div id="card2" class="produto">
                <a href="../pages/produtos/bag3.html"><img class="imgproduto" src="../imgs/ecobags/bag-1.png" alt="sacola"></a>
                <h3>Eco Bag</h3>
                <div class="preco-parcelado">
                    <label for="span">3x </label><span>R$00,00</span>
                </div>
                <div class="precoVista">
                    <label for="span">À vista </label><span class="preco">R$00,00</span>
                <i class="fa-sharp fa-solid fa-bag-shopping" onclick="addToCart('card2')"></i>
                </div>
            </div>
         
            </div><!--FIM DA DIV CARDS-->
           </div><!--FIM DA DIV DESTAQUES-->
        
    `;
}

// Função para exibir informações de Meus Pedidos
function mostrarMeusPedidos() {
    const conteudoPerfil = document.querySelector(".conteudo-perfil");
    conteudoPerfil.innerHTML = `
    <div class="mostrar-pedidoConteudo">
        <div>
            <h2>Meus Pedidos</h2>
        </div>
    
        <div class="destaques">
        
            <div class="cards">
        
                <!--CARD 1-->
            <div id="card1" class="produto">
                <a href="../pages/produtos/camiseta15.html"><img class="imgproduto" src="../imgs/camisetas/camisa.webp" alt="camisa"></a>
                <h3>Camiseta Eco</h3>
                <div class="preco-parcelado">
                    <span>R$00,00</span>
                </div>
                <div class="precoVista">
                    <button class="btn-compra">Comprar Novamente</button>
                </div>
                
            </div>
        
            <!--CARD 2-->
            <div id="card2" class="produto">
                <a href="../pages/produtos/bag3.html"><img class="imgproduto" src="../imgs/ecobags/bag-1.png" alt="sacola"></a>
                <h3>Eco Bag</h3>
                <div class="preco-parcelado">
                    <span>R$00,00</span>
                </div>
                <div class="precoVista">
                    <button class="btn-compra">Comprar Novamente</button>
                </div>
            </div>
         
            </div><!--FIM DA DIV CARDS-->
           </div><!--FIM DA DIV DESTAQUES-->

</div>
</div>
</div>
    `;
}

// Função para exibir informações de Acompanhar Pedidos
function mostrarAcompanharPedidos() {
    const conteudoPerfil = document.querySelector(".conteudo-perfil");
    conteudoPerfil.innerHTML = `
    <div class="acompanhar-pedidoConteudo">
        <div>
            <h2>Acompanhar Pedido</h2>
        </div>

        <div class="notificacao">
            <i class="fa-solid fa-bell"></i>
            <h3>Seu pedido chegou em Barueri</h3> <span>11:30 - 01/10/2023</span>
        </div>
    </div>
    `;
}
function mostrarCancelar() {
    const conteudoPerfil = document.querySelector(".conteudo-perfil");
    conteudoPerfil.innerHTML = `
    <div class="cancelarConteudo">
        <div>
            <h2>Cancelar Pedido</h2>
        </div>

        <div class="conteiner-cancelamento">
            <h3>Qual Pedido Deseja cancelar?</h3>
            <select>
                <option value="opcao1">Pedido 1</option>
                <option value="opcao2">Pedido 2</option>
            </select>

            <h3>Qual Motivo do Cancelamento?</h3>
            <select>
                <option value="opcao1">Demora para entregar</option>
                <option value="opcao2">Não quero mais o produto</option>
                <option value="opcao3">Outro Motivo</option>
            </select><br>

            <button>Solicitar Cancelamento</button
        </div>
    </div>
    `;
}
function mostrarTrocar() {
    const conteudoPerfil = document.querySelector(".conteudo-perfil");
    conteudoPerfil.innerHTML = `
    <div class="trocarConteudo">
        <div>
            <h2>Trocar Pedido</h2>
        </div>

        <div class="conteiner-troca">
            <h3>Qual Pedido Deseja trocar?</h3>
            <select>
                <option value="opcao1">Pedido 1</option>
                <option value="opcao2">Pedido 2</option>
            </select>

            <h3>Qual Motivo da Troca?</h3>
            <select>
                <option value="opcao1">Tamanho errado</option>
                <option value="opcao2">Produto com defeito</option>
                <option value="opcao3">Cor ou algum elemento no item errado</option>
                <option value="opcao4">Outro Motivo</option>
            </select><br>

            <button>Solicitar Troca</button
        </div>
    </div>
    `;
    
}
function mostrarPremium() {
    const conteudoPerfil = document.querySelector(".conteudo-perfil");
    conteudoPerfil.innerHTML = `
    <div class="premiumConteudo">
        <div>
            <h2>Assinatura Eco+</h2>
        </div>

        <div class="notificacao">
            <i class="fa-solid fa-bell"></i>
            <h3>Renove sua Assinatura</h3> <span>09:30 - 09/10/2023</span>
        </div>
        <div class="notificacao">
            <i class="fa-solid fa-bell"></i>
            <h3>Box Surpresa esse mês!</h3> <span>11:30 - 01/10/2023</span>
        </div>
    </div>
    `;
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
            <h3>Pedido de Cancelamento Aprovado!</h3> <span>09:30 - 09/10/2023</span>
        </div>
        <div class="notificacao">
            <i class="fa-solid fa-bell"></i>
            <h3>Pedido 1 Concluido</h3> <span>11:30 - 01/10/2023</span>
        </div>
    </div>
    `;
}

//A FUNÇÃO MOSTRAR CONFIG CONTA FICA EXIBIDA ASSIM QUE A PAGINA CARREGA
window.addEventListener("load", mostrarConfiguracoesConta);
window.addEventListener("load", nomeUsuario);

//FUNÇÕES PARA REDIRECIONAR (QUANDO ESTIVER NO MOBILE)
function abrirconfigs(params) {
    window.location.href = '../pages/perfil-opcoes/config-conta.html'
}
function abrirfavs(params) {
    window.location.href = '../pages/perfil-opcoes/favoritos.html'
}
function abrirpedidos(params) {
    window.location.href = '../pages/perfil-opcoes/meus-pedidos.html'
}
function abriracompanhar(params) {
    window.location.href = '../pages/perfil-opcoes/acompanhar.html'
}
function abrircancelar(params) {
    window.location.href = '../pages/perfil-opcoes/cancelar.html'
}
function abrirtrocar(params) {
    window.location.href = '../pages/perfil-opcoes/trocar.html'
}
function abrirpremium(params) {
    window.location.href = '../pages/perfil-opcoes/assinatura.html'
}
function abrirnotificacoes(params) {
    window.location.href = '../pages/perfil-opcoes/notificacoes.html'
}