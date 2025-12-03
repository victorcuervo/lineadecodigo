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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UV37CK2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCHKX5WUAeUEqCEEDgrqT%2BO8LURqRhEPYPIjnsUsKdySAIgfpMRnThGoBxslCBtmDu649vIirX1k9TyIJpSZ4MXJyYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOOgi1tnpa2%2BR%2BQVpCrcAxkH6Pbj1Mn9W3tpLkn7unPxAaGXq%2FqW8R0b8U19M%2Bdqc6EdZKJcCTvdS0M15Skec5hUv8IpxgATgbe8y58I98YY4z2AYE3C8Ms0DYKwm1wIUMEcUmHoyRnaMBzGq2DV0tX%2BS9Wd4ZUcSQ5kF6zqViXQl5moWtdVS6famykLlnGcEzrYUwb6mnhdNz6erjSAhGQwtR28h7tToNJagK%2BuACOW2YlYZxDe4YZcmXGU6R4wm3WphvXHSKpNvJuUXTJg2JVNdeADWAM4szrx8CUc52ZJAKO7ObdYryL01hL4wH5OkqPa9h2r3tR8L4qHEI515ExC4FsdQVAArtP3AUVXHkPbrDQ71RDkg4gnat5dT0YnaODnmHvFmO6i6%2Fua2tJQlsJ5RZ0%2Bk0jxHCX9iOaXf0TfNNtvqHnlPVybpfCFzMtiA3rVcPexoSVz0M4vz%2BeBtlUIrnvGJ9RuSHWBOT116zERdpOBacwNcJh2s9IE8aHaksem1V%2FZgW0KgUcUqNFdRN7Q25X38NMvfS9ggKhj%2FOkY7CbueycZpwrqAfXb9Rah%2Bh5nJAEIy2y3vCdtqCeryiLjIFe5oHJAAfp1T6CAU3ml0HTEpaIOC9tTWmSNNcWS5VwANhvtRY6xNVAZMNSUvskGOqUBTZRfQC6IaghGgcviSH5%2BF1hlUft983%2BrgJCf8cT39zUE6vfY7%2BjGcWEMHa5x8YBWEmNqVtMlABnPjWlhzE7yWgIe3CFFGz8qfoc%2B1Jqh4OHt6fD6ogbTB6HvYi3tIexCs9oJe3lTogMH0sskVBUSSbRjqtByma06fRp2kbaoxqWo42y2sO2gvR%2FwEVE4OJMHozeAL3YLXPnT9WlkkJTUDzyC1Rf0&X-Amz-Signature=a141a3fa4c9a99c57efd2dd33715de79166d9ea307df97e182fe8596a1e7a2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANKSGFD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHVwOCEbJQXEkgH57h%2BMyzWRLY7IYDKMiBurZyADuw0IAiEA4ENd9a9ikOY1a9XZb4XE6%2BSJsBG8C5uzI61KM9D2c74q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJyKdYbrD409SXpGySrcA%2Fwk%2B0BNIKjpiwteomaeJgzHD3KH2LiASE3vUez%2BtAdUwBezQ22tx30uw4cqAtLsfhVa2spx3ZkQh89vpsqRZYSx1sNw1%2BrMBzzc%2BV%2F3Ub%2B8SFgTur3Prg6iEge25QtJippp8exvOG0gFAHKfM8X7FbTJonmWDn8lZijqYD5RRjZWcBg23k0gWSePSf6165bXhZYOmBk%2Fus%2FYzAjhSYfTmfrg5dS15urefOcjh87rYjcNqix9r35IdJ3vR58iOW6cIwo6OaZsqmqPma26RDUApY9qq7ayjJqQFrYxeNQqL8V60rI5PQ2ULa8CCeaJovL06b4J3nw3udmZfZVKcrY8WwL8MNrB5XqX93vRFGo6afzYCbrj9LYnfOkXajtsTfrdJHgEoK%2FUWiV2DZStjBHtD1%2BAv8gDFshFWvxwyCZWF3gxA2JBObezfspy937ts0NYOgaiDdEdEdmTyLYLhnpqEz591pmRsmpwMASDpH0wE5QrNo6Py5cM4KZcSHE3HeB6jWj3QU4WtPFbaRFloK86NTl6TZ%2F2L4RrIzcrHOUB0G4pAid2FhEeYBdihzFvEc8QnKxneqo0LNqcn37UPOQ%2BuSjcC42SG5h7NMyrmfkRctACHUGDYVgDx93iVoRMNGUvskGOqUB93F5ULUKwn%2FUPMc1BMd%2BGa2Q3L6ejYoIR1QdSPXHWPDl5ba92B8HpJnejkl6B4qHVpXMwKs7ujlSS%2BBgfoeMkEjEGZk8l2DgmFx4JzDzV9gWtxTtBUhqd2ypHsg2K5MARXWaYiq1KWAdYAWOREC3vZOKacTlKtd98gi2x2hs6p9lnp0%2FzmumNLTttztYncDMA9kVTwrj%2BknxoSZJ9b5PwWIpt972&X-Amz-Signature=5c64084037614c7028a209b8b7e7ac16245cbd821db4ba55808741a0f5b81dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

