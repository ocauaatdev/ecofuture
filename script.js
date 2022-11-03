var button = document.querySelector('#show');
var menu = document.querySelector('#menu-inferior-txt-mobile');

button.addEventListener('click',function () {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
    }
})

