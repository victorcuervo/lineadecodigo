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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BCICOIA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAliadTQ1O8TaN1lKiRpVDgFVnwVr%2FfnutgtjDGWIvewAiEAoZxDWbVpqrHGmubxE%2BmT14Zve1phXAwersbKQnG2txIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDbsJUA4w4pzmC4hyrcA%2BqcjeB3Ex99G07Pi872IWwxpQJrhhvrX68TazRZ2jMgpCcZw6z2sL2Vv1A5pgK%2FcZrEDiN5j%2FsQLXmLBebhThXRu0cGUGqp5m7N2v1QfLYUXuK3rxd0kAVV0qxZqk%2BuTnMlzV4ZVYtdhO2UqRylmP6X7kKmthgP9MDGfF2aqf%2BSwCjDKOOCokYxZD%2FIO%2F%2BsuJnT1iB7BA61CfNP8m2SwQuljILMV0IwG%2FuAqmAUW2c4uWh41xI70DHw%2F0K%2Fa5Npicn1%2BiNPzyyBQXU9AckTYTKDfu3xG1dROY91QE%2BpdavNVIM1y3CulnhGo7skcEbZ7dVu%2Ffg5XRU9l3AR1%2Fk8NyMNQ2Dy%2Bay4q7k61iInaNMmnnJC4qaJxfbznFuZu847slIUkRO0BML%2B5kUYkJR79bVdo53bXDJALIyu9%2FwH4fo3HN4QBSSt1qJgirG6foDuygrPZ3DQE0a3qfN3zKDjzrh3hdC83bevZ4N2Wr83iHF2HJ2TO3iqolDZFBcwDiCekrUdYSSofxinY0BGdj9MFTqgfplAHZNwPKOQY%2B9kdcuX5BYJGOIxVPUqrqZUdZ3kVVVMtoH4WFnfQmXwROPA4PqU8DnJCIEIZPIJnM4mhyrmMUDTJjAO%2Bt4DwKoRMMGH3MkGOqUBMpbFLFYvILXrGHa8NMhSBFw5%2FGmY2Dj0EJRkZTuTS6P1U7RyUfTMTbFEAxn0mgk%2FHbxtn53Sho154EcF%2BPq0ycGqiCRjxB5AwI6J9qB3WJyPS0iy5crrjtWeoxX0SSm7A%2BI9O0lZy5jKBNSfo%2BX8GrkyuND8MaYl88GcdCiCmnw7pfCWTox1sr05S%2BKgVAuCUJk74tlyv3%2BR71SR%2F1J6WbpQPZPf&X-Amz-Signature=92b8f2e49f975ec75e7e193cf46fd5d661256337fe7506cb3bac0c265634a2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ID7XXIX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuUGqv4x8Kd2et%2BwyKLvbL%2FRJNyDht0XZa5t6l%2Fk428AIgbySB59GRer9TAwAPBw2FAjmfSwrA7UI9hgCHyl8HAocqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOQe13EUpbLqQRijSrcAwo4KWi%2B466IDJ6p%2Bxi6acycA2Hnwpvh4JofaeFUMlLPHpaBbwyKckM7nzOVHCJw7UFkp3cNo3SL84YOCRXATezY7sbQIv25HKD5utrWuKj2DofDHb7gqnLzELg5LvvFtA0ZvLbtxwpqA7L%2FQzjlMKXlEmHArinLXYQ7VBm4JPkLstc3AuY0CtHDHmE3uxpDUPlwLz36AsCZW0R2r798rAZpxXpqBLDWh6DFX43v%2BpsHD2bz0608SfH0x5NB5%2B51iW577ZvBhCDEw%2FhQk%2Fy4GxUpxDnuzXWBAlPRoBbqz8tqbRfPts7%2FlPPr5nYsRoru%2FMjOjGqJCyJLIqr2i5DYhmFMyy2LSx%2Bjkl4ZEeObteEOiJpHaZoJ%2F6STumzzLs4Z3%2BXgcXnWvKjP%2FRZj62U%2FeOULdhHnrrAii5AYbHXS389sAvPABEk50X3ZNjqsqurKONZp1nhQFcTDW46jQcUtdYkCqyeh0tS6%2B0tV46iSmy1XbG%2BsAU5%2F6QAZcHD7WoJygZXGM6khe5l5jKW3jLaIvMV6AnLzNaR6r0bve4Z0B4tLE0mxTcI%2B%2F2mKImLZW80wVF7pvh05ZlhK3lSkaMuGzge%2FsQVobfL0q67iujb8dBln9ollkWxW98JlAySuMIqI3MkGOqUB6jICLm1KQNN%2F5cA540TU%2Bu%2B19m3gZeKvySgyz1AfDaX3aE2tQ8MQQFmggf154tSN%2FO0K9r2p3Pff%2BpokzOXbEC9C%2FecX%2BbSn4LbT82H2Kv%2BPug4MHCaugpJ1daCN%2FUN%2FiX3nmU9rmhfu%2FYRCR1D4TMP0wmAjITrq%2FFoHYYnFbUTzw2AXALpDm62e28GqEDDfj1cpnBsPxgb4fXFJJWMUPDF1luQ%2B&X-Amz-Signature=26db9df32bb59b8548e70ed37402bf0371706d2a60d32a77f39210fed40c103a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

