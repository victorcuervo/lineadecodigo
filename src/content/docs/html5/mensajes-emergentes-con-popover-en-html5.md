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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGTZJ2P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9Y6r%2FChztZqDfdtlCUuLR0bTGVqOXACXK1sAgMr%2BBsgIgcWr85M40OgrYLlme2VUFzLkz1gUz1QXiwmBQIzLV6nQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqIyRCXS9lXrQzrlircAxE9eXf%2Fx9qaG7B6AsH6hLxgHU6vECwUDazTmZDKAhyt6bPjgHvLPJ2tkArIui0yna6i%2F9%2FOBjXmqogiR30UsOipQRaZOAdrHJUS%2B9DtuTaToAQKSKBO5F7PYH2Q71d7yzJToubp6r%2B%2BZAC7L6n13uimqATfFttMo6MODGyjzQUz3WAaAZ5GvCzdw7iXmieELoI3p5nzAkQmerHdc%2F%2FK5UzAuLCbnwVitFK28nlZSsgyKFVcs521vhNEYJJS6uYSHD2qUCabOscOmZIg%2BRQ78n2Ws19Le3q8ywaVWALUVxA9aqw6lwNMBrgmvLzr%2BhUqRej9T5PRBWuqF3FQ3fS1rGI%2FgjrIr9E3dp5gnU4OTH79fp7yffuz5lvuxD%2F1PcwFYPw0FJtecKdP11WIDMNdxduvGYkhaYluGt1ULNfrHpWBSnhF3QQ9xTG8VvfI6gDz6R1B5DQILh%2FPCBJ6hoVW%2Fse6pskgVkRf7Y2yhEIoYjxduqZrvSf90f%2BOyUdkiZ9deBOmgYos2weseOrhpInuarV6g3Lgyd3mSpNpysrspnqpd66G2kD62aqxamTuiTvQjqA2sABx1X8iJb7rr1zzxgwTRE1ftWw4f2%2FRwcyMHnWe3nK1vh4vFJuQUZ89MP2j1MkGOqUBmW2s0CGsQz%2BOKBtAHQxOQH3ZEnBnRvcyhS4FLc2bzAKq9bdrQmJx2Zi1fXVX1cS%2F0vqnhXSsI3tCo%2Fpwr0tGRJ3JbMOm%2F%2B2%2Fuz5524lf90quQW0DV%2FLg8BTwBJ9%2B%2FqAT2YQp4PfJn5ZI61eDjx4At3HWAXkdZgkfLVh2UFXZEGcgZRI5cg%2FhEA8F4C4FPUDOGodmb%2BJc7CWie%2F2pK1OTYFkR94rt&X-Amz-Signature=776750a3634a79261aa62f7c863d6803fec3d3ac07dcc1388b0f646acc4d6601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW7RKJFP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz4rKuvLpsRq5oyFW4aMfIlvILEXYybrFLdz4p%2BQqblQIgCoKXkvevpsA0DLkKRT3rVY2PRUUxLdIsDEobn5SMevIqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBqKe3uzeh1d1UmvyrcAxqagCuAwaeclGjoikyYjixzyG7JqabBzZdBqgM41C8aGSdSX0T1Jd3mVIfWESwowGD81yk89oj8Sme5QB0a1gL3wqOES51d4kL18DqXzNJOEYM7wG8gQFASS%2FCxuPbCOFM1yR68%2BMZdUHpV0nwuK4q%2FfYECVbQwlDY0h%2BhvsXKpyYZcq2tO1wRl%2FsxP2RS%2FB%2BpskmevL4h8tx7xzHj6mjH%2FCjWCcpnHG2nwJW%2FFlwM93iiZSWRmrn%2FevW9o7UNMADB2bDcHMFrsNHGRxumtqkTJYObz7VocY%2FrlxJZ%2FarHXjJhCrw7jkhA87PQ5sbGxurViAsaaVvuJhSVp9FvS5rH7JROBYVf%2FvbXyc%2F6k6Ra3MLDDNMlBfADD6ycX94OGNYG0BzZPVXJJwlnfkJwOb6%2BiJom%2FdxsGx%2BsoDgr5CSOKrGrLeww%2BHaAMBNquF7kdbP9GNcyALbLUkuAsiT8hcwrxxO%2Fj9tU2VUSW2fqY3qJKxhof93te%2Bp1FGNx6jZxo9nqJI1Ky70z9qDlRJD1Ez%2Bet9BWYfjzx04P%2FAwDv4LQ%2FICgHUbXmkLVAqY6E0ejd3%2F5jp%2F7m8meFDfWD%2Bs63%2BgaqUGaAGjNg5lKU8%2Fj11lTQO%2BFDfn1xSZ21r9FEMISg1MkGOqUBj2Gz%2BLbqr21OQLAP9pcC1auYCxjKV7qIuHWrachjSltPMOqrsp24OhCBHKVpZ9Je5kJS5RzEtgV4ZM9bD0yPKUE9Mn9j04mbtw%2B4dJqCDUE9JkdzQ2FtxQYtQY3kmFd%2BTks0qZVdEOYpwq6skJtWQ4BCnAa6ApIi5VIPvp0z6lfL4A2h3INFhWypz03rDvo7RHIDKfWq%2F%2Bh85Hfoep56q0zrZAkK&X-Amz-Signature=b7037ba42fca89c2b5df5a165101b7ef8fcfe4e3ad083687a05e023a95d96d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

