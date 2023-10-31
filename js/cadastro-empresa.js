//MASCARAS
$('#cnpj').mask('00.000.000/0000-00', {reverse: true});
$('#cep').mask('00000-000');
$('#telefone').mask('(00)0000-0000');

//FIM DAS MASCARAS


var inputConfirmPass = document.getElementById('confirm-senha');
var btnShowConfirmPass = document.getElementById('btn-confirm-senha');

var inputPass = document.getElementById('senha');
var btnShowPass = document.getElementById('btn-senha');

//VARIAVEIS DOS INPUTS E LABELS

var empresa = document.querySelector('#empresa');
var labelEmpresa = document.querySelector('#labelEmpresa');
var validEmpresa = false;

var email = document.querySelector('#e-mail');
var labelEmail = document.querySelector('#labelEmail');
var validEmail = false;

var telefone = document.querySelector('#telefone');
var labelTelefone = document.querySelector('#labelTelefone');
var validTelefone = false;

var cnpj = document.querySelector('#cnpj');
var labelCnpj = document.querySelector('#labelCnpj');
var validCnpj = false;


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
empresa.addEventListener('keyup', ()=>{
if (empresa.value.length <= 2) {
    labelEmpresa.setAttribute('style', 'background-color:red')
    labelEmpresa.innerHTML = 'Empresa <span>*Insira no mínimo 3 caracteres</span>'
    validEmpresa = false;
} else {
    labelEmpresa.setAttribute('style', 'color:#16CF8C')
    labelEmpresa.innerHTML = 'Nome da Empresa'
    validEmpresa = true;
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

cnpj.addEventListener('keyup', ()=>{
if (cnpj.value.length <= 17) {
    labelCnpj.setAttribute('style', 'background-color:red')
    labelCnpj.innerHTML = 'CNPJ <span>*Insira no mínimo 14 caracteres</span>'
    validCnpj = false;
} else {
    labelCnpj.setAttribute('style', 'color:#16CF8C')
    labelCnpj.innerHTML = 'CNPJ'
    validCnpj = true;
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
if (validEmpresa && validEmail && validTelefone && validCnpj && validCEP && validSenha && validConfirmSenha) {

    let listaParceiros = JSON.parse(localStorage.getItem('listaParceiros') || '[]');

    listaParceiros.push({
        empresacad: empresa.value,
        emailcad: email.value,
        telefonecad: telefone.value,
        cnpjcad: cnpj.value,
        cepcad: cep.value,
        senhacad: senha.value
    })

    localStorage.setItem('listaParceiros', JSON.stringify(listaParceiros))

    window.location.href = '../pages/login-empresa.html'

    alert('Cadastro Realizado Com Sucesso!')
} else {
   alert('Preencha todos os campos corretamente!')
}
}