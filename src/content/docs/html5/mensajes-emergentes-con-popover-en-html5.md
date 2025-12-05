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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y75BILE7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC99GnnSeP1Yk00l%2BOokBLFyy3EkxoPgxdNvCjoCUZwywIhAMAKQp18%2Bw4nByI9u3i7f134DKZl8W8VWfemkP2ITKAjKv8DCGUQABoMNjM3NDIzMTgzODA1IgyiZPYinF87LWRA1Bgq3ANCnukYw4DgRGVfRakLh7QzL10mGvULFugL48o3CqId0ry%2BLmVmGb6tZfqH7rjfdw0770N8hfX2wKeFvs4H4hJ5x5exV7PfyMnHG2He1CRyc10pJCuAHpIxpx0W12Q7S4LKwX7RNOqIRvNSOOb9zGZnp4oN2W0%2BB6CZu39sGvlTCIQoDeAOv9JLAKtLTk48lvPaptRA5RpMjWkalA7T4d7Hr6dBSeb2Q155DPVGa9bcVsF0xjr91mqPf8uuLrzep4E00DCxkI0dDRb5uU1wVl9mOL%2FHtJv%2BpRSyp05h3OnkfqHM1dZy%2FCMX9Cufsuuq71tIg6q%2BlAvrZ6%2B6CJp0Etu%2F%2BHwaYtUfzTGrqFS1pEpGSblE3imbLV2AKsW6h6kSMZ9K6dEv4Z6wlwp0JkTk%2Ba7aQgLZZu0IEjL0X8KxVhnAcWs56P96t0hht1Db15AQMiy8eCjYT96Kzh1esLGplPFasiSYaHxYghu6YMkQJy8%2FPtcHltX5FydN2%2BgQFf5V9Hi7qj2nNbmIyMU5oPOWZTvoJisAGdvLQ6LZBpwtzHXcj14pSh8qVD0fBS5KjiYcGHVWCf8KgYwPyq8Sz%2BcHuptQQjCuSGRRF0dx6vTmrG6n3EsWJGtZtJpeAVP%2FnjDu7szJBjqkAU%2FEwIOKvXTKEzT68C3rNaBUIMoHewddthDEGTln5HFOVipBRE7%2FZK96JTaXIKaH4bDixL2lw%2FdYvcRD7740hNe5EqgYxFy2HywA5yVKWg7Bqztydcltwsgi2HMD07EZAa44zTebV%2FON%2BlTpmhvZGLcNqbWzm6llRFaWrl7oZVnmzxuSiCuZLnsMy8EURBuFVsYUHLZrk8sAQ20pIVi2qmoYCXOG&X-Amz-Signature=548f01f6d4483cf5029e462cfa0b7cf21397854eac68d431d2520266f76f03c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5WZRX6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtHs7tu6dHmwgmAxfSln%2B6354W1wUBh6S78xdKVHeixAiEAndgXbzxydVAyry64hi3yZwxhjMJ%2BSDrTmzx05d%2BmeP4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBVSdsqg9FCwP07DiCrcA5RRMN5Hr0Nf1XUUqKD3asck0WSwUz4AAtBxv68PZo5vTc7kVzvgBkHXf4fW1CjunDCQTbfADZ7v9FvrHrzzoes4CZFe4WvG1MihRsgdqE5CyMo1QD4QHoN24zx3HYgbzHBtI3W2ja3nraacwvazo%2Fmf9mgR%2BlcAx7QEcbHiZEqtRFWPgdeqpzNivcGOJeA3pQjElsqt8xNpt91wU%2FnUISWim84qDFjzkwOGwItXb3cCm6Gkz53J6FcbtnhmJceVy8N3kbgQlVBRLcDHe%2F5YanGJGl7%2B7FPAdaU55aJlXEVxCwxmF7obaqHTDKBERDjpPcgTBXwhHWcS4i%2FCklS22SfHcgv63%2FeuRXZ%2Fn2TRMC%2BYJC7Niqpq%2BrtH88ivJWNQ640saQHv3WUcbMl1KBuvHlt%2B6eE3liVhD6psWFkCW2hidGaD7gHHmvWpBr1uzZ8mgZbWb98YPBAku%2FKeZHs8VVr%2B7nUvQ6ka4XSAla6B7hy0YR7q15mNY%2BsxYgvJ0QzQ6UvPjnQW05T3k1xLi2qeIVBcnlW4mggtR7yJfiHntE4UovT%2FE5f00YT9E%2B5TaHH%2F4UiQEmsvH9kU4lDf56DphaorIG5FpSlHmG%2Ffw5iPp0YhmJuBgD%2FiOuOAVz43MID5y8kGOqUB6dVq3O96lscqTZnbYELuFm0xejKW2Q%2BbasHXXNejXxQQCPFS4pz9e6PdE%2FTT43%2FBduAxYpX6wAj2Xc1%2Fj8ceK7g3WgDdgcZ8sz8JlYf8x%2BYyQhD7jZ%2BJYNxubjs8fkfV8T%2BAGAoG9ll%2BrEQ0htze2Xtx%2FUObBfD9GYB0hEq2%2FWGMnOwE6y9xRXiKwR0QkIivX5vV3BjM2gfyuBCdjoS0Gmwyd9Ut&X-Amz-Signature=d885f2a0cc67ed14d8f4ccae0a2b4afac398d127e108beb041544246481b623e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

