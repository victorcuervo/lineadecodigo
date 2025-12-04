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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK74PG4W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCdXz5GAtdMW0IiFr6GF1ltSMWcGOMNrnNRO%2FR2DX%2FTFAIgVGRBN5Yg1%2FHQZSkrYGIw8bLWRnR3Lrd5pbEhEq52Kh4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHPWa5%2BTo4nyYpzolCrcA0T1cSpOR3FRFvCPHWUhylSEPQu6Hkiz6OAiAKT1QemD%2FD9m36Av4jBXwMNXRjB4uZXS2vXNbUMn6jPLwLPQTxCKzeJwiPMqIDgOQQsx%2BRCYcsImGZ%2FDfU4CX6NEQakFrbcwXepLdw9xWIE%2BMJODg326rD7JCZvkK%2FPX2wrqzBq9If9D8HkK2131VLk0pvfbqo0QPhd0BtuDnvjKhke20KW4GIoSox0qtfnikiyJlsXgIH5Xx4KUGjeYDb5Y5ietpUaUFwLbnJu%2FDq7smjNmBj1B%2FDce%2FZ9hOE%2BP4NrNRfcE%2FjoaiTiFCvFKCxlXriCc0qEvT%2FmVrQQut3UpH9UpZLjXOcz0%2F2g81ySwuTPdfHA3KGUU3ImxAUUJ5NjR%2BcOzmGUwNzpEQD4Ck%2B2qn2OkNrSx9Yi72riNgNkFaifvFMK9v4o0dIoYZHUMK%2F6Ve1NI6tn6wCjdNO0s7ZFcAYa80qoxlHmO0URZsp1TlJz449BiJdc2SixPsIjxyRRFuo%2B33vclIjqTd49%2FxutYu0v0DdyJ2OmLtWynzJb%2Ff3W%2BcI1QLZS2yQ6ipw8TUTcRV7jFVmM7%2FQPD1ADmDX%2BZIBevW9k1%2FNOwQe0u%2Fh3Ya6vstpZdj17MfuaIq3YDd5WaMN7KxMkGOqUB0puwN%2FYI%2Bi6fiUGpQ3TJL4KV2QYdTMdZ9sSAzsU%2FQE%2Fn6xYPEJt43RfZLMw7UQ%2FArg5w0Q0eL2y%2FPXS9Qsaa27F0lvc9n4jxOnAj%2FOgstcs0G5%2FjnRA8PJLcm0nOcbBY2Wh177VKMRdoiH1LRHyepObL%2FBvbm3y4JrJHd2WMJo8nL0GnPxcSRbxWcbuQDvZHVAJWUj7BmTK%2FSUSeBjjDjC6k3BfI&X-Amz-Signature=b6d62e91d3c680881807ae0ffa46a79b11578a2bdac3d12fbcd10bd11b865c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

