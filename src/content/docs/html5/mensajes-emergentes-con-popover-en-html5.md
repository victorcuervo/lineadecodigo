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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZYXOZDF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvr8AecXdI4HO2xoODxxZEVuYUUoBdBWwWe%2F%2BLy2uklAiEAjDM7urZLHsoxmgHm%2Bjb1m7CatwDv8L1vEUUtdnTeAQUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMpcS7%2BWeU50cn9FlircA8LiRmsOnScbX0U55KX2O0Lt0H5YgWLHv994V68wkTmo2riV2AiEeiHw5rOPS%2BRTZnlS23pAEBg6km1aro8dZgzIs7O%2FXF9YXC2tJO72Tn8ZylzctjArZyC5HgCyypJE0P4WhhvLFizgHrLNfq1xrULUOuenV77dbHlMzyM%2Fo%2FMVwgo1XLmbjjjyqod7fmUhNwdiwkcKNOFsJ%2Bw4TIr0fSdt%2BTMFtDNMpxiLfg2yAEM2Jp6gtmgStox9d6bcQvGzhES2rEJVoMOE3u0ETwNsl5dYB0aPBF%2BhrQoAR4eVbKLcPsw90TUzAvDMPeb02y1ZeP4YeMfa1RC%2FZ8U6%2BiBd3mXSzPLsu36rOk1UsbYTs1HoIVpOQlWWBHYbiSvM%2FSUx9p1Gl2RzwTNRoDsnsJ3Vh131toC%2F5wQbQP1OpcxzwQzh32Wo9dS%2Fm7Ed1enznpGqBXUWx8RkHXfHavFxPZVuCh8muJCNDeCYj6cndIVpoLLNojGIiMv23BYGiYBzx5QbZQ7xgIL1wDvvjXk%2BJ8e3NrKl6ONZW2S%2FLjBX67kbLh2QYDv5UCxZhMTEsX0DVvnAmcefTB%2FIV%2BUw%2BLawh%2B7%2FjpneOywEDpdcry4p%2BVUzOStAYqJEyonGCUj0N4O4MLnezskGOqUBvkBakUTvW1dOSxIVowdcc9j6z79IGUpuY6bzH4TBUq%2BaRuYHHax69mKQevzzfuOrY7cc4enU7Yirb9hajF7usOrfefK%2Ft6TXaZQlVi7A69nA7gIaucMDqB2K%2F9%2Fvq%2B09SW%2FUCVgTRbd7a%2F3EDDZDprtimIq6i%2Fpma884%2Bq%2F7rI%2BDwmTwq8hMUyfpbP9v%2BNxr9gLkGr5ymL5HMMBQNDZMcBSgmUkG&X-Amz-Signature=a82f35211c5a3f73fd8ee76d8ca3fec1ba06936119c3a6d646eab3ec82d9014e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCC3767N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBz1ekVFvEHzbEXPVHS26iv%2B57FCkl%2BuHqd6qbsfZAcmAiBc0kbC6FABWrurdZKAj6bvF86eE2TyibPV4aE7JgkMFir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMvrYndrw1IkReOHIGKtwD%2FLdiZzA05GuHf09CrK%2BH0%2BNqU%2FsVuBPAMN1UjN37J%2FU4SkpoVsUwieDxkNQF4VXxnaFmBSRK61zGMr1ADM3Wr%2FVDU4n5uePSU4KDKu4aZeY3xQ5yUgpas4F84zBNfzB2bB2Jl6VjjQALwpp0Y0kwlsZuYRoiVj5dxuIOI2zgdwrrUeWo1rR6%2BM9frHG7ps79%2BQ9%2FJpyiY3grxQaNKtYlVUAOKkdBKwTKI7qK0VsDusKexmMNOq06DaqD6pRBUeUX3wg39KSCZ96lQfaBYlY8KQFDC%2FurTAWc1dWkuC2PWABC5IeFma7UEQj%2BtA79NnPmaxv4beiSe%2FJ%2BxhTz65KsLhHP9ZY7gl%2BixtYYGl4CAUzlKWvWpv4v80WPeHVd5OYgk4Y19zTnMpbp%2FSyFX864jNtnyhHwTJo%2FV51Uw1aJuC9ouzQmdZvhlvE9YYM3HP0T%2BRK%2Fbqp1RQ4Z%2Fe%2B54FvQe6ajWXNt7e%2Bx4qIDWmMjQ65cveFbC%2Bz3sCDFwbd92RioHsS6mxQz56Y70r3JWxmHbS6nAL6KIV5A6%2FZZUglg7uGR8HuPDJNoR7adNrmesS%2Fg8Ms9Wy%2BnHvVegeMD6SkMaAo6AvIL%2BRMgGE8KJEvoDIG9vk0tCYMWTO0Zlc4w1d7OyQY6pgEjakkkunmGjlJq%2B9kX1bfVNRq0nTr%2BdPtslh9AHiQ65YkHwZjzIxRqqpdeXhsxR3UL%2BD2Yf1vbOgWkaR3bcwLlGfaaRgpFhj1XK7%2BG2LkpX0ULON0O05pFy6KlQc2LCttOoTPLIsXgbFpzpa7dFI48gc43ayJPjOme8U21Hx%2FMjQI3tfL9BMITkQSlKT5hN%2FPwddj7XlazjjexV5oCENeIbT82pT8V&X-Amz-Signature=81a53a656ed670966bb16bf77600e0d7cfc20719f496e8b00a18370026a911eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

