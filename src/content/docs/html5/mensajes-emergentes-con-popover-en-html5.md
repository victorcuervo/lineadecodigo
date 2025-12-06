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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHEDZDJO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSUFc%2FoLQJOlMM7bEGP58eZB%2B0JqHHaSRl6gFzhktgPwIgdL4ofFNL4wJYUl941hn5RaMJ4d4KwcTNQuzt3vAsx9Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG3L2HnSbp3k0U%2FmAyrcA2pzsbNRVFFhzG5Z4Cfft8FTic5p0gZnVYxKN0iG7K6OZQs6I3cHNCUc6WSu%2FTHhfOXyHrDXR9h1J6gmsYXSoXFB4l8NW%2FXjG5%2BJ1X7%2Fg8YNnRryUfnIYo%2FfVH6KdRfn2Si0Cj2ZhyAOtuUxqMBoY19dOEzNWOrMBOrjmI2ePMzxUkHU7dhdvvhy3NEKMoNJa7tEQ7%2FeRca4iNdbQ9uP2zdOFL%2F%2B7e7pturzkvM3ZcPqTuN8uuyOsxgDGjtZsoVKaEwkJS0lPaJP5Zp7wrt6zvunnloGewc7YiijT27BQ5eAwOb%2BR3kQzlpeDMwFdDodSE2MvEmZw59gBcWxpcmaaLLH%2FJuRuSMbuL9Otn89QtlXaL3E1kAPECAK5sEhcEm5n%2FoO6LaYvxaN4eDCd5xybUbMTVlkp1LVBNZsmqJO5D0FowfNNzkt%2FapXD8LkiRW1%2FNBkrg21qXtAeMZg89x6TgKtBdyWg4K06RU3FBwHN5yzP120yreIusvSA2BT0D%2B16BX%2BjgK6Ne%2FnJj5XmkTIm9PyLSMOxQFcE71rOHVILMdwaC2NWmaeoM%2FMaQe67KL%2FgXrt9muaL7MRnvb2HdgfpDXjlt%2Bb7MhAFc3nRHONdlsQhsfFSdMG9WrxxouAMJ%2Bm0MkGOqUB2XOLm0TuUhG3p0E9Qh4yPdqR7WMJlB8s5MSfDJDarPNbIxDbmQP4IaPzSWhFk6JnL%2BGus1PkXhZoeut%2F3FtqWqrJAm6%2Bis55dy82wGZXNAd3pM4dT6GdO%2F1je6y%2Bhfb1ewnsOHHwtd2gnW9IsbcELNDtZz0eccSFsO3SShtdX9AP4KDpL3GTGsfT5V9J%2Bl1j2VxrGZhwJNLaphYkMzNMmTdyzN%2FU&X-Amz-Signature=b370e5964bd9efcb6886d7067ad5077559a8a850c335dcae24ac919a1f380cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJJA3DV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpRWpmbh4KN%2F4t8n7eNKCn%2FhgyS7XOVU%2B0t%2BcqBMsslAiB%2FO8GA%2FVtnfVDrVZ2VWe0bllOPMxOXwpMmScE7ZqB5eyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMfIBzSh50qhNp%2BBnsKtwDSRLLubom5A74A2nVfqSuUefRBoKiO2JNl5A%2BlEIBhnwON6J2kSFb7r4yskUcp6MiX3daHEz59ikAG%2BUSYUFmWMxvI6ET87dIw76spBdlrTI%2FOlRnwSjzdnGR%2Blm5R%2B%2Fqm%2B57MtOi46J6sX2zyean11jVgFmDyUfs8P%2FeMe%2B03MEy6JtFtKqD6Vzpv6ukp%2FESJIDzUcFSRCFki97DFC0RYPjxSY6my04tyXSi3S2S%2F4XNEpYtnLPsa5PS7K6jvkhYnPqVuCBE2Or0h6QGkB6x1BUORESAEuXRfZXD1luC3W7v9EScjsmZBknKwPynFaM7lPvMmcV5mB9HxUVBqRUM5hpss9Q4wIrSUGwr3AfV%2F3OiGBg8sAWGCp1dja1ybTzG04l2K5z3llVYxP%2BpW%2BuSybSMdwxObdwhBxQpQwWTMJq2bi8QuhT%2Bbo9SZW37zwPEu44NmKkPhhHgjhxRk3EgtFrkzS8ZzHv2TGpMv3jTChOqAB57iwXs905oFMA4UCfdqprWwpYAcmXMtl%2BhQuWq5hgibXBoMUE2dniOCPFNkIGqL4tr5jJYgOgnnSlIh4rYTduLyeU5g7VIjmIu8vL7oNgxNiBfPakzc%2BuHt9hI8bVmWzT05CuqCUyag2swxabQyQY6pgFvimeE9CzdMck4MSlylKUHQhzkH%2BInJ%2BTROAtBErtsmb5LkRTSkynY8kjtLdjCLFQUCYBSpUC1HnddW0Hf%2BxGqPW0%2F3tEbrFVfoo6i69Ye0G29uOKJlc1ysOCNWql%2Ff2ZBJBBmN4dCxv4lOBxAI4hK%2BSyPTkyJGhl48YVhZqYUPmChKPLu55wFg5CkIlnQvSk57yr2gm%2FiwscJ5bIpJr8jkhg2cvEY&X-Amz-Signature=88ab0d35642388ad4f15203141cce6b8079f273ed6b38ad17e3b57debfa37b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

