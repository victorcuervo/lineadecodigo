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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6JQGEP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKBJngSPBfDAUsZSdnq4yr6WJoOKvLp%2Bx8yzZ2rfZFuAiBzAjLEQTVxKoZIIB9xKiNIOCFU0cAXBT54zPYV5syNzSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMjWTLdfWvZkF%2BZ9hcKtwDxBzu7Wc%2BUCvrcIo3u4tPmLDRZbwKfgiiUAKlf2GwdnYGuediL58rN61pKp4Ashn6RFEbEqFZvmedq1QmRtHaawEoeWV%2FYwCkAvISdllE607kRWnhhgSNjFx9%2FFU8jYpXVt8p0njn%2FxvkGp%2BtPR4fELjv8hmr8j%2FLCyoWCvuU55%2FBN4T5Fqp55bbNkdBuChe2LKgPYnpY%2B2tlYDJJkd70fb2WP8kuWZyLoZQDYtr3J1oBo9JRS8Sedh%2FPVoMUa0tqDs6Mfj%2By4X6hKGLbPQEXfrUuW%2F7NC7weLZCoLNkncRQUgGvPtzZkmpF%2Bv4BK5Y3s0evCyD%2FjE%2FMf7e9F1WrBJwT10rHYOWRYZH5AmpVPPqRNWGrcbmiNzveNz%2FeUWjXjAjPv3lWPGhSBtYTwRbIQs%2B%2Fku1nNj0y3ikJalY9RMAfIoF%2FQ2czGJj1P%2F9%2BuZkwpy3VFQTS5fUPnYAabWqIwn4Ev6mYt6TgONdpme02CiMw0VnHe7CtlYnvEqjItQ%2BlTD%2F1J1BMnttTikZgpioEzR1a4n7A3d3OtZTgT2aNP51%2Bi30uPXDHo7Hpeaali4nJS2%2BvlaS9GNo92rDAfSel6jjcQ7e4wivTW2T4ImaiWO7vMz0hKNOdSTH5BwiQw0PrGyQY6pgEDEjo6O4tAlZr5zMasQqqyqAUsAKIjQJFjU8ETjKtgqS%2FiFHrBB19f15BxJkkr%2Bc0mTn77FTRwqMKJD6siS2BefQCaYEMJkqXDYk%2F5GmtAq7H814Sf3dyfG0a0j5MaPg%2B%2FYsZCKRl4CnsttPaugu3%2B7nzW2cjSiYu54Yl5V3PP2eiaygfFLOnmyt843sw0qsod%2Bu6hBLBxNdFwxxuuR70i%2FBOMk%2BxV&X-Amz-Signature=361c7507855e8d001b344b42e5be6d0b7f2afc1a065bc95d870750254a59b8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GGTT2GT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9tUfYVZ9%2Bub7CZ1orKAmlCuJ4xlQznc%2F0reZ7NAOFzAiAV%2Fo12kAVEU4dvSBsxOhGkkAKFZKMx53qPmWCeJKhT3yr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMh5p8wPl5VtgzOMzYKtwD3BniZUmqKW5AcjRat1DiTpHmR9wJyxFA%2FS70Ay4wKwJmSodWK3O4ZtrLeOJDWQ2kfD69QmnfEoj8l6xlNIr4OCzHxjFtEo9Qxp60Uaz6j5BFXFHfJV94tH26nWZxLW3Y%2BhI3igszK0qZQjtDP9qamU6Oo6bi0DTXVyiXpkSk%2FI%2FXeUGB1gnu5H11GZjkPJuqAdK%2Bt1G2%2FIG5p1oW05Bh3lbSeRQz9x3YlKZRqr9BedYibgWvh%2B0EzJyPAIGwoTu%2FyLaDh9qEM5QbMIerDyE%2FJzR8CBTIcagZLIqDa69BzejLdlNvmxwzvd%2Fz9z8z7iewUFsnr5emE2NpDw%2Frh7u5NAhS7ekkH5sBp8ELBg%2FFmsWCipCr7gZdprohTql5AVxPCd46jEarlsOte8JB%2FvltjM4Ffp%2BT8smmGVvsP9vRgF3020l2f6quriINUH%2BoGjPH4RBuYxrt5CpKuiF1ZQ6o9wctqcktLhraP76yc8RH2hU3tLXKHm4ACQIqdVDhJ3YTTctQaP4tIvEzJf0P26Gj7nqp6ybwBYE7z4bDn9E3bap4OUzvNtbTBgtOZK2ETB3K4JECuFOnVzIwtvJdQclAk%2BIgjliE8lXgA4z8pkHgIOqQQF3L%2FbcwzirrpTQw0frGyQY6pgGOjqWoe%2FmkDVBDbv3RJlEtiS6HrRAh9h72OLrFOnf0L3LaNYqbJRbUZzwHUSg07HmhVz7dsPpnTYFV86%2BeomNzaFkn2vweSbhhiQBlTBN8agh0N%2FwaIi6HmQ3BpUPGM1zBPheycmd5PfY7%2B9CT3gObgxnH9M5WxoCSNbfY7tkmkfcegcFKrN7W5a5QiQ1uTqKtxjBqNZxs3B2rYf7ebAFjzC4C8pTV&X-Amz-Signature=544b9060208975980c40ac414776486710297b825cf76be270b7252eb5e5229b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

