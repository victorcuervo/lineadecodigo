---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
slug: /html5/mensajes-emergentes-con-popover-en-html5/
author: victor_cuervo
---

Los que hemos trabajado en el desarrollo web desde sus principios hemos vivido lo complejo que era gestionar una ventana emergente en una web. En este artículo vamos a ver lo sencillo que es crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) siguiendo un estándar.


### Un poco de historia de los mensajes emergentes


Y es que antes de que se estandarizase, y pudiésemos crear [código en HTML5](https://lineadecodigo.com/categoria/html5/) para poder crear mensajes emergentes, hemos pasado por muchas épocas y alternativas diferentes.


En primer lugar teníamos las **ventanas emergentes o pop-ups** que se abrían mediante JavaScript. Y se podían mandar mensajes mediante funciones como [`alert()`](https://www.w3api.com/DOM/Window/alert/) o [`prompt()`](https://www.w3api.com/DOM/Window/prompt/). Incluso se lanzaban ventanas emergente que se ponían en primer plano y que acababan bloqueando la ventana padre. Estas ventanas eran muy intrusivas, no cumplían ningún estándar de accesibilidad y acabaron siendo bloqueadas por los navegadores.


Después llegaron las librerías [JavaScript](https://www.manualweb.net/javascript/), como el caso de [desarrollos en jQuery](https://lineadecodigo.com/categoria/jquery/), que nos permitían crear ventanas modales, popovers o lightboxes de una forma más elegante, pero seguían siendo soluciones propietarias que no seguían ningún estándar.


Finalmente, con [HTML5](https://www.manualweb.net/html5/) se ha introducido el atributo [`popover`](https://w3api.com/HTML/popover/) que nos permite crear mensajes emergentes de una forma nativa y estandarizada. Esta nueva característica nos ofrece una solución integrada directamente en el [lenguaje HTML](https://lineadecodigo.com/categoria/html5/), sin necesidad de depender de librerías externas. Lo que nos facilita enormemente la creación de mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/).


Además ha introducido otros elementos en [HTML5](https://www.manualweb.net/html5/) como [`dialog`](https://w3api.com/HTML/dialog/) que también nos permiten crean ventanas emergentes de dialogo.


### Casos de uso del elemento popover en HTML5


Antes de crear mensajes emergentes con [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) vamos a ver qué casos de usos tenemos para poder aplicar esta solución. Los casos de uso más comunes para utilizar el elemento [`popover`](https://w3api.com/HTML/popover/) en [HTML5](https://www.manualweb.net/html5/) son múltiples y variados, permitiendo mejorar significativamente la experiencia del usuario en diferentes situaciones de interacción con la página web.

- **Menús contextuales** - Ideales para mostrar opciones adicionales o acciones específicas relacionadas con un elemento de la página cuando el usuario interactúa con él. Estos menús pueden contener enlaces, botones o cualquier otro elemento interactivo que permita al usuario realizar acciones contextuales de manera eficiente y natural.
- **Ayuda contextual** - Perfectos para proporcionar información adicional o explicaciones detalladas sobre elementos específicos sin interrumpir el flujo principal de la página. Esta funcionalidad es especialmente útil para mostrar definiciones, consejos o instrucciones paso a paso que ayuden al usuario a comprender mejor el contenido o la funcionalidad de la página.
- **Formularios flotantes** - Útiles para presentar formularios secundarios o campos de entrada adicionales que no necesitan estar siempre visibles en la interfaz principal. Esta aproximación mejora significativamente la experiencia del usuario al mantener la interfaz limpia y ordenada, mostrando información adicional solo cuando es necesaria.
- **Paneles de configuración** - Excelentes para mostrar opciones de configuración o preferencias que el usuario puede ajustar sin necesidad de navegar a otra página. Estos paneles pueden incluir múltiples controles y opciones de personalización, permitiendo a los usuarios modificar sus preferencias de manera rápida y conveniente mientras mantienen el contexto de su actividad principal.

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646FUAZNV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq56j0vjQJextYb%2FECX1uyL6Z1mSoj9xKAEwX8PDTQ8QIgcecd35%2F%2BZDnzWFGTV%2FKg7XOIg0%2BUrvIfyV6e683lad0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEhmTLPxprwgoNG1jSrcA7NXeA2japoRS7aa6cNNJFXh%2BVa6Iy0lm2ZcV9gA6mlBvCUZDhzaI7RLlHB8Onfxq8O4d1uPTAm3sKL1oTiWDkrZZC8R86VqHI2yh2kR8cCpFuHsB4jAOT%2Fk6%2F36R029hITX8JHsS7b5GzEY4QXWkjWaYzrIFefMnBssj2BoS38mWV7KARMuZpH%2BmOXrVHAnSERwVEaXihXpDjJRNRkp1EDQHkOUITTfgYUn4BeOX6tfZG89xsVfJICyAFbOS%2BC%2FMMSJ%2BhiBCDjBgu56ZAXVO8bGywqpfWfXHsXl%2Bn8X2bd5MuxrQ8UVg2D03%2BexOr5WwyAI5VW69%2B9%2FhVX1h5ggJzGBHzV%2Fe58eO1lIRm6X9qB2L0OOZ1FTbiDDkAwTnW8wJVUVb7%2FjiINdZ6kNcLLpAe%2FuVqwJ3HnUR20uvhEzCiC5WuhRzxMKEnbRXU8xQXL7%2BYPOBGk6sOlJvQw%2BO7MOCImg8JqvpNeE4qVFEAaZf8eQsj752uz7fLgLn%2Be%2BhzLTWL7G5fpXqWpjiSR57sQywjf8IlUuxjWDynt9Pk7WBL8eI9QAWyzvdARSWoRzCQKOGkFmRPTcUIY%2FtCfdqjEF5WU2wK5SL7U46RJTWnjxID6LRa%2BHjiTM0WR%2Bt4ppMNyNzckGOqUBZqjL2XWZ%2BDS5QsN%2Blj84JXk01G0V4r%2B9lhHxLxU303LDOMN7AxiE5M4Bq0pMKKN7QeVhCTQo4xdptWDX8kFnjAqr7sliv4%2FzuQjjEQAy%2F145WVJFraJ1DHX2MCOTcfprS7jD8gfu55lM%2F95B0qKT7N0CXskStaRLDZ1yzoVb1bNS3YDVwzLcfZA6YSGb4bfxn0tOZjPpoj2xJMDwwUtcaqp3YZVu&X-Amz-Signature=1afc36b512c931b7207b59cb39d6cedb54cea8afa720f9430cdf40ce39bd9aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Crear mensajes emergentes con popover en HTML5


Ahora ya nos vamos a poner a codificar para poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/). Para ello, en [HTML5](https://www.manualweb.net/html5/), aparece el atributo general [`popover`](https://w3api.com/HTML/popover/) que nos sirve para poder crear mensajes emergentes. El funcionamiento de los popover en [HTML5](https://www.manualweb.net/html5/) tienes dos partes: por un lado la forma en la que definimos el contenido del popover y por otro cómo asociamos a un elemento la capacidad de mostrar el popover.


Para poder definir cual es el elemento popover dentro de nuestra [página web en HTML5](https://lineadecodigo.com/categoria/html5/) lo que hacemos es asignarle el atributo global [`popover`](https://w3api.com/HTML/popover/):


```html
<elemento popover="auto|manual|hint" id="identificador"></elemento>
```


Es muy importante que este elemento que tiene el atributo [`popover`](https://w3api.com/HTML/popover/) también tenga informado el atributo [`id`](https://www.w3api.com/HTML/id/) dándole un identificador único en la página. Esto es debido a que el elemento que muestre el popover deberá de indicar el id del elemento que contiene el popover.


Así, podemos crear una capa mediante un elemento [`div`](https://www.w3api.com/HTML/div/) que nos permita el mostrar un contenido con una imagen de la siguiente forma:


```html
<div popover id="pop1">
  <h2>Este es un popover de HTML5</h2>
  <img src="imagen.png" alt="Imagen en Popover">
</div>
```


La siguiente parte para crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) será el asociar a un elemento la capacidad de mostrar el popover cuando se interactue con dicho elemento. Por lo cual tiene que ser un elemento de acción como puede ser un [`button`](https://www.w3api.com/HTML/button/) o un elemento [`input`](https://www.w3api.com/HTML/input/). O bien asociar un comportamiento de interacción a un elemento mediante algún tipo de evento como [`onclick`](https://www.w3api.com/HTML/onclick/), [`onmouseover`](https://www.w3api.com/HTML/onmouseover/),…


En el caso que tengamos un elemento de acción vamos a utilizar el atributo popovertarget. Mediante el atributo [`popovertarget`](https://www.w3api.com/HTML/button/popovertarget/) asociamos el [`id`](https://www.w3api.com/HTML/id/) que contiene el elemento [`popover`](https://w3api.com/HTML/popover/).


```html
<elemento popovertarget="idpopover"></elemento>
```


Por lo que en nuestro caso vamos a asignar a un elemento [`button`](https://www.w3api.com/HTML/button/) la capa que acabamos de crear:


```html
<button popovertarget="pop1">Haz click aquí</button>
```


Vemos que utilizamos el id `“pop1”` que es el id que le habíamos asignado a nuestro elemento [`popover`](https://w3api.com/HTML/popover/).


Otra forma de poder crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) sería mostrar el popover sería mediante [código en Javascript](https://lineadecodigo.com/categoria/javascript/). En este caso tendremos que asociar a un elemento un evento y en dicho evento mostrar el popover mediante el método [`.showPopover()`](https://w3api.com/HTMLDOM/HTMLElement/showPopover/) del elemento [`HTMLElement`](https://w3api.com/HTMLDOM/HTMLElement/).


```javascript
let boton2 = document.getElementById("boton2");
let pop1 = document.getElementById("pop1");

boton2.onclick = function () {            
    pop1.showPopover();
}
```


En ambos casos, al pulsar sobre el botón, se mostrará el popover a pantalla completa.


### Diferencia entre popover y dialog


Ahora que hemos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/) mediante el atributo [`popover`](https://w3api.com/HTML/popover/) y que sabemos cómo [gestionar las ventanas emergentes mediante un elemento dialog](https://lineadecodigo.com/html5/mostrar-una-ventana-dialogo-en-html5/), vamos a ver sus diferencias y cuándo utilizar cada uno de ellos.


Las principales diferencias entre el atributo [`popover`](https://w3api.com/HTML/popover/) y el elemento [`dialog`](https://w3api.com/HTML/dialog/) radican en su propósito y comportamiento.


**¿Cuándo utilizar dialog?**


El elemento [`dialog`](https://w3api.com/HTML/dialog/) está diseñado específicamente para interacciones modales que requieren una respuesta explícita del usuario. Es ideal para situaciones donde necesitamos que el usuario tome una decisión importante o complete una acción crítica, como confirmaciones de acciones irreversibles, formularios de registro importantes o ventanas de configuración esenciales. El elemento [`dialog`](https://w3api.com/HTML/dialog/) bloquea intencionadamente la interacción con el resto de la página para asegurar que el usuario se centre en la tarea actual y proporcione la respuesta necesaria antes de continuar.


**¿Cuándo utilizar popover?**


El atributo [`popover`](https://w3api.com/HTML/popover/) está optimizado para presentar contenido informativo o contextual de manera más ligera y flexible. Es la opción perfecta cuando queremos mostrar información adicional, sugerencias, ayuda contextual o menús secundarios sin interrumpir significativamente la experiencia del usuario. A diferencia del [`dialog`](https://w3api.com/HTML/dialog/), el popover mantiene una interacción más natural y fluida con la página principal, permitiendo que el usuario pueda ignorarlo fácilmente si así lo desea y continuar con su actividad principal sin obstáculos. Esta característica lo hace especialmente útil para mejorar la experiencia del usuario sin crear interrupciones innecesarias en el flujo de trabajo.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZOF7BQI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9jp0JHvv%2FuCfoP49Oi%2F2pyJnC3wvnwVx351IjKgP0ywIgcwxe5nN4%2BFtYin10RlxSFYqT5va9hrO4PSVYUOy1Oqsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOHgsibIPC5CF1MY5CrcA%2FPFGYrUv1a58fb6jBC99KZt9rfqDasepTMnifJWwTWU%2B4uC3SURE6GXKEhIJwcl5Urvlll5DAYu00MyoRSLQEA3NkcFd4dgKTsRQ4IIlVh7P4ibEXidMK2HI0iVBooLsgcpLIPwKrkjHNs1jy9M2Ib%2BrgQkRbL9YYb1Q8qDSfuKr0Dpt%2F6ASmdpJn7WauEsHnGwZqdiNFOsLDMTG5Pr7P9fV9rLm95%2BQO52bT3RNIiiY%2F2R3o4eNqjAC7nkSjB2XXp1fLx6uNJpFj9MxB117jjg1n5ChPfAhBVwSkucaaXNI3TnTbnTNQWaiC44FbK6qyibkTxp1dO412WmPZnJpj6Bsl8Kh2FuituoYNROfSA0Qr931Ab%2BybJZLdtLzW42Y2LX%2BCCZ4jmqtgj2jFGzldgJJDlaeuwvdxqt9YU%2F%2FmBBg%2BKFd8knzYL9LBWpssyigr%2FmzZM4cn8Q6MhPeLBH4xN7JxW0CzyVPuj7GX3hlWNvEPQia%2BxcKUjACVhRrp6SVOr2kxk81zCbZ%2B%2FykFF4g7jaJn%2FGbm3e4TTLE3fpCnuRDBdaqlWyGcrmkcQitVUUQLzofuDS4hhpqAGfezW99i7Fs2xqdvmjr1nihUMe7UIYacppCxg8kVoHvbLyMPCLzckGOqUBahHM9rU4tiKncHGRRka85cJWNMvK8%2BGXxT%2BdDkklpgGXVaGvaC7HS4tmCHFN6o6Y46SFnn%2BBUFBY4jRbFKyPpWPh5mzTe8EkDIxSWOqBSsB2pVFSX4XyJn2qjlZ5vxsVtBHQ%2BF0o6LyvwUHFuFzgZY8bLEaDIOjm0%2BNVv8QXpN67lFAS16DXXL4UZ5ky%2B7ZeCBU5p3arBXuy4dO7%2F7ROOqPFnMsc&X-Amz-Signature=ff7c16913d0220b1ba0f962edabc7abe29db9e1cf034aa6d425b65da3ab95f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

