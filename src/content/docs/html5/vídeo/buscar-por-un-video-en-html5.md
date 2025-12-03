---
title: Buscar por un vídeo en HTML5
description: "Cómo utilizar el evento onseeking para poder controlar el buscar por un vídeo en HTML5 y volcar el segundo al que se ha desplazado el usuario."
lastupdates: 2024-01-30
author: victor_cuervo
---

Seguimos con artículos que nos explican cómo podemos mejorar la experiencia cuando estemos cargando [vídeos en HTML5](https://lineadecodigo.com/tag/html5-video/) dentro de nuestras páginas web. En este caso vamos a ver cómo podemos buscar por un vídeo en [HTML5](https://www.manualweb.net/html5/). Es decir, cómo podemos controlar que el usuario está buscando algo dentro del contenido del vídeo y, por consiguiente, tomar acciones al respecto.


### Motivos para controlar el buscar por un vídeo en HTML5


La pregunta que se nos puede venir a la cabeza cuando analizamos este código es, ¿realmente es necesario que implementemos un código para saber controlar el buscar por un vídeo en [HTML5](https://www.manualweb.net/html5/)? La respuesta es que puede ser conveniente por varios motivos:

- El primero es saber que el usuario **está buscando o desplazándose por el vídeo**. Esto ya nos da pistas del comportamiento y es ideal para ver la analítica del vídeo. A ¿dónde va? ¿Cuánto tiempo pasa en cada parte?
- La segunda es porque si tenemos un vídeo en HTML5 que estemos controlando de forma externa. **Mediante botones de reproducción, pausa y otros, nos permitirá el poder bloquearlos o ajustarlos** para que no se produzca un escenario de no control en la carga del vídeo.
- El tercer motivo sería para **poder controlar la carga de la nueva sección del vídeo**, es decir, que cuando se mueve con la barra se producirá una nueva solicitud de datos en la que puede existir [cargas inestables de vídeos en HTML5](https://lineadecodigo.com/html5/cargas-inestables-de-videos-en-html5/) y por lo tanto queramos ponerle un mensaje o algún logo de cargando al usuario.
- Y la última, y no menos importante es la de poder **indicar al usuario cuando se haya movido a la nueva sección la información que va a ver**, si es que tenemos información contextual del vídeo que mostrar al usuario.

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHF2DQD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCmOypVwaXhgPY9M1VmLgvDwk%2BsiUba38OEA%2FSVExW0cgIhAIdgGEbgAP%2BQBa0r3v6pPW3kXZOTlQTdkpShEahxRCW8Kv8DCDYQABoMNjM3NDIzMTgzODA1Igx7h2nZIg0daV%2B%2F21Iq3ANm1ZePHPjW52FUA1HC%2FBT19xDNJfNUX70sX6k8CgvC0aYgBVNyHQB2rlD7RFjWWqShewPOJc05HHCLKhnG7p3eT6MR4jsrtTDvKmd9Eg%2FCLkxcJ0G7GdegWSyqp8HvlUaFTz0Hcd8ipfRpKnldAdhMwPdaiddEykl5e5sSo5L5NikhyZZuFV5PKD%2BLa%2B55cpXT1CbHd1SbXRQbnbFLGKRwr%2Fn3ryLYZXiwGsj1SnMoTWXrPwG%2BYVElG%2BWZD5hlPq9SqKqkBanoz7b8Qa4WyT8%2BBsOtNlr8%2F%2Bi0Vsh8Uklx%2FvV9JAfDHTvWIaip%2BS8WIfJmufRhFFPG1o2oNKwGSI8V882mB4SK8mtEjapUxc8wd1oO1C6jYRk064i1fkA4uZewUEAPh3d2y6Die%2B0em27bKWm2e3RJIy5Os%2BVedQ%2FzsvR9WGvm%2B9448QSNafCVw%2B60pKHFLC7B0tGD5SN%2Fc7aleFgNE25ecGCqe2PSivhFIJMwOBm%2B%2Fz0DuowX7vXAHjV58Rta8ZeuktrEILLnelLoGFuyUWYh930Iw%2F1dQPnH7QGaTF9XG7lysEwjZ5kx5vqegPz6A9rNdtW8Pa1iE5Ontd5EXdUmhHdMeB9OJLk32Ut%2BYyvYEsDCWwFmBTCyvsLJBjqkASC%2B%2Ft6ILNEmaW7TMynE7UXjhwpl3pcOymZGy4B6%2FWqQVOkuA9ob4Z7A2D2jyrCcFgzisY0CtXrUEPq9T1pbPjSqyiL6ZDBdT2PLKDltx3xgvM8yn2FzCRtPp7s5sJKzKM8T%2BnEBnpy07cIrDKjH%2Fj0bvlOLKpBVq3UTAvfjanBR3J4Zw27iuP66nbnDOUwrD9y6lMaZxhIwHEFA7Ubpkk0OXvrv&X-Amz-Signature=74e8e37332cc14282f07566c07f4102e5e73573fd3bd214c99712e2904e7186c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Cargar el vídeo HTML5


Ahora que ya hemos visto las ventajas de por qué es interesante controlar el poder buscar por un vídeo en [HTML5](https://www.manualweb.net/html5/) vamos a poner nuestro vídeo dentro de la página.


El primer paso consiste en la carga del vídeo en [HTML5](https://www.manualweb.net/html5/), lo cual se implementa mediante los elementos [`video`](https://w3api.com/HTML/video/) y [`source`](https://w3api.com/HTML/source/).


```html
<video id="mivideo" controls>  
  <source src="<http://easyhtml5video.com/images/happyfit2.ogv>" type="video/ogg"></source>
  Tu navegador no soporta el elemento <code>video</code>.  
</video> 
<div id="info"></div>
```


Es necesario especificar un identificador único para el elemento [`video`](https://w3api.com/HTML/video/) mediante el atributo [`id`](https://w3api.com/HTML/id/), dado que este será utilizado posteriormente para referenciar el vídeo en el [código Javascript](https://lineadecodigo.com/categoria/javascript/).


En cuanto al elemento [`source`](https://w3api.com/HTML/source/), este requiere la especificación de la ubicación del recurso multimedia y su formato mediante el atributo [`type`](https://www.w3api.com/HTML/source/type/). En esta implementación se utiliza un vídeo en formato OGV, un formato de código abierto, especificado mediante el valor `"video/ogg"`.


Además hemos añadido en nuestro [código en HTML](https://lineadecodigo.com/categoria/html/) un elemento [`div`](https://www.w3api.com/HTML/div/) que es una capa sobre la que volcaremos el contenido de las acciones de búsqueda sobre el vídeo.


### Evento onseeking para buscar por un vídeo en HTML5


Ahora pasamos a controlar el evento [`onseeking`](https://w3api.com/HTML/onseeking/) que es el que nos va a permitir controlar el poder buscar por un vídeo en [HTML5](https://www.manualweb.net/html5/). Para ello lo que haremos será conseguir una referencia al vídeo mediante la función [`getElementById()`](https://w3api.com/DOM/Document/getElementById/) y registrar el evento.


A la hora de registrar el evento [`onseeking`](https://w3api.com/HTML/onseeking/) le asignaremos una función en la que vamos a codificar la acción a ejecutar cuando se produzca la búsqueda.


```javascript
let mivideo = document.getElementById("mivideo");

mivideo.onseeking = function() { ... };
```


En concreto lo que vamos a hacer cuando se dispare el evento [`onseeking`](https://w3api.com/HTML/onseeking/) será el capturar el minuto de reproducción del vídeo al que nos ha movido la búsqueda y lo vamos a mostrar en pantalla.


```javascript
let mivideo = document.getElementById("mivideo");
let info = document.getElementById("info");

mivideo.onseeking = function() {
  let time = mivideo.currentTime;
  info.innerHTML = info.innerHTML + "Buscando en el segundo " + time + "<br>";    
};
```


Vemos que el vídeo tiene una propiedad [`currentTime`](https://www.w3api.com/HTMLDOM/HTMLMediaElement/currentTime/) que es la que almacena el tiempo exacto en el que se está reproduciendo el vídeo. Esta propiedad está definida dentro de un [`HTMLMediaElement`](https://www.w3api.com/HTMLDOM/HTMLMediaElement/). Por lo cual es ideal para mostrarlo en pantalla, indicando al usuario el segundo al que se ha desplazado.


Con esto ya tendremos nuestro código para saber controlar el buscar por un vídeo en [HTML5](https://www.manualweb.net/html5/). ¿Se te ocurre alguna otra oportunidad para el manejo del evento [`onseeking`](https://w3api.com/HTML/onseeking/)?

