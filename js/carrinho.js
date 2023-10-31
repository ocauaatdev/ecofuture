if (localStorage.getItem('token') == null) {
  window.location.href = '../pages/erro-login.html';
}

function displayCartItems() {
  var cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';

  // Recupera os itens do carrinho do armazenamento local
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  if (cartItems.length === 0) {
    cartItemsDiv.innerHTML = '<p class=errorMessage>Seu carrinho está vazio.</p>';
  } else {
    for (var i = 0; i < cartItems.length; i++) {
      var produto = cartItems[i];

      var cardProduto = document.createElement('div');
      cardProduto.className = 'card-produto';
      cardProduto.innerHTML = `
        <div class="produtoInfoConteiner">
          <label class="container">
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <img class="imgproduto" src="${produto.imgSrc}" alt="Imagem do produto">
          <div class="item-top">
            <h3 id="grid-item" class="tituloProduto">${produto.nomeProduto}</h3>
            <p id="grid-item">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit illo earum minus quas ad saepe delectus excepturi, quos, magni totam, nisi perspiciatis repudiandae recusandae dolores blanditiis possimus iure vitae fugiat?</p>
            <span id="grid-item" class="preco">${produto.preco}</span>
          </div>
          <div class="item-footer">
            <button onclick="menos()" class="a">
              <i class="fa-solid fa-minus"></i>
            </button>
            <input placeholder="" min="1" value="1" id="total" type="number" class="quandtidadeProd">
            <button onclick="mais()" class="b">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      `;

      var removeButton = document.createElement('button');
      removeButton.id = 'removeButton';
      removeButton.textContent = '';
      removeButton.classList.add('fa-solid', 'fa-trash', 'trash');
      removeButton.addEventListener('click', createRemoveButtonHandler(i));

      var produtoInfoConteiner = cardProduto.querySelector('.produtoInfoConteiner');
      produtoInfoConteiner.appendChild(removeButton);

      cartItemsDiv.appendChild(cardProduto);
    }
  }

  // Após atualizar os itens do carrinho, crie o resumo do carrinho
  createCartSummary();
}

function createRemoveButtonHandler(index) {
  return function () {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (index >= 0 && index < cartItems.length) {
      cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      displayCartItems();
      contadorCarrinho(); // Atualize o contador de itens no carrinho
    }
  };
}

window.addEventListener('storage', function (event) {
  if (event.key === 'cartItems') {
    displayCartItems();
  }
});

function createCartSummary() {
  var cartItemsCount = document.querySelectorAll('.card-produto').length;

  // Verifique se há produtos no carrinho
  if (cartItemsCount > 0) {
    // Remove o resumo antigo, se existir, antes de criar um novo
    var cartSummary = document.getElementById('cartPreco');
    if (cartSummary) {
      cartSummary.parentNode.removeChild(cartSummary);
    }

    var cartSummaryDiv = document.createElement('div');
    cartSummaryDiv.className = 'cartPreco';
    cartSummaryDiv.id = 'cartPreco';
    cartSummaryDiv.innerHTML = `
      <div class="summary">
        <div class="cartCupom">
          <i class="fa-solid fa-ticket"></i>
          <span>Cupons</span><span id="cupomItem">Selecione</span>
        </div>
        <hr />
        <div class="textCart">
          <label class="summaryConteiner">
            <input type="checkbox">
            <span class="check"></span>
          </label>
          <h4>Tudo</h4>
          <h3>Total</h3>
          <span> R$00,00</span>
          <a href="../pages/pagamento.html"><button>Comprar</button></a>
        </div>
      </div>
    `;

    // Adicione a div ao documento
    var mainContentDiv = document.getElementById('cart-items');
    mainContentDiv.appendChild(cartSummaryDiv);
  }
}

function positionCartSummary() {
  var cartSummary = document.getElementById('cartPreco');
  var cartItems = document.getElementById('cart-items');
  var cartItemsCount = document.querySelectorAll('.card-produto').length;
  var scrollTop = window.scrollY || window.pageYOffset;

  if (cartSummary && cartItems) {
    var cartSummaryRect = cartSummary.getBoundingClientRect();
    var cartItemsRect = cartItems.getBoundingClientRect();

    if (cartItemsCount <= 2  || cartSummaryRect.bottom >= cartItemsRect.bottom) {
      // Se houver 2 ou menos produtos ou o cartSummary atingir o final da div 'cart-items', defina-o como 'relative' e coloque-o na parte inferior da página.
      cartSummary.style.position = 'relative';
      cartSummary.style.bottom = '0';
      cartSummary.style.left = '50%';
      cartSummary.style.transform = 'translateX(-50%)';
    } else {
      // Caso contrário, mantenha-o como 'fixed' na parte inferior da página.
      cartSummary.style.position = 'relative';
      cartSummary.style.bottom = '0';
      cartSummary.style.left = '50%';
      cartSummary.style.transform = 'translateX(-50%)';
    }
  }
}

// Chame a função para posicionar o cartSummary sempre que a janela é redimensionada ou a rolagem ocorre.
window.addEventListener('resize', positionCartSummary);
window.addEventListener('scroll', positionCartSummary);

// Chame a função inicialmente para posicionar o cartSummary.
createCartSummary();

displayCartItems();
positionCartSummary();
