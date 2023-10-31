//MASCARAS
$('#nascimento').mask('00/00/0000');
$('#cep').mask('00000-000');
$('#telefone').mask('(00)0000-0000');
$('#cpf').mask('000.000.000-00', {reverse: true});

//FIM DAS MASCARAS


var inputConfirmPass = document.getElementById('confirm-senha');
var btnShowConfirmPass = document.getElementById('btn-confirm-senha');

var inputPass = document.getElementById('senha');
var btnShowPass = document.getElementById('btn-senha');

//VARIAVEIS DOS INPUTS E LABELS

var usuario = document.querySelector('#usuario');
var labelUsuario = document.querySelector('#labelUsuario');
var validUsuario = false;

var email = document.querySelector('#e-mail');
var labelEmail = document.querySelector('#labelEmail');
var validEmail = false;

var telefone = document.querySelector('#telefone');
var labelTelefone = document.querySelector('#labelTelefone');
var validTelefone = false;

var cpf = document.querySelector('#cpf');
var labelCPF = document.querySelector('#labelCPF');
var validCPF = false;

var nascimento = document.querySelector('#nascimento');
var labelNascimento = document.querySelector('#labelNascimento');
var validNascimento = false;

var cep = document.querySelector('#cep');
var labelCEP = document.querySelector('#labelCEP');
var validCEP = false;

var senha = document.querySelector('#senha');
var labelSenha = document.querySelector('#labelSenha');
var validSenha = false;

var confirmsenha = document.querySelector('#confirm-senha');
var labelConfirmSenha = document.querySelector('#labelConfirmSenha');
var validConfirmSenha = false;

//VALIDAÇÃO EM TEMPO REAL
usuario.addEventListener('keyup', ()=>{
if (usuario.value.length <= 2) {
    labelUsuario.setAttribute('style', 'background-color:red')
    labelUsuario.innerHTML = 'Usuário <span>*Insira no mínimo 3 caracteres</span>'
    validUsuario = false;
} else {
    labelUsuario.setAttribute('style', 'color:#16CF8C')
    labelUsuario.innerHTML = 'Nome de usuário'
    validUsuario = true;
}
})


email.addEventListener('keyup', () => {
var emailValue = email.value;
var emailPattern = /@gmail\.com$|@hotmail\.com$/;

if (emailValue.length <= 4) {
    labelEmail.setAttribute('style', 'background-color:red')
    labelEmail.innerHTML = 'E-mail <span>*Insira no mínimo 5 caracteres</span>'
    validEmail = false;
} else if (emailPattern.test(emailValue)) {
    labelEmail.setAttribute('style', 'color:#16CF8C')
    labelEmail.innerHTML = 'E-mail de usuário válido'
    validEmail = true;
} else {
    labelEmail.setAttribute('style', 'background-color:red')
    labelEmail.innerHTML = 'E-mail <span>*E-mail inválido</span>'
    validEmail = false;
}
})

telefone.addEventListener('keyup', ()=>{
if (telefone.value.length <= 12) {
    labelTelefone.setAttribute('style', 'background-color:red')
    labelTelefone.innerHTML = 'Telefone <span>*Insira no mínimo 10 caracteres</span>'
    validTelefone = false;
} else {
    labelTelefone.setAttribute('style', 'color:#16CF8C')
    labelTelefone.innerHTML = 'Telefone'
    validTelefone = true;
}
})

cpf.addEventListener('keyup', ()=>{
if (cpf.value.length <= 13) {
    labelCPF.setAttribute('style', 'background-color:red')
    labelCPF.innerHTML = 'CPF <span>*Insira no mínimo 11 caracteres</span>'
    validCPF = false;
} else {
    labelCPF.setAttribute('style', 'color:#16CF8C')
    labelCPF.innerHTML = 'CPF'
    validCPF = true;
}
})

nascimento.addEventListener('keyup', ()=>{
if (nascimento.value.length <= 9) {
    labelNascimento.setAttribute('style', 'background-color:red')
    labelNascimento.innerHTML = 'Data de Nascimento <span>*Insira no mínimo 8 caracteres</span>'
    validNascimento = false;
} else {
    labelNascimento.setAttribute('style', 'color:#16CF8C')
    labelNascimento.innerHTML = 'Data de nascimento'
    validNascimento = true;
}
})

cep.addEventListener('keyup', ()=>{
if (cep.value.length <= 8) {
    labelCEP.setAttribute('style', 'background-color:red')
    labelCEP.innerHTML = 'CEP <span>*Insira no mínimo 8 caracteres</span>'
    validCEP = false;
} else {
    labelCEP.setAttribute('style', 'color:#16CF8C')
    labelCEP.innerHTML = 'CEP'
    validCEP = true;
}
})

senha.addEventListener('keyup', ()=>{
if (senha.value.length <= 5) {
    labelSenha.setAttribute('style', 'background-color:red')
    labelSenha.innerHTML = 'Senha <span>*Insira no mínimo 6 caracteres</span>'
    validSenha = false;
} else {
    labelSenha.setAttribute('style', 'color:#16CF8C')
    labelSenha.innerHTML = 'Senha de usuário'
    validSenha = true;
}
})

confirmsenha.addEventListener('keyup', ()=>{
if (senha.value != confirmsenha.value) {
    labelConfirmSenha.setAttribute('style', 'background-color:red');
    labelConfirmSenha.innerHTML = 'Confirmar senha <span>*As senhas não coincidem</span>';
    validConfirmSenha = false;
} else {
    labelConfirmSenha.setAttribute('style', 'color:#16CF8C');
    labelConfirmSenha.innerHTML = 'Confirme sua senha';
    validConfirmSenha = true;
}
})

//MOSTRAR SENHA
function mostrarSenha(){
if(inputPass.type === 'password'){
    inputPass.setAttribute('type','text');
    btnShowPass.classList.replace('fa-eye','fa-eye-slash')
}else{
    inputPass.setAttribute('type','password');
    btnShowPass.classList.replace('fa-eye-slash','fa-eye')
}
}



//MOSTRAR CONFIRM SENHA
function mostrarConfirmSenha(){  
if(inputConfirmPass.type === 'password'){
    inputConfirmPass.setAttribute('type','text');
    btnShowConfirmPass.classList.replace('fa-eye','fa-eye-slash')
}else{
    inputConfirmPass.setAttribute('type','password');
    btnShowConfirmPass.classList.replace('fa-eye-slash','fa-eye')
}
}

//EVENTO DE CADASTRO
function cadastrar(){
if (validUsuario && validEmail && validTelefone && validCPF && validCEP && validNascimento && validSenha && validConfirmSenha) {

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    listaUser.push({
        usuariocad: usuario.value,
        emailcad: email.value,
        telefonecad: telefone.value,
        cpfcad: cpf.value,
        cepcad: cep.value,
        nascimentocad: nascimento.value,
        senhacad: senha.value
    })

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    window.location.href = '../pages/login-page.html'

    alert('Cadastro Realizado Com Sucesso!')
} else {
   alert('Preencha todos os campos corretamente!')
}
}