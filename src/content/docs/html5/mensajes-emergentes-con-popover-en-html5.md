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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3S65YTN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzaEdbel2RvVg7Dh2TvJnpG0nt4zL0GseSOvouHPbBkAiEA4wgK6DX%2Bt274nbq1Yp9SbyI4JhlaZ8YPwtPDnunzdbAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFUnTJGSNC4FmNOt1ircAwftdijv0MMxbwSbuE0ouTYdgYzmGQSKNYWMA9Sz0ACoxLvI4sZY%2FTs5uTWoJ48i%2Fr3SXTN7RSKwRZrQBqIImZKKbJbvQIZUDNnZfeiTaZWR5HtYp8CNLpmElSYWGTZqsUvOGCtH6pnHt9pSl3iWraO0dQVICoYSNs%2FmPUbuXQS3C3tN4jFKdBwCSPC8T%2FH%2FIu4KN5Ynq9p1YjveTbTMROfiy9BcLgQb1REN8WPkJgKno%2FJKyLMak5n92rckNMJxcET5BPRGA91GbWp2HFGlsZvo22O4kfTnlrCsNWuY2%2BhzrVCkQhfZV0iPrnMmIiqvWkVe%2B9AA3GFejIwg3dO7p4f8vO0mdXLWETTO3kGCdR7JVADNj2ksIE1%2F5SIxylBDD1WVgMAH4fzEcA%2Fud%2BuacKMoFEXNQ1%2F1CicU4hliGt8ctI6mJ5lY2E6zd%2F0BaK%2FujSMNjziOLt3DQq5sMjyADselrA2JGPgDrcf7DQkYH1A52VSr86OzrskyO4mGs%2BMFbFzyJIl8fy9m%2BR2PQYw4jlkXknJUGhoKzNm6Ltlaj1UKK%2BakEV90RMo5vgDUA0KYpKgZUeU9513lUrcSquHqhu%2B0HLyGic4P2nby9NK1Un5Xv6N1X%2BrEwGuYkG%2BAMMqMyMkGOqUBflqU5WjJ9yAOMH6kMhmchi3urz8Qq5QzZfBmyZokTFH%2FPA29Csyl83GYxsmgo7kab66%2BKJ8L8z8Xtnvn0oi9Z4rl112A7yTquIa3ecfhzw9tf9W8S362s2SenZW3SvEPm5RaGflZoyBSBG8wZC56mzvLy6WMFO8JRmfVyneGL1bjPsFyrLaCP7ZHbV6CLV3GgeKSpzSof3%2BlIpp0gH2HPSIBIWYi&X-Amz-Signature=05bfc448f732a78aba36fb033d03eb5fdbd4dd2e2f208e1b8bb06c83aded2abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RF7TCOU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ%2FWgo3gy89%2F0PwY1GUsxbDJOtniFJKNpZktcW4S4tUAiBq4dmGdhul2ts42NgJUeZ6EdgFeFD2h92Yx2Wp0awijir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMrgPUZcpYRRkqemWuKtwDu0y2RAEyrQmoUyuzisqbanwxSq24FLoAMeOislc4Bymca1G%2Bh2nN%2FF%2FN0lDEjW6IZyBCLC5QKMYUG4hX7n58gpHdeGErprYSklKImSj%2FygRfDtVmJePtxVfJ4ARLOhiq4U21kt34pz57lnUlw1HYpbB7%2FBuHT4ciBhUbl%2BZ%2BeYss%2BwBgvl7cZN%2FQj7K98C%2FrxoUgojhzBq%2FifpkyWpxwfz7cfwDT2E9gSYDxPBYnhfcugfm3isIcDWzPBduhN8lXbjGA6BRUzNES2eYMN7u4lk7EfVSAPo6peO9hli2hoD6t9k1t%2BhxdZUOtHiBhYeLEJ0tHrspU7cqnIbvfNSniHIEmVfZW4VWB3gBpO6L%2FkyTvJTKv0hQ7d0vAR5uv5CW9vtBWbFhdViuOOtcJGuAt6w75KwZ6EXmxsEylxgMWMICPaGJV3foC4B1K19lTCVGBAvI%2BJr6JYsZLIHlWuy9Jmibef0YPqOHov4IxXLxWgNOS9TuEjrow1h3LomoHeeQNYco2dU%2BRuSJHemqtBDIr4DQya%2BPKN4WvxVGZXNbe%2B3ner4cAEMreZr4qEDACSmDfsOIhz%2FmrIlFePLV8Oe9jlmtpG%2BYPxFbLOFS3x4g2JLiSPG8nR%2BertDaSvVYwk4zIyQY6pgHOmQRbZdApACn%2FRj5PRnIrM5Aevf6M3bdHjbXjFdbTe3RPa%2BsR72oaWjWXCQD29nzYcsnc%2FBtKH7S%2FLcfRM45LTU8GOyhpf%2BJnHsr9O9dCNtZ4sAoUsbaAe%2F3gAS8yRbx82dHlz2RkduhbESmaSPLT8hMWSnZqDXpnPfebz11G9nVjRxGcc7%2BTMcNA4EgbPtLqjHqv6pSM2w26krS2W%2BkctdTvOre1&X-Amz-Signature=b98026575a90a0c6db8de2099180c9652426d5f9c48dc68e2a197e661fff6c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

