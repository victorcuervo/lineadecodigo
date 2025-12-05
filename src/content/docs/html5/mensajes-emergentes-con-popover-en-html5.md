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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R74IYWJ7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8J61WZwbuJEfM0XFOsXom9CUhP6MaelQrKYYDRVRIgQIgV7kpB%2F4YtFGlYEvXwVkNfrDwx1vzCGERVj3cOQBe0JAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPkJjnr7ufvgYExVGCrcA5kFVpMJk6nwW%2F6pxyODC0EJYFsibrWbfKNLiQB1A2XfCLKcY%2BbZNvFemmHrq9u47VNe2RbxKnJf3IpQ9mz2wJ9RVngclfPVL0CAaXpsbBvwx6fowOtBnkJ5R%2BvchoSQJ9x4zObcFRLizW%2FeksoLmMyiDdDoPxunJXU7Q1GBTvoLhfTGTzqhS51TbNm3%2BoP%2F89I09xjy5ZVV%2BEcw%2FFWs4ajaKSP1zbH0SUxrfPWJ5PXVyou%2FoojRpd6XBOnvzJAgW%2BMPQsS1pLWDypxXiLx1keRmr270L7EgMiOywREBpdcHxlcqMTzjuyXVSdamw89tydx%2FPR6HRtF9REpCZu1LGWtFGDoK%2FlFymjXZm6eZSMJglK2kO0S6bsZi3XlzrFh4VvaoMyCIQNORCWgRz3Mpd5%2Fc1brBi2GDdmEOidLj0ukMqn3ZV23QT3DkUq1JeboPGJ4ct0mUJoP1SWDzEj0t6gQfU6LdOHefA2CcT%2Fd8p8KJoeA%2FNuE27xAZ1RdyAX3Nv5%2FnV5QcU2vBpBYe9p8tZOVgSfPIE2FUwrFvyxA%2Fgsk50m7Oh4BKogq8hBhqGZGDOMtr7TNVg5nsiB8eh4cF2sUPi8DqzyhwN4js5lnn9DTuIbEcDPPfYIeV6kBrMOrSyskGOqUBoPgnC5xqZMRm3v1om%2BW7k9p0U4Hw%2FgHKs32HsjYCJr1Rd8DaSrgpQldFknfl3rc4xECCLhfniYygzguAcyRc%2FBoY%2FietqoAR8580vtT1e1n1de%2BlLO%2FrtUu%2Bbg28j8IZf13mu0bpNcSNCKQJHX4twHeOvrXs262P8sWXWBVujIugNUvyC1t6rB%2FbCK%2BCWYN2igIieu351KWikhzSP68kO%2F0WzEC5&X-Amz-Signature=597800d835c06cda2d3f5e411cc9e96f8b4e38aea02d59b54d17c98ab4c3b46b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B2OYVIL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwgbHqSrv1vQj99bZybTWfGBqt1INP%2BXdzMDUcbafmigIgGgiIyofpFSnNjO%2FpcdjxnpZXD6XiS1orTvpIstsM6aMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAinWsRKcR0oFESCTircA9RMwIjb6VWQlXw6eDtiZF1MA7OxUAB%2BNJtTDKDNvc8uDMYJ6OM3qgFBDU5LHgMExD%2BDDen04kDxtrRYJWzJnKuXguC9MxpgwF%2FZUAEOF8L9KRRLows2%2Bdo4p2ttVVQtYByPC7oIiZzkBHBtrDlQ1AdiEE6aHHRy%2BNUoZLndfeoVyvIhWc%2FSbf%2B3Cdxlwz4b7ESBtyV%2FfSnXp6F6Fo4gBvf2EVOvipgutoMAKHFGkI3IGy%2FdLtuWloeikXdnhWFOWzAeWx2E1y0TNadUYl86N%2BQb0XQTu3joB2Rkdr9ludtP7YuvjYop4BXwJu3y%2F%2Brac6HqSq3DeM949ULBMChf%2BWbAF7x%2Fu9aRPMMXkL9EtbUQl6QCQPfFuEMESeYGBD7IzMgcTBl%2BcHAdq0MKLN9h1EtZGgElJLRfttrJnP7wEbSttsTkNFN%2B45j8lYjKel2a0VCO3MrFubYDI4ekiYdyXHKkJ2a74I0hRBbLOWhMvEAksvJ35cK%2FvLApM2vAtjhr4Km0Tc9RNUssL2rVTi%2FWpfvTDpt17PRY1Zadrez7z6MrbxzcytAVVS2Xvxo7dHldwZj%2B3GwSunlXEUlTxVvnFF92qZr%2FTxBq1gFhay3i8TOFX62%2F8YtOcOOQi0zcMPHKy8kGOqUBNff2FufyyHdDpd%2BpL%2Fiok2QpXxO7Miy0E236d307Va%2BTYd8mZLaO2Tpu5YiWfJVYTy%2Fq427%2FPHky046GDk%2Bd1w9B%2BtC%2Fg971JhM%2BVkbAVbya8oeKgo1u32mef6%2FhHY%2F6TT5D5hv8MQjbxLxdVTbi7f3u0ipkeRhwd%2FXLTEwHYfehN7z0ZHOdiNn7sH%2FfIxSsvfBeyoMOD%2F9DcLyY4xQgbLryNZEI&X-Amz-Signature=4ed419263548d475e83ea79e226c8e4c084630bd259b71ffe96b8f2f0dba5fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

