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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5SL6WD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEFBUc2DyWWaIdtf0SP1c2BdLKNV9KPGWznvyf0rOIJWAiEA4WhvL3F1assS3TS29iJgno59XPdbBKAX8AJ3U6iR81gq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDLVbxoES582%2BlBobfircAwYL1PWgpx1TeTqB1%2F%2BqgK2QurUzfojtWTWZ%2BBEiYEVy9hdDHmS%2Bb5demk6PFH0nsOQbIw6tsXENhHP5VY1E1vvBK7L0gM%2FFQgPqtU5FKbFaKS45c383ccktmzypxQF2WWNTpviGJDE4ULuqaLbN96dGPhH5GouP29M2HD8xAB%2BHquVXc8BojtSDH36wFsXzV4TVYdetpI85lS2DUrQWqBTz1cPhBvJEYFncrgrIEM%2BRlHd3PSb6zi%2F2qLn4ywxEyVQE4TahUwk51Uo%2Brhjx6SMsUogMXGoyVo%2BUXzOFJOB8jF0tQ8U6l%2FaV7PIL%2B%2B%2F0R3%2Bxrst0o1bfeCXsxDStkgtGd%2FRHKUbzU4B2wCmdpXH72lIZnoiCbfU%2F9%2B4M5oB4bETstZD9ynZRN4Pxp%2BC0391k%2Ff2SaDlLkKnr1s71Qwfxj7Nse3WyKgIL%2B6nPtxWTOpHdmQOulFIIpQXVW%2Bacq59Hf5gKKgFbdN1tjrvHd932ISewB72hD%2BkQNcVFolM0bvl2n72KtOOUnK2ihoPotliK%2FLCrbtJrltbOeW7u2uBSHitqFr8G4RQlIZFzAYa6vYwx2MdjnCPv%2BVO2zVj4UxDnIle1R9V8yhPLvKVsQWQUx8CiFx9WfTTwyAKlMO25v8kGOqUBqtzPzlwDW%2FE3wPpWOyv78O%2FoU%2FF9Bz3xcV6gf3H%2FzSXw%2Fu0uPb2vKahov1RdMkLSTYJgVMlmyi%2BN%2B3wNzoGwZkTqoT2vueLLRDuWNow6%2B0HhCeSVA5v%2BREOc3cJy3CJPBKdbEKFNM3SAkQeRsab2KRCzkOLtsFfN2cic%2B05McvCZfAYzX8O1oBlFbMTS4drO13rFYQa5sEx35tObAc%2FCETjOVFF1&X-Amz-Signature=4080b19fbd2b643cc7788f8f3543377076c8a5703ba29a3444aa09d3047fc7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6AUJEM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC4W0ZkmOaeUvyUVUnm6QKmdrbUFPOUSDYQ7VTQ0elqpQIhAPgllEZ87wKd3RYnhzkanOBMegAe4qWvykYYoNQ6RlyqKv8DCCgQABoMNjM3NDIzMTgzODA1IgwTZKDLXIgIUEcHFtAq3ANWSh7hwLbC9zBDy36OXfdbxi3k%2FHhcVlHmpVBZFnSGKWo4rAdCMISlovQ0PsimyrYWZvBiJYMxX72bs%2BIajxVIaDufz6djQkJHj15j4p%2BfJ%2FnHHbNcXZvH6wQ%2BdlCnadYeplfEv2up1KW%2B9iZFl0TUci76xD81E9AOnMwfvzRuhgjMDWkNeyd0rY6eLT3EAe5B%2BzkdKlrQf5lI%2BVfN3arf9fO3%2FtFPCq75%2BMxGFJLxS1GrBtkfrcQYlAgD8RKlNzE5Gs1KSg78Ug%2BiFD3nejixAqYC81iPZqMihXDTALIiJo96vGXP6V64XV2NtSd%2BVKA8vU7yW%2BUKhp5KD28immZr8DnDFzvj0YjSvtcrsTObVGk2HC9JCzHASxnHirVZBB0%2FG2yUIUDyNrpprESxeaqhHKyjANTesgSax1Jili%2FN7Y99D8DCvJ3Es1y4G0TDA0Ztap%2FYydZLJqaDQDGEWmKpBfsdKDOi6sVhHN9klJFFPM1Voqv6t%2FIkW6vxtNwVp5E3ZBw1vf6VfZkk08nXUKkjM3nmQLZdN%2FIqSNC1AFxzXPLQsmntbiJHZvvU2MAo7ZECR1WzzJEkKIBzcGLwKxlgmH%2BtB5J989P20blQrCrBeSiL3c%2FRH4gWVhpwSjCruL%2FJBjqkAeQBrKhj0ZWUzgxDD0jmivmKxTTKn%2Bm0lRgZhs%2B%2Bli2%2B6sCjFnGJXBM5zgHzq30%2BL1XxOl9PFOVvcJRYS4rdfq0OWt3q%2BCsqmH2%2BhExCZ9%2FBckl6uPFyW69dywMIPjiTaSbK0r%2BmBp5ZlL%2BDi3pv4%2BVuT0ZoWpZQiZmVxYUeoJcVbY%2B2DpDMo8r00HDZSPqJYE6mVuEm115cjJgbEzFtyfNZJ8YP&X-Amz-Signature=794765f8cfb4ee3e94b7ec9261cb2e4771a0b506c4d654d9b4619c1fc87caf28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

