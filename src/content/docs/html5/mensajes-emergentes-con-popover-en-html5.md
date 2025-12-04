---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QG2YJ2R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDp79Xd46kZ5BBt2ElDJXHG8tIud9XdvEo2hNeYLmoSnwIgdKVm0O%2F0VgeB3ZScGOZLpYYvHQ%2BsPcLu%2Fr14x5wK9%2B4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGFVDqL555P4Pq1f%2FCrcA1w7lEJApsZH4K52dmHf4sFP1sZqhSWH3ZwvmZz2ui2h2EAZltxsYJ6imMmli%2FMxOypJe9dkx%2Bud9rUVtSw%2FYShS9RF424UuarK2oGqpoctlE%2BoIW%2BIzf210mj37XdONfCZ4UPhWMO1nEYsbWWKejQBa93eJz9gZT816TGPBLrOLG%2FyoH1Oer4axPqA%2BDNaUCkzJHkx52B3TE2nP08tVmQv2DeabqtZ4Vw26q%2Fy7rmZoGFjo9Qzmx7DvQy%2FXpKWadNXS2696i55Pzxu6AzgyAZAwfGFVvmTL5wcWMWFsepCu%2FHPEotNJ5jeK6QFUfxhyBB%2FAPAlqOdr3u%2F9C%2Flawk3IRV7EAaKt9Z4lyEBf7LRo1EO5e2ESZ%2BhJ%2FWL0OGKQEQK67YOPwelfOl4qL2NltsTKoDDTI4H%2BkrQBQuDJNFCchD4VkTKBIYLKDVlutqstnMT%2FqEJgVUjdiMvnIyZIeJ0CaBCwAXRE0wxKny9uZWRHMswhTSBog1%2FGk7nBuGE5tJy7TvFb1RkkRZgxoqPM01RYD64UFfYjV%2BYMTxAj0H6Mv5rr6je4YsCEGQlUWuGNimgBvOf%2BxjoV%2F1iDggeMZi5%2BxjzPbt%2BwidxBAKF3XKOcx%2F1f3dRwISgdXWcblMMGDxskGOqUBRS4QGZezzh2pM42%2Fv5Q6tatgoODlsgtt6GrZjkOuw52tqF%2BUucuPHSNPsgNG%2BZumtiYARe8swUNnV38weA6ykRvbgjXQkMBqH85I90mhAPoEPTRobEeJLQbx%2Fbqy25g%2ByGrh%2FWh9DLdlUJPp2gKP0seqU73NMN02sWWupY%2Fju6QOlHp4PAHb3VSOvKlqsIfiHj9c3DgggW5GP%2BiKEltzsCtAXOjZ&X-Amz-Signature=6e6227b5408f06d7f494e8c174cae37be8dd5a62c0c8252c2dff6ef68433a9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGJOQW2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICgGMVpjyXnuDYyF1TLRJQmEyYQVWJCQ%2FkA5s%2FE7bp8nAiEAmpGYDZQisQ6mOCY4C625EPvX4x9y6VzSIjSqVAZT3KEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNIN1J2yD8TSLeMmzircAyymqgFgaI%2BPWmV4uz6suUh71dHXuVGgj7%2BPnfhspG0UijpZEfcLLpajVu3JgnzMDtLsWvjQwVYT2mwbI7a7LLmhAnCA3ybL2zKfujz8vuOxNc3FMitPAxhPeqeHa49i6h2LDrAklimMT9dZV6rj3NGnAPYsfFWenh5SxXGLWa8jy3GA9UqFV%2BuZzGgmO7SyexzDwK2bHDjLirCaTmaTyq4RR%2BuUNQJXVtoNYZdQBMbST%2B17GsxwJPBiBnyAkAAYNlbmae1E7teVZdX8yODOg9Uke%2B1bRMOXeSPxx1fAE%2F6xK3HaRw0OdbvYIGHXe7TFcLp8o5J%2Fwtv0mL3xypU5D33TASdf6YcZ9f1dAlNs5VBCkAi%2BSJ10vv7dod%2FSkc4K50RNuByjYcbiOzEABfR237dAFW4TyMcXjzZ7XCnHYo0qj3EcbPsxIhTl6cjcX79C11EQdiORRlODJdNdCwEbqHDVAaZjQz22HfhIFvwxUNzZ98ouuhzullCUnoHg%2BJOlYZLB6ac1XKrcpnMgPRnKFDT0Nb0ZUY79e9WEr%2FwVEN259raMwJhVJbi864ilGKXtNBcrNXPgmWr1ODZIegoONvLIXdsEjgDAGnMqY64J4Q9E4dDq7v8Am4qbcn1DMPeDxskGOqUBQIdk6jDnHti30TIWjA9XJn1w%2BHImCqiWQauvxudkQ4%2BruCdIomDFZepicnlV7Gyy0PFpYjOhsktE2FQQRbjXslBKkkFEZrPqLlN2NIjYqBG0NiaN2DZ51vXv1lc1WarO0KVgpjqdGgQQopva3CMY95vTSdgPfgwjvnGMc77i7QpdpztgIuKIYIJqZYpcsCJ73HpNbKwOwA0Bi1R1403QGe48DNEj&X-Amz-Signature=ff3f79ae8c9d700f3bee76dedccca732b9345e7b5e33610f3d0ce137cbc0856e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

