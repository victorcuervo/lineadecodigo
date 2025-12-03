---
title: Buscar por un vídeo en HTML5
description: "Cómo utilizar el evento onseeking para poder controlar el buscar por un vídeo en HTML5 y volcar el segundo al que se ha desplazado el usuario."
lastupdates: 2024-01-30
author: victor_cuervo
---

Seguimos con artículos que nos explican cómo podemos mejorar la experiencia cuando estemos cargando [vídeos en HTML5](https://lineadecodigo.com/tag/html5-video/) dentro de nuestras páginas web. En este caso vamos a ver cómo podemos buscar por un vídeo en [HTML5](https://www.manualweb.net/html5/). Es decir, cómo podemos controlar que el usuario está buscando algo dentro del contenido del vídeo y, por consiguiente, tomar acciones al respecto.


### Motivos para controlar el buscar por un vídeo en HTML5


La pregunta que se nos puede venir a la cabeza cuando analizamos este código es, ¿realmente es necesario que implementemos un código para saber controlar el buscar por un vídeo en [HTML5](https://www.manualweb.net/html5/)? La respuesta es que puede ser conveniente por varios motivos:

- El primero es saber que el usuario **está buscando o desplazándose por el vídeo**. Esto ya nos da pistas del comportamiento y es ideal para ver la analítica del vídeo. A ¿dónde va? ¿Cuánto tiempo pasa en cada parte?
- La segunda es porque si tenemos un vídeo en HTML5 que estemos controlando de forma externa. **Mediante botones de reproducción, pausa y otros, nos permitirá el poder bloquearlos o ajustarlos** para que no se produzca un escenario de no control en la carga del vídeo.
- El tercer motivo sería para **poder controlar la carga de la nueva sección del vídeo**, es decir, que cuando se mueve con la barra se producirá una nueva solicitud de datos en la que puede existir [cargas inestables de vídeos en HTML5](https://lineadecodigo.com/html5/cargas-inestables-de-videos-en-html5/) y por lo tanto queramos ponerle un mensaje o algún logo de cargando al usuario.
- Y la última, y no menos importante es la de poder **indicar al usuario cuando se haya movido a la nueva sección la información que va a ver**, si es que tenemos información contextual del vídeo que mostrar al usuario.

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/93005215-7b95-42f5-a813-745e51880cf1/buscar-video-html5.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZP65HTC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDdc%2FQMhGp%2FmWlrzQoTeAE2jc2v%2F4MljkIgifs2kDQL3QIgGDtnR9KSBmgOc%2B7ENwMYJlJ99OS8Y3GxPs3VMFGjsZoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDN%2Fwz0H7gY%2FTNDmS%2ByrcA%2FLDU7z5QRZHNbX3yPSQlgwfbblP4Yx3HJ1%2FVsnYqmbnFdJMHkZrCyyxc9xgIFHCQjSDA8g28s%2BpaO4SoQrlFjkEfzYdYMxssXzEWdRmAQ6b60zoX95zx5OrzS0AAUeGOhHR1DnrLoZcBHeWWN15XAhS9d1I%2FgAioJ%2Bfy2iL9Fv6omj8QyqgFa35vrDvLctW4QoHWGTE8XYd0fkoBcy3E%2F8OJ1YlvCojnG6XGKr32zOqenCU6jDT9STUcJfAfHW9LToR0jabEAgbYAuvKQKE2P%2FhO7wiulEd5frzTNuNMcpKScYbH7CVZq2UpJe1TwjKRyPYI9sF2nP2Keyza1XPNjyLTT20C1Hkprko70v5Gb%2BfC15YMADXA%2FXuYPsS2ds6Ccd6f7wzOt7XXrRUIorodN5RohUhQMWKDWXvR3hRm4VrtDvJGU%2FEJnY%2BVrFsp5LTIyuB61Qq9cQhEutrd1kzWEHYOxiXNamUAEmjbCPa8yeKRSk9CwC9eG6SeKi3p1rpucUWClPCe%2BAPnP%2F%2FxGG8lkXPrQszNzu9r5rIFDKWkA5329RfoCDBBuVwvjPfNPlT4QDb2X%2BdNfk5RMS17xSJbDnM4tN4S%2FY%2Fs9S3X1ZH2GJeJP7dIYUtfnoJztPqMK%2FcwskGOqUBVd8myxga4Fpl%2F1HzT%2FHo0hw%2Fx7aVW8W71n00trhkQSQbbwUA%2Fb1WmNl%2F%2BLbUaG2eGWOLDhfd6Erxg%2F4WZCxp52r2Rm7TglEfs1OfrjN6ajcxAtQ5a%2F5bXDEsAt5lKyx4fdpPRFFnTAAB74gI%2BkAirZBGKiSnBmCP5%2BqMUx2Nm5U62lxaGpGZCJtSozuUMzZAu66AmPXe6gs%2BaqL57zNt3jlxzy5J&X-Amz-Signature=c126be8988a22f35c09d85809c34ff999c2e4abd1458014edae7733250976691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

