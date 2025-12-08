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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YAWB2O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE%2BYf%2FAWhiP55xNifclBFavrdqo8AAZtXAc3LKJFgTwAiA%2FCG4l87xMB7%2Bvz2HmqIEGxOvCX2MajerWw203G7NQAiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufejIdwdFJhenac8KtwDKk1y%2BHkUS2%2Bi2HDXPCj3DrTi%2B%2BLOmNYT4pHaFvfFrRyR%2FTb%2FbwR0K7NLZqeofO%2FrTquaYcJdbScpF%2BkHF%2FO1Q0a%2F%2B2NbHjF5hjbsjqFOPD8bBkaR9sd17qu84m2DdyWRjfOKW6wbCeRih%2BlK3ycw4C8Bb%2FG7SVJkYhTOmffOqyAkWLrQuIJgEcEMSEkttOX6lPcqnU5M1kYnC7GkN2Lh34ZBEkP2cMUcQnjs41%2B0b3drHl%2BYyBAdz66GsLv%2Bl3BVHR13v1Efzra7pazuyQr5S72ab1qg6l7ipwLzVzmClJHRDad%2FwzAAgf2POZiogdpduZzTdTWRdYJ%2FlufbK7Cl6oflSoBxTzIkN%2BW4bQy1yaDsZ1p835ftPNXek3tho5igPtczXp2JgWABanK8YROaUCkkGDdVNjG0ViW44wd2YBP1k4t93CgPlLzeWEHHDeNZeE%2FHcvOlCzaVQ6dVS2erIQkTM9tb8hLNbC0Z2YVtLZTSBqaFtEgOjLtmDdMdeK2EfqMuUh%2BGZc49JkQhwa59%2B5y9rdzCqxVdVSe2zTHZ9RD%2BPMETlXP5dJIqOtl2z8bLz%2FJp1Xo72MLl6lZ7%2FKOHfQ6pNcksK3iiNSt5S9g3VsFgx%2BHExJi5NOCZuHAwye7ZyQY6pgGCJZBL0w%2Fmft%2Bo%2FJkId8Hi8vJdBV%2Fh2QgKV2rtJGkPa9%2BxtUkm4s2ZUT5G5uMZ5t5w9lm3YsR9HydMdf4pdIcGnAHFCV1Kym9w9a2nVj7gYLYWnx5e2om56iU5szYJ7CH%2BvCe%2BleINSqfagWb0L7T4zzyn7cFjo9w0xqHu5LiN0SeHnHe00u8jWKX5RoGIlTYxmpZcXItqCkOmFosaxzK9791cYW%2BG&X-Amz-Signature=e1f66a8a48167d0d00df5903ea78a7bf1db0ca5fdf21794a46ed929dbad8eeca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQLAMZR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDU3wCbulegMbILrq1Jbus9U75XnWLxqwZNWUqa69yggIhALvrQfeSsZFu8sjcI4Nl3SilelO4jEztYzcZIZ%2Bby5tBKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2jPwX803NlvoOLnkq3AN55A4i25bwTxLmDc%2FehNExwib6%2ByQZltsKwW2WCE0BVu2Y98YY3%2FWDeqPYw2nKw3cLnoyS75NSsM8qe%2F4NzU%2FhQDdTjDH6IM8X5yyZ2PI3W7lAozBUCOzYehI8rNgIcq2c5L9yKS1MRkjmifJ8lcQ65o%2BTBM%2BjYEzgJy9AiawCTrHjcq%2FAqa3BJIFsC0e4UzGsceHPg9vUWNwPEFwsNdv0Nl6CZHz1%2Fqg%2BAYFD3KwoMl9J1M4V07X9WAnAcQ6Cl39utrWwofCY7dXnYKwgW%2BdjXNNOTSpkQ53A9HtAGrqaOgL%2BTZG4bSE16JPjauBuM3DKdhLTdBYEUDFug35zVj5l3bNLDj%2F8jm0O%2F4Ysu2D3mqh9t9ZCINc%2BShJH6TJ5cxx9LASMG0rWbWMd2%2Fp0%2FsCsA9EiPRyqHBBf3K3%2FJ53WNBUv9vo08ajn5LAlwfVYiztYRPE85i3hqvO39NLiRnMvJzF3sbLuIVmH91Rv2x9yOYRKn5Qn%2Bw4521T2I6Un9v6l%2BnPXbxqAefc0MHtIFsl8wx5tvQpq5Gef8H8QpimbaoQIqdGc7kJlyoJACpS9dae7yQe2yVF2bNrLtbCGQmmL9Q%2BNTHhLiVGtW1qHRHzULZsNQYDgvv55hqSZTTD17dnJBjqkATgofQZNhcB0ujeEUPRE4CWFOFfTiHl%2B5tMAu0glybu8JaE%2F2mKCVh28sTg1WBbzFAhxLr9SzJdOAuwnN6VJQzQUoEwQhQErCMslrT9xmf0dMLmfQH0TH51Fkd6EZhEJnDSwGIggLQ3Uashb0U9Rv9axR4eUmDf%2BdfDXxvUWERN8hANaCmLPQO9jSBSLxa07OXkeiDpdFlVrngniFrUTUs%2F4t1ZV&X-Amz-Signature=995aa75f0b0d485f4fe5bef56ccc441756c3322bf83f97217070be16a932e795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

