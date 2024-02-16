/* Encriptador */

document.addEventListener("DOMContentLoaded", function () {
  const background = document.querySelector('.background');
  const entrarBtn = document.getElementById('entrarBtn');
  const paginaPrincipal = document.querySelector('.pagina-principal');

  entrarBtn.addEventListener('click', function() {
    gsap.to(background, { opacity: 0, duration: 2, onComplete: showMainPage });
  });

  function showMainPage() {
    background.style.display = 'none';
    paginaPrincipal.style.display = 'block';
  }
});

function encriptar(texto) {
    var resultado = '';
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charAt(i);
        switch (caracter) {
            case 'a':
                resultado += 'ai';
                break;
            case 'e':
                resultado += 'enter';
                break;
            case 'i':
                resultado += 'imes';
                break;
            case 'o':
                resultado += 'ober';
                break;
            case 'u':
                resultado += 'ufat';
                break;
            default:
                resultado += caracter;
        }
    }
    return resultado;
}

function desencriptar(texto) {
  var resultado = texto;
  resultado = resultado.replace(/ai/g, 'a');
  resultado = resultado.replace(/enter/g, 'e');
  resultado = resultado.replace(/imes/g, 'i');
  resultado = resultado.replace(/ober/g, 'o');
  resultado = resultado.replace(/ufat/g, 'u');
  return resultado;
}

document.getElementById('encriptar').addEventListener('click', function() {
  var input = document.getElementById('input').value;
  if(input === '') {
    alertify.error('Debes introducir un texto'); 
    return;
  }
    if (/[^a-z\s.,;:'"!?]/.test(input)) {
    alertify.error('Por favor, ingresa solo letras minúsculas.');
  } else {
    var output = encriptar(input);
     document.getElementById('output').value = ''; 
   document.getElementById('output').value = output;
   document.getElementById('input').value = ''; 
    alertify.success('¡Se ha encriptado con éxito!');
  }
});


document.getElementById('desencriptar').addEventListener('click', function() {
  var input = document.getElementById('input').value;
  if(input === '') {
    alertify.error('Debes introducir un texto'); 
    return;
  }
  if (/[^a-z\s.,;:'"!?]/.test(input)) {
    alertify.error('Por favor, ingresa solo letras minúsculas.');
  } else {
    var output = desencriptar(input);
    document.getElementById('output').value = ''; 
    document.getElementById('output').value = output;
    document.getElementById('input').value = ''; 
     alertify.success('¡Se ha desencriptado con éxito!');
  }
});

document.getElementById('copiarBtn').addEventListener('click', function() {
  
  var output = document.getElementById('output');
  
  if(output.value.trim().length === 0) {
    return; 
  }

  output.select();
  document.execCommand('copy');
  
  alertify.success('¡Texto copiado al portapapeles!')
});

/* Animación de pre-inicio*/

var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

var fontSize = window.innerWidth / 30;
    columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {

  fontSize = window.innerWidth / 30;
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  draw();
  
}

function draw() {

  ctx.fillStyle = 'rgba(0.0196, 0.1255, 0.3176, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#609ED4';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

setInterval(draw, 33);



