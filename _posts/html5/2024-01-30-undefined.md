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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZPOQCF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFt6u456J2MjbbY%2FaJ%2FQaVUOAqFy3NolDF979Z5UU4zkAiBKImW0OVZzT7z88i2orH8IAQGrCOXSMOHYjhS2QpHnIyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMsDlZPvkwxSC%2BXzAsKtwD%2ByOlq5pw2LyFSN3NINWRO4iEUQeWeaDAXyemVUiZlwUX3Wad8imhqnHdMQnpPNAg8FcC20GbycI5jBMulDm%2BUedK77FW7IK5qnC7lyyc4J4rWR0UcOYu1A%2FjooG8vjkMiMTRIJv7gMJpM4iajkReKj3LJs17WpgPrHMxw0SyhvVXsgCpl7k0WmkKAy1yopW%2FiEg5u3RqYU3egRIy2%2BmhGGMITy9iqEM52SfeIIxrlsNzYN6Ne%2B5NuVyQaFAKm%2F%2Bm0SpGpnTMwBkkReWb796FFliQfS769PNHG2DsKEy%2B1skff2%2FC7IHBqV03GgccD7hCfp5SRkGqSOoGSMLjecTF0dvnVESImIwITDJf2PXvzWdavKvlp%2FB1cR54pSgeqbVszO1DYRKcn7zwtxrfD7G9NUZTGvXfALGgKkk6vBRbYaQj1U%2BJ4xz6yRz8iRV5eJUmQ6X24fA1qLJI060u7wtzzQHyOILQKDl5dQdRnfsYHrqlQKoP%2B30bFNdSKt4JMsdvDT8xDOLZ8CzbhlxaNRW7vYnrHcTZacu1nMTQ52l7O5jkTqtc7HFSCAGYMwzaU5boYSqDQLrIG%2BLbenBz9vxh2GQLbJvBQ4qOzQiTWXvOVWSOEWMgluwLoR4YBFswu5a%2ByQY6pgFanoRdGiJaT24OzPH%2FbOw715OG2yIZe9c4i5gXoDXCj%2FAnDVNQY7P%2BStntSYMYFKREB14IVb3EsOPnA9LUXsRt%2B1AaMY%2Fv484S4JcsivZwiih0C7q2O%2FKHINvWIh%2FJzX8kVwxyM3zo2qv9uE0sWN4uQrIg1uJFk0YMcPQxXG0c%2BkAIZpmzeBGVKs41Uv0325Kb%2FAFfl%2B%2BjviKwjzJLVkPqJK%2Fm2Q1t&X-Amz-Signature=2937ae8f55809b9925ace98813b21d1245a65b489074080c90372280f57b7d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK43GXM5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCG1BisjPE7zIWFnHYwGiKBvapSMfm2Ydz%2F8d62qNQ48AIgF%2FXCPOTOeyXwOr%2FIJjt5x4qdFdLfaJ0%2BtEY5krxMW%2B4q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDE5yO2FI5nCwM%2BinPSrcAz2hOpH%2F6EgpeHmx5d%2FotNhfsEml1dLRGBrQg8rEMSuCjLHynkqTQxDWQgjMMmdwQktdEOVg3XyLBHv8NJcCObsVgUEk6GHIaAQRUo6ZZZPmqz0Jkb4Rpvxd3JxNx1dJ4LpQhcF%2FH9mXqwovOa6aeIutPnG4LIftHuOJpZ1UhgvmHB9r9S1MdclSV1l7HqW7wCH5EE1dYLdeh73KVIBqABNF0hWYM9ZzUfN6ITR3iMkbsXTE41XMu21s2yAFsl0glStMKw3ud4cQTJwXvd1dd0yyh3L7IvcYfVd5T%2Bi99Ns2IBwcVAi5qMpPu%2B6ayi8R%2F83ttzCzrHsVsBU3Mbmnm3wr1Zqi4u5aHmndT8IZ%2BADlQ9e3%2FI57Gz%2BZ5NRE3B2%2BoqQyHsr1ghbvjo5tXPDa%2FPQwgPDsjB%2BwrojH3O6c3A3BKUaI0Mpn2fwfRAMubrxun2ICNEsAI2Ix7OexzBG9U%2BT7w1nqFMTokbPn%2BlaOugIvVEUI31i%2F%2BLG2I3%2Fp8lDw5cjbbHhKX0q2yyMQgakPTJfmH0XfJasQQ3chyEI4r0kXqqDOPnibUEyT2vqB5Q0bDdhwUvZYS5atJ%2Fbxlm0Cfi46wm6pGQhayb63%2BXukG%2FSAYfCVqL9IITEakEYuMMqUvskGOqUBHJ0fXuc4hqmeiyFFCtsjgVoVwrKQA2WmpgYVb62NpJWoHrOPsv6ta9Nikg5TP5y%2F4BOoLPrw9DKOxCYlkLi511MwdELBYjCuTk%2Bo6QrlGQDt4YsugMn1LxQjNyp%2FFMEdeFA%2FEdBKsGWP5M8HZZjZTUC7Y1cbafAQpKz6Gm%2BkRGBqO4TWWImb4AS4YeykupZDVaAQFbXjRiYmvILmzgblYYU6TErB&X-Amz-Signature=cb7ecc231108c8c28f13cd292779592a3d15b44d7f45a496381b7b4941fa2bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

