// DROPDOWN CATEGORIAS
var dropdown = document.querySelector('.dropdown');
var icone = document.querySelector('.btnCategorias');

icone.addEventListener('click', function(event){
    if (dropdown.style.display === 'flex') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'flex';
    }
    event.stopPropagation(); // Impede a propagação do evento de clique para o documento
});

// SE O CLIQUE ACONTECER FORA DA DIV OU DO ICONE O DROPDOWN SOME
document.addEventListener("click", function(event){
    if (event.target !== dropdown && event.target !== icone){
        dropdown.style.display = 'none';
    }
});


//MENU LATERAL
$('.categorias').click(function(){
    $('.menuLateral ul .firstOption').toggleClass('mostra');
});

$('.ajudaUsuario').click(function(){
    $('.menuLateral ul .secondOption').toggleClass('mostra');
});

// Função para fechar o menu lateral
function fecharMenuLateral() {
    $('.menuLateral').removeClass('mostra');
}

// Abrir o menu lateral quando o botão de menu é clicado
$('.btnMenu').click(function(event) {
    event.stopPropagation(); // Impedir que o clique se propague para o documento
    $('.menuLateral').addClass('mostra');
});

// Fechar o menu lateral quando o botão de fechar é clicado
$('.btnFechar').click(function() {
    fecharMenuLateral();
});

// Fechar o menu lateral quando clicar em qualquer parte fora do menu
$(document).click(function(event) {
    if (!$(event.target).closest('.menuLateral').length) {
        fecharMenuLateral();
    }
});

// Evitar que cliques dentro do menu fechem o menu
$('.menuLateral').click(function(event) {
    event.stopPropagation();
});

// $('.btnMenu').click(function(){
//     $('.menuLateral').toggleClass('mostra')
// });

// $('.btnFechar').click(function(){
//     $('.menuLateral').toggleClass('mostra')
// });

//Fazer a tela descer da opção suporte até o rodapé
var btnSuporte = document.querySelector('.btnSuporte')

btnSuporte.addEventListener('click',function(){
    $('html, body').animate({
        scrollTop: $("#suporte").offset().top
      }, 1000); // A animação dura 1segundo
})
