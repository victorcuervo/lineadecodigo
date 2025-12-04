---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTLIM7SY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDbm7XytlR%2FNaT9tJ1NFxUVnEYXkgNuYEvjajpVa3%2BClwIhAO03Gg3BLdSkVM2bD36qU3KjinlwTY4Pwyx4zORs1R%2BsKv8DCDwQABoMNjM3NDIzMTgzODA1IgywnFJdBe76LDwzRUYq3APwtjf8v0sgYMiUJZ%2FyKBDuoi1IXrpa%2BioCuFN7dFpxhQDb9J3zujE0N2I6fRqp%2FFqTe9rsTq28N5%2FzIAMsg39baWjaHC38reYd3EUWtLDYSjHSXU19yzU%2FF4bnx%2FVeR7PUPT%2FMarlfP4eS3ZnZKIgvZuPJiJ%2BnGYQVC45cKyDxZqyfLiiNk0yWekx7XZfqKSGR4HdESrzGijYHMvWJ8S%2FrLAT64aOlzzZSn3WbHTqtwKfcs0hgMG%2Bf%2BHgW0LEmfK3Dr%2BYVX7GU2lk1%2BNlIqMNBLmTE6MGKaxNc1MnpVaBvaDftnpj1rrwTOl5sthcOt1i%2FEXJHyTEfobu1%2BufEJUIlWgNYRhWQurJdyeYdkYJtVRjWajee%2FjzrkgyuH09MuX8ldU3e0tVnUHAHhNVV1Npxwy5WmYlPnacZyNOJdBSW5o4EEc0ZoFHNOPW1oX%2F0Lkseh33vQZlach%2BqnZxNtRm0uFnsjhZhz3SIzyaNq2HAQYyrfDT%2F3TE7qndcMAA8wrmLnV%2BorjwhOmmC3jSv6wSKetfALtUZY0%2FxymtDC%2BfZkqzZeQyo2%2FLwMCkuzEUhK%2FYiJvN5alVGdVJ4k6vwe0gjqa1wnP%2FSfSyTwib3X6Bmd%2BXcRi9JByTBvoy6wjDr8sPJBjqkAcS%2BjKG6Dc6WndzLCSFbMJaeamwuH8sM1Zpul6CoWKkxCugFpaPI6kT%2FaN18esTmGnTgBhaahv3%2FiCqtW2n2woaHhKDHh6yvLyOj6g6s2uSfmxbNuH7EuKSwbzzBqH8eSu9VtdJ3sJL64B%2FrybSNLIFTtZaet8xF2xn%2FWYr6szW0pOPJRkb%2FIYiGR1J5QM624O%2F51GecFh8U0QGFjYk3L5cbGqQw&X-Amz-Signature=be9b41157520e7d9aa0a6863d732ad1cde6461ff4c714f6be94c78d44d4ba13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4UZQ4ZM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDwMwuN54AiNjXjE3aTUny6%2FYq2FHb%2Flmc8K60OM28aAQIgRkCKKTHq5LW5oVVInyakMfuCg%2BV9leIiPDHlEx%2Bsiioq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCnJQSj1xBQHY3CTWyrcAy6eY4oWDw0RGCvXY7nZfDl6hLmXaeFKNpc2vZK3Qh73YvxZ4XLGBeAeu8N1gw%2FywL3zt0pywdTciT%2BnVLx1q%2BBqVqMSPDoiuScNikCzs4%2FAqZfi3m1aoIMOLya1hIbrl2uMdMXfyFvxnm4an4fvlOmQMOKdEclucpnEkNfJIzJDbMRCDkXUwa8%2FuISJq3dcogauNN6TzmnyHLbeN8%2F8C4pDd6HbBNhJbW5sWwS7InxC9tMyJgu4yHPMDHWzW2FrfD92yXpAbuHfLRTDIsoL9Q13XXByTvFc7KlNGI41l0cAP5ae%2Bs4f1vIW2J82b0tKw3dKLytuR4tqQuqa2oKttqN8mr%2FWzUf4xK0JgiF3KOCPWkfuYrDh7eRsB%2F6i4YsdOUJrxhPhVaWbF8Vrm7h1kyMW98QW%2B59ii71v5ozKNoTgca%2BPSep%2FJJKz24xND7nPiQ8nnyDiMIULHuyDsXBK20P7sUP%2BUVgpF0rL9lmvMB0%2Fl43qgVi7H52GE3vS0S%2F%2BMSrc2%2F9I6mfE6tFliI3bUxloe%2BSmJKSiQDf595m%2Bs4Z0I6ngK4WgoJQ8DTm8GCQGX81n6sTqGbry%2F0vqtWVg0tQFCDOIJFGFsV3Xxa5%2BarUpSBgp%2FZerVDXbpEtwMJ7zw8kGOqUBVZlzPhB9m5faMiZIJ7jAIQl9qK2uIrFY4PqQCvEVLeedat7xdBPNxuPGI6oMol71Vk2abqXZCk9yj5VUIdHrY5MHoxyf3v4eQeCRiZDs26rt8FeMMgIEQmW5ulD83l6rKtm3JainAsHVI%2Br1DvrlxfQGv2UcqS5tW6QZjM8wsC%2B%2FYHRQsjEaT0bVDKIg2%2BcIKcPnrJgPGrk5%2FOvjLWT6Jv6kpiP4&X-Amz-Signature=4766e47ca56c044769ac64a346ea9631f5445d3360d52534262b283cbfad2c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

