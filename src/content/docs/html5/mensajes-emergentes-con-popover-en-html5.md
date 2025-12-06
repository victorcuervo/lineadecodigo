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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V56FPXW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf9x%2FLMM0UnsawlNBY2GHtZf900wLykwz9lDwrWTK7uAIgbl7Oh2pQFF7cpNxoO8t7ponGjLRmJi9PlT00Qap7al0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDC3p4iHLp5wP33UMyircA99ZcNgfHJCihtuqZp8iyle6Js6KX7jqwyeRS%2FlBX0RSQI7GQopwg2%2Fb8IGA4BNRbW6lEACfbOcygMU0Jg260VcMiPMq4NDdTf2t43P0jsY7qSPkkDa0iCeHG6rjMm%2FfXvtj2MmvxdrqbpS2i81vf9pJT2tkZ5pR0kH1JODrJ8n0RhbdbfJPGuW457g1XxSMLfMobWoehQtSF1t1JSmj%2Fkiboj4hyHy%2FqQmFMIlVxuKxchY3TozFMQ8dsuRQIlAusdFxl7Nwm2m0V2nc7UwVyvWn2q%2Btlg0Kd8euGc8EhJidj38Fn4gKXUQx0dnkj7l32E49f0CEPiFFhGmw0F%2B6p1LJj93wrJz2OH79kDYhT0gWp%2BOxKR4uyIK8DKhd0FlouAbAQLzgXWgvOHPNH3fwcviCFI6YXS9uCi3HcQfjaJHuaccysMeo1WWTHDId4IHZhtRugRsy1Z1w3HsLT4dPWHTTG9%2FkZkfJAtwwhYbP8ZlAWFTzbEsLt0c1K9k4deldeKAqdWEKQXgjEIQfjzZZGrxnK%2BM1714G3HrSEjdefE937eCJxrVnkwre3DweMQH4QEoDwEKg80LjhOErH6VtOt8rinm3e2gRbF2kKpB6EdIQA79WsrwFSl7%2BoEVUMIa20ckGOqUBMSSnOPlzHs4uZ50ueirD3SWlovcs66IPJElt69e6eIgwh%2By%2BU3qDvZer62aYt7MbF6gN3VzW%2BSFA7ogf7GglmLyqOtNr6YzDdS8urxT1sgvcznrqbbExQmdyaVHlTuc9SyQvJZSaFaNGEUaXhblzlG7DV3BCIszk1%2FwA0cDXnBk9jZPTmUXKM%2Bk3vFJIPOSNETFUCBld3LhhR2Qmlq9tiXUqHrl9&X-Amz-Signature=ede2180af992b27153e138547a1a5e6194f688898f7d3747e52f7f419b5f4095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO3RPUVX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0HU7K3sEYd389CPlVOmBlf%2ByvcEiF6YQDJxy6kAsRkAiBsR4m4Z%2BNPOGKOU90eUGgqsEiGtirSbENcUPysVXxncyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMRnrVgamE2TwqnHbpKtwDkQPBn99QeJ3Vbp5SIDiT5JJsmvb3PeMWzDuunatm61GXuZGsXDxesl2aHEo0geGk5p%2BjzX0quLu%2F0jrALLV9tUvdj7YdkHyDq2Zx1l1aTRMNstV%2BfiMiKlfCESGM1QAXJHVP2hWzR8R34xl1E%2FRGP9VB0h7okigX7QtOYpkudGvrwJ0wXC5r7XqsiYC4ym3vDMBcZBbQCYLhxFiFD3rH1a4%2FJ2672iks%2FRcDlGEqZswVR6cqzhypdiKXdvFDe6grfWOuiMxyb6wfwZy%2FA38pwh9DWQ76g3UB3l1GA5h75ee8l%2BStTb7vyNEsfl7iVtIXmO5A%2B9bxQn28d2%2FoC0zIuEkUDxwflmYEx2pyWSzDUe0oCiMMKh0S%2FtOkM6n%2F%2FPDJ126ka0JPlQFwV2JP2TDbv2t3IvJBopTiJZYPwUmxDjFxdQsffIF7LE5AUhhV487lHurgO8ganNy2dkh0aK14gzKhMkFfZplbTEXnbdFJeAUApq6m22RCrZOV%2FJgRRzGmq7KOYhWgcZ0c1o3Jkqsz%2BFD%2Fm3PRNV25Vwx2dQFrlHqK7pAvH7fZWjaJ0gdwLvtcEGP9d6RnyKKfAvM3bOZK2aqyCfIlHFb0pjlE0eDdXXOx40S2YZbADZl2iXcwyszRyQY6pgFHQ8W2VGEL0R3eZgPDDS3mqrQFxqdNNFvUIl%2BclzaphfdSnf%2FDGkfPvLC5Ozh7iMKaZs182dRkurHH8HeCs94AQMBlykTjD1Guc5b3BX%2BCc7O3sOTDE1WGdFVhaRg61XSyYpbAv8gjN0KqYaBkvmM%2BuO9SP6B0U1dQrsFCv0XEkXQevA5TDh3h%2BunD9VcgP5n99h3QSK5koQYxqJ%2F6jLKDV%2F6Y5VgG&X-Amz-Signature=d230819df6025c5230b0169e994399bd8a11e7933c7d4926252cd4bbaaa7a8de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

