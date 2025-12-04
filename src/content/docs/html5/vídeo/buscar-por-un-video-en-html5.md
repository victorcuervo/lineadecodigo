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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRGBKQ53%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHqQE64vQvOzaPO0Hf%2FTdZJ0PXku%2FapPXDQB3en9%2FKmCAiEAoWTHCpMjAB7tEQ2zZaicqV962yWCealCYZwb2Hn7upsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDI7w3cuEA6QekNYAEyrcA14kjCHjylgRaj2%2F1djt7e5A2cfZvweJVDu%2FW3w%2Br53JQAbZyZCKgyhcTKT%2FYRQITBs%2FdAIm6zBC2uikj3HLDE36M%2BaMr9R8kU4ICPvWMhxoeS1jGRuCya9%2FkowtUIpW8K53WDPc4uRCSOu0B9iL88XN5aCvQ5lQqGFADp4a4zOYoXgi0u4rlu3lNCKsj0YdgmUrgLc11IWXW3wo1Yf%2Fu3saifEI9OUsbVui0BMMAQGqttomNdpEMOq8V3Rb%2BKQXrdW%2B2AKcImQe4AYdkW3vkxERSUamc2aB7k43yN34JwrgJqB5Ulwc6SAvbRLjC9a%2ByFB5QdIWs3MZJP%2Fb25ZUdzmVojZsnLdeEHMGVYN6US76hT32BIPhz3tvkS3%2BSZqJzPgcKwCTUbjSjw0%2Bs9UruAzx3qQjWsEhgwY%2FmBqQV10fnMj9G0QPdiq7HZqfbrKpCqgbHOpXwt6BwyPfNmJAbcbw0tQ3052Fc9X3DAdV2H8JxAuq6aiDxQV%2BlGfYhPpy%2FMho7M1xpezJtz%2Bvup0QGLam%2B1kMwIQdH2FC8%2Fvg88%2FpQnzB%2FJr9LCL2meHHGWeVYReuBgbIuiQ%2F1UelxWtK92nihPioWohX9NO3HVqyLzhLTk4noSjwIRcHyD%2FoMOjoxMkGOqUBNRCtuKNy1xGqZgu%2BlWqMBwLxeVURCdGrGmfICERFg%2FjCXwDZA0gsfwpy6gC0dBWIB%2FQQ4Sy%2B%2BrwQndi3GXI98WODx%2BvTq7y%2ByMNDseX5iVg2sJscJM3F44sOQtW%2FLaBhfjNmL643M4SkBAvrw1kZqsjgc%2FhsOE3UHFqh4sskoZW7v98slM%2BGPCt3DRWJ7RmmxPm03Ty4W4fDtIKE8ofk88Pcq1lZ&X-Amz-Signature=e8c8d390736dc3505cb3cf1594677b95d7649e297b80a81c549a23ce8bc63ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

