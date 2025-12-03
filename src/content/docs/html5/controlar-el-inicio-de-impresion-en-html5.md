---
title: Controlar el Inicio de Impresión en HTML5
description: "Ejemplo de evento onbeforeprint para poder controlar el inicio de impresión en HTML5 y así modificar el contenido antes de ser impresa."
lastupdates: 2023-03-19
author: victor_cuervo
---

Cuando el usuario está en nuestra web puede darse el caso que quiera imprimir el contenido que tiene en pantalla. En este punto es bueno saber que quiere hacer eso por si tenemos que eliminar algún tipo de información o por el contrario añadir otra dentro de nuestra web. Para poder hacer eso vamos a ver lo sencillo que es el poder controlar el inicio de impresión en [HTML5](https://www.manualweb.net/html5/).


No hace falta que incorporemos ningún elemento que permita imprimir al usuario nuestra página ya que esto lo va a poder hacer mediante el menú del navegador o utilizando un atajo de teclado.


Lo que vamos a hacer es controlar el evento [`onbeforeprint`](https://www.w3api.com/HTML/body/onbeforeprint/). Este evento puede ser controlado creando un manejador en [Javascript](https://www.manualweb.net/javascript/) o directamente mediante un atributo del elemento [`body`](https://www.w3api.com/HTML/body/) de nuestra página.


De esta manera el código nos queda de la siguiente manera:


```javascript
<body onbeforeprint="preimpresion();">
```


Este evento será disparado una vez que el usuario haya seleccionado que quiere imprimir. Pero lo bueno es que nos permite modificar el [DOM de nuestra página](https://www.w3api.com/DOM/) para modificar la información.


Lo que vamos a hacer en nuestro código es modificar el contenido e insertar una frase que indique que este va a producir la impresión del documento y de igual manera vamos a incluir la fecha en la que se ha imprimido.


Así que pasamos a codificar el método de gestión de la pre impresión, pero lo primero que haremos será utilizar un método [`.getElementById()`](https://www.w3api.com/DOM/Document/getElementById/) para obtener la referencia al área de mensajes.


```javascript
<div id="mensaje"></div>

<script>
  function mensaje(texto){
      contenido = document.getElementById("mensaje");
  }
</script>
```


Ahora, al codificar el método `preimpresion()` solo tendremos que llamar al método que nos permite publicar un mensaje pasándole la cadena de texto y la fecha.


```javascript
function preimpresion(){
	let texto = "Vas a imprimir esta pagina el día "
	texto += new Intl.DateTimeFormat('es-ES',{dateStyle:'full'}).format(Date.now())
  mensaje(texto);
}
```


Vemos que n[os hemos apoyado en el objeto DateTimeFormat para dar formato a la fecha de impresión](https://lineadecodigo.com/javascript/formato-de-fechas-en-javascript/).


Con esto ya tendremos nuestro documento con la modificación y listo para poder ser impreso, gracias a poder controlar el inicio de impresión en [HTML5](https://www.manualweb.net/html5/).


¿Qué utilidad se te ocurre para este evento a parte de insertar el mensaje de impresión que hemos visto en este ejemplo? ¿Eliminar las imágenes o alguna de ellas? ¿Borrar cierta información sensible? Comparte en comentarios qué ideas tienes al respecto. Será muy enriquecedor para todos los que leen [Línea de Código](https://lineadecodigo.com/).

