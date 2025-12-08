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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMK2XKI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVYJ3rGwY8%2FiKvthp1mltIlEnMmn5Wn%2B%2FuZMNT5y5B2AIhAKOp6cU3jYnpZFHAI%2BY2PChM8Wr%2FiFklHN2sKjichD%2F%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjtwYwsHC8L09AqQ4q3AMowLk4LKigIQQeh5y%2FOeyNzPfEuZcgWmAU4RzrVK6mmxL311iH7kd%2BYpVQV30Ivij6id5Pok1XfwfHsw%2B6RJ0rIchlWQtP2B3V9coEDlIoexaGnKk1hPgHhzePQz5IYN0aS0pzq0adBtUE%2FufKymupJ3w2WUkY5YKgr1NgIJYyRwZ55T9se4juGD8cd4El4nHc47cQMLQt10V42KOWFIKbUpcj%2BcaYM8JbBCzS1wmfsxn3vZAJUYsSx%2B5vq%2BE5SCWFw2Ezo5bI71w3FBkYQCTVSeKcOBlJW%2F1LjusAt6BixIjhdFfMLK16qE8FLEB1xZcFld%2FqZrD%2BuixhgmQoG4h3OeYSPTFnlzxS1tm4yI1LTMRb9wVbuL6dRhsleqlFvz0YwB4jti5BgP7AJCMciJ2PCqGlSEa7T%2F5rhOY0wEjoLz7LTOQjZC2OdKsiipkwH%2F4Izl26WmtC0t5o6MY590QQgSgCdwh2DbnWU1eDkZIDpYMtXCzqyLBIswR9ovu3vF1yS%2FjM6beShkKG%2FCv3L1lriO26HEdqsj4jVmqQ9AReeHBLp3j5Oc3ojMX4PLyTVH4KT0SMWh4neXDkpJRTtnvbHaPRrhkPj%2B79i65%2FfZD99WdOEUFgK5LugX1Y2zD%2F3NzJBjqkAaZEkVdAn2e2zYUTgCOIYn3R48AFK6jk0f4zMhk3yzo%2BIDrEKNfh7nvifhZQsCU%2FQsKv6DgBeJDBtEupi%2FRFj6Gb6%2FLqhXYPqG30T15eCj1pCJytuXoKMfDrTbouagDmJ7b7YNu1XE3czWXcpOPSHaHjLuFZx64gXHErovD2smK%2FodLGXR4zSjo6RhqJ8cFmvX449sAo2IwHzGCiJ53Ws3N0n0bN&X-Amz-Signature=488cc8612562402a0fc3ce5e981561fdd7bdc6d5e613327ab378623e66948922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNIM2X3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtM%2FVGC7ZBX82FDPr%2Fmp1e9w9y%2FtXil5DcDO6LeUEVjQIhAMpoBej8TNR3wlwd9IHRxBY51cvSEDdXL%2F7jJBdee7XfKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOfD%2FfOy%2BwjDUcq2sq3ANCPt8rczF0IjnlDiv91X%2Bj1rVjZRVd9WDJmweUDAOWFJcY0UBc8xn3oWHNjh9WKX84oat7AAmuxCyCnUr%2FNXsKYZv89F%2BU1ZjvTQe7VZOqQslkj2hO%2FH0DwwL1VrpkLPdWgenlFD7ZrnM1E4fOwrdFV2BvwDYGWFYadCA3Q71qo8Kb5LpOVc0e0fHkPJctS3SF2%2FMVgLCLmlaMmtyifCCYfFzYsZ0rOsi0Pm86olFDGrhcFVaRn8%2F6r86iNyfmypGn9iyvplNQJX7soh8t4tEPcvnXuEj9ac0lffxljA1WIgI0BKhRmjvBF0KCTTHOgIB7%2BLMWucp3yqx%2FJce2jomeI32ceEgWcMf5eOdHGVn6l7U2QQjLkWH8xMCdKlcyeCOZ1c9YW2%2Fc3LYUkbkTimZ9vTQwaP4exk16segix%2Ft6pGOv9KGFIfU9mms9Fm%2FmyK1f7I%2FdcDHlLwDDs1xmg0qmrIDDSq1n4eHEU0UxacpHMjkaIp1WnLfRSvzXQ9Yl3Pu513bjG3ndA1mh%2BHYdZ4Wt6XvNS0Moy3g1xtQtTrx4Y7LPo9OjBH9tvDRQLGZDs3Mz%2BTX2oePG4I5F4B6nNO7y7aYYmemu1t4esjMmQ2eOdjBxxtJyveS1j0myCDCj3NzJBjqkAbM6XIOrvIiJICtmJdSklejlDWIYz2jQMViaW8a9lpXIm0KC%2B8DINhQEJZ0i1PGgoNWxv7Nm4FyhihPwDfO2AVmlN0Eg7Ezhsy1MwUwHcY3VW%2FOYcYjT3Q6SfKG2kgha7ktYKT3wSKzHSuDzTFLiT5WqvevF09Rv%2BED21qFUY5gFgvIsoOfZygILgmc9r4X6CZbkzVp3jxKzOUU61etaOmwqJpEX&X-Amz-Signature=589c77c017ef24db8539f414d4da4ecf3d17a3366483f05a6d1dc54763185be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

