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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZOAFTR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCXHsjYa29%2B8uQmvK4Vd%2BbIbffuTdqvaIpDNSJe9%2FRe1AIgBY%2FszVUP5Rfoy8cGuSsnsJOuXiXwVJ9O9Q6%2Bn25OAKUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLpSnZi5ME4s7wutPircA%2BURuTJr6mcH9djCijE8nsz7L4S%2FxfWh13Gydt3gXLVYq%2Ff%2BLk5FjEJ5X0ealKOAW7PuIFf%2BLBQ%2FLZ1GhAvxgZ22lYq2bG%2F9cyhHqKTEcJmx9Pio4CZLg97DLGvJ7116dNZ%2BZlQRwWf43YETIfYXZ2LHSuzfCwZywLHwdNvJ5bQU8cu%2FJxnKIOQzUkLT85%2FaVzv3renl8SczPyWBMfKOUC%2F53lHOI%2FH8dQCFD6VjpncjtuHny3PJTXm4XxMUONoWvD%2Fg7dqmzWOLcuHybpB4b%2BcIkszpNE5%2BNAxl5qUsXsJZgIMSVyrIwHLLU%2B2hgqSR%2By5W%2B2yHEOfQNMHiVIxBBV%2BBLvtCZXO0CzSzqRuZz77LUUGI1BnRwnazaHeMCMMFyAHKOPnHh0nuTQu0Ru1F9rsrfx44h0q2oNWum1jJ2Eh6xNYVmck8hp3LwJg0SKLJISDC1Rr26nXQYYUzs57GjnT%2FQZdJP17hrWP2mDyD1ZREFS0V7W7ul%2FW3WHwPPL6FQ63jIgq0GjEi%2BP2uckHf6Qi7GIpLvanrwI7Ou8voMedqAu8EDxj77%2Bo6SHZeRbAgiVv9EvxP4eGTHPZDiOQcAMi3rd5M%2BKjTgVmEcxNv6rklP0mq16lapf1a%2FtHLMITVw8kGOqUBVSbvtMb3A5F8Wi74N8CvfK4pQv4v4SyF2WMRPMdSBxNGsJ6yEXAgkuYsr059M2KUJSX0%2FP0GKlrQUlTlQFBs8RpaVBmQMKvZ2P6nkK2oWj6h5qzePZVpfHMvnkKhFXP6j5SVvdSXCSo%2BGp%2Bl6Nxdv2L8k%2BFDl8m%2Bg9IT3dYtIX%2BVZYc67YKwRcH2qE7FelFw8uSCTaeZXilPUMVok1Mzpp8EOlOa&X-Amz-Signature=4885db909ef77c01437374145e62971870172a91d5ccf34d3366f79766ec544c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

