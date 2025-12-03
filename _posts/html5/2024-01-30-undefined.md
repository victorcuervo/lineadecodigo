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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZ23AZ7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC6EYDbqds6QzSeN88srO%2FFz8cXn5nY6D56eJTWNoOHCwIgCH5c4vFg1SW8C4o58fMDJN15gmlv1S6D9G43jKvPTEwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIFGq7tXHtg8ChSTSCrcAxQDO8at3XSA1BZLsF4nFtToz%2FKY3GDEMUV2iD2kas9a%2BdeGXFRZI4jOlAxOquWO%2FVpUMCQyGVrDKCuUgdoj9wdKmfJfAiZrv3GLS8Hsxqjom549V1rKpuZEDgbE6HSPXflMv0GTHslqxxEVQDqKiL2NpaTd%2FhyWlsWIN%2Fm6bTUtT7LEWSR6B0YJ1jcAu6g4PmtCJFJMYBC8rP0sVodup5lEC4ykXcTHBHAcv3hVWXXPHY28mauDO6wqE4lRycqV6zwb1MgBwi2Ljhnaulr8g%2BpPSy%2BEyhTVTH3YNumqsryGCRJDZHLQNJ4l0K3iPNHz7OgDP%2BEKL3flPJL5N1AIqCJZJ%2Fp6J1IWedUL3cPp0MNYW1W1jGvDciKzbj%2B9X5cQdgKruxdx%2FiOV3gyzMFPrmfBeW7QiGG4uyShGu0htXZte3HiRkHmYbUhpmB%2FYdSKpwWd25z30Hv6vcWwZKvaqNAo9G4mGfEfRIMTOnX32iYndsuZ9RUKJK2l0TVJtkGXuEXTmAeyb81HJ2hDF1wnY7GXuuI2WrffiOUwHgC72rgNnzXtGHF%2BRgjBUUIbpxlvVl%2FS9OXa87rzLHPiOS6Ylzrp5%2BOPq7u%2FBVRlkP%2BM93D9EhJvIcziR44Rm4bKcMOqWvskGOqUBGi0FFWcXfTYEByeFsT5V6D%2BSpP3TS9DGH8I6AKDOk9YQJ%2FMKv8VRBP58wzssdbPsqw7Q07Ve90gYA6ai6xitzRvYaqIEbTrUX59E6jOHBdB5UovvqkQyudcNrJqDmdVe86bBoFaZJn0rT%2BzyezEmCEKbLiw%2FDUdT5lAQhdRof4Jx%2FrDRPRy87dhGeV%2BDKKo6ubZU96L1O%2FGO1o5fe0%2FOlN%2FSDfkc&X-Amz-Signature=b13c8d99b7a9d54d1a18372ffc2c61e9872d5687ef11e669a87ea1ce70b2fe7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJEUPQJP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2Bl8yANvaM59xnLRXTfF4A3JSrvRs%2FBGzqkZ%2BpequGJgIgPHi6Obg7WSZjFDvjPTHuMoEClgcdOo%2FFDktG5LNY3nkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIijBbTbOWC7CKDTbSrcA2u2%2FyYkXRPDh6ocLx7fzEXtxhSnKm7OdqhDUbO8%2FHK7GRqZzkTUnSY%2FYKo33UJEXr9rhajGF%2Fi6bGEIvdm1YgVQv5AS%2B1Q1bUWObA8GM8i4dpUQ%2FV2uqU9eD9Tz0xJbJAH%2FQdSUBYFwpjGL8cSvmmshreQyraeOGIGXoKZJZ0ImdbiBkiFRPlWKavagLH5NHQWyU70J9BAdJJYZdSFcvayXRjzazSv%2Fpja6vFPC8b5AAT4j2dInDp%2B1%2Fr%2FBAnojJVAZMq67P3L3GNLouZlVsxKU7O10173sKdAvMTIETd3Cj2Hwk0KwJ%2BU0PLyNO4ZnF5w%2FaL8xq05dXgcgLZT75bRNwS0PoIckwd1efMBNw%2F9uibMtDnHEvpArs1kDmQw8l88EoN36757IVapfdoSacObu2izVbuZU%2FMO7iZImXJ0HxidDf%2B%2Bk0gcSRGOJWAxf%2FbJqQ%2FaKemsXSacBlQ5bIvexB73qzHVg2lfnKoapfk54vFFjdRgkidpdcEzydKeuXZy88Ghzh%2BRdsrxI%2BJbOwdFaddJ%2F5yIpcsiEj4o5iTJe1okL0jxCF%2F97PS3g7fu%2BAreTuzI2%2FJuRnfswgNtO1ABlhStrsR5aKSoYv5nWdE8mmGdmjXbdRQiXkmdCMKCWvskGOqUBLkSP9gdSQ0GbCqRnaH%2Bwq9ESVSr6gVy9XxtOpGZ6n9n7UF7dh6uk4gk6Q6%2Bw81NwG3smqsHe2on0veHRh70%2F12z9kUjQTMWdhGwo7Z2OTdmio2tLCpepoKuZahozO%2FIQV7qgUSoa4YpI7%2BUkw%2FdYhYa2w6ua2IptgX8WIBcrbYJALLNWd9XKKZUnlcGgK10O5D2f3iR1QG4Wu2j0KeZoqoE%2BC6rT&X-Amz-Signature=47007af1d90ef75b7707a479bd2b23932aac4f0a565304f589c20232bdd458f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

