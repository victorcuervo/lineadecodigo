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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIPVERZL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBA5AjK6Zo9Iy83bQQ84LkPNT8Ga8pgMQXZo%2BL1e3oGgAiEAploFJP%2FzSTKGeiF9bWMWVDKoExMBxpi0NJQLdWN97IEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDG8MpVaOP6qaeaHJuCrcA5Acr5QWfJhT8bYLaQf0fGOocA8sGWOG%2B075wIq8E1rW7uXCtUu%2BD0G%2FOzJxOoHvw2x7S%2BOVZC8jInwLrTF29nt2A7eaqlKHmgfwy4U%2FKAnfjrqrjLq%2BEHLr7LYBHRBSAbjBFN0Kii%2Fqw%2FDz%2F6xy0RjE%2FZi6vwK0Vto5205mBTnj6XmCXL5FrYWY7nY3AEKAgASG3NfDixSdM6XqG3Ise50loEQz3%2BRlzC5XVuALR5ex1Kzuiq7fBZhKcxcKg8Jx%2FJJjV9oVqjItRPtZWLaBbOth6XjI9KDUDD4lSvcLE0U3ABCZTyvF2QmrhO%2FblYqU4lXdDH%2Ft0bV7tOdRLKgF2QsXtJdKVFIdpcpAdJtOGlzJANiaCklI1NZGwd%2BGdysVg%2Fr9LZiwE7RM4Pb6uASCpGZFP6Fuj1BNabhOzX2SPCR2evRSui6O3%2F7lLoO4eHZfgiDoLCVDNT5jl7OVCMjOJqa8Arn6r%2Fs2TVz3FuF0jPP7wXdksE6l187xRUVzeHnECHAZh%2BIhJ8PXaYnHh9Rk5fn7UG6GXwdaCfsLwPIE39m4WK6wta1c9c7NUk0%2Bp0J6XiVJzB0vEKR39Mw6Dicdqu20UsleUE3YbqUcfTjxLM0KnTYQ19hoouRJfulQMMTM0ckGOqUBX1iFmhV3P7A4SrMiS2Q%2BRJHKV3RM6HaVxEPNPCXDc%2FFbfEwQQ3qnwjAg3jemzX32N2AStrs9LyiM9lZjbjqDDUupamKJJB0gfivJ0iDCohFfyz0z%2FK54xeZeI%2FTE7TsItf1XcROt6Q%2BXOS8zxxC6KIzRtSb9jgf6Qw9ZJTx%2BBfki%2FqpUPgAXKP25ZCv%2B%2FiTH2CoWN1OTJ69FsQaB3nX2D4W81H9F&X-Amz-Signature=023ef5d1ca639d224b30c25eccf48cb95f56c3e107a0ce7bb4fce78eb4a2c0c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVI2I52%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbCfkaX30OfA%2BYWH5cafStfPJKdMeh1N9rab9SQ1puAgIhAPuUP4puUA3N13qncvk1uXYf4I1ONQsgpUE3YW4BpfFRKv8DCHoQABoMNjM3NDIzMTgzODA1IgwKHLfh10gGWnRa0oYq3AMOv76kiv2DMscsSCqdpKkdw6QZ0Gu%2ByJ1x6CpUzdMQmJAIzJU7X%2B1%2BIjIseOfPkB3ZIYWz38ABg3dH9I0FOZU%2F2QcBReNBfMxZwJGoWim9AcMz7BkTSawIjArCYH%2BlaUdRE5VpV7Bj3l69If%2F1e%2BMnruRlIyXW2a2dZaDG1w3BgyJF4xuBzScksZwUK6%2BvVk%2F7e0PeTrxaF5g14SIwUZorHtVWv4Ftz%2FD4tRSuM3SJHvwWJC0yMQFOb0tKj%2BtIf%2F8rD54A5H4thB3FtuUZ0pMVOBHhydDpVfmmP4hRkghDMZvZ2h%2F4f1XNTx%2FOyZ5NOEPktcR81Y2QIK9zlDKxa33fu4qAelLwOdaa2diPm5fQhp5CEh48dKinuNXzdvbUcspa7HTC7kfHYsS7%2BLVSoyFbkdFldK1M85tCKcebz9sqv%2BXx%2Fg1PGa044wkDqQTqBzxLCIsI5zhiBHvauJMOyHVLjFo57oqA5cfhGy5iQ99b7dB8zmTqychZLfkng8pVCgnI46cmJe%2BEfJB7k%2FdYlwZXw1gLKNOXhINCx8wf5Rco3XFyZxif8ZtOWK2ypONstiLnXIwOAKvbDaGP6y1jzX1EMM7gM%2Bp%2B%2BzDgHP9jv1%2FxSCNtpC3V7QKWygtTnjCWyNHJBjqkARliLGJTqCmMBLhy8WaWPaEyOM10ITE2kNYS1tHPvRt4i887w0bGX2tqcw6Gx%2FVmR7w5yEE8sqqxidXs019gbXt8sk7yW6AqC8HwljnuMxVCzLRfSFb8ZRKFo8j2FzZqzIPSv4fXJ5x3Csr9ZtOQmz6olxswxh5%2BgJpro4JeNuxoBxy46eGq5lc5vXnqd%2F3BYlE59FRju3U2nfs0cY%2Blugwgzqrb&X-Amz-Signature=58657a6a634cc9c79313bc879796cc149cc7f6500a0035cc767be60d89b405d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

