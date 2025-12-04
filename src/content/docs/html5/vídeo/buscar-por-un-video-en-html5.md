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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VMTWBHF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEPuCDGXeMgOVsMiEGlhz1m0LFFiTOOMX26LORVSJH6NAiBCDJC8aLQltWTHfmd0D5g%2FrU3RnSd0sSLuRBiJHtS2Syr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM%2FYzlODdKd4Spu4mSKtwDAGLBwLCY3dUHl4DnB4imgsUYjj30BJqE8QQJBY%2FMpaadZxrBKfcNXMe90ZxNaVxfWfEW31kxcjs3KJ1kpBgAY8mFAiRb0i1QotBTSFSiE2t%2FGD%2FkepctGHHEoM9aqplSUNWRqtwuWg08rxrVS8Ub%2FRNcBBgttbYeztcI%2BChTR71I%2Bo0a9jcx9%2FI%2FLTALEhU3FvtI%2B7QC7VzSxTHUFMJoLkLhb2MynvFWqymlxIAqDg%2B4RNrq%2Bsut%2BK3V8DhAS%2BGuMke8ppo6kYgPgPILB8YTMKwkiFuYRE%2BTSiM8ffYV6C1RlSZ5l5mzmHm5BIxIBFc1BcjElJUef2eXhCepU754NAP4NkgSAQpqbWAk2LjAmP%2FZKHr%2FLSvrxqiXKeR1kiTRnu2FMlkb%2BGcDWpj9cvb%2BBy9wn6W%2FO7kHCt%2BsewMyg%2BZy0%2FwqwBZ7rAnJn3Dc%2BaEd%2Fv%2BgsuN7%2FzmaN0UTS3m2ovD9sDjQWLGce8GLHw39aFT%2B2iwyeKInbFyMg2iPhoSmcCyi9LapPnswf8wzwxJhhqvcZhfSN8IutREHQyfhI%2FoP%2FX3jsLs6lrgbT7vsj5udwKVGxC4%2FiDs4mlZwAFhmWnBeBQsL21ySm7GW5920RN7d4slshoEpubm2958w7oTFyQY6pgHJxWxXOHvAWJy%2BWBQ7uJBnDpxu%2Bl6ohGUtm%2Fqz3pRohVRxz6vvNWj0dlpHnMJZ7GTJqPm%2BmU3xNz3dwfIH4K%2FJ3S5y1VP3CW6AqdnI25cNrwlX%2Fm%2BkCYr%2BT7VCmnW5L3okFkVvliBcde7VR95ho7kobIDxnQB79NxLn4AkqimpHLmBvbm2b0mKkH7U1lNZbrrnyZree7qJi5w6iAN6nhohrf4yn3nx&X-Amz-Signature=b33055f4fa30c3f35bbf6629bf0ec617d6ff481d2fa24ea3c393f333ac644db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

