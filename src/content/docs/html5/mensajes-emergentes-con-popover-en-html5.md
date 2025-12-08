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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z26U3XD3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdGKlyKkrGOPo4gbXC%2B3y3Lu%2BAWFx6Xi3kdIgZJEPc6QIgP6NxXqkqbqWniyhK%2BkrJ1GK6tRszNE9NuK40Mq6GXcwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCVHYl2hX3ZHvTtgircA1ACMN%2FQAm3zR8LR%2FrRU2OOAlV%2BbZnr23Gph1kTXZo8sHYICx5WJUADxbiMCW9eJ1jFtgiNCgQjagnK5WHn%2BAfWO9FcJdsJt1kpm6illPpympjAd9eSidx2j26ejVo5DLqEta7wHfxJQba6aYZPf300ou5zKYAUIbkCdBwu4VqMM30FjaFQy3B3%2FKW3E5YIvGIAjO6v3DdJsFQGEo5bvg0xqwNPT4TVqmawhMVG5vuyMoLJRrgVJZiHUx6js12J1thkjCl1MjS1WyHrEZDLZet763jUJAAi6a2vfwj3uGIShjVygr9zI2TPs1UUsLQUz2G%2BV%2BZrKKaIOPmnxTeE8Nu6cQ%2BV04eoZlzC%2FChx%2Bx6MijjHgE%2FNE959Q37DkmfdUZN%2BB4DEavpDYtYPqywFWziaIj3rt12mhw1w3s%2FnClbLkyd1dl%2FkUEMoogiTdcbe32NcS4zKuzu%2Bd57cRoZ%2FaI9xkryaYQ5acWulVHnBZ6yzUIF7nW%2BB0EUricM8nP9pUTPBteGpXERyvKl%2BljpgCXBr2RBgAeraByw9A9dBXKNfvwCb011ieJe%2FvY76qfwdigTVgR5eTR1ZoyR7X97d9BUma9tCDPl4PE6NQKvzs9LhYpHh0GpVkTZLz9dGjMMLQ2ckGOqUB1ci6UlDlunnpRuXwyZYNIIM893JTx9qQioLWVlU65r8OiB%2BGfeLsWkYHMCeZCKvoT5zhh95TkEJBpywti5lotJD7vs2goSY9d3ZbQ8dSdr4UkWe0%2BP0Xv8rD6gvGnVlQAAHvakpjN3hhNOKOjohrKvWJA4vocoNTKWkaekjbKZHFsisPRfkfmSLNzEKHZu%2Fr9nA2cLqLC1%2BsQewRxqXWR8kyrHkl&X-Amz-Signature=b74d232f609dd75e7db958c5ce0754d2a602e5df0a801f1430c9765fc0918605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNH7W44%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG94%2FKZ61uQ6rPfoVnkRjgC%2BnQDBnmS1ryXwDzsUxBQBAiBVD8wjyawxSC59fWciQ7wjfBrmlTDU2ahIA78uGBdUliqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXDHtq77NpyQ2SebJKtwD9uhPjTOO3DxO8lcJfx3DzPYldbd4A6Aifc%2FTOclIWx7hOzO5xTgwzZmmeaAxFVVK5W%2F9vjqTuEvT1nIEbKuEnM9cB7oyjhKp2SOH6NPZ3TaIq%2FIi%2FAgE%2BC4%2FpRck6q3It6gAeA5rYp8ncf9O5uTGyQAXDjWTy6FY5NhCplfOyJ1ErDA3Zz%2BHEQ1ZP2fn%2Fnu%2FrmTmqSxUX4WLyta23v9IDB3M3mnxrBR6f9WC7zvCrqIM%2BOZobkE32jrticT6%2F4x4MsK%2F9pF7urDeJbkyrCs%2BOg30q%2BN8MPorMaBLh8PUTZG7HWubo3NtT1p5aTmYigIg5indlJr38P66a%2BzKVUtJ9B480Rd0rk9JebvwphSg5Y8lrRw5KMHRSMGxdOTnhlojVRMKAhIcBnnMnVeYzs3zkKWrgWSLR58hiacLVt7%2F6ip5iBv0lr5bayF1pGwv1DNw0Mce6ceihD%2BsnGt%2FZ8P25YKAf2BAYoc2U2woaUth%2BGlXqlrYAHiHnqyKSrv0t3cncrUvPbOZF4VnNGKXs0B3kxFhsSFQbM69rmyBpdv7jc%2BKwj0SKYV50YwdEaKFyoTjdK9oT%2BIvAKi0YMuRNvRzYzYwgJmAAdOSXlw9tPJ9U6xOGqUzAUvFs%2FY%2F%2FTkw%2B9DZyQY6pgFct%2FUuQEVxpJ3p%2BZvRqG%2BzLuCQL7%2FxeMPHNSDqLVfXISM0EM7ULl1aQuvdA7jrX5Ne4aRCIUH8%2F6H8Qqot1fc%2B1cLGOoLXm0xZcG547lpcGSStAC6KedarDUsQN%2FaMdRIJFoHcjiP502qs4EW1QYjVOILfgbE%2FMdpiBPGzyKWisLQhk7wDplYc4tavwohfTrVzVPvSOZGwnWfteamAZ2WVxp9YDuPA&X-Amz-Signature=49a62f8f8f99d8f76e0616f8fdb2ea5f84169f17079b8a275289361258399fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

