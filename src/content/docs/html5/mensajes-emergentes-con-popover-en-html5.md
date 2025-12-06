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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YW4VIMS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlh%2B7f9kLCW7%2FKAQDILOEtQozk0krdYo%2FnXVeQUHkYpwIgdNkdsQXD79EhOpb4%2B24rnsdIHyupw3mXiZKTh1iA2KQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNN7gOu1rSXUoHDNKCrcA%2BUKowBNLDCCXQh4cEr1cX9QLt4fukM8NB%2FxMK8kUV414ksRE%2B3nniKxFqmkvDhwRnnpnqQ0ihIEnvEcaHCSdDhB7QzUe3dPqv5TMVWa7VPgINYKUbb5qntr0CJPQzKJsOa2TBXNT6%2BXt9DJNGQotdqS4z44EEerBFq4sV%2BAdCvd3BjRk1Fsv5GDk1fINuKeApzTz12AiW4IvGTFesjTmuLBdhFOkfC%2F7PGEbr1kxOugnyn8EFZyiDQdtpS5irJ2C4q%2BxrNEsWkzf0%2B1DCyCcOuoklNt1P3lSB4bOlPZns%2BLRDNd1axvBmh8BhK8Ac1n%2Fc5ad%2BSYIqvv0N8tI9zKSe9%2BVCetInuQANpV002gRcWL2S%2Br0TBBSepr0DBNyn8lmyXl9niBm3PzzAt8tTk69gSnLrYlYZwZZqkoJUCNTLaZwOlLBEzoGsrWOC1wGtmqpdwUUv0GfFrt7lVWFCxC2dbb6jThzU1boEb6YpYg512sChaE3E8LFSTPewfjUXlYVuWMhFJCvR7QaTmG0hrQdQacZylFLt1d5BpTBLZfos0pfC2ioMPCqjmFs6qCgZA31dxmntq8yG5qGJbsgVEyORBQzn8Uo7zkKcDEvcImXM%2BIo8VjjftbrtUHXLoWMMbrz8kGOqUBwgszWCqZdcPk6atSm26KObyOObWSnh9nsCI3mtxApdz0m%2BV2Euf5UXmQFgkpkj6xdW6EMccMeSWE9JRTOW0%2FjF437McF3g0zk2BSzveyBZkAkbKRrp1%2FSUInNKcSv561fYe6hRJ2pHqSkYR0g0J4z3NjCLYth8DyBeVJBnQI5oQkRlM95orNKzzRG0rPvARf7AomPfwQXaqtYGLwoqIi6HSADD%2BH&X-Amz-Signature=c94ba6650d252abe320e44c19f649473c4874b4c9f068632ca778173a03cb417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJ5VXZ2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRw%2BfWRiY%2FtgOvfJQMmyCTD15Jj1%2BViqSB%2BoC3%2BK%2BPngIgVcosINGPgPasaGdIWbT1VGo31il%2FXQHfG41%2F%2FpH%2B5Ooq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNkg3VMEeEsbTck4SircA9WiNZ3MMfIFl6V85zgFZ6aDcHGSnSM%2BDssHRI3Sk9aGVNsCKk36nrP8pshIS5kBe1KAXPEZ9%2BBCPT9MvlRcVIqsGx8Nk1nKbwZ80x5LibokIL8qGp3gwjmedobOwkC1BD0a%2BJot8TQVMUGf3TMThdsBYqUx9ubtfswIXhGJOk9KpMfODPbI4srdlzDdesMA6m7x50lnCr6k7CAbyizGnOhrH6NMDjJZm29rqq%2FNSrBoK5oqwqFfGKr%2Bimcf%2B6T9GtVjOkcJmiRis43wQT6mgce70XIGQ6AeiojXEBktUQqmQHL0MCW1tJq1J%2BJLxx%2BvhZ%2Bh%2BzE0fVcgaa4tXgZBpRma%2FOIr7SYx8xtCFIvTEpHmVO2wmZW14mPjzYZHuYgX7TyqpJSFqSMCh6NiUuVVNadU1Tfd%2BoKwSdvohT1uqr5kuyL9v%2FGT6lRCmjsKgxysStOt%2FqHQGgMxnG8uuusTYWIkpchPasWyrnWz7A%2FI7q%2BeP4qE7qjs72NJFX0F3Ch4JdMBqpGhu1GgOa%2BgWYduTJWFi6Z6w9tM4P%2BioiIcVZt%2B56NsGQ2VJNxtXqB4LwFvKdeESgb%2BWINCLPSVzR3LLSyhuaUbsv6lroJ1KzDWHm1MimodhGZGSvdkF%2BtGMIXrz8kGOqUBdDPQzT3JLP%2BaziSs5JAoQ%2FC2kdzFbslA4wU910M5nS8Rd4m45oDRPlTZZijYzhWlKEPNfitRUTbCfh%2BjPHzvqRAjSZo9xtsYITl4cdQRJbX%2BRXsMIS8vq5mjl0fPGGVMDLJ5l%2FCFSpEFR7g0iTQ9piGxkKDnnTXLQEHv3x9rMSjEql%2Fwj1FXOejW1fXI%2FJtDPqJu82sUkjjoy9o%2Fv5%2B%2F%2F4PGXpOz&X-Amz-Signature=f32705f319b47806d5f941a5e0ccf2698a2a0579ba5290b692caeb6fa26b4a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

