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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5MHJGG2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8WdRAmOvQy2d9sig7G0mZ%2FALuGxeZvUtH3SBL2q0nmgIgHUPF%2BGG1UgptamlEXVMmHZu2T5nvduvb6Y3%2FB3Jdw5sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDE%2BKqty4JJ7K03cGyrcA8RiiLNcgSNQJK9ZAlP29LWQNi%2FLQ4tNeBlbxfxeeVEVZOodhL9umQNOgn84z4Q0qEEUp1ock7eEPqb7cvJb3xmj%2F0OKqmABuNwdN%2BAYIGFOXgBLzitvyDQrqSB4wCyQAxrxM8hF7N2DascndZ%2BrALT6Mb59jvyTPW3VNF%2FLfX4bUcZFW4tH3yd7hhXgjpk0f3raOP0VapFwnuCiK1v%2FogzYYF9aYTRL4HTra3m0pqqxZnYjao91saN9J2rsr9WV%2F8S5mJG%2BYg6KJ9wRfwenWFqRY76yfuwBQVIe2TFbsXg0zTxxbw7CAAMiEvSFoJZ3OcKa8l2e3SAj53tAPw%2FEwkSownr3w1mSWMlOc%2B2ObR84I%2Foc5cD7R5%2FfFvBlV7%2BJF4a4E9ALWBG%2FUIPwWS7GwHYmlvOKSvcEfEL0KLdoqrFrIAnzwqfUZjj9OaraYEj%2BzDtNWNWjFDgOsdTPvyeatX67u96Dexs68cGCUoI0ZBKnl1s1rz5CunoNhAr0xva2aaNVmnA6yQlCy8lhOY5fKbcTABvqLvMViehSrKM24uozMke4tGkLfAeeu4BtX%2B4xfYIcnRoE%2FyzgVRcCAkY2%2B%2BVG8tSw4%2F%2Btk8VBqIy87oOqhfZ6qyUvKXlqDbzQMIOMyMkGOqUBRmFdQHw%2Burn6W%2BiTzS4frcjqb8tiYGRN%2B6O4cbqhlFmbRTq3BooJW%2FkGOzfqqFYWHLDxA3zneg5HIdlL%2FJJFNBwMwtwjAnLT6bQha6eXR1ZcAfV5V399b99D7BcfpTxz%2B0LUWgQ%2BPGglH%2BKGEpk8AykPD0Cfhpyflx%2B%2B8zD1AImPK2MWzODz7DcFSNuYd94bwPzC47FUIbh8KkbbOfTljf8ipxYo&X-Amz-Signature=a1e50d578db2e9ab88af4c8a72510d49f841cafaa5dadd8e9b659804089a7a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWHECQ7U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3vHXPIGRi4URDt1Na25%2BIO0bfGCRVSYeq%2FQBCs76dVgIgZWPTBP8hw8fppDnmkekBsmST7ycL%2BtK9M%2BPcLtF4Hlsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDO%2FDItvOAeXz6gFucCrcA4viCl1MJ86LPPhWSrffogY4KToC1Kma8oktBZenjY93IA81HWeB%2FiJ6X9Sr0NmcmNYWY%2B%2BkP3cl9L%2FAunJDSKmLWQz5z30ac1qpsxXUzQGSHlBjB4LxkgGlFJrD0m%2F0mGS3U4S1XZn9a0J1bH0jQ7PWeJD1KQsAqclQFvlRat%2Bx1NmexuUjJ05scnAHAbW0V8y4%2BPCJiTV2%2FnY%2BabGcfJyvYe5BaVjmSI%2BgD5%2FPKN86SQmzKQkTKMvg31Yj0A2uTpFAIutXwQfqhL8CPWo6IwLQXDZGTTbf1fCqtMiC2ZwQPPb4JOQP%2Fj6KCG6e8GNlzWXv%2B%2BkrsIf6p72y%2FYZhaXhmSQRL5a%2Fc63T0GcbgFkuiNg6oMKrKJZUVm%2Bmu1jE1aesgVboT2Xk3lZ6TrXrSVoaKGmD1WFnvc4%2FNgdFVz6OoQzGvx0uinCtB39rdcRF6LXR9nQyxh4HAmTIsSiarbVYsUwP%2BTJVUJGkOH0GTTgASloGn%2Bl3F%2BgjaJI9XBSdeskmV9sdxIcHvUzGCMXwyAz6%2B2qyVbKVYMkenEcbpZ0cp6mAy3izwSt%2BjEy3C6nZsK9h4%2BmZceQ4bHJo%2FPgGrU39GrpOzoVtmLjNE%2BR%2Flq%2BqImF4lj4RBztI4Go8aMN6MyMkGOqUBsj6O0vPFRjGZqBoWtqEUYGrEae6P4PYp6dlGF3ZfH1RyMzRgUgdXMODfIBAvFD0h2Pr3mKKuSK%2BEzz2CG7X313rkELWU1z5c6%2BvDp3bwgR2Ai7t8icFC3twf6HrHPY75BXa6v89kFuKbGtPUgoRkI6DhReRZZCxaAiRPsAb5Sz%2Fd%2Fr3i2bjyqUDnQuIL11Wc9jXQHtidzQzGYxcL82kX6Rpn1pjF&X-Amz-Signature=feca08942d268ea00e3bf7d5553b4641cdc338f05f86b5967c30fb1c60959c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

