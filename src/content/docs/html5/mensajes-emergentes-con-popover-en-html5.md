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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REBWETOQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCICKYh6WQXb0AlWEOk6Ub8s3ZVxxMlixoWW4h1fXDoCAIhAIU3YYOYLUfFQTa8KsRZRz0p8h31YMrvbopLkTJctnRrKv8DCEcQABoMNjM3NDIzMTgzODA1IgzdrC6QpMG25XrV0x0q3AOCD8maLnKu%2F4CgQ9tjBBHWwvlpS5mWsEd%2Fewll8wRiRiiUZGfLZBiqHdxt39xMWmv1%2BNBK%2B5xxIJwniOiqCYEh%2BFIsRFNsbmO58k49z44qF7L40eqoDHFrqEBA%2BQUwRajgHprRVaHe5zba8NVxfbNJlXZuhOufMbKUWPYjGMigjPIcH81lcQVbMG98vLw3e3r5lCljXOUJfqEDF%2BPjPyE1Zy7cUau183K2vy6q54WmE0EMTiDzBZEQfQ37xbWb0Z%2FB0L7BgqswOZxEU69cVt3ycoIirNwKtqWquc7XjCwLhueD13XNAyYSyBDYuAfMWZCy8UwLN1Uczf9O2oFuuw%2FalItTTsdKvfYGu2qFJSZrLrchx0gNvVaLOCvTo%2B9LsY09%2FEisfkr2%2BINrMGU09ED0hT5AqtqcjOCCCby2nR%2BO9PXZWmyxVxK4T8rXOZKTghahnJHbI4ay7bOJ5zGLyjmArO6junW16gnZWLoDw6XWuwtEJJxf0rp3pAX797tk6UNzniVrjjz%2BCJ8vFY8Iml%2BqA1SGcqpA3iE7UkR1EcOyn9zbQPxW344X5Gdu3v4TZKUbQFFMx%2FLoGlG6E0ejWS0b4rZGLywSJulun73QQpy0UHtPCqHJur1a0CAVejC%2FocbJBjqkASGCN5WlYPHgqrY5vGM8ZRN6R4Q12MMN9bmzZ1Ud96CSyWMyunpkNLbSC0M1pX3QDh%2F%2FC9Mx36MNzZF4uCKCyuBv5KiZCSkLlBZknOhTSZkDToBV2f3fP8og5l8Wsiin%2BI%2B98R2BcDGYP4IdIdrGxwx7yqNsownfETpYi%2FSpwrCN43hSdJefPmFMSz8ZQQLf1QNlq6KvWHX1kSsxo2%2FGY4gO6N9a&X-Amz-Signature=9fa5008feb075eefe058e131fd39a30f515dea94b020253c69cbf0e47d4120e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q3FD5B3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDTJKh0fk7b10OLpCAJN7%2BSGb3Qh%2BFKPRBAMDeUwhvdSQIhAP7E0X%2By46LS86gyCNNAe5QuouS7hls3Jty19nI85ZhrKv8DCEcQABoMNjM3NDIzMTgzODA1IgzEbQdemK1osW4meZkq3ANVQe%2F1DZx5t6FRwmS5MNL47B9x9%2F9ccRSy41dSEDB1VjaW3zG%2Fnhh6oww9h5vVczAkE4woRAoEFkwUOVIlGZz0EwzUyW2bFPGj8C6mc7EOQhbGk1BKNux%2F6Oi%2BD0IwS6IgxpDglL0uRMhQWKwAH0v2dVQYtlgpxwzf1Xf8NIxkeo0MQXV25oflwEUS2famkNikgTRmc0JGPzXWiMfeWoWE7qqBB4q02Xp362PDYY4Om%2F1Fo7fcaSq0L0LacpYg4OSLo8to11Wb8vvCr64PpTniNi%2BWbEn6RFp66S%2BJMANPZPaaMZZQ1NHM0cf31EKwqcdko7apeO036maNNt6%2Fs4joeFzhnpTf4QrlcATHstYC6cX25GA%2BGJmzxU%2B3%2BP7Li7wFVgTpUWruPklaAvnyY25pUC7yEDKb458tU5uRHaKg8Fx4GO%2FXtDrdVBJSAXUB%2B6J%2BIw7nHe0afR6a9pX%2F%2FxJrQvUjLjPZ%2BPvSNgSZb6m4m9ROAEaWasgj06SKta0IgUExNuyK5Ldz14XPrE9cqFawaCxJsp3U19lBIpNRsn0SjEhHYO%2FD72kRKqfPLdXk2MsMV03U7qTJKbWWkN9l13fGaKFlo5Kz10RhanR4ZX1F79lM%2FbDiHNtwlJ5oJjDMocbJBjqkAT1i5LYspnnkdUpWarN5ODet8y7OlYqhdLKpFqvJVKgkCDjz6fKk0bKOw1m3jwHgX9dB2Wxc8IzK%2FB4TDbJL0XwDNjaZYJshwkj1wsu4hmw%2FVwd7m6w5xtNkI2RxA%2FAks%2BOeLBJkpFR49sy9ePFwn32vxoi0C9%2BxumAkDaErBUvqerI1y2PIb6GGvyfX8VahxlSaiyT9Wm%2Flie5StYxi8JGW7lDG&X-Amz-Signature=dfa4291edbf36e8808cd9dbb7e26697ec0b3478387f5a8058eb05a403b33e378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

