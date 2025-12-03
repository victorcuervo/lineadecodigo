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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MTIAY5V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDlICBmxgw9hJKbhqYF2gJnRgNARAdBdCkUjjZAbnP2EAiEA1nCPzK1oOp%2B76woKcKTlXSHfy%2BW0PN89PkSNE6gHxzwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIMRtAY0v14u5BszEyrcA9bw68VhK2%2BcRU99N0faJANI5Ny5C7EZcd1Satt8U9U6kP9Nt9da8yeH15nccG8LauGfRmmoj%2BXaV6eUuyzuWWtOxMB0PBHKIGmZGA28BKQbuRUhNaKGYI2cPb2AHGHbddH991QXpF5OunclcfEGURkEMBmM2%2FbPrpaC3xfiNa%2BXA0AU7lnDSEDHmQ%2Fsm2tc71KLhzAjrZpypSDAyYc5lCiBDMbvHJS7oVThghPhBRPAI6WAJxD3Pob6BhAteJWDQgQ97Y0B6qUBzJoHQzJMQgv5Is3j86kV48hPDeAAm%2F185Zaq0JBAmBx0%2BNb4jRYXHm%2BtFiCc%2BNrQ3pf9TKStvRTcG%2B7hEMQjU4A%2FdFigOH%2BAN75xQt6dOiE6uisQgw7PlvAB3lTI6ba7w3fas8gZED4%2BD8w2LRKsn%2BA1mFKc8MT%2FO2KPDi4vabw8FcmZ8%2BsPBzgko4LEXXZkyyLOEI7CxL8cch0M%2Bw3zkP6qmnM5FbGLA1YQ80UmUgwJ3dXUogY2LqgHjXsQIb%2BR0ePjHg15FLLB2%2FPFlMBkm3TgUdE1hsjCRON9GZCrmItYulnwPIscQlaLBsdq7rVWjweraAIWiYQc%2FAwAtRNmvRHLwvl6VejsWXFFsFkwRo6z8kWRMLWWvskGOqUBuUlKO3Y38TrsZOVwCm4vkQZWxjK2BGY6otTeOj0GKZ0cIlu6KwS9G5LX5cs7HJzyKCkcUMIAhgbJFtJaxhFpay9tG0m9NKLQp8tvT91vO9EBaB7rpIRo%2FM6bGX%2BdNY1bvSIPM7DJ5WXR0KQpAd%2FjVt9GSQelElSV2X1NNPZRCXW%2BxPmhMCNYz%2B27aNoP%2FoBT7nBvdKBQHh1GQHsRIGE0Fq5h1HLf&X-Amz-Signature=89b6b6de5aa147089423be1fddf86d1ef25e208263f2b0ad02d91b29f5aa552d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7VP6QMY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC0keTb9U3RHPZ8gUcMjFU%2FUkuBf13KNDR1D%2F86LbkT4AIgRDbUiZe4t34ZmcLlKXIjfbn8hbjBHz0rD6MDBxkOW2Uq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPG%2F%2FkItXF15838jsircAyudXTb6%2FHVzyacJYxi17Oj0Ho8wK8fq6lL5XsdbKeBtCPs6RIcUx2AEAJBL%2FQolWvl4m2a13D5w4GYzgmBSoFaCsxcE4LTeKERMWTTdoXRCmeSy4MuTVGnPNDnzlswFJ1P84vDsIpQASaJf254%2FG%2Fu%2Bzzz6zjcEB1ape06lxT%2FlDxYci4og%2BhmDSfftw5nN8ejQsjjLo%2FngiDn7%2FwqSiNoSW4x4uzGIqA4wyOsqU3Hm5qY0shZWUYRryZqYeTZUvgYR%2Fkdv5hlUm1ymUfMZ3ohIqNAH6Zp7PpClLqnFDrpUig6f2Vnmk7FU8k2TpjKTmzxAAan1uFPz6iHK5CgWCkfvSc61UXSCc%2FuejpW%2FL4I2lKC9voWfIG3h6GEsjpBWtk0JdYf%2BqLB4fIuB3Mjoxexr607nrRXqVury7zth5yikxK1jKrrjY8oiMPYvlf1hxNv33koMuJe3JyQOe%2BjwF0y1jsX2AnY69ZGR6f8yRvv3PM7PdLGYrlUIHPTBdk9Eojwrh7QkklI6QLvukxDwvByfuOL1U397uoPB%2FThF0QcaGpM9c1tUYz0NSXdziCvRTw2r%2FJz5gqOUUWxeYBQGrozqSDM7HmK13EkE3A6aMgozag7bCjzlCWXze4SaMKiUvskGOqUBKBkRdjWypBxw8D9s4ZRcYxRwprmAQP9tTkg7V4CF9lXgjP%2Fg%2FglYK1mq9GCOzev%2F6wll%2Fkz8myfz5%2ByeL7wPr1GoXX%2B4kbH0WrEsIgDkCwtqojwvqLtHcBJ54mmRD3OwoTIIddSaqEDQwRGEiBhC4iizX17D3ol4Y3RhTQ9eIv5jN6rIQDPfEdeuY8%2F3I1nW5NZyzx2%2B3E2DmGNwr36ZKkBK7m6m&X-Amz-Signature=e33832528e26d3bf21bd1ee297e8527b196f2ec2d27d6016be9e25e3d087e6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

