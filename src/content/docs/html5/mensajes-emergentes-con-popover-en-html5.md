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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JE56MF2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQrbZSmImkzrcTetSfv8XqeBmiwPyUKyvHBP2ytUi8bAIgKas4A%2F4qIzDFacbWsWeNJVA6u3tRz04%2FoF3D%2BEguJmEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAhqXJF84fFgDuXrzSrcA1PQunE768uY1Oso1SaYwGkX2DpYgTN5FgaSulAi9UoCNM%2BwWqTZxij8QFXbQeke%2BEktzVOQ4f1GnxJruTD9ra6f6hGkoCoche%2FxnIgBN4PkiZj7x6PvvV8vbr99saoYkFkmuQMtwNFGRH0atbI4eOm20r08UnMvLhJsMxeB7vIfT9dlJM0UTc9bu9Ujiq0SxXMTqtGo6i8Mq1IWbLQybSew9w4owQs6PTiVWTnFjhVFTmxcM3kEYRgSIDqlJ2aKxq0ZNlXh%2BfV65GFe%2F28DABgspyFdOmSGB%2FG1KaDhJ%2F4d7xTIRY33Ol1rOu1N3kyfLuJLRNZqmAQ294%2FpMWkqtpOaauxXdQe1rt%2B4QQEhsABhV2TMgMc5PjLSHe%2FMAOos0cTCLzQlw78WmjO72qVfo3vYIjatTOtgH%2FwR1n%2FcWjUhKm6SLGcKaz8Um%2BLAodov0cmq9VfGyptgOu0UQwTxeIT3u2pQHD8pctJgx%2FMsZVJaYhGxOAEmbPnQFZcwYHrPxwkv7rJ29cU5ounbrJsWXKNeoMR1GYtRuF5pNK82tgWHThlyeiUX5ADFFEmFGCYWNiPIkn%2FRxB4jIOZ%2BMXiB0JVp9W7i3nFJ0WNnO%2B8HjiRzEaYX0Jn1f2qdJyTaMPSLyMkGOqUBW7QeD0jVb0oGkGZggGOClUKvpAJxlHl%2BlNAO6fOHsSrxDiKMFTFdE9EwzALTnLR4t6Pm6r4%2FHMFqh2urU6Hkqa6aV3YOLz8WkHn66nqWu7Od%2F4Tw4xeaLwB0tFXwXj2byKZvLl47g4GIdJsEcgpHk9fnrlCYbuHzXfjqDy4g1AbWjTP%2Flqpivxn4O5%2F4xT0ZtuMpXM0yBFQGZ3FCGySWaXcrtj7F&X-Amz-Signature=59a2ba533d179389c4a8662b6120e00fc574d6c4f321d9f28dc04ad8034808a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6TTCUJL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQ91HKPSU3U8j8ylgPk18E9eMBPhiEHO%2BPxzMqVP2%2B7AiEAgW3cViOqRInG4qZpg3LTC%2F6UXnDharGeHukRUW0TboMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDfV%2FNuaH1snqI%2F1GircAwoII1gGmmw7OWEicnpTBNumgDfJ4kV5HXhXLT38GAYmzJP%2F8Fn7pyTShFcfSV3tPwZuWhDjhfBPrpbbzZ4Pr5F24Pa%2BAHfySCCRZq5FXQarjHDyP8o3e%2Fffu1wAnu42nd3jOfsOr5%2F69wyzp3QCXHHbMZbn9LovRj5OAVQi%2BLXoY2h%2FeNsks5l7t8wGHNdM9z5Yzb4JQu8Z1iuPqKX7dsm%2B%2B8Fs6ydqACjI%2B585WmD5CUGqPOn0P9ZOYWEFcR7savgfGnjAJM81sZtK97fD2HgET5vB%2Bm%2Bi7aafTM2CEj%2BQ%2FEP%2BY9seFHjKx24yVV%2BTVM1p%2F9yXp24SicfCnQuge1u3i34EvP4bpW38QhUSwv4julYptfY2gr2KdGLsGB4Hj8eGtombtBCgVxiWJd1Ren8XwR4Nk2Jba9K%2Bq0P40v5%2BH079YGC7Mh%2F7d8qMRG%2FlpGtIZShrEqHWZ6LAoJ694HjKKydfTdev2a7E3UxcyQ3PdQiJNHgHGLDwF0BeqkkD6BfcXdp1CyEFhwUWT9AWcMAkzjlOHWVPe1AWGbSN%2BucRqB6f%2BMARMDgvD7chCuf9WrLB1JJ%2Fpii4cXjWz0hxAFkUGyBnbvaz6f1xwBLRcT2dhTvsCr3uP3dKD3EAMNWMyMkGOqUBNVcYOjUbKY3qvsJuKwfwK98R9RHbM1MQY2xPLSkt%2BbLi%2Brzepc00wqHGnQhqAVMGAhgZfKiWsXrGUtGcavh4wl%2F2RZZIqF34OHXeURNr42n6jUb6CJBxEd0Fw8bG6ioVcw%2BBC40%2FUhZ78%2Ff%2BIgK3zBvHxPHDXy1ol0BsZN4DpLpj%2Fde8aLrt2gtdmjs28mnPk8ifW8xgFPDKOjA46VSJG0wpLsB4&X-Amz-Signature=d5e4e0061e35da24b036963decb70d7c133e2f8bc4e036538445cc677fb7bcc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

