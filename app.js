let promedios = [];

let valorCampo = document.getElementById('valor_promedio');
let ingresar = document.getElementById('ingresar');
let texto_promedio = document.getElementById('texto-promedio');
let promedio = document.getElementById("promedio");
let reset = document.getElementById('reset');

valorCampo.focus();
promedio.disabled=true;

promedio.addEventListener('click', calcularPromedio)
ingresar.addEventListener('click', ingresarPromedio);
reset.addEventListener('click', comenzarDeNuevo);

function ingresarPromedio () {
  valorCampo.focus();
  if(valorCampo.value != ""){
    promedios.push(parseInt(valorCampo.value));
  }
  if (promedios.length === 5) {
    promedio.disabled = false;
    valorCampo.disabled = true;
    ingresar.disabled = true;
  }
  valorCampo.value = "";
  console.log(promedios);
}

function calcularPromedio () {
  let resultado = 0;
  for(let i = 0; i < promedios.length; i++){
    resultado += promedios[i];
  }

  resultado = (resultado / promedios.length).toFixed(2);

  texto_promedio.innerHTML = resultado
  valorCampo.value = "";
  valorCampo.focus();
}

function comenzarDeNuevo () {
  texto_promedio.innerHTML= "0";
  promedios = [];
  valorCampo.value = "";
  valorCampo.disabled = false;
  ingresar.disabled = false;
  promedio.disabled=true;
  valorCampo.focus();
}






