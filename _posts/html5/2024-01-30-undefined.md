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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SX7CQ5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCS1ZAkTT%2Bqq2iibLs85oVA7KUCIh8okb8GPr5R2IeLmwIhAJqu3wzJ59PRLmkz%2BGhArkVQtXopJVMWocQrvs%2BT4wf5Kv8DCCwQABoMNjM3NDIzMTgzODA1IgxtORWWnZprIJ7ZAxMq3APlh3FSdW4Y9AsJMEZgZZrOks4zQalsyV3JhQ4wYtF4NtUcXEyRIE0wiIdvui0qi0MzhR8W82oyZXtctnrEVPpGS2zaxBZaK8EGI7Hsmv%2B5N7edQD2MnPru3ShixsLg6pWQGxyGMtv2x6Xm96gz%2FOAZ3pefIzbxI2CnGG8t%2BO2yRL2otodpZTmEp4KIzIhqv0o8BCycRSEx6sr7qZR%2FQvZ9gqdaFu9RBXL%2Frm%2B6S0t6u%2BzLtimEXzTq4w5ig2uM67WH4f8NVr3SuAqWO4kBjhQEqT4f2ZxbPTEOJODonXGiu9PAEG0LZFjO%2BUmC3OwI31WIOXyqwWWXTG2ROBCcCNMFxpkex%2BZ9mL9vvbZuQMvgHBDI%2FTKMdDDCAwGIu3RhhtvsWUxmzM4BPZxAGaz1dS1811wYyNXNbSHTo2XKHGQgFmBV%2B9cno%2FzQrQHpNlWGtq97Xj%2FjHaxc0vL%2BDTKOJl1tnAFDFuf%2FWzhjF5hUat2lyFTPhVIIGufPHlwlB0B6v2WS9dnr%2FAwrGriVeLJYe5t29tpCDag%2BzEGkktH%2FXfpmZbK2LRy2naNL%2FiOPql6ZcpTy2RqpIP51c8OgFwOjeTcgRhC6jfFevflFRMLdCAaUE802hqVFvJjnvJc%2BMzCYr8DJBjqkAXPVC9sd%2F18obBTVNZA7GiCfjRaBZck4M3VlJ21mvWfxOrIAIEwQPBwTbq8NqvoUezV%2FKqd1GDQziELynerA9GlQ2QiI8aaypN4zmuspccRuAw1F3Cv7KSnOX8cZDr9ckdZtLSclq5zjpoOiYGIQadVWehLlv%2FhSKVQTyQHMdqGBFENhhlZknQGFraPZIGty1tnhZ85W6AqP4gh2fgoZaRLnnspI&X-Amz-Signature=42151517989c9ed3e8c29811f7fea6abf4de3954846dca1ffbd346d9aed83261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636E4DJ6T%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBjTmVDTnJbpLjalKUXMEbxiShxBPvj31LxwIgNUVxxXAiBNBXhH6IYD1ZfJC%2FZGibUf2g1OsFSxu34lOv9llJajSCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMYGPNDnMkQDAqUr9%2FKtwDID%2FxEVjUfrrDXRmhKZdMPXAr2HCWrVbet2SYA0gbhPQpas3sB%2Ba311szs3%2FXn3Ixn0hmUn7BInlDNNerRG2Ip%2Bs1HTLUVFNmN7Ay6MIe%2BcugEVjG3EB%2FtNYDESVJLmjTOYKokt%2FfomVV48xTB0IKOL8UhtWO6%2F0%2FrnAG45aOAPYSu6z4o%2BTIkjpp9tMY5Kd8MrcmM5%2FMUMjZj8iTs3vdG%2B1tnBVKsJukckcusZ1TW30qhFydPIApYiBF0QvNvOLlQxO8UdyvZmgWoY4BDTMGgfT3R%2BmY4hB%2F16pnDJJf1wcCxFhmmLOJITRwcD%2F276Sz8QhPL2mZ0flMehc4IDunQLDf1V0EFxt9cl%2FOmjLl3ugdmtK8lgayb%2F8CrreQLVGK9GRvRm52XOjFkSWTa8AQtgPbIBgOrIkj%2FKRLbW033ZVExwVXFtGYFhmmIqy%2Fv%2FbxdG8vJQ4zUdj13s4gu44z4mlE02jN1NxXKxQYNjNhNGEAffm3SnsPB9TZbliJ6E7hO3STzxb9pvOSiNXv%2Ffl5d9j6vMm05Bb%2BPUbCO8nBEiS3pApTbsjfWW7hQmQOXm%2BzAOHbBpZa%2FB9HdYeLSBfrv9KY8bHEIzwNaQnB279uGu9W2P9CxEZ1MDCLCOswn6%2FAyQY6pgG1sVaiejoa5sWAj1SFNM2zKyQoEXLTuxR%2FfnpYElmd77b4RlOUHH1gtT2h9XuzO2B78wzIDX6AZlLowf1aeD6%2FX%2FAREBR7XGfOXDg%2BNKz8NRen4OYo9o%2BvCSMqp33M2P0uUrAwrEUYng061wNUMmGIvgwqU0K5oLzyKqVrHRL6yOofeg9tpr7pgQ%2FC3DpoppG7GhR%2FS7CdWJOnB8BYkLsNUgIjY5Dr&X-Amz-Signature=7582b05ce080bd2a3cdafcc0762032d9eeb59f01de47e5fe84413be165a068fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

