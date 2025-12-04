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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZNSP6WS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFXcV2xK9xD3T2R4zMn2iyS6hwSgFVZELLQikqUKF4nHAiBWtZgyNeBa3eI3PYUMa0O74Q9X4gvDqxBeAOj5H00K0ir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMqwtNoDtfDDmeifHsKtwD06hDekEQhWV8kIghmo92TRgN2XbL%2FkbsxZK5wVKcgtR2FOpIkaLaKgOLfV%2BFMI9KV2%2BItPZbSLrV9qTwUKh4U33VrTQSn6Jcf%2FmYNqFpq6cpB5iT1cjmd89AclAQucIk5hWF55saKVIWPvLKWDB%2BZBssOrNxX350pTsrI92js%2FIrzyrkoi02tPQXf9WmGSDikCi9iJFaRjmJoD9wEAyJ0num9L6wBKZksLo2e9KcJjlr%2BTUIxAxGZ%2Fy%2FxsDO4TrBTHMlIzKt%2FIpXWgpqydUyqNLvGNc4yeqWbKNO5tqD%2Fi5w%2FmRqapAl6ZzcTpxW7m0yBeiRvq0fNYpEsvg8eCANZHn1E%2FIEIacNXAZ3nH7iwnoaT8pmlnN4c6j7%2F9p1IjJ3nipQhsLuYg3jwBt0GLSMXlkoh6ZlmixNzf%2FkkVbNgQtIFJCQhnhQ0k%2FsmhqjuNqXVNH%2F8M2Q8%2FV92pxz96ElJm5NNl60mViH3eMZmUtURhktkoCiH3uUm8x0%2Fu7wY0%2F8eFeO1uzjpnsGImW3KU%2Fx2IpjXBPqcciewjh%2FgbY9ggJFp2%2BXMeHvFPd6NSj3bNHKf20YaXiqxNAY9NpgukCubr2QsSIKJaYqAsusyPHOMLPgTdtpTKwL4BWdfb8w4ZDEyQY6pgGd5QyLLyDc%2FRmvjaveVvP5uOjb9ocFgc3Y7u39R%2BAlK7XZ8hbwJSnGNKXIfSz4fxCT7M%2Ffd24wkS01uWhC9EK6mCskNUKIRe6g269pBSqNgEgKhdagkGfoSMePf9hY9N8pCri0uTQEJwnQ2Yb6pidpXJjnSGnjwSVhKEusSgBXYZ1gL%2F5HyWSwFIRbwGAk2G7cWxwQryy36RyuPZz2Mk8kwiM%2BZ1SF&X-Amz-Signature=ee045270f5a133c60e3a47a6ac40cf7808b1aa320b949a6c6bf16f4b30307c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

