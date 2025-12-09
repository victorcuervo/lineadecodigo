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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYWF7G5P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxwiScKZgwlYvgUZ%2BiWRvpUp0qMu73afMlRuB0D5HOQQIgbMJn59frnKuStlNAs%2Btkjxio%2F9W6nUhdRgUrXyBh27QqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNY5odPmne2zOCj1mCrcA%2Br%2BUZC1raQ%2BC5%2F9zpB2dkTCoZw6F6VXXPc6tzfY2%2FD7mDgQsV89lku1MfD4T%2BYwg1xFb0A2fMlnvG%2BUg3WwjG%2BlK%2BxRs%2FA0LvGQeKaZaGwFaq837n2eKwa46%2FMiGmaD5qIOzTZiybUOaYkhvi2yDYt76M54acUsmba8G%2FB5aGYTfTSG6B%2FThG05s0hJD7tJ5ekuH4RX9cMAbdJgAbauctlw7veQb12M1DmaWMxHCEVLXURf4sfgRNfUa7oCd4EQTjQ6kv%2ByzzQ11bWux3wQxqNgvg6cq%2BnIJtF37jelVj2mHnGWvlO9LNlu7tOoqFFFII522hOInB5CuYVgFSgPo8mTZrdLKfKm8OPsQYLObPt75ozdGprwFkx8VfamMx3KSzTkL%2BJBRvJkeuL6miP9ZBWOqrpijCnUkiAcCZXqzRasRLL%2FHwnmxUpsvAFAfhjBb0V5PSvIt8xJZpHEX%2FMN%2BQ3oNQTQFg1NQjNagh7zAgtAsoW0ks2ESFuEtHazbfM%2Fsi5Q78uNbMsh2b%2FfvIOpyZBXWxsKpC0%2BFE2XqNm7vmGXSXUZxj4ImRgk%2BjYT3fBWLy5Gon6UU%2Bmwi%2FlkqF2GuX%2FG0sgOyWtqjDDMx48wt9iTcaMINpMxaLbfULlKMIWP3skGOqUBQfNS%2F0C21WMphl8T%2Fl4WnM0iIxwVkdVSySl0Y181%2BtUHB5aIF7GTrLoAhBM8LBn23xKQmPmOojC9ohhAN97tU%2FK4RXd59OOb4BnTF%2BxQMWaxjauvF1RFWbogVF5hDzK8KrxQfXjJtDMODIpKq7evOoLJLAEE%2B5tX7pnBybJO5cIKhz8%2Bv2OOIQ3NL9MsBZl4HlgYnURS%2Bnqe0W1%2BpZ8CPXHAAEJj&X-Amz-Signature=d08df854986172c8c384692bc8d282a64e6d85b68afaa0b15c86e598efa1d9f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL7JKTE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUYEe8BrFcItHS47w9PdxVvMTtzvgWrGJgp2y4PQiawAiEAxRKhulm3UgQFjjVFPjxVV%2BsSHXdLZGymsOuxFRR7FHQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFLl4sNr5dGeDuUwircA9zF184175ENmczSWpRzHNokbD8qH1oWumRdzErzp5FL%2FmIIx41Av08%2FjUQ6t4KVFEEawT23VC7MlmBhYgsJKD2%2BaCJOPy5Jm19VSAcvqcc3MZwZToPoVeBRjnF8rJNDvOFeHGl%2BhYUFyET2baHNDVa9fjvV9l%2FJyisOtJfEJhQs8dT%2Fpc8HGNVA%2BJ7Y4Yi%2B%2FDnVM8ViX%2Bv3iQzvgN2Yno8UyMUwPtryfEhXoGt9zGIyR40pedVe%2BW8u94h2vXffFqRO%2F9Mzr91VNYnHLvtKZz0ASoS9DJlGcMeJFQeqOhBloOQNAbtmfT0OXz2fVSgDQgNfONL1Zkp9fDVM2HLj8pczgMQmw7Ye%2Bs88hRmePUAYi1MHSI%2BpDnjTbH4SDBbgBeUXLWW7ED9DTGvfaVcyPBNxklYQp6aOg9D3jiRHUbdmXbRfKwSHqUzU3JuvIJTpbAPV7814xi95%2FetZgZKWX3Zbww0x5n2je2Sfw4E2zF9BjODuT6gqatiFfRwd7QrMIL3DT5YATN%2FPgz%2FzFb9gyrsLlqVkVemMGKz5C4XgVZRAwSScQvV3dNF0ieuOFit50YKGl1bKygWcT4NT34ni22w6qsUwmztFL9qIod5qYRQVagTGH9EUJaj38CAxMPqO3skGOqUBV67RlwPhBQ%2FbtciGys0aSABzVLbiXs5Oyn1tXiCHAFOJ23YZeNzsrNGyTgykbp6MeQczWqyX3%2FkXSM6q87Y03iHD2BsKu2CunXnoeGHJogZ9P3FTA6dg%2FS%2Fs86eGTW76VkC%2FQCV9LQTdyUcs8NEqO8jiG%2Bl9EjmCCSFN6PbW%2B2pHTijGYJl71WkzF5fGEjC2gIznouVgfXgZjsRgYwRzzXygI2QQ&X-Amz-Signature=2778a559a40b2d5a8159afa7c806bf8bf7a316c63732cc401a1af86ee971874e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

