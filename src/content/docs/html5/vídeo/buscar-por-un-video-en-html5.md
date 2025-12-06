---
title: Buscar por un vídeo en HTML5
description: "Cómo utilizar el evento onseeking para poder controlar el buscar por un vídeo en HTML5 y volcar el segundo al que se ha desplazado el usuario."
lastUpdated: 2024-01-30
slug: /html5/buscar-por-un-video-en-html5/
author: victor_cuervo
---

Seguimos con artículos que nos explican cómo podemos mejorar la experiencia cuando estemos cargando [vídeos en HTML5](https://lineadecodigo.com/tag/html5-video/) dentro de nuestras páginas web. En este caso vamos a ver cómo podemos buscar por un vídeo en [HTML5](https://www.manualweb.net/html5/). Es decir, cómo podemos controlar que el usuario está buscando algo dentro del contenido del vídeo y, por consiguiente, tomar acciones al respecto.


### Motivos para controlar el buscar por un vídeo en HTML5


La pregunta que se nos puede venir a la cabeza cuando analizamos este código es, ¿realmente es necesario que implementemos un código para saber controlar el buscar por un vídeo en [HTML5](https://www.manualweb.net/html5/)? La respuesta es que puede ser conveniente por varios motivos:

- El primero es saber que el usuario **está buscando o desplazándose por el vídeo**. Esto ya nos da pistas del comportamiento y es ideal para ver la analítica del vídeo. A ¿dónde va? ¿Cuánto tiempo pasa en cada parte?
- La segunda es porque si tenemos un vídeo en HTML5 que estemos controlando de forma externa. **Mediante botones de reproducción, pausa y otros, nos permitirá el poder bloquearlos o ajustarlos** para que no se produzca un escenario de no control en la carga del vídeo.
- El tercer motivo sería para **poder controlar la carga de la nueva sección del vídeo**, es decir, que cuando se mueve con la barra se producirá una nueva solicitud de datos en la que puede existir [cargas inestables de vídeos en HTML5](https://lineadecodigo.com/html5/cargas-inestables-de-videos-en-html5/) y por lo tanto queramos ponerle un mensaje o algún logo de cargando al usuario.
- Y la última, y no menos importante es la de poder **indicar al usuario cuando se haya movido a la nueva sección la información que va a ver**, si es que tenemos información contextual del vídeo que mostrar al usuario.

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZKWT6RX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWUJ4KbhB1ihEY%2BMByu4MxVGqf0%2BKR%2B%2FuQ%2Fkq%2FzCldjwIgT7aptPys%2FLXLfpC0igk7%2FkwhCkF2ZHgihNgRcG1tk24q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOC%2BV5ouLx8H5wIxaCrcA0rgkvwEIchJZNuSyrSQjC9%2Fy%2Bq%2Fa3x0Oipd%2BBqLElJfd%2BOCyHroMR9K2h7a5Cgkx8CTEbZRCMt3EdUBLanT4qBSyzgnlctjaIyM1RlvcCjrTYX02zt1%2FQVhX4QVH7HtAYhEWiLvtCZdHQJpCIl1xLVSRG0%2FYjT4X5P0X%2BeIt%2BTjFRFGPC3sU%2F2ePXzhLlcOkcdaeotaQ%2Fge63F9MR7MghCXM2E9CBdmvWui3qy5S%2BjgPOAi5m3hziIPDTFB8j8mcfquxQqznrKZ88nG24rF8Bxr4wbpdL%2B99PBnpu5v7T4NlMzmmuaOpMqJLPlK3s88zwHoQLsNs4nQhKI2iS5sdsaiJaiTSCUCehW2lWHKyMLjidKNCmiU%2BYO1xKuOUo58A7GfR5zPZe54ZqtKYwUJvcXCG%2Bttf%2B2KRx9yCuNmzaR9U8jxA3MKWAGPTEFwDtlO%2BCneON%2BAtwppQA6BbiU4MVzWCC9vsg9KLbDo3PbP0PEeiTTYb2BOqeo%2Bt%2FrpJsP1tUY1q0XP%2FmWmZvG1HRUYUe9kCl6I40GBcfiUJF2QzVkjv4XpbwUfPS%2BMiFFsTFH4XIPWfEYa0ZSCk%2Fqs8C7y%2F6m%2BPLGq79%2BcnfCwswo%2FW6%2BeFUAiTbYsA%2BTSG56aMOT8zskGOqUBPc22jHzDDcZkO7%2FrBNxmB%2FAv%2B%2BwgdH0mwIHRjFVf0D3Ez7afzUh07zdltmKNqICpm4QNOkAJA1cGT1GkmRfzj1QPVulxYNM4YB%2FJMmAys1moIDX36U7LueAKphgAuLa3sFTYqsC6CpjQ%2BvWT0asHf%2Bm1bgsvhD%2FBrrN4K2LC83ogw1j4ddahw9edFvQguRqw9NrYUuyS6JDTLgFWFL%2B3%2Bbl5K6w%2F&X-Amz-Signature=a88f78228a9424cd9e5a16e8eec363ac7d95dba02d943da6226ea63e80524ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

