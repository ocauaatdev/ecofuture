function showCustomAlert(message) {
    var alertBox = document.getElementById("alert");
    alertBox.innerHTML = message;

    // Adicione a classe "show" para mostrar o aviso com a animação
    alertBox.classList.add("show");

    setTimeout(function() {
      // Remova a classe "show" para ocultar o aviso
      alertBox.classList.remove("show");
    }, 1000);
}

function addCart(conteiner) {
    var token = localStorage.getItem('token');
    if (token === null) {
        window.location.href ='../../pages/erro-addcart.html'
        return; //A função não é executada se não estiver logado
    }
    // Obter informações do card clicado
    var conteiner = document.querySelector(".conteiner");
    var imgSrc = conteiner.querySelector('.produto-img').src;
    var nomeProduto = conteiner.querySelector('h3').textContent;
    var preco = conteiner.querySelector('.preco-produto').textContent;

    // Salvar as informações em localStorage ou sessionStorage
    var savedCard = {
        imgSrc: imgSrc,
        nomeProduto: nomeProduto,
        preco: preco
    };
    
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.push(savedCard);

    // Armazena os itens do carrinho no armazenamento local
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    showCustomAlert("Produto adicionado ao carrinho!");

    contadorCarrinho();
}

//FUNÇÃO PARA CARDS PEQUENOS
function addToCart(cardId) {
    var token = localStorage.getItem('token');
    if (token === null) {
        window.location.href = '../../pages/erro-addcart.html';
        return; // A função não é executada se não estiver logado
    }

    // Obter informações do card clicado
    var card = document.getElementById(cardId);
    var imgSrc = card.querySelector('.imgproduto').src;
    var nomeProduto = card.querySelector('h3').textContent;
    var preco = card.querySelector('.preco').textContent;

    // Salvar as informações em localStorage ou sessionStorage
    var savedCard = {
        imgSrc: imgSrc,
        nomeProduto: nomeProduto,
        preco: preco
    };

    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.push(savedCard);

    // Armazena os itens do carrinho no armazenamento local
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Substitua o alert pelo uso da função showCustomAlert
    showCustomAlert("Produto adicionado ao carrinho!");

    contadorCarrinho();
}