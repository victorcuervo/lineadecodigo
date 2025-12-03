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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RDO2CQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCID%2B%2BZflP4gsf43Tx633oq8EPPvuhapvWkwPg19YmH72%2BAiEAhKFbKf8c3K7XvdBkH76H6ORy2nM5UKCpDvsX8co78yEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJl1XvXmlObojfL3JyrcAwNFDbLY47rKdaQqaSMNzEDUIOKvMC3B7cAcZ7%2FuAJkMbpF9KC4glu120lmdE5xUjz5MDOPgGBL4j0Q2E%2BkT5oXCxYuSyVluOBDzIaW3JadKjKdxPjsZZfHL4W%2B%2BlzRT6r1JUx3mqSLGFovNbdbWMXtLKDg4154WZw%2BrW7p5eYagTvEJ9LM6OjMPTx2OQdEkztBdUOjqFgmxzalgF%2F1Lqnr9YkfC98nU3G41x8r9lK%2Bm7TPV6wXGkZqACdlrgLxBeW1D6lddDkpLn%2BhrYEo9Kize1aVAKrYNcztzK5aqZD91QpblmCJGgyfw2dOanJ0eDIR9OaWsvJFNQ7HrpA%2FOmOEr5hpqwYl2s7aVSCyP0EvHjqHanmyLZ%2BUpkXNeEHrrHUjkMMKdq6ZMZdwo0uT1jLTmSCBjN1ogsda%2FMQYsPxMW40Bo6FuD4J8RiLmcjM0pHHW4YZ9Z%2B8afpUcqfrReO0Je8d7rvK%2BTaO%2FGVn2Zs3Fg30szwAo%2Bz707QzHsmkS8iEpQ2qI7gpach%2FCqgH5kmcD8%2BqLhfp79ZoBEJHs7l6%2B09aTFUXaMCsoQmAT5zgl3BMNY0YEPp2GIooGwfKIERv3HQtPCl5p0fbTxrtt7oS25EZoM3yqWvWvZluIcMKe9wskGOqUBGH4eKru3C%2BvBpwgV5OuLVo31tQpCL%2BFZNChSH2cEl%2FE3pIKh3oOaImW25ndDUlgGov%2Ft0%2BviR5ZE3fvc3LN0KOoVVvYx6wp05DP0KzmtYr5Oji%2FgGNCdMe3K8LBrC7MTkaKJwk0sXNLqaBPMXSmQnjQdFHOKrSINCIa6mSPvfD7U695684r8t2QDYRjB08vaDUd%2FASD3i0ndteD%2FjQqUmQ%2BXnSOt&X-Amz-Signature=93c6747eca0359ced618d9036cbc06763a98ee6c39c9d5cb4dc27d2a027b8fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

