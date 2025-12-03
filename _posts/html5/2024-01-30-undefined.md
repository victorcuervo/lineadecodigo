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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQTJVBI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICXBChcsNwJ0pY0Yjl7h1kUAfvYvHYMPh%2FIBEZS3FEF6AiEA7QCqBEE69AVh8HVw7H8QTbdEXvkBIibhpV9hJyk0ouUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLUa0q%2F%2BjklwKLsgHyrcA5484sqGUkDWaFx23396Fhhhu%2BccoMOZM7bLofoIvlloYyBNeFtZD%2Fq8MP8fIb%2F9KDMhoedLNuZjhKEVHBEN0Ru6W35R2yrb%2BtCxNGWJl2wyQY2eJFtrWaZNDP9vpDx9fiXkwQmc6UZ7jllGCAo9j1d4%2BihFnk7GAFA3J7o6BRAw9Lhaxu%2B3KnlXAtP6C%2Bc29cEMSomRAv901YXNJJV8%2F2%2BvxSMAAC5BfkWE%2B3rz%2Fm6HMSYN9r%2FAc%2BMCL9abYRGlDexcesdrN4WSjiTrFKEyk6GnWGysSKyLMaQRj571rwkowK3tXLpnbXzLwojDguPMG0mz7VuKD%2BbruM3xTXyfut2xzH3SWvwww6FiHA8OPv8j3YHUjMs%2BTBpFSNFyWAfzF3gSvkYxw3JKk%2FJoi7qWJtCbO%2FWzb7rdwU0ohaS9qVK3sf2VxKxmOEaGcUrW9L5uDvRHF0itIFZt0OSFkXtqYy901Tio7VwGhAPf%2BXe2gZ124qwkrGFPPl1Nt7Ajs3izrho6YvWKWX76j6NwQbJp%2B%2BSDYK4s1Rx9fSYlt4vrqSb6jgEZlB%2FAqbHMu2Xya8S8Xonn9Q64xolTVupXV07izP8s29lTU9Es7kd43JCfWJvGNsAe74fBmdHRoCRuMNWWvskGOqUBzaw99JP6tYTvfhtPtfZruZ%2BalhfcWYWzvSqo5%2FObnZgTYbXd%2FubPV695%2Bjvr6AqypRCyWsdBWOq42rJgTtQoKZWE9UfRQcOasJdrrnuHGOF8yrg1ydUGl1p5L3tFzUIxoXhRXnWRRMiXprI%2FMz6bNKJgnmLy6dCHVABZILGpOyb%2FvsosdqfyX1s9ixLpnGYMNXaHkiOv2%2B2l6EXVALGPkm8ypZRv&X-Amz-Signature=7a21a4cb2ff683fe82efe57b29fd968d3b8d91d8b3621c007a8ae4946e521c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QB572VC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFRCBQv3S8SS6269NKZUDipgg7t6g851MpZGlFGoyy%2FOAiEAhltZCtSNJg3s0nwwpJCKVCsg5cyiTjFp3pAcVJBwKhoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIBsbFnKyGa%2FzaMDxyrcA7fOMIABUVT7TO37cT6jqcEg2w4O%2FHfnSetqcDg5h0%2FBEjFnNczUDlkNQZSs%2FC6Af1LO3qrF0UcXLqn8mcKe43l4WhqyQZYFfWtOBFMiixxHh6RCYcC6BuMLeU%2FVOhd%2Fgt9BZRGZAY5rWSJzW5UZV3vOIRhEbj3zPZ4lK1Vy4MWN%2B6PKl%2FymjdgAHzXM24I%2F75end47WHFSWrjsBjhiJpQClCs6BWfffF1Z%2BvwbaIxx0rgBA0O7Sa%2BnGV%2FxXvW%2FjcTRWPEE7o9LA0qqzkcRFx9FnPrJ3ug9WQjmb%2FeqQD65b2Rd5rniGlWfsPxWgS7AHZfmELddGJ8ujufAhuYHACtDbGnYGAle98NInLiSEo3lBk%2FWcce4cK5f5KBp6hjBW%2FWlnGVx4LiTplCQUjl1BNLfNcm5lz0kzyfijd3woi1nS8tM9plVr%2BrXHXHGoyyAywI%2FeRu1P4p57i5HrilZmvlFzG5YwwludPant3%2FwNCWRfh421AHQ79VxMQPlfAOBIT%2Fr04VPb4dGJneN%2Fa2nMtEMSZTVuGRpdicDCkBDxe0JGwNpoMP4CY%2FjS1jtJd4RF%2FrGIcbdHSF1xrF6VOcplHOvVE8JA4AOICyaCKid0jzN0GTamIWXcjf6vkRMPMOSVvskGOqUB0SPKg%2Fb0aiCfNxgIKGvwFtHoU1GEhMagSxDqXiyEg2KRKcpwIlg4HcCa2sF0c%2FpphxHJuUFRlVd556zhXetRGunxv%2BzropedPmDhNOjZ0y2FbqhxLNbzAqNYTtbuGLraSQANkQu06bHG8UuNHIQ%2B9DhEepzduRXd36o6T4Rymw7l4QkYkBx6jofUK%2BxWt9rujQUQxozxCYKUIf1i8zCUP6JLlfHm&X-Amz-Signature=980122a4813dce537ad3546664611b75af61c746d82f9f29b0c3051d3b06f29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

