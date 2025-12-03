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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MTQ5CBP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIE8klBVs19JM%2Bf8uRlx02SjuV351DowPnx6PT5fLxZvcAiBKzF3tfRc0YXgG5ZjGzmkAcRodHenGCJYQHqzmNd4I6Sr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMq4xTdawSk9AlH%2FfwKtwDW35Qn19mUE%2B8WUfe%2BeQVv5Ofvf2y02AktN0FTAjh7ER1oqSJhfN5CGrhvykTNgktu10ae7Sqfg2IfN2K%2F%2BjEGCcu586w%2BpxlFChHq%2BhSA58hBRKf0Bas2OAm69w3wMwYbwGR5fGcxJEyyzmO4NYHWTQlkIfdQkg40yllX4pn0mKDFGI0x%2F7kaMPe8aYLhLMIeaP3f28leJ%2Bbb%2BrhP9fGyyZgsbNTsKy1N2BsNy8ZOFmVHPUe59rDeqlzGRIjaPAxa9VzA8VueTSTqSeHzl6PHJTHAR8dFYUsvWsxMEdXKtOP%2Bfv0eJPl6FVvv99q3Sn7Nrxdv0hrrU3rl68XxBwmjvkhj%2B8ibw2L1T9HphOFpCnQ4Vk0pEcfw1NggpMKa%2F20ks751diuF2orfY%2FoYvCSnV%2B482ODAMMvhwuscAgGnO%2FOn6l3on0HVsd1PbA0rw%2Fai1hw%2Bqah6l5ReQ4iuFBdGxv9kw9NXWPKrKhWVIwIG1ZfWvROZZtw0977t%2F8nlhkuxi48kPhz4NVve1ncU2jS%2FijgHNQfJmpovvWuV4Id7udX38jJNjqYNShdaQy5kkN5QelrV9xgp9vWgz6uMjIziwcPn%2Bm%2FdADLs%2F%2B1DlRIWwbub9XMKegHDc0g0rQw1%2FjCyQY6pgGyK%2F85eryb%2FY5bCva1%2FDBnzTl6gRLE84RIqHxmrQL78P16UjpUyl%2FEQpkBR3lHv4X8iX3zOeLju0edJaP0xb2CoHoRj1CuNiUwp7T2ksVeIPbsXA%2B%2F7YTgj1P2PTU4%2BwRfyTd0CRcoS8c42mPj%2Bsg5E%2FO5gm%2FuFTXpM%2BAoxU7qMnkl0o%2FGmZZIU%2FGd5KCKGpLUrkELXtjt5m2D3wa7U3wKpczblZaa&X-Amz-Signature=fbd7af85dd286440462b1d23c1aef8411e6ffa39167f65ad96af22b90711d1d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

