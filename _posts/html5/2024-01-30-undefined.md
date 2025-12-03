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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DYWDPWT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD%2FA2k7qvK4Z6KhmB%2FTy9%2FUx0j6p9Er9jVQh%2FdfCuzYWgIgf2BbpzBgZhS4Jum%2B1eGk8LQYotwEM3bpmd6Fy1rmtTkq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDCNutJBdbjKcBxCFdSrcAxQt8NS2dRc5LYXQybhy57OdzFen35SREJ%2FlsBvHnDb0zf8clKvp2Y9aKEd1UnfTdA3h0pjiBae3KtOBSly1vukzBZKF0Fq%2BQ%2Bd80PUyr5U8k36AseN6QwvAZ6PDM1k1p6BeIVVxreJ5WHc%2BOu8RM6t1d%2BsFniIzFtAVw7Hwzei7hAAeUyuSpug7bSUkZ0shM6DNyNq%2FZPFln4DSfm15%2BAeECxNXYkt%2FMA7Wf2QLZG9rIQg4HoPIzyJmV%2FLX%2BfHapM8JSDLoqbUjIv2KNeiijDvZN3DBbvPhVcNJ6sTjwqPGQY3HQ264ccTZFQPuSZwB4xTElF21%2BCfeoEC7Yl3Ya1u2tD9GMloNZlBVrviWbQ7pK1%2Bjf0T%2FXXqSOSgA%2F7JaTQAdAHnOJ%2BRpSyhKPFlfNv8CAkBN1UCN0hvPTAAwqe5R5VcjsajRLFbZomhas3J632nkMF1UoCUPvX28gUItOUEvq5hjiPPXinrTjbE2USZs9F5g6morQDYA0%2F2Q2%2BJoTpcJGtJOg8%2Bg2Mka%2Ftf2RRpaQd8dqI4arThkcUKzK9HdWbo04opsPmTnBsxGPEeH2lIDNqjeo0xaAo%2BAOwwqz9pQeo4mQkqMoNZqv55IIcXKXD9zBvOfAvqQhHiuMNu5v8kGOqUBtXjaMPP6T%2FK7ap62oQCgUoCVe%2Fv6qmza8AYScWDSoFW8zODa76tAs19hWuSl9yrZ%2Fi8ab7jb2KRIeLlseyO1x0Ja8%2BLobl0RDd2d0xOKaswIIMee9fRGYfN5vTorX8meb55l76c7DSKPPRo4XFPDOsvOyLqH00oPXurwKjd5Yd55qTAmKhWuZRf%2B6HVPueJqhINoV6dKOiIn8IWB3Kb7%2Bj9ubONE&X-Amz-Signature=a2243f688342e2326f70e7adea550846ba59004e25ee406cfc9f7fffcfda5c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROAH6NLJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEJxpiaBz8W9eIZ2cjrLi0xB80eLIAuQnIAy2KaR8KBmAiEAnRuKOGgur02AOqlkCCzkdxnder7hiwQRzXGdx3Gc4joq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOzmPtl19T8LhTpGNircAxsvJeB72szmxSqOOPVOZ9uW94mPj7wVPAxUuNH5ZaOnJsTkgb%2FT%2Bm093NdN1%2FX97TMmD81%2FHf0%2FM0SJiY7PC1o4diDuZ30RwdfnvTmX74w8FW6Q026I4UDAaHt4StLtYqZcYWAH%2Bi4axO%2FY2wkBgL9nLRwD1HgyIUlfodX1vYopq8O40nDL6HEjppbVZTwsMxcb%2Bxz%2FaBREL37aFmBakKgZe9MSAEj2enfTr%2BjQDaHXJ9DUz23m623POKheSOt9bHsE26HZLiNX2vJ6JtHKuk1GhuO8e0hkJJTWEZE5yI4SJyJSCqEkDRKabugmKLIt72iPV26vmH6kbHBo0wmgrmqAVdIWNeh6ekDdD4hSORqllOTtBPcsI9BliWWmFEgAhnDdroTPwcXu9WXXdybRMgnkrPCgb%2BZJqGUNbe9XswY32MXZEyPkgTJifUIG2kyWMIsRDF0mekQa2e%2B1nO%2B8RH7D2mEp6jFU460Mehc86KzVUgxe05i02MtJOYyg7QWyPq8C6oHm4WVNqp4odiBBykFPcscXynDtB7oDJmuoJwR1yPi5NL58MgKeVq6ksiL0pycdwVxmx5tkRFQqr2UGSzUyWuQP3zeFOhw8wAcTpKPRJCgAPOp6UKEEmFw2MOu5v8kGOqUBvogCDoLibIN8Gudm9ZpVc54p8eP3vEk6E9rTWQSt5UtVzisYId7jBYxR%2FLIQ47ufIRpFtxFDHjI9K9lQrtdo3qxVwhnOUsBVLN%2Bi8M40wZgZ5uR5IH1DiLTqLbdKfGszH%2BX696yDltR0e1bgBLACdAk31QEj6wNElRV89o5vk2zxLJ3Zj1ij%2F7JnPp%2BPF7VOwb3tntHCi63GEdXLX1AuoSkVb7ce&X-Amz-Signature=3efa25beae58bf1dcebb8429d95a05d369af03e799d2454be39832d584ae9a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

