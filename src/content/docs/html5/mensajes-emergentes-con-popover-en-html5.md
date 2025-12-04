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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFUYO3U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDg5qsWigzyJSuva30LTcgTYy%2Ft3JtHfB%2Fs97eHPvAijgIhANogcFGzmp3adhWqQ8EPjGRg6DzYl6QV28OCvj7ltRPoKv8DCD8QABoMNjM3NDIzMTgzODA1IgyLZl3QbM8eWOFDTucq3AN1dKb1Q5ZD%2FikqMxaexXv7%2BpdtlIIEiVHCn%2FDOmHUmIRQlXeFREdskaCGlrWxR6uAz77niBd1oGu5pfzGuAjt5%2Bb2hr8ZKHNejGED1HiFhj5Hd2nzmQpF4GaNJDA2W22mRS9%2Bg39iq5YHnTgFYvMbe8wTlV0zwkgQNQI2%2FntgBdpDJQpitFFNqZmCuN9YumiEcAlhE0tPmExLC3HmkQiDzUg8fwQzeM8d%2FBlWJEVbJT9%2FPUeZvQ8pwd2LV5Asp%2FX8Yly%2B5JgiQLsJ3Rw0udxSC4NSfBjCQWOwUnoIEknAiYz8Ynpa9Cnsdoce2gOIv5PfIEz%2FYFzi4HrgzLzap0SMa1hIte7Lc1fD%2FLQDkkBHFCbIWXONNIjto5no%2BTFLnADrOnUJ7U28o3o7gQpFem1sAs1%2FeKYLydmD3BRPswWya%2BeEsaxztLEnGYkFvzu%2FcZ0SQyTwkGCT3Nrt9II3wY%2FBvHaBFSs7F0MetKPMBPHapnNm0Pd39ArPRy0ySUdLPznWFzO9wZhZ1GqqfWmHSxsLY%2FgRk4UqfUkx4o6A5G4eRzi7paGlRLijYwfE8htQ2QCEqT9RSfR4zyUNLU8FLM4%2Fwmq1XRGoJvixPjzAYSqOF9idlhijz8H2lnzEy0zCEy8TJBjqkATsg9pruv%2Fs3lnZoRCzKqs1wP4A7OjT2S0wRK%2Fz5e6uRjpSYrToTvE4f8chs1KzxDXFDhEc9%2Ba16eqHvLqO7Mspd1rg7ij996ntH6EZY28LDW6OE%2BbFmKx7RPoqTrO2eBsEX2US%2FWFXgE3KIo1FRV7h254Y%2BOfWVve5IhUzqBrf7MC4FhlClX0hZjC3CoctC2roSZtwDpAMzHoT2q7Oc62A%2B6NGi&X-Amz-Signature=1495745f3adb131e3d553fad5369774cb1ceefd980688a3391b319ed9a42cef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLA5XJSV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEmzkHN0X3XWhwocTQCZ0uZAeZonT1EMROzrJV%2BdsqgfAiEA07Ror%2FbqvYtZtxO0DQOJwiuywHPnAKreDz1lYRyqcgEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJ3dt5v94HOSPhDB0SrcA5wYCxNBm4t3lam2rZ4w9q79XO4BJsn8uDUWKOdamNkEFP0MU65iHNQtVpOuWb1rUUQJnBDO5MhZ8X98H34Cal%2BQbkThhj3VAT02nDNHzu8y17pmMFn7ZqHR%2Fi5W102Japy76FnSpLKM%2BqDl1sdIHTlrI0zffDnkjRliauw27OGpI%2BxUv%2BzJz%2BRFK%2FQ8oYLhUvPSRCY3N7TCPW1K9ceoH1DSmlrDLWeQQdVSWimicLHG5GbGVvQwQylFf89tgHLrHWwCmo2JdeWb9cI92tsNtJ%2BMdI15Zy19fVSuJTWnQQNuXsMOlcm5%2FNGVT7%2FM6Lbx%2B6DbH5lXqcCyquXGtvWaw1CUGDxA0FDFEdeRDBve9XUL0pk6B%2FTPR54HP4SDU1xLsVAkjfI7Vg3%2BtFkOuHu96Da8RSmztmITvNaAfyHC7Fp6FRwQ%2FKjgqPAUtkcB9V1GOj2fGei%2FWxJrDEmYgS4oltFucK5XM3hgj6p810l1O5QagzgpmgJsDKzjkYcefsIQa0xZHu2xQS5tkpGci69yB1yrOgERLzZKav58pe7ajh6N%2B5DoyHAbo1UsUWeWEVLBfSth2m804ZzRuhaSVZQZYcChybFMrXreotWR3sTuFeaho28dh%2BPb5t93RTBMMIzLxMkGOqUBZ7UpGAW8knd154Q2yNywIMoqUnjncxAnW5bJ7ltABEYEzHNZCbmYv2pNkNAmRShaRdZXZ1qGFBFSPORXe0zZIUzN2JGMTlckP%2BnaUK7nLrmJQhjHdCTVRVFWQIQt6WSi4%2BHOufOSz0ACMi%2FTXAo3Gp%2B8qKfASifYk7kfTGo0mUCIMCfMpn5cHi5qQKbNp4M02spk7Nq%2FA0EiH4pLlBUH5%2Bg7N7Ox&X-Amz-Signature=6f61383fdbff6446a384893fc81c7a2ee2c4dd35cae4c4b87c57bbdc9256d310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

