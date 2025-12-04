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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG6RFFLE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICC54IkfDqBtFV242%2B5EpN0o7vx64XXS3a%2Be%2FP8eYm%2FRAiEA%2Fj60UTqce7Yawo7P3uXKwiwGmh279fXtl6vQBzI7ihEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFONAB1o0z13P6%2BXeyrcA54eopn0Icundj%2F0%2FvWpv0aO1z78a7U2zKRojTHDTtAeXoda5AG9dL4%2FmoORqaFTVK3Ed4iUQupf91gu%2F096VjMlg2thU8GwazYB%2BXNd7eJcQ%2F3BuYN1rq5Ai9N3dmzJnsd13XjxXtY1W5yX8HRq2pStOob2eJ73SOlFg1qCc%2FwP%2F7VOoXzC9xp184kfBOyazjc22j6DTEUDNC9fwdYxxaEgbFdbZu3qWWxDifez1uCDERdCfn9Zhhv5UxftHPnvzagBBVrlEoL3k0nyDiVevsaZlTEXTEU3WLzAmu6tiZBRYwX5p0rBmkYxO8pXLPiAWASuMZqo6kxpBAl1G0JLqfjKpOx2MQSTaTJn7q9Gx4tR7TZ9R2U1bS2qMCCQl6dWbsP7eLqHq4lHN%2FRmoLAhDj%2BqOfSVLkHDENLtSR0W1%2BOnDBncDudgkkCW%2BIoozx%2BZ6Bc8MF2H5hG5NgmWko8o%2BdaoVQ9o1DaWQgih2HFoiSGnsCCm9RbP6Y9Cb2A5IE1nzBZAgHoC0wt5eOWTy%2BktOejghcRmOL9yY8480Q1GU3SR5jZz4M993OrHUPbtqwPr%2FgQk9ghs55z%2B2oPeVUYAlDuTw6twzXJp9n4XsnpKPBG5Wr%2BcCn9l0xT8M9E8MNmFxckGOqUB8ocmF1%2FsChQskFJEqgEnB7yzNHl%2FCvjs7468NB%2F1%2B4EgCWMfk%2F93x%2BOtpxyPvv1sqAvfMY2aDfAR9%2FhkE1OXVOgEeeND0RhcyWNgSq9Y0LP19hF8meS3W3x5xiSM1jnIYlbsliPwg66ZFD0Un0X%2BGUDL7eetAjP0s3dSZMgcD1tsGcAFUuvf%2Fu2MF55HMqz3HrxDGuLEqpbNIPgwLt2q0Lm6ra4v&X-Amz-Signature=ddd6cb7114e1ab15a710e46c8d4868b05f2db9c2802a29cc3108449acd08dbae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

