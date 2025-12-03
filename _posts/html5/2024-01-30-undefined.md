---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5WXYTSJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCsNA5MGvGh4yceLyudZgLiYFs8OigEOCChmOgGiCxPUQIgKzpxq6rmqp5MErWDwgc91KjdDZ8LkNCUCHRIxUi76UMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJBYSd5p2HRtsbPeayrcA0sjmI%2BZ8J1mzwoAC6b1VKEYs2f6KyyteO2eqKrUK7GUHQlwD93GG0dmyZhhbxLiCQPjBnNtOYeaaSSXni4OzWdAt4gqKvcHDSN82evHE37lXi64R0N5W66p3YafJ0ZiWlCpWHHq8oDX%2B6a%2Bl0yVKdiHE2sGtA875iED4vFKDK298f8ofAeFkhfZ%2BOQ%2Fi5XEi2SCGlNciov%2BBk5QDRDVJIP4zeCOMtu4JgHAd07L%2FTYdmzPXmPpzRl%2BON%2FbDTuJFb3KLAFSg1a%2FvrWepjLmlgnoKr9DAx8lQpiKt9DZQMwzB%2Fl5ryCJUu6168eacmn0zAZeN4%2BsD1%2FxRgBY0f0loraNkv2hAn%2FUAXBB1e%2BIj9jZ3M2EHBy%2B6K87l5uybYq6iUk4J3RMHBAjbPafbdx1yv7UoI2w5Z%2FJRGtSxWD4MWoUxv9octTG6w83Iju59RaEKfxAcduUI0tKDgyWTvWNnLVcwixiJJ%2Fn5vr9n%2BAOttI%2BYoDnp%2BAiNNnO0Pt9dZ3ym1E5Omn2%2FboLYDKZMqDD9vzBaZJ7STYvJ%2B77SDPMTD%2B8aXRjvjspaZK1%2B%2FJ1fPneUu658NDFAZM0ysVqHXuLoab%2B8kwN0kIG1Q6DjEF8vnZiakiJgZZ1EIQW5OAfIMOzVv8kGOqUBzTncfBih2eALK6Tw8oJqf3Q7a9wD2yT1MXFZfiDgcqJGpe%2Fq4w9UEJy3jKzPXlUZcFFbhu1BE2sRXbD3%2BXG4laoAL%2BEI6XWMuBAlCVqYzm8dTB3e%2FFwTyRYGhdU2EtNjfqulsMKtRvEL6Mt8mkbLU5gIN5aKVIS4O9FIg42Ok2W8nm30x1BHsP6hL7%2BfDdvavaqtI8371qCj9MlTDMEGM8wMs%2F2N&X-Amz-Signature=44c10d37801d7115293ed89895bc16600c7e7853afd69be45c2fa21e7e736c99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWTCVYSG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGia4KHki5UrR2q0y9X3OyeOAEu8ZUsEfhgVoctNIQf9AiBu4T6h%2FoJDW%2FGG70RRykEW1X0ITP3bTbVChpYQSvnC%2FCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMRR6Zijx3Xz5p4t%2B1KtwDvetgZzu5gVzW4kXDkQwTMCWjvTb2wAj%2FEiWjJ3Fz9ffDLAa9XiCGgKddy%2FxCsewXTqsYeI9Rx4IxOhmIullfWYKg7IVzsuHG%2BgWuBRG%2FsI55tpfKYgds4tex9bxuIn6mVCswRV0VOpcLTwVvUQ09e%2B3R67kYe87qkD0pIuUFX0hPf01AH%2FBZQeAd2XtViCSwGoVb2XvrzlNWcC4iBjwCWTzFIakgAKl0lHBbJnJQOeHq8rIZIIUbON8dL8253GpF9%2FiUz4QHtzYhkDojcJ7C1ZhSObJGgUO6b%2FL%2BOEgEF4qCe9NPj7ZX4%2BEfyTp719FvIuTwJs96uvJdk%2B438q4fY%2Bc6rCmatXakD4GchIagAIjIdpRk%2BCsYZGkdLuImPkNVuNBYwDtHa84XoJ0P1wkwj2VN%2FQJmTDCCspbeJtEnxdi22Rjsz%2BVnNoPAdtNCGrijg9nx7Q%2FABxZd48inWu%2FKDPmpuNKKo02W%2BcH2aeQ%2B1n6UWQHQcoFaO%2FpaoazJFk3wdDJ5ZUr2JCCOIQvXukXpnDDOSXBouEpXuhL2D%2BOgZ86aGT59qbA7C4VY2UKJkvqAyvyiHnS0fcuY8OuhYjEnh7sPaiL6bqrKULIP8smR%2FXqql85TBg4ebhco2Zowj9a%2FyQY6pgGgp1UEYsIqBDrmeOcNJkZ67CYAgCSCTIIzcGeMkiiXzolq%2F3GOImuhvkj9ifS2m%2BGnOdoo31EcaEan49E%2FrCdQwYjWoAy8IC4HnMrGuyJMKs6Bm5zfL0NVeZgVUeFKMIIAQkIxNyIeh6LlqIYpjHH2UjMb0aC5iY1dmz7V7gjl92pZd8RUrGYBQKnPrjmb%2Bvg88M0ckDDaZnUvtT9UCX%2FbJPrf4JIV&X-Amz-Signature=5f70c005ae91bf5fbbb546f379df21be5fbf802ec6b773dac214dc6bb4c0dfd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

