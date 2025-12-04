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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2GKPOKM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHFHBGKNBQVmBS%2FNA70TWiRPCq75D9eLnXfcJ5%2FmZ9rAAiEA%2B5Iqp3s5cxEeJN8GZ5rjqkI5ZNzi%2BcTrM7EJPf%2F3pz8q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNJzKtNC1GZTIE5z8yrcA8wKrBtr9F8oT74QyB%2BxBRc240ojqe5HWzvv6L1Qbk7MW6suyM%2B7GbMvBhXxn1GLyS001qaVkCXskbRhtjYo9Dg%2FzkOZNw4dxHc8OK5o3PBP%2B80aHsI6WLcI8GbooP0B16qJjSzPO2it%2BOF4LUe27Ibr3nufBUWVAgsSyQv9UDAPwghtIuaLjkHtxhvdAkd6nJj4o3zn5tzxemhGaonm9hgwsg6V2Qgsy9ZaJqvPCq4DBk0mp0t9qYsnmzRyPcm4JnLlfe%2Bcg1xvVw0AdYkQDmqXnMM8v%2Fm0GkkzPHfJaetDs3%2F2ohZLh7kK7kS13aD5ZnvKYwWZACjHwUcNt0%2Bxi%2F%2Fwp33quCTanWeYsse93pQDqzg2Xnoa7%2BLBMMRA3I7GLC8Kim3AxYp86vxfwlUDnaEX98QmbadPH2n0b6xoZOuN26eIrVybewip3kSLkCKmovdSJrlTQ7V7ZTV%2FwNkTh1UWyEAgylGJa%2B1wLddrxyHLBnYEmOYbMJGZvb0O1mYuu%2Bpr1zoed5muzIe0ggwZS6EC%2BWeziQGHVHAS3IoEeNZFMKZGOwvT896SrZczPaVWdGPIvgFpdZFXOVCmpc23kqXF5nFEpz39CUpmZm4TqaFcI58c5O26eSsjjY47MMqhxskGOqUBH%2F6ZhKp725ajKAEgC%2BjO3NiPxNG13tf4zWoPWNWxt2WtBlF2lNpRA%2BVvdE9BYAWs2P2Pf%2FWSf8beNkiFJ%2BrYF58Q2Qiwt4G951jGCdw2pLhTZXXOty8IYa%2B3IVHfAs6NRLq1d637tWiqp8vqjGr4Pbk%2FFGQGXvJY9QnmRfe6C%2FOx%2F4bNJ5Dc8pD6nSOc6QwAgnXbRmCHzu%2Ffy%2FpC%2BBtsiggtIIeA&X-Amz-Signature=f84e37aea0e0987fa52c8a8d80cb2481409efbfcbf7751ae37c3c11a88314b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

