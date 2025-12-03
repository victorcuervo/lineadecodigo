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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA7IP6BA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICYhrDomkdrakShNeKDyyIMaLBPQkuDVFlstgxSlkmDhAiAkJiY8N05R4DSWWmTw2V0rj3eeTNYlGVyKxP4vxDWnGCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMgkrNE9KSJI6ax5%2FdKtwDs8iY71bPIg8alAaVRSaBg0qzFqbBD0qUt%2B%2FZtmEwxCMjo7cWs7MuPq%2BktxVWsbtVf7slbIw7x%2FS%2BLEIJXDkY65ItPxVv50hUOxRPgPCJ%2BDW5Xx16Zm67NuNC4qyO7zAuGTCGzvZb8YT3kbNj9oH36sZoX1Gb%2BX8mj2%2FyPA97BP1rf7Q86od6xYrVWbWSMH1sf8OUbGYr%2Fj4XPlr0qGpqVlnZnir9hzaPbHFYV5zoKXUPo86GDi7Tm7d5gO9dBedCKniPGBrsodA4OAoYvYvtEvVheiCfWfGBYvlWcH6v%2BQ09u%2BEqZAm0qldLwH1TdbcYMzO8iTwWofo%2FSR3uYmgTE7NnYvOLpUxcWFhUs6Gi0LCtYUTiMH0EGY9qUYIe2yQY68RIh25ZEo16XkXJLFnFspoIOAR7zEpWgoQ2fp0uHHajUyG2%2FCtDbaiwFESUcnwQfoX5ovzPfIMJe%2Bqc6Lqq%2FA%2Fa5K9cmPeMJgmYLp95BngnyiVXnRqSciimosdEMNum6ip6xh0XdSGRoaHlzg4gwA8u%2F4CgN9IpuuoxAvxyU2L7pJQmD%2BYSSuaIzl0%2FbOazsXS6aCuuQV%2Bor%2FcFh4meHLP609mcse8BpVwm9Cmp06N6wsmaIarQKWWrABQwopq%2FyQY6pgFbywMyDL5kpXt6q6AE4%2BMB42ANCSnLs773RNHfNQLnE%2B6rCA68FQFNlgonkyWMdhNOiOxxwYHeHL2IL4II%2BThd34UckIahTfvoYINMKwxSapijVUi3P%2BUa%2BsJg%2BIzr1F2KwQR%2FRcyRJpdF1rhmQ29m8kWhcuHuM5KkFjqOSP5fp2wxdStjyTxxJKYDdJw0PQMW5xXQvyZ%2FsQBjSt29sdwOkKvAb3zT&X-Amz-Signature=bf7d017b2bbc381f08359c0f1722136253ddd4d4c8839fac387a377cce4e7057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXTJLINC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDFFqUQfe2ndVs8NRkT8H%2FFZnqE23kr6SjFW2V4xJBChQIhAPb8x5xCwXk0O59c9NswyFImjKOB7v9xcetaXj6EA3IbKv8DCCcQABoMNjM3NDIzMTgzODA1Igyst0AOwzKL4QBPXFMq3AP1QzaXEnhkBIYDwSQvedyFT2RFSzCUyDTE9yry%2FQ%2FeYI6YuOoAlSBD7hTrq0Xp7A2m2lNU%2B4GbU4thAnwqxAkyR5GbSauKAOnAKo8ifxarc6K%2F2fB0eD3TS6GRMC4kCo0LoHDBwsowWGdPcEtOpnG6SEyuyZhS3VFF8yRFYDy586ePbN3m7tQmwsH6nCeqYc0LBpUnTK0qZjkGuYffM2w0t5gpn3iTekc30iKks8XJh3WOhisyuS8%2BOtLVNP1sMP%2FkpcPxncdhz3RXHKrdYZkEJl9%2BnbQN5kHb8IEPaemMV%2FHtDoQmZHcPNVN0CqjUIMOP1zJVFQqMC20XWZ3yeWHsNZPZPA795SWlIcRlGX70OIEUbeWQaZkTdQaR5QzjXYtG8KUy6UJkcLTORGTDb23%2F35VLPpCsBkHHxyEi9xdrzD0nRc%2FosegMkaleI0RWPedBkBlDGabcYbhTKPUnkA4HkEcf%2BSYxgpTyEps4aspE%2BnnJo8ZwWCyOzpaU9k0uMCyb1tAStfbHIBWQt3ABIQowDKNPVpTR25OHzK1O%2BrlmLFIDZs3BSXFTWNVvbb658mR%2FX1ezZMZytFBykZr9mm0ywk9sw4U08Xz2CLNDPHQ8BS5jGfl%2F1CflPvEWcDDImr%2FJBjqkATPXhJA07y8cogthNNhB2tiQ5GJKGy4ivI%2FK4px%2Fp%2FlC4D6Na1MpoZyYe1xLifJjOcceVfQIyv%2Bi68XWC1%2FaqxLjAnslMp6YNrDIchgi1bJ2G2PlpG64TorysAXjAUL6LD7CSESjnIa3%2FPYoj7bDqX17CCSmkF88VoXVktA0KPZqgl2sq1Eiu7JpWZFUl%2BNn%2F%2BMqjjUk%2FHN7Zilok9tK9mPs%2BCi2&X-Amz-Signature=53ab60f8696bc5f704f75cfe2eaf05b934389e2bee3b575c1ce9833550b0d086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

