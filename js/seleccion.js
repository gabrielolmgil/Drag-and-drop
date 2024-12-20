
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
  document.getElementById('char-info').style.display = 'none';
});

//Acción para cuando se está un elemento, con otro elemento, con el mouse
contenedor.addEventListener('dragover', function (event) {
  event.preventDefault(); //DESACTIVAMOS ESTE COMPORTAMIENTO PARA EL NAVEGADOR
  document.getElementById('char-info').style.display = 'block';
  if (id_img == "personaje1") {
    document.getElementById('char-name').innerHTML = "Alex";
    document.getElementById('char-description').innerHTML = "Alex es una chica alegre y espontánea, conocida por ser el motor positivo del grupo. Siempre tiene una actitud optimista y un sentido del humor que hace que cualquiera se sienta más relajado a su alrededor. Aunque le encanta divertirse y suele proponer ideas un poco alocadas, su energía no resulta abrumadora, sino contagiosa en el mejor sentido. Alex es de esas personas que saben cómo encontrar la parte buena de cualquier situación y que disfrutan de las cosas simples de la vida. Además de su carácter despreocupado, Alex también es una amiga incondicional. Si bien suele estar en modo diversión, siempre está ahí para apoyar a los demás cuando lo necesitan.";
    localStorage.setItem('nombre', 'Alex');
  } else if (id_img == "personaje2") {
    document.getElementById('char-name').innerHTML = "Luxar";
    document.getElementById('char-description').innerHTML = "Luxar es el zen del grupo, una persona calmada, confiable y responsable que siempre transmite tranquilidad a quienes lo rodean. Su actitud serena lo convierte en el mediador perfecto cuando surgen desacuerdos o tensiones, y su enfoque racional lo hace destacar como alguien en quien siempre se puede confiar. Sin embargo, Luxar tiene un lado sorprendentemente espontáneo: no importa cuán absurda o alocada sea la idea de sus amigos, él siempre está dispuesto a unirse, simplemente porque valora la conexión y las experiencias compartidas. Luxar no es el que propone las locuras, pero siempre está listo para seguirlas con una sonrisa, aportando un equilibrio que asegura que todo sea divertido sin llegar al desastre.";
    localStorage.setItem('nombre', 'Luxar');
  } else if (id_img == "personaje3") {
    document.getElementById('char-name').innerHTML = "Illa";
    document.getElementById('char-description').innerHTML = "Illa es una persona abierta y directa, que no tiene miedo de decir lo que piensa. Su risa es genuina y contagiosa, y suele alegrar el ambiente con su buen humor. Aunque no es necesariamente el centro de atención, su forma natural de expresarse y su facilidad para hacer comentarios acertados lo convierten en una compañía agradable y confiable. Es alguien que disfruta de las conversaciones sinceras y que no tiene problemas para hablar de cualquier tema, aportando siempre su perspectiva honesta pero respetuosa.";
    localStorage.setItem('nombre', 'Illa');
  } else if (id_img == "personaje4") {
    document.getElementById('char-name').innerHTML = "Kita";
    document.getElementById('char-description').innerHTML = "Kita es el espíritu libre del grupo, a pesar de ser el más adulto en términos de edad o experiencia. Su personalidad es vibrante y siempre está en busca de diversión, lo que lo convierte en el motor de muchas de las ideas más locas del grupo. Sin embargo, detrás de su actitud despreocupada se esconde una capacidad innata para asumir la responsabilidad cuando la situación lo exige. En momentos críticos, Kita sorprende a todos al transformarse en alguien maduro, confiable y capaz de tomar decisiones rápidas y acertadas. Kita es el tipo de persona que puede estar organizando una fiesta improvisada un día y, al siguiente, ser el único que logra calmar una crisis o resolver un problema complicado. Sus amigos lo ven como un pilar, incluso si a veces parece que es él quien necesita ser contenido.";
    localStorage.setItem('nombre', 'Kita');
  } else if (id_img == "personaje5") {
    document.getElementById('char-name').innerHTML = "Pull";
    document.getElementById('char-description').innerHTML = "Pull es un joven maduro y sensato, conocido por su capacidad para mantenerse sereno incluso en situaciones complicadas. Es el tipo de persona a quien todos recurren cuando necesitan un buen consejo o una solución práctica. Su responsabilidad y enfoque lo hacen destacar, pero también tiene un lado más relajado que emerge cuando está rodeado de amigos con personalidades más impulsivas o despreocupadas. En esos momentos, aunque intenta mantenerse firme, no puede evitar dejarse llevar y sumarse a sus ocurrencias, lo que a menudo da lugar a anécdotas divertidas y memorables. A pesar de su tendencia a ceder de vez en cuando, Pull nunca pierde su esencia. Tiene un talento natural para encontrar el equilibrio entre seguir la corriente y asegurarse de que las cosas no se salgan completamente de control.";
    localStorage.setItem('nombre', 'Pull');
  }else if (id_img == "personaje6") {
    character = "personaje6";
    document.getElementById('char-name').innerHTML = "Bebu";
    document.getElementById('char-description').innerHTML = "Bebu es una persona reservada, de pocas palabras, que prefiere observar antes de actuar. Tiende a mantenerse al margen en reuniones sociales grandes, pero es profundamente reflexiva y siempre tiene un comentario agudo o una solución creativa cuando se necesita. En su círculo cercano, sin embargo, Bebu muestra una faceta más relajada y confiada, aunque prefiere dejar que sus amigos que suelen ser mucho más extrovertidos y algo alocados se lleven el protagonismo. Bebu disfruta la tranquilidad y es experta en escuchar, lo que la convierte en el confidente perfecto para su pandilla de amigos impredecibles. Aunque no comparte su nivel de energía caótica, los aprecia profundamente y, en secreto, disfruta de sus ocurrencias.";
    localStorage.setItem('nombre', 'Bebu');
  }
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