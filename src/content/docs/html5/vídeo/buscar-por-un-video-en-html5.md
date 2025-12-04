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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCPNAIS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICGxorPxTUt20oR1q%2F8sOdwi5YM2A8AvMA49%2FJ%2Fedh1ZAiBLaHsdnvcpGTeW7hqnckF3d5uQPzDIHCH9mnsnLj%2FNOCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMH9NxUA91xdHZOSrmKtwDAYwoDZGnMr9dHalnOZnyPTWkK6UnI4dIBILe8ugw8Xvf%2FTDaN1LKuYOGiDf1Rpk2RcUZy04vyI513bPH7IXuzCQQ53Va6bl%2FTegvVWNDCsNkFDkSTmfyYyo2zLwDcYBo3bTnX6H6vs4c%2F319UWQp40JtMX%2FybQl%2BYMjpqZqPLXKsuUUzLmo3zp%2B0JqZjojK%2FshJRsCTtqerZlzSjWjHvY2oOOrx3%2FvbBFlj%2FC3h%2Fb%2BXcGOnl8La%2Bm1raPROiVxQBMjtgsoTFdKacKmm1UFMReoOjSrlJFazGNMgiC30pSpE46NMFkKfDwyNPV3rrl3Zc8BfgqxzT0eHreIpL9jG4JmwLYI7ObqnyLz3TLIARAAzITDkmSEk5j%2FvkdSEdA5ooZ094F7Pna5RcMYhWI1yRboZqEIfAgkEJ9U3bQPzBDmUvOsprjb%2BUXudYqsCNQFgqhTkxyAL4aZZc5y4qi9Ivy1ZyKVAZKY8l5fb0npTBI6YwsFkiL2UWGbBk62WHeWvDIm1GsqTVRRfHfszM2tbPef%2BPjaBWCwHo3oHlMNVDREOUmZ%2F2WN8YXR5E2skuFpnuhVbga1%2FZITZ8%2BRkcj1pZOIgV5VAL4fcL4pOEnSQr%2By8frraLFcxlNDIRd80w4oPGyQY6pgFv06EjYyUf%2BMH3pPMIfWLpLPm9Np9U7Nu96ZnqRJpKBNZ68zYL7jVPcDoAhSXcAiH7Yd%2FiKJp0YYx3rPSEaRcVSJXiXh2OLO8GIHgvHU202Qh%2FibofGEd%2FRJPPeHX8GDX1MAp6tVmYG1kTwHqyDqNoiWyI%2F6Mi9xtHZlpaXgWBXhvsxJi7W5Kxu%2FSrQk5yILhI%2FGOPZZqpdUlEEkxVP9VO7sMqbckj&X-Amz-Signature=29f3dca694dbd1a689cf366d73a6eeb9a809c603dbd8eeeae8d109a77571eca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

