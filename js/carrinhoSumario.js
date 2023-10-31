function createCartSummary() {
    var cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems.length === 0) {
        cartSummaryDiv.style.display = 'none';
    }else{

  var cartSummaryDiv = document.createElement('div');
  cartSummaryDiv.className = 'cartPreco';
  cartSummaryDiv.id = 'cartPreco';
  cartSummaryDiv.innerHTML =
    '<div class="summary">'+
    '<div class ="cartCupom">'+
    '<i class="fa-solid fa-ticket"></i>'+
    '<span>Cupons</span>'+ '<span id="cupomItem">Selecione</span>'+
    '</div>'+
    '<hr/>'+
    '<div class="textCart">' +      '<label class="summaryConteiner">' +
    '<input type="checkbox">' +
    '<span class="check">' + '</span>' +
    '</label>' +  
    '<h4>Selecionar Tudo</h4>' +    '<h3>Total</h3>' +

    '<span> R$00,00</span>' +    '<button>Comprar</button>'; +
    '</div>' 
+
    '</div>'

    var cartSummary = cartItems[cartSummaryDiv];
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
    
    if (cartItemsCount <= 2 || cartSummaryRect.bottom >= cartItemsRect.bottom) {
      // Se houver 2 ou menos produtos ou o cartSummary atingir o final da div 'cart-items', defina-o como 'relative' e coloque-o na parte inferior da página.
      cartSummary.style.position = 'relative';
      cartSummary.style.bottom = '0';
      cartSummary.style.left = '50%';
      cartSummary.style.transform = 'translateX(-50%)';
    } else {
      // Caso contrário, mantenha-o como 'fixed' na parte inferior da página.
      cartSummary.style.position = 'fixed';
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
positionCartSummary();