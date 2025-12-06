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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDUUYENY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnLlA4LHPrbKaRyIeAtgCgu6zxUCH6CaFbGcR61Nx2JAiEA48on6pu6tKyDJZ8vDVwhwq3%2BRPjiHxAQSjELKRxR1Ioq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDyd0O%2FM8%2F5Y6oEisCrcA1BoAvWDy%2BDARTYz9NMfgYM6BszAtA8zS0TLBaTl%2BnOWjQQQIppQP5zj8MB3Y4uhpDVBv0LW0zbvhvWpKDXql%2B3rSaP8q6UGtmNsTXpH5St6j6gfwoRoS1JL%2FKVOqEc2dGo%2BwOY9RLtFsd8j1QbozYX7SHk3ysG5nqkQnb0%2BEoTUkMKy9M27uJ9mp5ZbGqL4Ouzex3itkqdsjhkOBWTjTv0IjTirJerIRGpDwM4pZeXLjl6RPw8nC2LR%2BVXWs8Cc3yM8fCpOjAFY9jmuQTjJCEgxqDbpu%2FuGNassb7n9zNCHWRcHQ47CJxf3gKcl76SL7hoXPKQZQflZ%2F3nUqcz4xEe4Tj1CacseRshETTZxOs%2FKNsEQy%2BogSw3iQv7gVZePbzyo4InuDbKnfGKQm%2FWZ9Kz1XhHk3EHJMAmfNEEiuixmY3YWH3Rp%2BC8H3hsgntJEwzyUPXwV%2F1taoACqwM6hokXNpivDNKAJbHUZWuwau9yh8XgSYuNSFNHM1jKGFPb7%2B5f63R0MMdFr7bHxyFX%2BpIy0qQoqMolkeA1iEkQNRpvsYC676i9aR2XfauRTpyZgtrK2LVh1b4sdH%2Bq0XCKYE0Lf8ko0uZ9FyLP5hz2VzAk9AQHlW%2F1KwgDzvLdVMIm8z8kGOqUB7Sw9Xd0w8KL5xfwFenFPNKykFtMonf2edHg5qVp0JhtE07WZF9AEqZKwOPDdd4ffORwoXqsqqWrWVJUDcd6q83vXqm79xUqOwFZy19XSASL9Avto09FvTD9TmWWhosBAo1h9ev%2BsRXrM5kabsC4dE%2F1SXRAua9dfEKOsCdlT9qMoIduC2BYNbHHLdgNV6V9BQWzy4F9kdykviHEMjwHaeyL%2BgP23&X-Amz-Signature=475775c95f3bdfe54c3b77360f85af800e7748f23eb226650b6f31a37b946311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOUENP5D%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0WWs6Ip3jkL7lYmeZfmUAIisRjiODEtJ4RgKowQcPuAiEAsdoP92lLWD3GR9MQKEy9nLRQT55D5m2X%2BxnqReC8YBMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNmiWf7oqJq562A9tircA9HruM9YZCj9j%2Bl5M9Vf8y8Ok423zkC8MFQBRZuol%2BjQPB27bYVR%2FGfPiNZnhqMCCgvq%2FReSw1xaO2RogWGvCUmD9gaj81L3yy8DZI11SyBkWBKhg1aETHSlchEDm2L6mgow%2Blws3MgjqnzgqwrjJuxhpJ0gDWIsLFv8%2BnuFb7rg57FI9FuaX4TWi7qRKS8Bnb6WViAOGDcIhV1loRN1XJzOYrSv6ACa2aX%2B9S31fn7gn47VYge8jLmw8gzVqFovRWpxpXFl6QiXtKYgPrgkuC61U%2Bw5GIDxTNoyM2kxuoL%2B266k6uxmH1oTBeyrgFCBosAqy2RLx5CL6hP%2F1C3gJ7kkBxktw1GYJ7%2B9G%2FqBDRzsaXJY2DjaXDfP4ig%2F760ek2%2F0oUps9Ch5AeXiW44K2EcVknLpogTpSD7k4dTsXGG3BBGUftvYYO9sjflkzIArSdjvtw5hokKfX550Bn5fGanNPCXV93RIbWlQo%2FG88lSLSumtH%2B2o1rHTf%2BoBTCfqnALuj%2FOwO7750QKDbC4P0tWwvVT8wD2ulYhhvWuZRLjAAsYtbRrwMs38%2Bn1E%2B%2Fp4OOeIPbigimZpxuYKis%2FAQH3BuzMml%2BXiMXRJSi4RcgaR4LIfUCW2SOfKinFTMJa9z8kGOqUBVaSlCqqrU%2B7WJDfVjok3VUNcihjFqYfyK7ZuLFkmhDcnhHFdFENzQT73o9A4tBPXubQfmOG4y74Nncf9BtYUIAG%2BJUbYkxnJ7bZRFpzx3sd%2Fe4gJBbO7H7OutChl2RGy7%2F1E0ypFqKAeS%2Beynk9brb1gh28a8WP1t3XU44HBlWCScjMEwm2c4sPjZCKn7HipfddBKtKELuxKO2%2FKqNe%2FKeLLGXPm&X-Amz-Signature=06c1dce170d5d72a380422e507aab1cda086cd495dbedeaac150fa7c7a05001b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

