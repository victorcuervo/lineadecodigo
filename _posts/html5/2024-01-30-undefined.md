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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJW4PBX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEQX%2F7FqdpfoIa92K0uwAzUpW543NO%2F%2FjLLrJLM2RuImAiEAy2z0AR0cDx9VjKrfrRIEm3ZEsKlcCSVizJ6%2BJHbv3LUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDG%2FIpjqwYfJL8ktoiSrcA16FR7cWzWNWLVshETXwU9k0lMhHc67iLsAOpBbrCJukyEQIA%2Fu00bBj2PgC%2Fu80210GuBcLCvGuaN7TQZmt%2Bylu%2FzxhDMDkK6dUbrJYEWPSBYTZ8Kj3tuUv8gSoSIqXT40jlJ0uFnoxBgxDpdYNw004V%2FLYx6JRbHxHzVD89FwLMghu2URFHu0z5HjecCcYu3i6%2B7ZKE7sfperOhvr%2F8PBWGS4gMUf6ykEcMJjbYbZXIVTsXOQ4enPNQ1AYqRJYO5CCaxPu0%2BX0CN79eDmoPQtJhhoXdplN3y8Q8ELkiadDRYWGOwu7bC1zwBf1EtsS%2FajyWfwXZfOcSg5%2FdKkXTPiDNJar3Fgcj0zR959PQMH5tm8HCurIwR2mmiP95%2BeEUvaZgyUmxBOIa%2Fg%2FaXwS6%2BVcvGrnTPnN3C99nL3CflHzDkV61IrfgCjcySfGQ6RQlaktIqWAfnZHciNAYoEc1Oy3r1srXV%2Foe6xHrxtZQqFSBP%2B%2BvW8a3yZBCy5wqeYRWm2vfb9v1XpkjGggVwgLYyWhgRfxWXxOJ6ebID936cTehzA%2Bw9olkIcazW42wZ2nFwe5tmKAiyqwFHFOfmKcovPcmSyVK1PO%2B9BovzuuoeokqoMUhizvWuvMp3fRMK%2BWvskGOqUBMi%2BqCkpCrF2DWjkFhQLYRdHLAUbnKs4kM7oixXUMe93lYLfUusbuteNi9pF1OEct9jR%2BZSTS5qHnfKgrL2lkYDcVwGZu%2Br1rKyv%2B1a20KIMaG09WSycSMX%2FiRbSaue5M6lCw0GSml%2FfBhwEF1lTOwY4V6K5BS8qwFn%2FaYh60kaoeDKGTdKqn4QtcyB5IRfjsM639wKy1jxA2mJlEUZIeGL8bHUDK&X-Amz-Signature=fb4595fda1d51bd4e4cba2663a4a06250843f3b33437283ef34c787400505618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCNRMC3L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFZh0jtFzVTUxINrrxYaAAXnCBeaHZxx2Ehj28VOOSu3AiAPZj%2FlZrWxqBpD3gUOh6tAjZHxTx9dm%2BnteqaW%2FjkFKCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMXLANr6H5OH70Oqj2KtwDwzuKE9giUXzX3G3llOjuLZ11ws0yZdnB7SZvIMAXNVWM3JDemIo9eEtyBOmkXvNhuizC8%2FjcJzTHgLx0sfHFUOk%2BtnNa6s0R7n5pVuXTBGPhmBNn8ZWPiOnD000Jx4BMr9rkjpwHzCAiqvjsKdLsAI8izJ4Dt3EtzIrcFX6vT46qEz%2BEWG0U%2BLdu441pQzz4Xy%2FDncjmNzCO4TT2Adyg4Zp79PaHUmXi%2FfpP%2B1qd%2FV%2BzHvY%2BxWL1VO5K%2Bb9JuwNj2wQKwnP04LnslwVyNox%2F9irIJeuM50kkqhjQVT4rfthMCwaw1d%2FPDsei9HvYqIZdiPxn6nBZRUvB%2BvjcgFppDeLsHXo3lvmbfNDMVY4zVs7uG4CV1MmHwFmgsvigywqwqD0dDP4HKc4sEKh2UAUIY1Y8luG5Sn4cnjtJ7kBd5iv7L1lr%2B7RCl9J%2FYLwfVuEo%2FdETMyb83zWgrJXSMspGlDESsozjrHP1E%2FF4f6BVOIWaXsl9doKUjFm8iOeNG4TSJ4PnZWfSyEpWN8ZINY0jV60JjpXykbM21kdVDkLyvOtNlgSwzXp8Er0e7rs7dc0rw4wnY%2FHdpp8EqORvS9vg37oNVTBbyIPx%2BF4ReQYqvgFLw%2BZrKQy2j9TWAvgw1pS%2ByQY6pgGK%2Fj2XNDWdjNQZk2mjCZdRt85EUMdlL2db8KzD4NSNAzn3UcKY5sda9KJOGPL264WmeeEdqzdbHPPo8AF2qxvvgwWpWIweOqt%2BPvxP7p8MpYf7Aa8DV6eS7fY9UIngQPmjrbO2zJ5urJq4jE0NueJy8mK6YPxgNohJVvR0biFzS0was%2BoF8nPJy6KKOdvN0DlZ%2Bo97JVQkgtdrYnqJ61xGJElE4cqA&X-Amz-Signature=902265ebe5d103fc088581966f259197a29fe6e1fca904ba8b67467a391f99c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

