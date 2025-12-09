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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRBHDCAY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZwNidnn%2BNZjdYi3sWB3uMNuJk%2Fy0aWJKTghfZKZUKIAiEA2gZm76cqVXkLm57QAoMOeWd6BL0EFvw11w96gLX%2BY7QqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL7Uaa9dHZ3U01V1CrcA7AJaajb2IxO85I%2FVJKwzgx%2BBi%2F9K36jWMDjkIlWBsfqmrNxefUMbariwNbaR3JkkQWFhbwBPoP8E0RAuiyHiOgd5h2nrdMJxShYjEX6YOGJJg46DdU%2F1cui%2BIdbsBdbtCXkQhXk8c2Z2vc8TLExCwDtmjVvqfZ%2FW7ooHwkaA6TUkgXpE6TXMgieUdjYzBF8tM1glrIuW4%2FLH%2BRx70sFOBT%2F7IKgXomWLNq5c5MmhcJqQOCD%2BGzHQQ%2BKdxyDqZ9JZWESgTe6B6M%2FIseBbwhWvVfVvGGtEH%2BSl5v1ZQ%2FqTB5st8H9mQcOXx3UiyhQPq0e%2FaVfGPIw9wMmfKBa4cNKDRTCYN6Nhrpa9KEbB9ZFrlXDpoT80we6Q%2Faf7yre1hLKZJ2VlBZOy9Sq5FrG5WWqYTPJF%2BEAvgbXlvidCw6%2Fba1vLHTEETpMBywzSlJvXCiF4KUmtlwYJbsAzECO5OcDClCott%2BN9ThaV9wDae7fRvi2ld%2FpxfUj16rSz%2F6J%2F575c6S4d34ZHiGZbsz61mGMo3Jw%2FnC5Z34N%2B%2BkiuwPLbZsbGHO20eiI0GOxFrO1nFlYScccM7P4OHr6XSR7ATNFo0yQrYRuP1A09cVj%2BtTHoRK1rfxnrLW8Munqr%2BEFMNKH38kGOqUB4WsZZ0iPFd4J9UfNSkAJtWRsZc%2FiLJ%2B0%2FERhbEVaeIDHVVTI270RovKabGFcydoJe1tyv0wQucVBVaRC6EbNtOOVSwFBqmmGtL3PhapM5FoL9yYbqQROBfu3FSODiITxqvrO3fOpnQcmWklOHDmg4xgQ3J1DAZ1gg6UULwmhREoHDPEVPiq4utqofOYiyJa3tyN7gC%2BtA5ZKrNNu5XPDppa1KW1T&X-Amz-Signature=4abb7987308154a1aa0f3c289601d832be55a9340c018ae770c23fb1ce60f94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBUH4CAE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDca6s4qqhi%2BKH4Tx73L7hEThNZsyfwjcmconQJDyJ0SgIhALqte%2BAUqnj8%2Fl%2FqH2XOXgvmkbLXcB9fl2WjiY%2BkbmJ6KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY6jmpgIhSPSxwaMkq3ANMk9kL%2BsEBo0xjOGj9AlKhUc9f14OJ2bg%2BWR308dKhK%2BFk9RzK3OdeXtw3tRcMoi2D%2F0dKqvO0aByCQFT3mJtnAY1VM56s04Mo23tOowmR1pboK%2BnuSO%2BF3sezw0Y7DwP83z9ii404MCr7eM9VljW0wK9EtmyPeciBL5k0e9LxV2VSieD0VthTguBhMLo5RCEjebvDsjF8Q4lbs5Yj8kvHcK%2B3PJoAaXooGgSPRliD73NP4HU1Wk6qtVWqkbAPLfMDsVhO6xKuhw8pYmikz2D1XaUQTAdblYcxNQs%2BUV4I%2Fe0Yu4UAFpINe%2BMsDlOaT7njLKUauRnvcB%2BlRBq9WnRoeQQyH48Ew23pYv7MaaHyzjBcbJC97jrEcjOC%2Feid%2BGLcYzDh2YUsdt0wYU8bgWHRycv5czQ%2Fovw5Zw8RdUw%2BDotgMtOJ2Iberuu72zUv0mIW46sGzwz1BjHaOAckTDpSJjMkCCfK0Z4Z%2FDDCd%2F7KlY%2BZCkHkOt%2B1Ds6KEZYpeFyAL1BVeaif6r%2BSnGjReDRYHIVGX9IZjC%2FsUgzNxOhyxGUsxA4vyD00fphaMtpk7RCgr0i4D3fWFoUOBWhGmhpMYCTlnHuh5s0pSwi0TGZeDxBqDUmFWO2eU0zgnTC9iN%2FJBjqkAYAmxnOVMkY1yV27M0TuoTw6y9TpkPRWvQdQMbKqTzaFXk1ihsQhHuLVGUNAPZWDBHrEHIa4l3BZruMgv8LRZ%2B%2BWJKQBoQwRQFiruzl55oH4jN%2Fu3YhHjH6587LIky1VTUAcJ07i%2Bc3%2FmN6rkqEAaS9Sd%2BsLY2jiX6OW8qCmGkThgwC2gfUAx7Rpc2kRxTMabLgUORB7NenE6SJqM0AAhfaMhGek&X-Amz-Signature=53637535c1a52e0f70a8ac4fa82715d9c7901a62641725a2ac8d9bd959d90d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

