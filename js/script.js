// Criando um cursor personalizado baseado no movimento da página

const NewCursor = document.getElementById('cursor'); // usando o DOM pra pegar o elemento html e atribuir a uma variavel

function attCursor(position) { // criando uma função com uma variavel position que será o parametro, e nessa função vai trazer a posição do cursor
    NewCursor.style.top = `${position.clientY}px `; // aqui pega a posição da vertical, clientY é um evento de mouseMove
    NewCursor.style.left = `${position.clientX}px `; //aqui pega a posição horizontal, clientY é um evento de mouseMove
}

window.addEventListener('mousemove', function (position)  { // aqui eu adiciono um evento de movimento de mouse na janela (NAVEGADOR) e passo o evento pelo parametro
     attCursor (position); //dentro do método addEventListener eu chamo a função, ou seja sempre que esse evento acontecer vai ser chamado a função para construir a posição do mouse
});


//Menu 

function abrirMenu(){
    const openMenu = document.getElementById('img-openMenu');
    const CloseMenu = document.getElementById('img-closeMenu');
    const NavMenu = document.querySelector('.menu-open');
    
    openMenu.style.display = 'none';
    CloseMenu.style.display = 'block';
    NavMenu.style.display = 'block';
}

function fecharMenu(){
    const CloseMenu = document.getElementById('img-closeMenu');
    const openMenu = document.getElementById('img-openMenu');
    const NavMenu = document.querySelector('.menu-open');

    CloseMenu.style.display = 'none';
    openMenu.style.display = 'block';
    NavMenu.style.display = 'none';
}

document.getElementById('img-closeMenu').addEventListener('click', fecharMenu);



