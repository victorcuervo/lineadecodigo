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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXUL56D%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXCqzU8HtWZss1n34Qs6rdBwawiX9hc7VZkGXpSktb8QIgbz%2FaIKSzDn%2FK%2B5MwExw%2B2pKweF44fwYhUy8Qgogs0I0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDZ1VXbcVwhPZykgBCrcAyczgxQ7g9qbB0CLW9K%2BY%2BWhLZB%2FsKwknoiXf%2BXmbwdTTH%2BA77rW8qyu3PjJoNYVg7X%2FqHxK%2By%2FfQhd3K%2Byi2qidjOziVesSLC6dgM00%2BoClD3XFEhqdblszwgHBlyWGghx%2F38xJkzzcXHxLm0CIiUVFuiTLZcN82YXIOurRC4O98RfO8r%2FiVwNrZKoHajzc6f2qrCv7AexyX6VvgRpVLvrjCOqvWMLm9jDd4vvorzmU6lL8Twy80tRurGwPdFz498EiwB3B4fmEYLimqfoLUdMS9GnBUWx899BQSfkecalRclpYUCpq%2Ff3FfEhWUYz4H%2F2ekL1b7suG8ZJMEuwpgW0t3hNRJITMN3spZPqQQ2srU70jUVwCgXZ%2BvhzNahG7vR39udQNTe8yKCkuFAsvO7%2BZBracX6Iwaisr7gm8rnNB5QCScfop%2FUoXzW0UkvAv53jYP2itBdabxNDPqoQsEqCpTKFSkb5JJB0qfjzBTEVtoks8tXlHV6%2B0Gz%2B3Wq9p7Q72sqvPhPg5511HzXbdwuAHedopSqNxe%2FC6nu1Qg%2BBtKmODMVvA%2BOeoqkuUNP77Y4xaMvSTMQY7kwnJ%2Fh3zh9ZQ8%2FlTN02r7nUfBUqafpDvB4qy%2BGmd4JGfjMlPMMXezskGOqUB8%2FtC8PTgdE%2B82iPmbKeZo79YdyHheZTAqnaRUhPOpVz8R9fYl6bwde2bt2DhycPZTN3nhJxQdtgrf7qRMIwi5lNpOemmjF56MSQbPwWcPqQc67BoqdtEgIzogNI5wmg0CaQo%2Bvdq%2BsiMKccyjgHmqp6PyWg3ar3WNxRqQImeAVACbB2kO2gZCfzIEMpK30uxtaLc85Yvbkb2rfoHgjZDp8j9zPc8&X-Amz-Signature=9eccdb241f596689d520f3048c661f211e425d9e287e67ed4fecf9dea92bd3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRKBB3OM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoriMvMV2fBQI965%2FrB5QhOU5n7AYJLM%2Bkt%2FPhgfWz8AiEAkp%2B3v8j47XMSISWN65HK1xSvprRU5PWKPjqFfS4CavIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPPdF25mc4%2BLCINChircAy7iCPm%2B7dItiGOp4geQktBjN0UlG%2F4Zy1vBPqFFP0Cu5s0zuzewExmeHd6iEhhYQAAqb%2BWEWZ31GnMMpus0319IJlLrMB6PkrHvecVY4urYGJdItBDPzWaUrZXRXefrheuFlt9ohHWfFJZOU2hRtDZG7rk706EKB1sOyF467kLW5bqSWaTQj2OCX3QC%2BUaFXqVJNvzKklY1pIYUHFG2G6TuK9k8HAAVRQyC6%2FqFKMFadQn4LwUGed%2FnLlqS8y38RUPUyhYzrQygaLbKpXr8Dcf7qhl3CfweB49VTpTzopZeCebnshIf2kC3xaPudAzTDEn7mrPnTi37rEkKjoaLx2NIj9OldcdEvLPwicR%2BG8hG98ZEN5ba%2B7UXdajcqx1xz0cVOYNJNQ3RWG2W5yH89UAnK9JTbhiGNeB1PkvLcaAZ7A0j7EKXDVbtY8f6JBJaHAi6AjFlANzNf%2FQQQANTeL6xNPlZpW2SrG7%2Bc2d4H%2Ft99ke6TzN32zEfkyappSM955H2UGcOxVCgVuilzlWl3Dnc%2FcfKkwtkayChkF2nZ6mbEAIsX9TxIy2tma25tZ58KePgzS0Dmo9BMoovCQwpOFOD0MsmpDcALQVZzun0lGJChNZ21YaJHh26arIFMLXezskGOqUBJWINPP0didy99JjKIr07xA8YgK6d%2BnaSydk%2Bl8%2F9%2Fma%2F0qraKFrKcosxJ7rcsBhnNdBs5EkpQZgAXtB%2FN7La8voJuy%2BFm3n3TD5KDSy%2F%2BIyyOlcdJCljIQL6tAsYORENUFGTVBlTDgoFjDyVSc%2FqC5hEkARqpZW3tyEYmF%2F3l5dfeAzExH70ZbEQKcijf8b5NjrV1HNP4jziLkvM2av%2BVUXWRnPF&X-Amz-Signature=1ab3955e53b0ad870a1ba9d5442416b7e995d74b2153bdac538d274cb1409343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

