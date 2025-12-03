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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR6EMDW2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHbcs6yEWosAdzSTDKMnMK%2BAIlQlw%2Bs0ODccd6SZh9tuAiEA3FMiDskgVftcRO8vprvJGv%2FH4s3NcyKzo2lCfJlBj9Eq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDH854iECD0JP2MhXECrcAyHwTCKQFIRdvql9fUP6E2Al2%2BQSlt%2Fwa4Vkmi5xmjHq66q2igbGuydh7VWa34kfwbZfCh%2BhpNlwOpBMhKItoo7ujioxS45M%2BIzRywyOQNwts3eRXF1gnGH5gJiw5Z42m31olqAiLrsgXgQe0HLcSgFYxi4QPhqqoxo9js2RIXK03o%2F08aUNFmVwEdubQv%2FNpgx%2BB6W9i4LoxTaujbkMZvl8e0wAeJ5LZlKwkOSNr0H%2FDr02v7NgJql6VLgxExO9IhDgtTZxCWI9IYhfa0ukXo2LLQzDVUVhFNwMiXSgDnXq5JiyPOo3HYN%2BD5wMiT76jBXcZSt9EVV%2FK%2BreHIpYVpY%2Bk%2FkjuGaFjUkUyIpnXvkmVIuJJoJtfdu5sXaepwiCimIlnigs32hKrVJYx2MGyIjCEx5piwHIXuKqmzguu0fy3rUkDLiOYM7ADh7MrS18EwiIrYJ%2Bec4HUHFdEma36YmN9mVQZmPu6d4e%2FDuS6rpSOz9BvGzJj61ERgQ7i1ATmAAA1kCcnt1b7A8t1b%2FRM63hXBAF0YKy%2BMcXg5DgPn5DApydcr51Cj6C0Zwl5FvzPCH6rwyOj2hBINo2fF39310Bxj0OgZtyEBFZKYpXT%2B4EfnHVvRgcv832HQ3aMNKmwckGOqUBf3NfIL1mfqKdPVr50E0g1xf%2FghIPKz8TfHqnS8eC1hruX4b3%2FU62TrAueB7QPLFf0Icer0wjG0Gufg0Y1GxWtNyf8ImO80dPneHJAylI64OyoyxmRdfwBmgbf11V6DnyL%2FPm0psZ0eh9uy4yi%2BpVFNJU%2FPu%2FW2Wq1rxcC6Nv6bIUUvJ3gQgWM26WTvjUI8i6ZZhBVUNHvcdkH%2By8WyVK4NbjoYJz&X-Amz-Signature=6c4b93553020b4c0c4c4a987217f4948e036ca507ce14eece5d3a11a09c79d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRRF7DQG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC4X6vv7vlLomg9ZbdRQZsnC4G%2BeUDzxx9OeTlDT2L%2BEAIgHqSK1xIggGEfT550cORYChbij3g838DzECVnqBEoTIYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDOV9Y1myBN83ZsZphyrcA7DB0xQoSSai2FtuXbIlapOiwKYDMXI%2FWMdzRrHXRlBzbsS8LSXBK9AsGkyRTDctvlqO4ZbXGNkgaREsj43qK6%2BYFbeBSVhqRNIIpmAYRPuOf%2Br4L5xGc8lKBvaJaJiNNOUwMLCiX9St60B3s4nYoXOi3frVsnqkD251%2FM6xEawuK%2BfK%2Byg%2BGT19vYk16vokp%2F%2FF7WAjRDa%2BHab%2FoLDZfsDbE2rXS5JT5VtCbXkMdFaLs6Ot1ONIzuii5ZE6z7lmBLSQYgk2eeJ7RsOL7DlDUUG9dYLVXU%2Fg%2FOHJpT2Rwo8It8kJk9AzFBpl3PdJZuDQztuirBoCkVk0fJuTCVDVX1WAyU4CQF7xb9k5pTQ0Vn62DUjCPdKkJqIan%2FxuAxttkMdMayUvBDBCXV91SbCmBUc%2Fkv2cnn3N6Ec%2FOe8AJ%2B0NB7uv8qcFpQmO1yk82cQPiYUPOB6OJHrDy5xvfXyNP3FTRfnDs%2FWS5E3Z8ZI%2Bq7aoPmuzRte7IHAhfhLcWxh3W7G9Nthe7NMHmTJZgYcHS%2FDNmRvb545ADOxJD8Q1b8J2wZ0Jr%2BwIURUSZsHFCzZaC%2B%2BkcJFpNIdIcPtSsF2UGFot9d7pBXZw3hrsdy%2FNIW4%2FY0%2BcK7pbjT6r4I4GMMKmwckGOqUB7qEGLxUGfNE%2Btv6zwKsULYb2IbAa8L%2BSa9wKuWkBZclEYMS8uUkzBQDov4ILKyTs1V4Iuy0TV3FHM9acwD8pUnNASWkOYtp0Ng6ljpHxyzFLDBnVVNA1OqkoUawuMVjlrXDQKG3DbHnhs12EYdA74qSHifJpY3uWBAPLrZKNw5m%2F6NW8wgKRIw9eD6Gj%2BX6lx85I0%2FzCoU9acldFbXrCv6E0826O&X-Amz-Signature=c8fa4be0528f1d9a4503f4e24256a02e715ea1a312192a9bcb279358e0491cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

