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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4NTPGGB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAy9ikUGtbDWNijnGhCWU8BJUfmS2aO%2FYcvLMpYPtcOAAiBqFrvGoIXLjWo5Jy%2B3XLBUg6ul93JPrVEF%2FdyLe9DOQCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMlq0DRuVFXMblI6BrKtwD%2FGxbx2EdklpB4pji5Lr8qnmabtoL0UScpnLo39zrQ%2Fgqk3udSdqHrcgbL9%2FVQd9AD0S%2B6HBDYGFFeOkjuTVRIsiqHDTxgS1ji2X5%2BqvJrc5GnPu7nnwF%2FMZnK3xHhlP3ZUq22D3EFrPMB14t0QTFzbt5mHvnESwPRuMkF0%2BVjcFAO2scU%2BknN7%2BA%2B1i0Ccarq6A1lgvzyH0F9gTSchdpsAGM23taDDqxx96hIAXzmUJ0vF%2BkqgN%2Fv1anSypRRV%2FFRUGTt5%2F%2FTj3ZUFIlXf39HxHCv%2B%2Bi8S%2Fj7blUegm4PymdvuzxWG2m4PAf%2BkbJzZSvUG7j45Pmr%2Fla0ZA8JLTZfFJCTCdo3kU%2B1cKEMZF6gBDpwDe0Ry3iy8M02GkKxm2eQmOx2M9d4BTQ1kqmWa9m1nq83vyfeWzS7RHjjw%2BrT7%2FfWtZfKTLA2UI8DYPs60Ps1ImLJxQlzP92uxM5IYJwlwhhXIeurVtJSJUm1rpC4vUj0PK%2FEqBTiJdtd2RZSpBNCcqjljMDVxQji1ntb8Mvki%2F7B%2BMg65iOzTsHuwQ8SJEumbXc3zdD96Fkpk7HQMdXNITAngnra7ZG9%2BjFwhj%2FF42V83dKQ6dWjpZS%2Bs3ozL8ImD9%2FmEBDp9GfWu8wyN7OyQY6pgHZEbGCKVUMWfq5WRXVgAt39097Wk7bhUIuJDpbf5k62kJPEwVHzVgMVq%2FEU6TcA5dr5Fly%2BIThzXHdCTvbOqNnUHKmpVjYoQbOOp20Dp3bHb36gfqkS3IH9urN%2FlJlb2pdiDmmN0dM77BvwCrP6s8wCWsNuuoVpe3b5UlOLnAM6K4aKcNhwxto8nggIGlHtiZgojyLzFY%2FQALmFY2SmjHutfp%2B8A2d&X-Amz-Signature=99a21a4c719708c1fd6c1f8deb377d0dbb2b16913e03ce37465ef5499f14f490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

