const botonNumeros = document.getElementsByName('data-numer');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual') [0];
const botonDelete = document.getElementsByName('data-delete')[0];
const botonEspecial= document.getElementById('especial');
const historial = document.getElementById('historial');
const seleccion = document.querySelectorAll('button');
let result = document.getElementById('result');
let opeActual = '';
let opeAnterior = '';
let operacion = undefined;


botonNumeros.forEach(function(boton){
  boton.addEventListener('click',function(){
      agregarNumero(boton.innerText);
  })
});
botonEspecial.addEventListener('click', function(){
cerrar();
});

function cerrar (){
  window.close();
};
botonOpera.forEach(function(boton){
  boton.addEventListener('click',function(){
      selectOperacion(boton.innerText)
  })
});
botonIgual.addEventListener('click', function(){
  calcular();
  actualizarDisplay();
});

botonDelete.addEventListener('click',function(){
  clear();
  actualizarDisplay();
});


function selectOperacion(op){
  if(opeActual == '') return;
  if(opeActual !== '') {
    calcular()
  }
  operacion = op.toString();
  opeAnterior = opeActual;
  opeActual = '';
};

function calcular () {
  var calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat(opeActual);
  if (isNaN(anterior) || isNaN(actual)) return;
  switch(operacion){
    case '+':
      calculo = anterior + actual;
      break;
    case '-':
      calculo = anterior - actual;
      break;
    case '*':
      calculo = anterior * actual;
      break;
    case  '/':
      calculo = anterior / actual;
      break;
    default:
      return;
  }
  opeActual = calculo;
  operacion = undefined;
  opeAnterior = '';
};

function agregarNumero(num){
  opeActual = "" + opeActual + num;
  actualizarDisplay();
  } 
  function clear() {
    
     opeActual = '';
     opeAnterior = '';
     operacion = undefined;
  };

function actualizarDisplay(){
  result.value = opeActual;
  historial.value = opeActual;
};

 for (const sel of seleccion) {
 sel.style.backgroundColor = 'red';
};
