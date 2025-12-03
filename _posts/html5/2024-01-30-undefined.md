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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T6X5A7H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC%2FzyatubvBdGt7qm1K5xrBXOxLIdtpsFZw21gJ4EigaQIhALPldV4nrqSnqzHKkB4dcKLNiIf1ljQpkn2AASGaGbQcKv8DCCgQABoMNjM3NDIzMTgzODA1Igx7TzumfgHr56ZojBsq3AP%2Flk%2FxwYpcJWF6iHYSewxdmmiUWyF4ddKG4tBmBtXEXkIyg174C71X47YVlnY5E1SKVmUzuzC4K1s7xs4PBOIWFMfr1A7WndENBFFfYqUeGxBO6Ok2eCK%2BmPAZ7RlDUy716%2BzjKeBu5Jh6%2Bk1M0AIWrkWXKfBrpdQtjIY8XGIweW1oo5yQBr1OPem5rgX5Vf4A3f9ha2VGCPzeahLmClY17OcXGJtVABDvJdzLfwL8sliLUCTzLPBFxHk3YiRZo4Qhsf1H4zgh%2Bb%2Fj3bJvT8UaIXBQK8pQ6e1Z0XfeT23OT9aRJ7mrDgWKEluQ6%2FYub3r2cTTIC%2FlgDhfvgwsJVQLlqBHFYlShlJhKhlYo5D8ToJx2YbRDWduOHkEatKZpewaxWbP4wvdlLGfrMqZqoa%2FiIFza2HY7U7uFTIFjjLstkjCa3G3WM7O1xKZYz1x9Zc9jTaO6J1L65fNxghR6Itq%2FaE7yt%2BYwiBVbtA8PXluNPGo7EiJnipHBRuDXIUWEOPVAR6bx20Eob9GMRinxFs6WlvrpAWEZzc%2BSD5ONaSjhJJWMLJTHE8uzzPKWUiVKbejUixfxR1FJjGfJ0BRMRf5wgEu%2FolHb8fMj%2FkPJMnu8LLY5Onstlb5YHICVMjCGub%2FJBjqkAYJhj6p65UqEnQzCHFU4lr0cKXWnG7GIiKs1yk7dLu1A9D1JebRYTmH18hFT5AESmTZh0DhGVvyoWm75GI7FVKQh0SBexjead%2BNcotSteaKpIHRoVmllRIsbPQC7CmumAPKHUwbVclRAoDbA02qzWtyk4BGPcYh%2BgUDQ4QIS3%2FJdeKl6ozf6IGaNyXyzhPAdOJZCH0CxrrdvsJoB8UYCW3uZXAwy&X-Amz-Signature=80c4eb51cd18c5add1593821840995d7958e9772ed450101a1656fb84718fbce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3O3IKCA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIA8r7SleBBR%2BLd5KSkMTZDG5ciyHp9BeuGQIGCq8T1%2BRAiA2Muu0V5bFYfKq2mJv0zyy9ce5spe%2F7%2F%2FUuA9XIl2p7Cr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMNdckdQsejTjX9vDaKtwDRKjFxuXpy%2F6ZvMPrIMZxESot7ypri7dvZmubHKoZPhaQs6O33VITmws7HK9s1YoPsPf3ZIWcopoIR6aqex6tFrsXc8e03V5i2TP7nsW1gUSqwcsfC4HQMN%2FP4m15EgxlwzmBcF8i1jWUePLLoS5XqIH0rlIBmsHCDDfhsidkJLfNFcUW9AsfLL09qb71LnYWHs9ro5QvEBZcNnj9YoDNvUyRBX4LsW5ARDiXIXZ784H1xJBDFuAvs2yt9FxbmaKPWnIWxEQhRTUNrEaKtJvGGrUh2VuYR%2Bpwk8uX3tOuFeCyFgMqgRRTP6Fczf9arJlFsy01Kx0%2F4k1oypd68wMrebtumXYErQbURNl%2BIUu70oh9QbG5pOGhnhzlltI8zL1BdBkoCT87JcRW3QVFSEWoD1DxANwkWTGaCPJ60GCRU7pdiPvTzkF%2FtnYOdtg5sbN2FtmgI%2FKM7zUlpVPrUhy7ye4x512TTjLr2Q3WxwQ9vAHH072vRu8vBjbOkskpWdl1IK6H6Rpn0iRYvY8Bt2EmM9SSYWnKObU39%2FFqZIwzufSke2iyDDnnoo31rNgjGrXVqbu%2FHTABLR%2BzqQk2GZTjOr43K7VKINexWNqqP6EoKp01gSbj0yioxUrQaawwoLi%2FyQY6pgFflq8vW0i62bxF2F7smL0BBqA05RsDBraOgZePmT1vpUGJLpU1vD8L9eVZtfIzYF0%2FVqE8QHjYzCEXp%2F%2FmWR2B8pgpTxR5q82taIxhQ4ZjzrlukKqRKDKyqS80VN83%2BC3%2F1h6D9Q5mikOcWCHiUpqePpe%2ByD%2BVJKS7JpPNBTm1Sb0Kkz4Bm9dyzERHmL72aHHxkCT2aczk9pu16Y6l3mLrHHu1G4Bf&X-Amz-Signature=374e0ceb6837cf05101bb5343769efcf6be10ae161d05a29ef2220b0894c6c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

