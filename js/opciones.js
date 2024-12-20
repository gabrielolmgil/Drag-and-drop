
const caja = document.querySelectorAll('.dragable');
const contenedor = document.querySelector('.img_selector');
var dragableID;
let character = "";

caja.forEach(element =>
  element.addEventListener('dragstart', function (event) {
    dragableID = event.target;
    id_img = event.target.getAttribute('id');
    console.log(dragableID);
    console.log(id_img);
  }))




//Acción para cuando se sale de un elemento, con otro elemento, con el mouse
contenedor.addEventListener('dragleave', function () {
  document.getElementById('char-name').innerHTML = "";
  document.getElementById('char-description').innerHTML = "";
});

//Acción para cuando se está un elemento, con otro elemento, con el mouse
contenedor.addEventListener('dragover', function (event) {
  event.preventDefault(); //DESACTIVAMOS ESTE COMPORTAMIENTO PARA EL NAVEGADOR
  document.getElementById('char-info').style.display = 'block';
});


//Acción para cuando se ha soltado un elemento
contenedor.addEventListener('drop', function (event) {

  //contenedor.appendChild(caja);
  event.target.appendChild(dragableID);
});


//Acción para cuando se ha soltado un elemento

document.addEventListener('drop', function (event) {
  //contenedor.appendChild(caja);
  event.target.appendChild(dragableID);
});


//Acción para cuando se está un elemento, con otro elemento, con el mouse
document.addEventListener('dragover', function (event) {
  event.preventDefault(); //DESACTIVAMOS ESTE COMPORTAMIENTO PARA EL NAVEGADOR

});