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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB2PNC3X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkZxKzRC%2F5UWVFrXErEYfq4LnWU%2FmXYpEqvR%2Bqq0lOwAiAMclE4BkpG1pdZBdUE2O4Uh1bxG4SJ0OzIPaavAvNsMSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK1jtNjS1fh9jwCOdKtwDd3bZ5hnqMdEsNF7pEP0SVziIHulm6UW%2FIphiZqQ79pb6Tx4h%2BKh6kAS93SemZp7zseUJZJ7Oz4Y%2FJIS6rGfcKLTwiI71YEc64n94jDdew7bGHIqi%2FIVgFNuZ%2BKvgNLBmf4Ejwy%2BHzXF0SG7%2BLq4nJLLguTb5doisHztO48bYz7qGtJJAfu67zjPeQ1WAKPxQemjV6l4zcYKFnDoQpQzULsvjjGN4a7CZImImJxdltjHM7ONEMg2aQIp%2Bg5rIUsclKfSNph7grIlf%2F7FoFRbq1g2NqrZdq%2FY3h3XVjDX3evVzVxi2a0xIj22GvPRExoMk6bWe9f1dYoFsqdmDnRInPQgElK4giAhix0secO%2B1RGVORx2zunKwLcx%2FEpzsMATYLvHNl6u9K1R9Rubo5Qh0DE418lBxif5xpuwl3tcq6Z4kNozpxYi%2FtRWi%2BHTnZWIVZeX4Nf8Z6TZ60b4DcozuXZvOIMD4nq2Lg1Qxee7FYbzy1QBjxO7azJpRUDriWljimp1xtuqWbSVbfi1BZaZF5e%2B%2Bvq4vieZt9%2Fnc8AefM%2BzRHwV7rmITqbFVGPihAoGZHfFt8%2FhV%2B30owj%2F0mBZ6UFlQuTvwfsk6m4a6cfOHSncT7EkI8FWtYjE04S0wztzcyQY6pgFbbLs1umu0ANIBhG2l%2BypLCA5E1puT4M5R642oWUeXFewFQQqqIsDNbH8zHFlf63KsRz5Igf74vOWljEWbWwGyCErGL3Fqqw1yIqvHpQBoSeUQI26yqBOUcDG3OGJeN6wZrkv9fR%2BU%2BRNmXByfuQmXdATLtdGT%2FVveOxssUCPCCYQnls8%2BX0T4kUgYwYAR5%2BFlSlcKUwATgnX9LDSiRDxA9Ozz0wyI&X-Amz-Signature=3375426706d021bac3e6038d7332c420b735d3823e8a7ee9f7df1531000c5372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI7OL7WN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJUwfeMNGWwTmn2grjVoZC0A8fwVoREvx851veawixKAiA8hdgYAxeiUV4c1wWWhykh%2Bbk7muE4u7OPXazutIRNxyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwNzYt9kMgfq7an3ZKtwD6cBLV2PTzXrPr32N5eKdrzOrhFKOiZET4M3VoV9LF06WCO8i6wVZ5kSsj7U9a1xztSInZz%2F3U2KxMEEvXu6tl0c1c72c5brEAs9rbC1R8gvCUbCOOM3O1Qlrrj1ZGd%2Bt0R8B0RjUom%2BF5RrHgPAH0tbGKfcqIxS77bEr2ICMwj%2FM6cbm3yv%2F%2Fkg%2Bp7UUpB%2BdabeZ2sBbwdRHmhH%2B0IIrv54S0o1KkX1o%2BRB2ZWtXOuWT6pZn986YbZerU1OAuex%2FL1LW9dtAsYHLar6GJfSD%2BO8RrGNdvbhX3CuzJfu9NTnHzaz76zmT4Kjt1clZmHvrHA%2F%2BRj4uASMqLJ8%2B1NDV7UjttCBe6%2B9qrLYTCm3mHt3An1E72gk%2BzPZ8E3fABOK%2BvDsxCl%2Fx0dg30SgXtX1QkoinFlr4dUllCpZBDNyRlHsLUv9GM6ZTtfF5tGUTM8sBsTYoU1w5wpTWJfsvonrqewZHeZf53xqdLCkwh6xPxVIcizYwUHtSes0EWC8a0FnrZsvUGKdlC%2BFvhaO0pgHcYU%2BZjP%2B9n1gWPyA2m0NeVyKIbHAWZ5UxQ1DpkpFGUJHLdr9k%2BuoyjJb1GEAzXLehLrWBiU9PdYEk72%2F6KB6ICRb6zz3GuKZLTSrUCRAw9dzcyQY6pgHQjBwgIviCK6jNctdsn6xwFAJ6ipAFJiCtJHO8DiJD4x9hsI%2F5JXE9X8WrdEBGlkudmvGJzi%2B7ZozjKVgP1Hgg%2BT8DYo5dW0R5ZXg74DdGOgEyWXNGwhDEcqdfz1cSibdyA0QbGwy2EXFLFnovEPseCoWuSEduoPUYHVb3C3HgoVw56uYdMqLzkuAg2sNN0nCWwtEphiv%2FClp90DlSTzvzEviIl4P2&X-Amz-Signature=10fdd6a4d19d6c062290ce59303c54a2a212c6d7840c4be1bed93a7acc0d3e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

