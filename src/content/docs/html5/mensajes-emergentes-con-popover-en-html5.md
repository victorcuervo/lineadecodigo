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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFICJZV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhgz5zwa6yLAExLmEHOpbAusW3Ke6IN3Vb7wEBTGeaEAiEAk4Eo%2FpAxxPjmMPFdoTlV6NJw2QmQzEAaMDXRT1sZpJYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJo7AJAgECPR8i415yrcA8E4wBXNipssViaQvGh8LO98Q%2BOq6yhBhTP4cRTdij9c8HNr0Fm2x5N88FRKK7ZIVS01tJK8weEoyV9oVWLFBOiZNHeXuOVgWuebx7bK6hDMfiS%2F4X1PjyS7QeNno7QY50HD2N1QeH3Qjznc%2FlKW9WpgLZYqE%2F60FiLTy91u1p%2BRkfdgwtOfChckOvaysI2PF5A4ROykQg60%2BymkJHB7UoejOk5PXSbPTzMmVpMcG%2F5BLU7%2BOzIQ0OUGSCeHzM8n59RMR6t8CueXkaAvMdtSbbpmIA4tTetfM%2BG2bdSJoFANN99VbjfV2QlpNZMbqxT5qTGxvZ%2Bx9eFgq0QnGkXy68YEAcNHlELGXcJREbXknyNfjZJv9Utmg8f3BcQIDcUt0BW8l1%2BOqEn%2BiZG8Fvu4CMVAzwQvUCC%2BWqslyUsSPYPdXR%2F%2FXtCGyC1dMncoCpYVbQ07LJlo50LDh%2BI%2BzYWREZWEb%2Fk%2FzJqOZtyyS7gkLy5ynwXII2RU0SHgN7TXrV3KYowl%2BGfFrafANzUH92NUdla7RlZhQpJV2Bs%2F5wWgFyr8QPxz4MFrAZygIDkfkra16DI8aspH5ZLyGIIW18OVm7%2FIKTQQt1Uup0TuPbiOdhRChGN5K4OymdD06e0FMLr%2B0skGOqUBJN5ZREzjRfBFVYPVv1aTu%2BOxvWS4lRfRv7xvn%2BlCvxG07iH1YGGO2NzEqTzLIaBRaFwrh6PdJApngzLYPAiaTFUYTetlYc0h59X7%2Fv07yNHVjNhGiTn8T61t1yOy%2Fse4rthz68waK1WrCdTl66OuMDeBD7ULQYawoWpNKsM4EebP4O8ee66es9MyBvEMlmgX%2BPzMQGXiWXEK8b097qv1e89Lh7g7&X-Amz-Signature=4442a8e0d924bd644fbe3bed41f91ce56804c04b0d3de1a948e8df35a72f2b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZIRDFDH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoOkgxyjfwKK9L2zezmsFbl0C2g5u0Nqu1EJAZoItUqAiAzxQ4258DUo6mKdNWQ5t7lJAUJnEdeqzDZV6PN5OMzmCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyEmy2uE%2BEtNehqZJKtwDwGv44DCG5v%2B%2FNhzFbOGq1mIbeRkhT4JOXVg0W3CADva8MflC54WWCetyJlamN9gFwPaIJQBhXPQf%2Bfu1wukoWUtryxpa%2B39P2SNklGHJ9HL4gaqrs0sOHkdneSQXvLE620gIeDK6nD409nP0pcGruX0yfumwSCWHwYsjK1a8R30FSHdxVOqdUFzxoPpkfEyjDYwbrukJVsJhILlTt%2F9Ugry4XcymD9s%2BFNXQaSkovrhkk1av8TorYuhoJbsn3G%2BO7DTJW%2FqHBhRZnfEktJBK9BVQ%2FMR5qrMkSvxtyrf3tbQlwuI5EG7iFObj%2BGdu55Dc7L2lCKMy4IjKNGx0lQtzVyHAcDNkUDNlxByomonS4vI6EhGsucvMf2A%2FQVW%2FshH3MwXn%2FT0WaxHrn1ZNDp68HtAVhRCyYC9hZHkIHU7FgREb39PZ%2FFf%2BO4wQb%2FPpDxkLHoc9PrTRFLWOwCXC8mUK7Pcfqcmq7%2BGvh8pM2ogL4CtMs8Qc%2FGeQsIfHS86%2BEfUurs9ptV9SrJY%2BTf1S2n5zLw4kUS%2FZyF9xvRqMw1errvucWajrDEHxqblCrH2isacnxBsi2qxUaqN1uFgGgX7GBwhaeN%2FAkSzQDOiJK6qkZyAf%2FdjOZbG0oA5s348wl6DUyQY6pgEReHqV6v9XL2%2BRdEJbd4aQQLVBKeNgoZFY1Hq%2FoNjMf%2FWpqDv%2BmnIDClLLNcT1hZbx3IqMb6rtTeDDGDpTmbdDkL0xZVRqxlDAftJMvr98YDJXdCSacDT%2F6A6bPiR%2B5IDf75Og8M83kBt09om%2BV8zjEHF1Q2kN6UWVLXtYnoT5t4V27mw0cRBnXNo%2BmfTXk9AFlfeqB%2FOgcbWDzCDVuWiF4a1CYw9R&X-Amz-Signature=1301b923928400bd7960ae516c8b5f75a4ef5f6147c290100c737e70665e1ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

