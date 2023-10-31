var sairBtn = document.getElementById('sairOption')
var logarBtn = document.getElementById('login-button')
var logarBtnLateral = document.querySelector('.loginBtn')
var cadastrarBtnLateral = document.querySelector('.cadastrarBtn')
var sairBtnLateral = document.querySelector('.sairbtn')
var empresaLogin = document.querySelector('#empresa-acesso')
var empresaLoginLateral = document.querySelector('.acesso-parceiros')

//Se o usuario não estiver logado, o botao de login e cadastro fica visivel
if(localStorage.getItem('token') == null){
    logarBtn.style.display = 'block'
    empresaLogin.style.display = 'block'
    sairBtn.style.display = 'none'

}else{ //Se ele estiver logado, o botao de login e cadastro nao fica visivel
    logarBtn.style.display = 'none'
    empresaLogin.style.display = 'none'
    sairBtn.style.display = 'block'
}

function deslogar(){

    //Se o token de usuario logado estiver vazio nada acontece
    if(localStorage.getItem('token') == null){

    }else{ //Se tiver algum valor no token
        localStorage.removeItem('token')
        logarBtn.style.display('block')
    }
}

if (localStorage.getItem('token') !== null) {
    logarBtnLateral.style.display = 'none'
    cadastrarBtnLateral.style.display = 'none'
    empresaLoginLateral.style.display = 'none'

}else{
    logarBtnLateral.style.display = 'block'
    cadastrarBtnLateral.style.display = 'block'
    empresaLoginLateral.style.display = 'block'
    sairBtnLateral.style.display = 'none'
}
