function contadorCarrinho() {
    var itensCarrinho = JSON.parse(localStorage.getItem('cartItems')) || [];
    var contadorItensSpan = document.getElementById('cart-item-count');
    contadorItensSpan.textContent = itensCarrinho.length;
  }
  
  window.addEventListener("load", contadorCarrinho);

  