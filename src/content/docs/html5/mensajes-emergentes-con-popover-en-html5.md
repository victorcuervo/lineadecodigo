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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYWGAXO5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bfbfaowxy%2BTyMqtChJiKW6nYVa9wfZ1RGmPOcJTkX0AIgTHSH4BQSmPnKEDmp2YcQUKr8%2B46evdDyT2e6ICkAm14q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDOfj%2F7CkZCbuJsahVircA06TPu1OqY7iFjmc4vG9Bec1Ufl4OqbwJoAAJ%2BxnQOwgd0W9hfc75FZWoMcXnif6K7vkSp0B4Wp%2FMwSxOde%2BckvWIgN5eszaHj0SvLivLkJhrOO9Zi2EGJAdWwf3yF8ye9NNgjHwifCaUxo1iMeXBbJqdod5A1BEmU%2Brsy6bWV1VQscRS5JE%2Fl%2FmbmJGtx%2BIbNq1r2AzAjdkRA%2FwhxqOd343E32NUorzof4qJoRPuuwwLnVlV50PfKZQrvsMeRquxdK9eyLH4whyDvj%2B22%2B8UiCj1EZecespjssLVZlVs5r1Ft6XbF%2FXdku76sAVTBjRAmO4n990jG7vnqnwTulG%2FWJ151bK1ULW2EaNDOFybb9IApSA2HQ%2BSXwNdyvhu5zLxNiwWrrVWSnOBujkEwAJCIzO6XwXiyOiFoME53VdSyytfWb029LjTsB7UjDF1CzyC69uzOJhdNa2GxTUMyuM4Sy9YxF%2B8dmYOmZac%2BYe1C4NKWqSW4ATIL3QByhiMVL2W9CLGvrNF0pvGU%2BHY3homv1woU9pdYbJO0RCRF8OuPxHNcrSGLshxKO2anaO0At9CkZTvjqcm0B6wWsbKYgneKsGpDIrwKA0UXrRLf8jVWwP86xsABeTk036q00EMPnUzMkGOqUBJgOiKYiMNOoGhAQFIhuH%2FAAhhK2HKltC2ZjcJ%2BVGrrsSqF%2FUJiUeddx9rtDR6gJu6tPQUseWOl5JYqAPChwF4oUD%2FcDPyRAiPQeLS0qf4Q%2Fse7nfNVr8fO8duKq5xzA%2FmZbShkBliUtY9bLF42cC2cZbdOPMvoIH8Bn9147RYxpJqQlEs7TGyn311DMj5foa6X8v9AzmhsF9xpWkZBSXeMO5ZDuN&X-Amz-Signature=f5bfff28e02c6db4ffa7c7a9cbed917a3d133daad3b8549c01cd3b8ef3242d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFKO2UDH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC47p%2FzJuHb5h1e%2FizSwHFZDDoofmKb1plpVul%2BbX3CywIhALIQTKts%2Bh5jgaHU3z3qmbSnqii2ZAzDOeN5ohznxP7iKv8DCGIQABoMNjM3NDIzMTgzODA1Igxq0GTxlKBIKRl1Iccq3APw8%2F5leJwSShvBhtEGzqlhzMyJiMbyI5k5D5aUzGB4uYBw%2BL1kiu3G%2BWF%2FzwjEeQu11vc1GBiqsgfuw2E%2BBXMEoX8dVfcq8czJ1%2BfObr9rdldsBcMWN2OjDvcepv1o5FT9%2Bv3lfYAwXXWSWq1h9iMSpd9QiVYkJ3j8aOAR2mstbobl6Ap%2FF7gDLJk%2FFQN6ScYI2ki2143encUp1s9bLz8NqCQMlYBQz04sOgqqM%2FpCFfPomdp6txJmOIYk7RO20PuBqEIRbLaJsR61rfA7VM1YYRXZm0EJbiu0xQuJtTnVm4DawXdbuB4PlMFwlT2rzmvQlWO72%2BcR7gA6gB%2BpVAbiLZ3KdqM0cbu0rPneJv%2B5IbmkdgeIwTLk5oOdLb%2BaY8aKYWbVfdzAUP3l%2B6yi0jUfwUxI0OaH4Zb%2FbIHRKgzhnYD9kFCrP3pRYdF%2B%2BLtZIQh9A2MJJEA0nWit61fSNElxm1IM%2B%2BuU8r4UIYyTmr%2FZMvuxUZPPMQnH4stwB%2F6mLuQ8M8cX8P1xlCNQxsSYwZf4h0WTc7RBpkRrzO3VpJ98M6MxxHMo01AfQd309t0CpSq%2FVfSCS00U%2FMSln%2BFJhFzJBo0eKj7A9GGqBciB%2B2hK%2FRXogKpZNckm%2B3W91TCfl8zJBjqkATBf6sOB8w2v9NycG%2FJh1pcYhOJzHqd8dm%2BwtbhERYb8%2Bc%2B7rcfiBrUmEuRcxkVakBzCc3zolob0otvutAOiy8WcSSHpK3IKMBGZ0ot5BSfGS7jL8WBWeYVuFPRnDO6y0jTFJYFRMt0VtDUbutSwI%2F27YGukXlWlz1AIdse%2F3XBcxuxBhPVFI5kGxY5gdtEd4vcqNWnXYdxmtY5uy91PpTCBC4ZP&X-Amz-Signature=59e63c8fe9e8950e18b38d2a11afe090d440dea057d92f2ade7fcaef06a7a961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

