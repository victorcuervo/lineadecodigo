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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANPKVVE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoHvWkGxp4r5PChIexObQTmKqBGhyaTE4stDEPc5HTKAIgAQrj130nxC4NT0WTv73So48DrleoxGWAOK1s9MSGZJwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNg32SWspuo4kp9B6SrcA%2FPqGubHPH4vxfmT%2BKa%2Fwue76rkCbfA99sSCV98qH5xyASOqdrADSVXrj%2BEx7mGfd8UtbU2dzbYuS5SNW%2FfjoviHMt9jNgYpFJm1rii%2F8eQCA2DLJnAeTHBMFL5WoNYMfSb9cUOoDSjqEdEsPNxrAx5PhBjets6mH%2Be7VubFuwsAZ2A2yFvbc9z1PJxapbmDJlTFvraPAk%2BbL2zG1uHSPlCHFyKG0eLJEoozaB4EWw95uDVnUVHA%2FeM6sDeYIBlKGl8GuhO2bs3FeZ2OPA%2FWfZke4OiVcYidfuIE%2FqT%2BBoVNd6LIBB7BSSBQlKxLeoE6UIbip9QNpjeAV8SG7yCf0oQmRYyMrfEwppfEgIMmwf6d9qqYHnhuMUSN5Whh2LE%2Fbp5Te0cnyL433IZu%2ByQTJONQgqS4%2Bs42W7HqT4oqcCjzclVE5UBFnWTuVHw1dare6QZGDLOSZS6nbQ8CSFvtVejBoh0Yxt6MKlQ5KtFERO2cQWoOw5WQUAj%2FmBFkt%2BJIB5c3ae7zHq2WPtRJ5YTSTm2Ra5pvA8X0qmFTn%2BKiUWTUUexQNSN1eAMzJB3OmXGBbXs4rL039LwbqU9cZrxv8Z7xDWhYLINlnqsOiLtO1wOL4aHL2xMhohB%2B5yYeMLWnzskGOqUB7boEUs8GAjg78F9SM8Y4Ld%2BG65QMZ7sfe4eht%2Biy7HfPVHw5bj%2FhYZNUllCtkoJ4WaU5S2Jkb%2FKApm74niIuawdGpA7Vy0e0uPLzGnaE9wX2Qiu%2BW5ejrsnQ%2FGz77iwCNbcjYaPV%2BXk2twBhgaPIg4ioMYsJXHxgsbElvp6K3791znY1s4hnrtlizzJEJKf0TnpwyAdjqXWV7EFqkiGpvyOS2B%2F8&X-Amz-Signature=b68bd589fb23ad3c46fa23b725012bdf93dc7c8dff37729d6895ba4d25ba5f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWHY4VAN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ5wxsXFFPBVC%2FBVg5bWaTn5NM38x8Moi1fzTIL%2BpZoAiACvDpFakkGY6j1ad8J3mDXJM7wDb%2B2dYnGRt%2F3SA1CEir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMu69OTED3unshg%2FpRKtwDcbVNwVeW5DQgsUxzArz6DOouidQRrldga%2FHHi2tHvEK7YWsCrQLu0loywx8gLKVGvBRs9dyAmu70VNJkQOWNx67XbG48Tgtk8ypLJzYnpzrw1EfqpM%2BkTggvObP1XtT5Ih3OK7AqOhK0pW6u%2FNNJXaA0tFafXL0KTtiaodWhKIulNrAdbF8Qb%2FL2Bt2kYN7ni6JjC9gEq8ICBKfEIlE44pipYL1UPajkUDWwC1smW%2BTRpr3EUJF%2B%2BKxK4WLRrozslKENPXqUoueeozcx4gQP9tmPSYrGUQoDc09P49tE5bA11sJ%2BfdqbBe5vrbdl89CqNlPqZj8kg89%2Fo2WibHJyvDu9o8dCamES3Pg%2BuybQAb%2FI6nHYXSJZTv6LBeiLnQPXQ9A75UAify46X%2Fa9uiCzY1RJqIFw627VTkqOEaMLtMuQkHfWIWtx8RE%2BzvSSyyYeY42ZAM2cheWn%2BZfUzg5HyhKHzF45PX16eBby9IG1bYP9RBHz5%2B3URedIVFbs4gUXfiDB82h0IFlj8JQyGNfH13O5faA5gXsKJQinFdAcofzT05thqlo35GE28pgwPPE4cT9XX7yMm%2BMIqF%2BAfe%2BNjNWoWI8TAQLk3It4PkbccBgi54mAJ8dvwFPohvgwgqjOyQY6pgGP75Qci6r%2Bu%2B8CLM78%2B2t0AAlABZE454vSnIttlAkcG%2BpvFq9q%2F%2FmbqXsbPAie%2FiNkx%2Fh7h2%2Bx%2FSJY%2BWVd6kQ49caahItuzhrcRq6PFQK2FLGD1lJeGMgjy1u%2FOpRbE5ntIk1ktJj5HdGvCJJscetHks7XQsDxZUDFmYPRThem7N37vHNUIWZxQlYNCmUdW6msYm2yI9%2BadsuXgMJmYOpFNYjUJqEp&X-Amz-Signature=5cda71564243275339d6a74cc45f508b7160a9f2e46a08c1c3321f57db72a48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

