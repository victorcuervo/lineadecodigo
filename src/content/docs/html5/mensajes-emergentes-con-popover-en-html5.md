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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YUZPBN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7U1Lu8KYr2A6bAljXcrjAqzukwB7ddsA9XzJkUXi0cAiAtZa1TnSkXESndNSRp7jSSgZFV1hq9h%2FgzZjCXx0fDeir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMyVmxDx1VQpF1T%2FYwKtwDPn0oqqVGQkTT%2BAXRKsUiqIbYMC%2FS7yrnQP29m3ncAedlaUyQFk59wQb0AuCNd%2B1EPVhMaV8pGfypC2IKk%2BNiBg%2F9Qq1jn%2FKjvkjwaV3d%2Fr14CARKTCmGVmD0c1XkoYl035WnV625NHJmBajyYuq7MPHrAB9XdTzKfaPC8K3knInUXm4%2Fq2%2FknI4ZRz5gSeDXTHW7cxJ7n%2FmhRYj3FKpeYPIZtWTb38%2F2MTjjYn7XLV7JpQ4SfPhQ9ojMGDh85P8lN6DyF3yLWv8IB7vX%2BIgpGYhOAeOXNz%2F70PEP5GtC9lhla9zmzqFpHrUh%2BRRSvcX0R4QuUYSWkyKbGQW8eFjmUe0KPEjAmvCy2n%2BVY%2FxQmzu6OZyePgghXPDKqL%2Br4ZLCdWttPlrdJECeQwhxgeq21zqkkEQBiTk%2BvXSc5I6y6NL1z4Jrmh6uw9bKf%2BCCiGdH%2BicC5jsI0wj0uB6YASw19xGseL0RxpGyfBImC%2FDfVjp650qCiamJYzyaZp4gIiVYUhLmdMjquUS6e5d28EtkWwSz9%2BXK46tAmzmrMFmWDXCXCHX5ksN6tnFpZdI5JdAXoBQarITsf2DzAPTRK2K%2FVD3pIocLmYH9Fnk3m0g1Eck7v30smGiuuvwL3bgwpNTSyQY6pgGhCpWHZEyV4nY4rQ4n7tcvwu5dpd7aC2e1ZnG%2Faa60nDvk6F13fXIaoDBzrpS8yn1qK%2BkqR6CZbVQZsCpQnTPPadTLeS5qiYOoyfa0EWV1K6MIvawyahokGkAHG%2F0T%2Bl8KXydLwEOE9Oc1DP7kyzFZLa6P5bFJBi6JmjgF%2Bqphq0ixVDvK09FlydKqnbC8LgKV%2FQ8IL1pFGKsgWmorr%2FW9N35caVPQ&X-Amz-Signature=b4e38cbb3711ac251f1f411f1200f5ffb218c106aff4aaf50bdb2f795fc4129a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX2GSDL4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHABLQvXQ1j4Z0eg99UpcMu3oMXPseo0d9k2k3xY%2Bh8UAiBhH%2Fm5s%2BR%2FRURoQm1tzkF8kkrxpQ2Rp85HejziS074zir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMEA5pyBKdwWwKbyIjKtwDZydsJXabE4l9Jf3Vqrwphr%2Fk5f1DnzeWZNSQSZyBSNIVJN9LzarcmmICZFreu9S6E8xOc6kYOnlOPUsayoiuQGo42JX28Iggb4MKKoFHzm5HeD3%2BMVJozeP3rucvnEGqgVi8LF5oONlXyCGD%2Fia%2FSN1lJ2h9p6SbHIIPIGhOdctNdisLEGAT%2BhTb3XmtTAHVTFs8TLQ1ZLueruozq7VzVdgUTtLwoJJ8cmt719t5iURr%2FRrfQGTk0E9ZDcLcDN7kZczhSFv7cPfp36Tcg%2F3%2FfxXNxGf9d6P8D9q6n7FayaQSYTDwDeYAsomkHA%2BI4t8SqbBFoUsfOI6QdToDXyUu%2BThVgTlD9%2BYS5d5QdIRftWZKWx1fXOwZKBMmKdLKcQvNajhNGU33tsSMR5iRqn4jf1sQhf9VjZJxzppYrEABgRVCuuC3hgbByPBEvGDl%2BDiZiHeSpjprtEo1JLn6mHE0d8D2rvd47YWBJ%2BBl4g7%2B7i%2F%2B7g41iaK0QKnpHEV69RBx4eG%2BbMOawwRpEr70a1gxaxC3%2BfjddhJs3Zt4b1OPUlhL5r1rwZV0Aj9LAG0cDQZ8HYumZ8FPgu0JD7llB2T%2FkdEmpgwW0q9by570LaB28hrQ%2FLLSYEAtm%2BiSJXEwx9PSyQY6pgHWZtL%2Fn2%2Bs%2BpkhEp%2BG1Azirf8uQCFBZR7s9k48Q1GIYrt2A8%2FLuKvhb6XWCv15KVzT%2BdN0tTC9HR7uS9YCRJA%2BR4AaLxyx2Pgh3ZMGZ2EgiNYABdOPQd7A2udHvLenKaQwJ2UmAK8y7aKH9Hy1HvSPcqNYqacvOz0djnaR8D1IJXJSZWpywfsHmRbpMTlZ3eXtxfYIFkKx4AB1oqwCSk43yoyGEgJf&X-Amz-Signature=53b246f0e3724d284bf30162b101968ee89b20f653a3f0acb89b87cc4ff61487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

