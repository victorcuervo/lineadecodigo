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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHCJL7IJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFGKK8F6WulSk8mUn1BCxYro2J4DxN7oP6r6V158jqIkAiADphQEOynvs87w%2BiLc7BNpgeiJIB14%2BabTEWjHLZG96yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM0iSvjBbx8LdHtZYoKtwD5HJuA3dHepZaUGhoiCUI1nzBM4g83p33ughXbM%2B9qoPb1GRhDFOEJFNKeA2F%2B8%2Fcy2N1mogtrZDBpKHNDujtIDrbtUJiY%2BxEpZuOGwc5zZQIFIxj3MQUgCeigu82Zx%2FoyYp64CGHoh%2BCyDovq8d9WbRwf9%2BgbQGBHfNarmq1q8hkrbFSWh679OEP1zGv39c2O2EDTdwR4CEhT9zWd4j11QgpQ9FqWgTC6usRV3l75GdfvzsmuT55KUvpSI849OhfO1UkfKaZxSSCugkKDQ%2BjTPPwF%2FCDxxqxeWNxOSR2F1MCExh4Av00L7a1IO%2BMhG%2F0S3UEacNU7wAJ7szpilTWwlS2T1syvXi1Bwfj%2BzJgMcIfWdJBoxlDgNQWXovtlbFABiw6CkTatk6UAbOOnh4f%2BK2U%2FZ0cTS8NGT%2B3cAXCuNY8laFjx6MyXJEl1wMXhN3vO4zyiTXywC0OGT7d1SFxKl2jlYYW6z5zBiew26WNxUp9Sp4CVjO3Ii%2Bgzo0Nzgs%2F%2BPP3OfzY5j40zx258ehgRjW3nu%2BmynID7uByIFLb8tWPwECB89mbkiAG%2BA3xscWTUAvVIVb9Y7CD2uiDotS73DWwc1u6gz54rcPas1lQi1bRKCvuCesNLzzqQS8w%2BdTDyQY6pgGlXcoAzL16dVoTUWd99GznA56QRs2RDZlUjsC97X5kdpJ7s5IfTyEjGp8BegQApTDWhVe%2Foel1eQYJp4x9BFeBOnti%2Fa5nh9d2B0zFaZeWR59K0%2BjwTjNd%2BMHsTj6InDtAAP0rY%2Bn7C5jS7pACFk4czroKyn9A68gr56aaeJSo1NOZkWnz3G6lQGnBex6eLYzRflBD1UguR%2F3D%2BroqJcsgzwO%2B65TU&X-Amz-Signature=99b11477a9acfb4631109a42c6ce7cfc1e97804d11d8d2efb71b695e096d6bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DE2Z6WN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBGbRo57Of2iKatBdXbNAOP30GG1WaaGnca0LAlrdBrHAiEA%2BI4XszfdGQ7I8%2B8s%2FVwoLITsxqlM1tL7PGZasH0DmUgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHsAjA%2FXgMWDHb%2FlFyrcAzgaktKEH7Nr0FhgnrV4tarZMENQgqQAVHlf1Er3cUGRZyVzKO14nuk8EMfg5E7ElaSikasHkpN6zuwlIv%2BFOFDLP65oXq0Q0xhWcwZoWcH3y2iCTlBcUbpiixNKCfYadjt7Nb%2FzwkjPk7qMV7UVln8CaaM3g15GmvCzfMP2e%2F8SwpsGQsy5a842AWS8GWyUAyKIaUOoopaqLMBwQkv4J8FCqbzgZj%2BIVr5VN4OCFg3IYx1eRTmgdVaVrZDoKzN2%2BZlk4Evd%2B9o01o2e2LsmgSjBYb4waipJ54qFEJyPvaCHI%2BLfG1mb%2FGOTzrCUsjJe6UlMYlFyIVuvObiNDfpoFF2e9Wc3halcEJ22y7svDYuwu%2FP43afHBW3cXWmpNHJuaqBPSSeLmq5GvWc76I6V66KPHlHB2v1zBxrXb0X5ngMxLhQkzm6bmwiUlZCfyM7cmn9%2BzpHTASBqQkjdR0bAOsYn2BFfZLTxrQ40ddCRaybziRmemZkbKPKR%2F7ytJyLz99LtHPoxdnEJRRCzf5ruVx%2F3iXqX82Xo2Dil8hMKH0J95%2FqfiJHSiVQXDe6kY%2FrF3IjWs9JcxFqYas7lcoNMMNfIMJIxCyrdbSIzdEezmlsOmcMT9xDCeieCFglQMOzTw8kGOqUB3LdC1fJivVlr%2FIn%2FfJnJ5PlpVB94iQkDv8YYBYILNgECp6%2FZ10M4pEZ7H6t%2FmoarPdXtMi8zB1sYXlzWIaLDcZeS%2BSri6fGqUSJ6qtZOsOJy%2FaMMaQIaaq%2FhdO72iW6wOY5kA6T06uW7XQulaCTlOkO9IhHgC3nI8VkJcjPvOUwsZ6HknezSNok2aEFO6jvBPjA4piCMRu9NB%2B2QimTbjqIYTou1&X-Amz-Signature=0650a127d7b88055bf0a021c77676de729874e31c27bfaecfa17b692732f7ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

