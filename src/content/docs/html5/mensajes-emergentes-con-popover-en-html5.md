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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA4FS5PM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6iInk%2BavfAoTAh%2BO7EFMXqDjkH3S78qaAUSZq1vYhnAiAzYAmHvlbRrAYxVyJ5KrXQOtgmX%2BrNFocsHlbKkH2L6Sr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM3N7pSrG3YQKZ95t8KtwDo4TWLfhK2vOlOuq6NFFbhhbl%2Bz7AhGPioHBx5Ocw4XKcd%2BsGvPwyBziPh8jFgbMFzM%2FFsAjRoOwU9%2F0A%2FN8Q79BC1QLD6VoydcJsyEVXJS%2B%2B%2FktWcKYO8vw%2F2MoJg12mX3PBjVmiWOctXLjRpJjHXoaPTCel42XyecyGzFcYNjFZNUNFDlE%2F13h4p6twp8Aa%2BymNX8Ji3cE9Pyc8DtZNNyVE9YbsyneVrlnxjvlDgwmywaXkDLBA%2BoHIt8h8XYDvbqkJ%2FfcL1vbBKg5hMWj8n68kLJgq6tvNzRRIo11NcNNWsHYmOti0ja5EQI8jvJhKyzHunXjV2bGt3Zx2bC5Hr8T927AIo3tSRCzZfigzCEyi496NPYg8f%2BSTg5tbajEUZnQLww17yCDEBv1UBeTLkH%2BH5SLCAusg4kW01dnHBAkRfwX1om936E4Uq2IO6ugNtGjcPovoD1eLdr52G%2FjTddLW%2Fh6RVnlLzSd7qozEB%2BSOsA0pXW84SznC4GZwbaDsg747yscFCfWfGglBrXzmrbJbLgb%2B%2FyKVIVwh1C%2B7p2X82XfM%2BZZFym9pvLjE%2Fh54mgfn95PHBG6%2B3jQ9yabc9ODXy9NMD%2F0lEJqbbbrdCuiqqGOa9gKlJHqysXMwssPOyQY6pgG90xGCM4VygJcns%2FORtWtoK%2FlK90g4rT5sMq8qmMAYPXuuZWtWcBtqqulMzEKknjEWgZPtpL%2BtdUfoI73%2FC7YKmkfP07tGB53I9wGaa8VA1HmxNNe92UTgiydQQBTA1RDG8nUqkpdJEpxynNmXu3bP%2FdXrGPBf1fINLmSATVjLOTjpnSizGoes57ers8o5XW%2FT8Vv9lQ4SArDTzODwG7uBu4YWIyfl&X-Amz-Signature=d04966b7a6786315574761cadbf3d66e854b07bcf1670f0c69f8180649cd1f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSABC5D7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQRJ4O369laRbqQpLM%2BD6KzppKgoZYoY3nfYGFCUZZhAiEA0S%2Be%2BceIITWusMPRcUeQ9SFdALgZwd9hCngPVL5TAeIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMB4J6PCmb68U0W3ASrcA%2BjcZhlc1nqlusdlRLwzioEvAj9TmRZJZIifyklOMBuM44LN0z%2Fnar7GI%2FSalW%2B%2FqF9Me5FxtthIWWxhjY2pxbo%2B4U3q2xwW%2BtZp8N9u62qahzlou3DfgCZM54nSjje4arqlmgzOI1NPcxzmzEmvvd6%2B8YASamWCMpXLgP8JHYe3KVFEPW5PzHXkPwPHPpFcu%2F5%2FPOGOfsNgVFe1fopsAlaj0hKcBhnBWdYtu7KY6pavhOvLZC9bmRrOHWvxBCZcMK6tsAGX%2FPkUdbr%2F3ZoXUbQTT%2BtL0H2SyvzgeoAlfz6ytFKEePzgNS6vLGhSfXnRfLNLy4lnoNDehQdrs6NTsNe16fiJ5Uzv%2FzpRj36YC31VZhtl2L7tvEpveWv%2Bs9nbdFRQKYZ8ESMwySkh4srpd7kzM24ZLirFiTu%2FlefRlbjNxNEekS32KfcQFQjjF%2F1uvbUZXwgETTduHn1XWJ5R9PAd8%2BbEPhIj0I9ffSzTbMLsgAEBKnlN0CNURv6ddXm7Ynj9YiwKJKes3dswV5A0cFjXR1OaJ7QZ8CaSZtS0j3xxnuUYA4gFPxBtCJcdNGZM0AtmRiKrGd4puJEkPOHSjIan5PfhjcuMZ5rEIGgpvVvVu3ILE2AcS4XmBNs8MKfDzskGOqUBSZvGuuu4mZ%2FwI6hVGyhFXPHM8l8riPs64frZkVjOunmnNyv4ekVAGKErkOjSNj%2B6dymeMWk3MpoWm484ueHiE5Mh5rBdbEVkwqjcEML43zntv8U93wRVwKZ%2BiumTl01Nmr%2Fq6LtckJ7eEtbu6hrzSc2rkIkzfRLRIMhlPOWvYp55qsDgIuqV%2BsRGdAFOwxPvwDm6rXwk0BNTslyek4Ij0PEcgl5O&X-Amz-Signature=c12d8b62f7ba7119415ed4997561ab5e64cef06daebcd814258fc28a4ebbc017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

