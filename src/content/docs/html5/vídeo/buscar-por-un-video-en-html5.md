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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TXL3IRL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFVUfcHvi5LyNGm3j2u6kJtS308ZULIhm4YqCKODNnUzAiEAyhWky5inzN%2BURyoNaffA0zi4VY3cY2adyaBC5444vXkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDN1qPGRtlxZwiXakpircA%2BIAjdyyRYflE5vTj%2Bp99CssziaFtitTNPn7RKBEpI3fJqm3%2FyYjV1BFVbBQnuCQsA%2Bzg7Ip%2FCavJCwbqqcjYV0nDyN0Rlbpc92x%2FteYUIkzWmvEii13UKj5aLsMv2yX4KH5L%2FxNV5k545yrEGJ00SaDZxcbeuOTcin0AN6Ru%2B68CMbOVp96hB4EKa8YNlo8cu5Kp%2FPzGMBLyVLT1NWyDk0LaPK0CdkGHOSpvt1dwpLHOcCza8Z8nROCuUz%2FNTY8NoAL7tTTj5ondEFYMJ3nN0Z03VR%2B6pd3F1g4h5DynVJ1m35prO05PBicIYnE02ADsgz6Dw%2FVzYpgsLwhAOZe4ouGsmEbP5sjSvkOiFXhhEN3w%2B6c9Z3%2FmzdlGuRn7Q93cYCe%2Bey3uGR2wv3VXazwGoJCJb%2Brl%2B5WlCdZ4qOxSBgDzTW8NPYy4BlZyNOK9HaXAR5B3NC5yY91UlA1M1cam9KnD56D9NDgfvVhBA4lh2BLnzs2%2Bo%2FL1MioB0RSjmdCeNkwSSHAnn61XJ9QoUMMJM9Xcd7OXZTIyVNDKun%2FS252x%2Bs2gc4rMVO9D4%2FtmpRzwUYJGfcuPRhVPeNRwyuXFzq%2Fijc%2Btpvzr%2B94TiyfAFYaJfg5JoqFNQjwoxsgMLiuxMkGOqUB0R%2FXXyEcTCFKWR3waF7lQkJh%2BGsdDMAdt%2BQ6zL2QZMtkoEOmONoqLA2tq%2BgsaY9QvZa2TERjDxyFynHmOtNZKSa6HRYViFDOw7jnjC0150AHtKps6GaAjzbVuaeLyPxX2TAdUQ78oueX4IaZz67Jlje5B9edpr%2Bek944iy7WKcHiRR%2BfxnaWSzuRj%2FPrqqRszBlfnXYcexoZ20AOEPtFwUQfhOR1&X-Amz-Signature=ca23c08ce86d253278f010f1aaa5f9909bfbf09680b6d9570e91056ff550fd89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

