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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKTLBMK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLEyQAQs1Y9YJkS7R7ioWgmWrOdnHfDJ5YWRkSP58QzwIhAJIUqxOzAUfbR7%2BWjB1ucmlk%2BfoGavl9bRApyIrC8r3wKv8DCFUQABoMNjM3NDIzMTgzODA1IgxAGyO9OoAGiDmyEdoq3ANnzn09%2Fzn29W%2F9utxbfoowI7gCmcjUI6tmYTnwbKUwOr4ntJtqCeP3BTwueNKmxPO0UyRq5SFZBhHX7FiHjG8E1RY1wtiY8vgUMVuOgPFrNL9b20nRaLiF8mMQMF8p4lBmlRpda6KAYDpd%2FOss%2BNNc%2FbEkk4Z1CL%2FZvRtOo1L2cwXvvomragy%2BFt9UEMy3M3qDEFn8Ewu6x%2BuciEECpxWZOl5kx8iSm%2FYpxrv7YzHFf7JyN27b0nr%2FHJczBZPnTXpjRTibxGeyOWrfeZFlnCrAhYp6Y%2FhdptkAkOWjumjDwmpJFwg6x%2BNo0%2FpXIoVbI0b%2BQGojWdlxWmDh0KwPcygA6H%2Bs0qecvdzbWuR6yx1h%2FK5xpXQ6Q4XDhAEMvkgKN0OEThz3s5MdaonUqqSsb%2BEiaMr%2FNBgCBRnCSbq94wU8KlpHu9B3XhqAWLHkupYI9NL7vZIZa7%2BpVfZfsS0KFsEBygn5fhtv%2BoNrMiAFfDe5%2B0a8IQqM0KBXjG6Sd%2BjYMGjJj9zGT3j%2Bc4fZTwW7VTAjRZ8XWdSPRWtbsXSFMCPSu5aWhfMtU4PUnoisAHxxl0kxqmf1JVHOUVdJEZEH8J5usbhoqJqSPpFoLCf2iZhSi4I%2Fze2y0RuUUh563zCErcnJBjqkARH9h6AmjaVwcNNnW6ALT2MkucP%2BfOHnJSmKheWoi3aumvuFaKB0kbkBkPN1Z88frbUmDIf%2BV1uiUajkDOs7H0NZa3z78OWGvg0daMkj87jmPp6xWBdryvTjsxahy2QQe0xMGGhN2f6bGK2kvfeWLp2hMaNK9tMWm1gXBvSrUpb4jRdndRY1OVzOdJ4sOuXRA7uy47KbYYrvSlBMpGTWnzBUT0o3&X-Amz-Signature=c1f98586b92d6bfbe2cacd2f367724d4ac271c9ea3da41ad0d904ab4ef17c08e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5JLBNI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID85cpidvz12%2FSdU2eyqTQEUgtiP8ZAWxuBycBcw8z2sAiBXdFFNmEBqPck9O8%2ByuwVJj1p3rGn00cYHK%2BsyJLYkvir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMv6Jpv55dEeitelRYKtwD2WIzphPoit5mGXteyPhBY8BGUVsg3z0BLjQAzwjQgnsNAXWL2NpDnmbbbhKEc4cdMoXBuS4itjfZwH62VeUwP4ChvHp%2FKLbwEck%2BG6gZ4G71GPDLadq3tItl30PDsJC3c9kEOgAOpIlLQnhfd4pYbTu78u3VD%2Bs16U%2Fuqz1enBdNEswGNDD%2FNmI9oOr6iemrBdIatM4ijsNp3oYY49sJX3fj32Yh9rI4NmXhOCWmLMZNaSbZUPIxlxcZJpDGtrRRTiouLXxYfRx9G3h%2F5r%2FgOGLvtqASjxYWxs2YXGgt6lWHZB8MnMHD3fiavnbnHhqDu6FTskTH58IRq1SOVZzF38j7uupAFHHw6OTBIYg0SPe9PReIT8yP%2BMWISDAy9n6zqNdyXvwNP%2FeRoL3RRsOt0yc3jhD00moZMo4%2FsTdU5krTkzfqEjx9d3MisivgT2VsC6kwY8Cz8vNlAUonLcUwDErfx2pjv81%2B7O9MtPbL7zapYUvajq2k%2Fr9w%2FqQaJdV%2BwXzNwcSENsol3l2CCO0ydSuA5iNAkYGXJwaPp4jrkj7F8DwjCPQ%2BkqF7AumMmYsFIOyRHGkfpTf2xaGTZ%2F7FdKcKQPaPt9sJmMjG1JczVw6svleEFNNqEBNT6DEwgarJyQY6pgGPBaWhd%2BPfVFu8e2IAl8ohIMSzFXqpe4Z%2Fd2GDWUpCGHZHjQbeqfit5nUU64LaEkVMMzdidMTzha05SxyWwUKTvB%2FrSWcIIN9CJOYYDwCPTVlDhdcGYNeTVSeqwbDeQdtsegeP07xqPM5OV6l3tR2SC5a9p8MqhqIvhp%2BNrV1VOsrm4Ffb7j8yXi2whusLzLKWVlbuH8ErwFKmUN%2FKAYN0fTjAroNW&X-Amz-Signature=03c4284902f967268ee8524d5809a8a8c3cd6a7d4f1127cd3101ca3b1d011394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

