---
title: Buscar por un vídeo en HTML5
description: "Cómo utilizar el evento onseeking para poder controlar el buscar por un vídeo en HTML5 y volcar el segundo al que se ha desplazado el usuario."
lastUpdated: 2024-01-30
author: victor_cuervo
---

Seguimos con artículos que nos explican cómo podemos mejorar la experiencia cuando estemos cargando [vídeos en HTML5](https://lineadecodigo.com/tag/html5-video/) dentro de nuestras páginas web. En este caso vamos a ver cómo podemos buscar por un vídeo en [HTML5](https://www.manualweb.net/html5/). Es decir, cómo podemos controlar que el usuario está buscando algo dentro del contenido del vídeo y, por consiguiente, tomar acciones al respecto.


### Motivos para controlar el buscar por un vídeo en HTML5


La pregunta que se nos puede venir a la cabeza cuando analizamos este código es, ¿realmente es necesario que implementemos un código para saber controlar el buscar por un vídeo en [HTML5](https://www.manualweb.net/html5/)? La respuesta es que puede ser conveniente por varios motivos:

- El primero es saber que el usuario **está buscando o desplazándose por el vídeo**. Esto ya nos da pistas del comportamiento y es ideal para ver la analítica del vídeo. A ¿dónde va? ¿Cuánto tiempo pasa en cada parte?
- La segunda es porque si tenemos un vídeo en HTML5 que estemos controlando de forma externa. **Mediante botones de reproducción, pausa y otros, nos permitirá el poder bloquearlos o ajustarlos** para que no se produzca un escenario de no control en la carga del vídeo.
- El tercer motivo sería para **poder controlar la carga de la nueva sección del vídeo**, es decir, que cuando se mueve con la barra se producirá una nueva solicitud de datos en la que puede existir [cargas inestables de vídeos en HTML5](https://lineadecodigo.com/html5/cargas-inestables-de-videos-en-html5/) y por lo tanto queramos ponerle un mensaje o algún logo de cargando al usuario.
- Y la última, y no menos importante es la de poder **indicar al usuario cuando se haya movido a la nueva sección la información que va a ver**, si es que tenemos información contextual del vídeo que mostrar al usuario.

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFI3ZOF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCsuPEbeSLPzgjAEtg3C79IhkFVZoHvpYG1TtNW2GOxKQIgD8JeRASgec%2Bm62zX5bkkq%2BtiTEASi5QLXxwxHNdQQ98q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDD09EqWCUbA7xodNkSrcA6eJgbbxSHX2gMwI4qbWwk%2Ffb2DRaIM5dko88bj0uo%2BKRUVcYRBdQCxjnZg%2B6jT%2Bi2o4GdMxYO4BtNNAbNHODFbwM9isAseGsEzgiJ9B%2Fy7xEGiLzLZ%2Bb2WmShhm6x%2B8FIv2BjmJvwgktuZxOtGXAFPr5xmzSz4rjgp1Od9HKUAiBm%2FSYFLBbuk9Jje1kuSchrZRKS07CvL2mBzEfNTkSlCBYeIcvOhcP6Q90edSsGvUB%2F%2BY7N0DjafCG%2FlselK%2BYdBl0ogGbFPo%2BbSrro73kH0tfCrB%2BbhFwG1%2FUvPzgHBVNIRaxkoFbj7%2FD7TVcT0d3LJZGGHnepFXux6zbVAmNapW%2BeMdI7r4m1XxKJkzaDIIqOFEYU5JOZ1l%2FJKNeOwlqzK%2BwbvALbb1uy1BVtmtyUJxhW0VvYaobvBJuC2ems0P98mIPy%2B%2Fo%2FOuNGRu9Y5BgGXB8OR3r3674%2BTl2%2Bb3IwqJFubJz05QpADlHivTrLaZumZ9Cbnd6VhDnAfawPdhGUKaax%2B8C6hxIFsdMEMLwrKjiS0KO4fTaexeuUfnM%2FwKHCUQSfcU5AE54Bc2Kt3pNeA1I3%2FaxM67QsuSb1wnkXZLpDRAZZRf9pz3rLTv7GG%2FiG45OwsYVcSJGtnSMNeUw8kGOqUBuFpjrmeVjXs4CNnt38JoeE1c3tqb0cELX8aiQ%2B6HTtNWErKHpgXIJRE7HF%2F1%2BiS1URRPn9UBFVKj9PfwSSx0BLvETfcJk4Iph%2BUJezz5NWIUx17gFl3j6BAUE0jkDbSSeA1bkxxe3lCGUHQ6Mx1w4HkndN8AkwnauOuaH%2BtOx0RwtWUdd6hyBuPt0QAt9WlThqqHScXiPgFiGKzrS6wtmtpJn3Yd&X-Amz-Signature=74f3d17da19fe46e45326e777fa4916519cb88a7057fd70af15effafa4e2338a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

