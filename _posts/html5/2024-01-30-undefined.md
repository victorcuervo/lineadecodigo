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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBOAQH4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIC9lRVwsBv10fVk0o5fSVDt93KikmN0qW7Ck%2B0UKzJbzAiBBx6%2B3sKLKsslad0t9Jvkj0cufTLNxxMX4r7h%2FZSUVjSr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIM2fmpgSb0lu%2BTyqWDKtwDJ9%2BgcdPY1bDMNEP4HdtftnnnvUDxRbe1Evim%2Bopv6iIfht8feN92I1i6t3VtuPWS7il%2BnnKtYRWLhQgPAXWwyNyyvl78TAi4u%2BGZ12lde%2FHi8cwLQOw3FxtdIST122G0QA2HVHQO8MFK%2BY1Gw1RuQSbBJQhQh4Dm2CZQRV5XLBCFyZyeREm11ZqzQ3UA8cZcljvvEiT7M%2F45k9OV0Zr9qSDWAiFGQTNQe5uNxgbRDiMAN2IiboRpNqoTj1Y5L9S84KI%2BBdgxD5jxACRQAAlvTz1%2FtTPz2Yu%2Ff0Z4FuHW%2Bw6IWSH3F6neSooTHX4p8oC7q7qFtK6s5erDv44XgUU1jsOf81J%2BkxNtfzZxVswBl9ku9otTR7Hv1YftYJksWN3YTA4JQML6tteTkNMLTUukI5jltKP3Mgb8n6YCyIe817RmosyVsQAyyo5SDkSS%2BzHkQjohMbwXwEDe%2Fm%2F56exiTQWEE9GrFyVVvzThThMAL3pZ3r2NfbphWptDgHVTcei5i%2F6Z7SUODX2kGh53xZhj370U4TUYmBS5FY3cxzDajeuMz2NtqN%2FOdi0LZO1L4TJqwU%2B4yXz7mCq8h95KRCwf%2FPSjC0NtxmaWc%2FbqGwElxYrf2o9g242CoeXy4CAwkabByQY6pgGaLrSx7q38ZDwbM70hjAN1hWIrN0mbrRU0g%2B7%2Fp9NN2RWrOgCXbV%2B9v73V%2FksTaVBrH8NDGdJ220SeYh1Ljoa866qStYkPy05xuN86o5Md%2FO3PX%2BVJV3L4Jeu9qoF9318j7LNxOOGQYlWt31bwYvUQf92V%2FVigNxJ5ieHpmO8DTeL8g%2BhQV46WfotEH2myHg3i9Tm12yTC7ZB7o9XrZT4ZOR8f%2F%2BF1&X-Amz-Signature=ba4d624de2a8b7c5bcebf8ce295b8100c6f544ba7c4877ae69e0642a4b760e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMWUUJBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCtvTfC42K8%2BKirAGZpX5O7%2F4acpJ%2BAQeJg3437hnI0pQIgOI1XW8A4h9OfyHevhkY59EGqZRdl5xoLMv8rwuKJFJMq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKtXcGpSBxwyB20WJSrcA049a7d5Ag2hbabIChJbkmgdnQX4datZnMeUG7MvJ5FYiGePkTZb0l3gAvz7%2BChCIXsqMSTA542TEGudDzzMHX8at0BO%2FpqgOsF3HJSrx2Pa9WoNpdi1ubZZ0zfA64abTqaZPN9LvRTq6v%2FlQjc4FMzXJBSF1MCV4DOeeyOXqkYGd4r4rYt81EdARPSAgX7gBM%2BjDdH4RD%2FEOO8lL6yygOvN%2FZEwsEia7g3lGpXwTWYQzceksbITCowBZkHjDsQK6tKoTtRcffWuJPitqD3brwh64L5BHpefiiWHXRX3940o1kDHXSLoqtJPgxxv5CVVMI7OjTBlDR8CgdXumMG%2Fk2vikl9V1STcaT9swuTwaWasYMspsMAeqU0V%2FT1uOLSZPnreV9mmY0C%2FBm%2B4QGblUKQW%2F%2FTNAp%2F3A7cbKiGwNKzjQ8LsmAbJVI0BsnHJjsZhrPnVpRN7%2Bo96ReaP7v7PxhLY3n9NVYhTCGE661ccJZxFf7Jezyg4sDHbbYWiu%2FELa60cBf5a04b1Y9WxdpEt83N62L0N%2BGbL3J%2FEBTehZrAn90EmPAUVGRnVTUjwKJ2N7hoftEPuw9PUTvqM8M2Nn9IcwKrKqS2AUw4SRb2RggBwEHqm3xzSTwxq0MPZMPelwckGOqUB9SKNRnFgqfaCOSC1SAxfpaC5jqUsxxHlEMOltjHmgIOLs8Ep%2F%2FRVKMrJWS%2BlqP8JatKZJ4E%2Bqkd8x0KCc3b0dBriANHRE6LX2jVBjz4KtE2jAH3r02nXnJotGSvujIsswEI9J7GJcE7HvrayNI%2BS0dFasFZwgQNG6dH%2BScaYfRJgjQnmS%2FQk6xjezvRmmTw2bdrmL4E9Xi7z2gxM8LhH5H5xkSYi&X-Amz-Signature=c2471aa6937a2e76aae8e7ca4c5ec5d465d5e40678d6846423ba5ec11c5d2feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

