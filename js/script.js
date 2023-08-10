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

function MenuWeb(){
    const openMenu = document.getElementById('img-openMenu');
    const CloseMenu = document.getElementById('img-closeMenu');
    const NavMenu = document.querySelector('.menu-open');
    
    openMenu.style.display = 'none';
    CloseMenu.style.display = 'block';
    NavMenu.style.display = 'block';
}

function MenuWebClose(){
    const CloseMenu = document.getElementById('img-closeMenu');
    const openMenu = document.getElementById('img-openMenu');
    const NavMenu = document.querySelector('.menu-open');

    CloseMenu.style.display = 'none';
    openMenu.style.display = 'block';
    NavMenu.style.display = 'none';
}
document.getElementById('img-openMenu').addEventListener('click', MenuWeb);
document.getElementById('img-closeMenu').addEventListener('click', MenuWebClose);


//Texto HOME
//Usando conceito de funções recursivas, são funções  que chamam a si mesma até encontrar uma instrução de parar

const arrayText = [
    "Sou desenvolvedor Front-End Web",
    "sou estudante de Sistemas para Internet"
  ];
  
  const writeTime = 100; // tempo  escrever e apagar.
  const changeTextTime = 1000; // tempo para ir para próxima frase no array
  
  let indexSentence = 0;
  let indexChar = 0;
  
  const element = document.querySelector("#text-content");
  
  function writeText() {
    if (indexChar <= arrayText[indexSentence].length) {
      element.textContent = arrayText[indexSentence].substring(0, indexChar);
      indexChar++;
      setTimeout(writeText, writeTime);
    } else {
      setTimeout(removeText, changeTextTime);
    }
  }
  
  function removeText() {
    if (indexChar >= 0) {
      element.textContent = arrayText[indexSentence].substring(0, indexChar);
      indexChar--;
      setTimeout(removeText, writeTime);
    } else {
      indexSentence++;
      if (indexSentence >= arrayText.length) {
        indexSentence = 0;
      }
      setTimeout(writeText, changeTextTime);
    }
  }
  
  writeText();

  //DARK MODE DO SITE

  const moon = document.querySelector('#img-moon');
  const sun = document.querySelector('#img-sun')

function darkmode(){
    moon.style.display = 'none';
    sun.style.display = 'block';

  
}

  moon.addEventListener('click',darkmode);
  
 





