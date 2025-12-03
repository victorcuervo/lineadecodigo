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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665767KVH6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHbp8iJbP5t7DyJqk68tC14NJPpPc7CMn%2BwzyuLVIBroAiEA81GY4D5RQqxGp8PyMB6touzf41qcPowBIvTCn67O%2Bl4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE7im9k%2Fs0Ap14V%2F%2ByrcA2SfDZa9DCgVwUKR%2BMlkzuSAAJNwwVRVeoH9RPRVey8nvqiBJqCG3bg3Ces4g4MT3e60oKkm5Bx39MiTEbb0nbryokFIf2noUnZtNC8nbEc6VcqI1kjaGoAOsxsZ8W4kfClAus1slTr%2FfztBUnFWV%2FqlMv0ZLbGG1d4fjYxljpbNQMeKHwChndARPirT0Q2IqcLg%2BrHVxStp0V%2BJBwoBmq80GJYKFnNNjDs5SFZNxzplXUPHq7HVHWZpAXaEw4v%2FzN2fGcyHDfOWnF%2FfANRF%2B9BZzwYyv0yPUceMhI9W6SbhUuBOkRp%2FOxLhIYJ6z7gw%2FyA60PFO4Zr68zfqcMk6b3m3ETE5A6gXKQdnGrw3TgZTQLw41LJgzzf6XtFxdlLi%2BovcNtMm%2F5auYwMvbPvrWbCxDbXv2q%2BoeOtS2GJsUY%2BHyet4mBSQXBaBrfW5188M0Y8eaX6y1ItblURzQGPcCKWpNkMLBafOoBJ1NwhD0aXtXvgM9vuMmZj%2FbhDZGITw25jvCtPLJ6UngSomsX4YB0Oy%2F08eoL97tdHj%2FMwnHXouZgQIJ%2F%2ByxTAf6INQI%2BBAAJigc5UFq9bmfj9evabCsXcFi7tpHYmaT%2FmkDTnv81TSd4aGJOpMKOId74a%2BMNySwMkGOqUB0MjKkanrzGl0j2Z6agRhOPPZryHpJXosgz0MjGRfd%2Fgv001W9i%2BKZmt0hiOX7ZyqJ%2Btajfg%2B9HLiH8II%2FFfZzP1Zfw4lBIVuG9AxuaG8kZWrBUJnq7Va8N%2FONL88e7Kje4JvWRmHamX3gbSy%2BoVC18kyFGUmTddAlwHd3TaeU3yDJlfhnpVs44v2NFHxa0ORxttY7t1dcwBSEdJSOFbWaepcsCQx&X-Amz-Signature=22bbf311a76714d189f47169987e8e783b92549cc2a51c5c3c0bd9ee7e48632d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTNSXTZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCeZx8%2Ba3AhqGrHGmsewVQLjP5Kb%2BDxnLMgLsNhWLfFswIgEuySQDwSkCQs6z%2FLRv3fWZmeg64en4mLWG5Y52vpnMQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHI5QtxkEIKrKAyU7ircAxu4D9oRW03Nk%2BztYlGzjwlDP%2BwHxe0aJhLin7KsVCNP%2FoWhENx7Lt%2FIv38k5ACSXh3insXUk9AHpv6b8ZUd22E1x3ggZom%2FbSS0iYIBo3J%2FRQUDCli5JGEb56XjZwgbt9EjC2p%2Fpx8qh%2BLXujK2bwdfkTZqGlDncJxZVgr77AEAPk08%2BlP12HMTMqNc0H8sB8iaDKeL65LVdXSiaXf8JLJx8GAIWrJtvZDuf%2B%2FlpMSWCxdQkGudZcIuCXHbTpSxBlmambHh0HTWvC7BDHnI%2BqYmw5u4793hXjmVsCs7xVZqfvZcyP%2F52gKbIIRM21A5g0%2B%2BmeOJH%2F5fGZETJtxIjtFy%2FRfRqyTmeEKXQmcBfQ%2BFBl%2FrvMzg4uIKP1%2Ftmh%2B99%2FgZNvv7Z6ROYNWo7OA%2BZ4iydmdI6vu25PFUrhcB47e%2F0Cv73WjB2AYW7LR7Zhnf4PvucbMt5GaHDZEgsOUgfoMRTGecat6cgsUR3IRTF5l8GBT%2BLEINrpHjRgDxAJ6VT7Df2eK0%2BjUJiyNhfM2gLglfBsDA9NObFiz5OHRMLJ8lEHOQ7LzwkfK%2FxXxJjTJPOIPbgnQSDY35XOo%2BrKorRMygYlYXssTEvBD37RHFsN471zTfo1MLQJcTZjEsMN%2BSwMkGOqUBdEuQAOwD4zEeFWfEAOYo8svVOEnxs9xJWL9dlApgscV%2FwBuSE%2BKZcMUAxYu%2FS%2BBBIqCq20ZImz4wbsER9EFlAe%2B9tisqrt2EPZknpCFbPt1SMaYgYb1TK8fqQ0%2F%2B8x3yW%2BRMTVJ%2FlLznH9pDTKzn0Q2M%2FEG%2Fl8AqEyexdTiEglvzPdZsHSOfm0S0awH1JJPjf4hNq%2F2ymrf%2F%2FsqwBmYKhAnitkxz&X-Amz-Signature=c0029c4216be818d41ddf8ceca46d388db4acc0c1b9139c998187c7c3d36ea78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

