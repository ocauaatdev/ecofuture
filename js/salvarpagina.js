window.onload = salvarPagina;

function salvarPagina() {
  localStorage.setItem('ultimaPagina', window.location.href);
}
