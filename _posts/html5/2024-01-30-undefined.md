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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ75Z7JQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD036djLX4nNuPsJnXngh7uqRqQyCgncDmWiI4kB8gAYQIhAM8cvoFDy2IJDaLEJEKp8886z4K2Z6FkK721ZBlxhTttKv8DCDAQABoMNjM3NDIzMTgzODA1IgwuX3WWGH6kB9NVDK0q3AMbGrvzOki8x00lZA4cJDY9qGKx%2Bhx4zxlKxpYfon%2BU0fese3Cq7GBG6wF3r2xEVr1cRN3EnNMXWvS%2FMAS5gOnS3cZV2xmJGL2LsQP44mPjG28GrCzb4YBeptH5wjOUWLeLDB6%2B28oA%2FtW5wIzJNrDk9VoyMFqBVB2gw0uxilDvtbfXCpkxSHGUhfJOPOMV4b%2B11ZifhUjwR%2F3r4N3V0PBwp3aYJqOup2hY%2Badee9zCVS2iSd7hN94Fub8f%2BvOiLZNqoCnafACPU5fHz8iMmwllrEF7JhVO0qaGAmyMw%2FnXQgW0zG3trgEwulUQYmmW23ZMpsiw5UyiDjoOdCKcv1AN57IFhLxV32%2FIX6U9PjuB0fZDant43%2B%2BUeiplXHKhRHNveqti9lssbBLZeQUs%2Bp58zO3o5pBMYP1sqrwLArPQKpF2viBT8Wod%2BpDem%2BcGjf5jRiv2QqYP28H08l7awrw1c47WJalIAy%2F7dsjTIyI8IxztgAqFtYfPrMTf91jjrP6i%2BnZdCztpEUkjgfF3KUjBU6ZAyoNUyc0GfjJ9sksPlZ%2BS%2BDt7zkecVpS%2BSdP06PEkgqsBUrKQkPRfuuABtOdA2ov4H1w4l%2BDKOoVKZ%2BC7xQMW3wIPJpxXCnP%2FWDDDpcHJBjqkAUllDg7phG4gazGt2eL49QpnkWqtAEjm6phjRoNND3RLPunFnmnoI3gXZNdNmFpouEtRoNJx0hjEkoo8BmbV9BjWAKoP3YCMPxaJCPaEmy8yR4SJy64NfxKaQq%2BjyRiJGW1JFJDPArAfInHCRWRPW2fQivNNGy49jyMWGlcAKTxcBiyIw5Y3GEJGx%2F6SvRpZ%2FZX6uj3zlWC5GaQRMwd1clEk8Yri&X-Amz-Signature=eef7e47dd3e89bf7a9e34f8904ed927239f5d49c4649d3d68bf5b11022d83b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYRLY3JH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIE8c1sS5x1PStkNGlFqWCzqogH33d4iCzQzzALX0sW0MAiEAz%2BrNvhSL1MVnYjK2DZMDlOYlNjJopvhhDfO8d7jCk%2B4q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDBhUev%2BU%2B7t5RKIvMircAyIXfKSv150p%2FpgLX7%2FoQ2wtji3MtLT94cIcLGr7Nz6pRoMkaIxJTbmgarOsjFHSJcmvFF1QlngXzzToDPa8cHdGgEV%2FHTBoJB1tSoKtOFo1t1Q2VZEgG%2FtZuqsaFION8mpuj05CVMUbFAyDUYXoH7wnxCnR9EQ4%2Br2SLgS5rnqUpkuGGfJfU4kQw6rvLDWXHqfRQExfp7B%2BNB5q2TN8tK1czJlBoTg3SxbG0iTxigOcQPV1CPiJECyxABpPnZA54wR1T%2B01cCNCYLnV6je6M17qP9Sa5ZaykOMxeNqpYJXCKERLYnXE66X5AOZKCHLf9V31abI%2BmDgTSHwKAGqNIwOPndU4GnW7j3zaqc6aatnK6nq1iCujqkmuZwORvfUgN3lixx5V6E%2FtauzMEZ7R273y0F33LUJ%2Bz6Wj81TFotYcCcJ%2BQ5w6meGIanopeaGlocGu0EUnsTF8vXQ2U%2BUmbLffEMcEBStv8QWwWbnoyvfbypgULh4chUpcVku%2FcwIojwRncPUahHixnGqWe6QlCd5QpWmvfyyFYS%2Fu4uB4Prdzc%2FlTbC95E6%2FsCF5fV09lYuzkSsHV%2F62%2FYsQL70dgf42FkAFtDAKHxCtX0CZTraHDGjaogMJyCuJEOf1aMO2lwckGOqUB3NKl52Mcp9oXTTYGHMDxtqnQyBCLU0WdVs%2BrTzRBx1QZ%2BLRi2R93vD9%2FRetsxc%2F%2FPgFl%2FduUOmPCZD94RIwZAzKo%2FpC6DtKDeO3c7ClUgTloLQhrunL1pO35ReTU2NoaSk2EXaFmwVT5IPBhyLtzJPE%2F2aNXmp0XrQOQxE8cCHcJ%2FbAYOz1OWwaMYZNncIzkYx54PHy0HpoiBxsKlIiAxTyaHnFT&X-Amz-Signature=3cec07e3c40d17dcc079c443258774d8ce3b80d4a3d4b6455bc1364c53e09e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

