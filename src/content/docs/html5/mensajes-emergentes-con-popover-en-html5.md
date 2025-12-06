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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JBC6TF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPG3fNyhENKWY1FMFuLzqp1upAVerrUE5m4PihVrWxeAIgUiSNL2DibVKxa2hLgQs9wsRIr%2FjhlspUaebaX8NKaRMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCkeL0MmoYqH4eoIlSrcA8%2Fppxc%2FNLQ07%2FSY3E1qdHcrxW%2BS8tp4RpC86AP2jVLmTnWAszbJzISdQoX7sS%2BV9KMFAEzlsGfH7cXqNzYzjG1eFJF5bMuQHhYza%2F9W0KJmFXbm0H%2Bl%2FqJJWVgJlukyA%2FrH%2BvdDPfoA9X%2F%2BzxOcBNOK7pY5RHB%2BW601AK2DKafKkVLIcBmDY6cKFQ4up5BvoiAHzGvA67V0QUppZi9Qxc0zWUIbr5YDSUs%2FOqDPhPjrSyH8g6f7mpGX3ksTie%2FwUK139pYW%2FG0qfSZQJQ%2FkvxwmbM03ril0C86v4NfbUHl6nhJGgmpfNruitZbpxCpRDBTTbEiMtvJZlh4TyZjNyRONlZ7gVMWhF3Rvv8XHgEgM7nZdb%2BzcB7OrW%2B0b0kUsX5koUfv9DMHQP2ObdXmaM05RjXyZz13Jes%2FrpgOqkTFK712JIz4arzUbIH4LGZ5oS5aKKGSKOi3nWI6xNZTS9tf2dftnW47PXaOd2Ymc3gNdrdQcEy%2FCJ3ANcC0UgiMXNjubOy7%2B4isyRq35Q8snujvVJO8hciaJBq6xSFDb2mqTDWmgQZEzoAXqeCbde9oMcMY%2Bcq5dZer8QlGuPGC7chj9PD8QHhRLgGK2QZ%2BAqG0LTz8LUbvaReFaobz2MNSJ0MkGOqUBudjO2qy1rebzXj0G%2FYrr40kzNXxO4rOQIvbMWy6y6ZFx1rktTnXP7Uoihlra78ycYS78jQx3ri7n1NvpnUi%2BPAJB7EsQBSGd5P1kxzmR2WJ%2FIFKa%2FUvrP5sPo6Ll12UwqmNe7cmqcgT4OFWk%2F7hq%2FAgyqodQEAtEWVvW%2BNQY8GC5K2scXw9medkK2tpFfAiwvdzT6RckJDdRFaSZkuScd3v8jKn7&X-Amz-Signature=cdddc27e4052742f941229ed4d99edff7583d2b6c3ad47c79e2bbdab8ca7464b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRT74LZR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzFIicNJQkiuFVtyyOxySdX0jQu2yVl9XVh3dxb17NZwIgb5yWqR0PwfX7fcYLqjZCIum8gh%2BmbzGeoCi%2F7VKW68Aq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGQYOKcR4nS2FeRCICrcAwygHyVgiz68TC2%2FRtl7FlMXK1GBOsJi60SQfG6iB%2F0Vgi0k%2FrW%2FhRhJNqvqnIFLK7Wr6xOIsqsJxezIJt2samueGTyxS0M%2F6N9kbd9tfoku7P52nFRY%2Bjj%2FDz64BK%2BIoauJNoOp75%2B87%2BTDE%2FpYFnmE%2BcMwmzr9TRPtIppwmL9TRWE%2FSnOxEB9hLl0m3XhhbQ8ybHF6CpXxA4AdrOYDdccOcr2MUpN9sihnrDDOPnLMYoThNEyB%2BGOfOaq3a8fe1F%2BJksXzsjO5rc4%2BAsaNaXyRYeTG6wqIk5vwcNCxAezF4tyHUrvzKZPzPALHe6%2BbIIkyb3B28v6IHpX5OAMKxu5DnIa0PNhIwyigM6hCa8R096C3X397tRcP82vuglPQpNhKxEkAVTCrrR52NcV0qQE37HH9Xp3yC%2B7qhlMARmc%2BUHzoAbKXP7pW0%2FFgVEQEwC86oeXwRFsAEqqIhUP68TZsUsjDHicxbAtKObwejA0Gjglt%2B%2BFm8OzaxFbWlSgQjezT9DmOrP5jTts5OvVe%2Fh2IU9CtvZV2%2BWQoU%2BIeVK6PCFOADBoL5rRTx33FGGJKDoP7XqUfGfpu1OEMD69EgGVurwb1OVDaGzeLePrOmBm6lRJzKZexyWkRCcoEMISJ0MkGOqUBtS5iaq93h85WPVU8fwsR2Fre2EC9Mw7FmpZqG6L%2FV5Oyg%2BcpgQ07N0yQRpvB5LPbXbwOwDqgK2xXwRsBV4U28l03ON6PPLmL4LyZwg0RvQtPbECCchftZBzDECWkrvif7BWQGlqBa3zZcAx1MvLVThSNdE0AvZvkSpfaxSp%2FSVauKPLhlW5p4qJx%2FlGCwS9ggdGX7ptRR38N%2FKLarBFXcw9iHYOS&X-Amz-Signature=5ac5c1a9ae39b82933ea80d63eac993c78c0f2d08ee2fcebb0512b76c53e0290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

