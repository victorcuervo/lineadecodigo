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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXDI2B5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDeShjDHAavC6ofjTcbMxoK3IcrfZgfq%2F%2B%2FAA8YaWQcwIgORHb54uTlbRJG41xc2STsC6Ygybj%2BOxqzj1wV1jnt2sqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLj6ri0eeT9rDabHdCrcA9A0tOSyxRoevH2q%2BZ3iUFllR46BCIhB1OCc%2B7AoEgmnB4mp68AdMRRmM6bD1pOiWU2ERB0UOOvp9vrXmAhE8eFKIobMOWnpsLIDgnah3FKwgDj6W8bQLJbg36T2dgiMo6m68rrzFH86tMjna0WuC3552l%2FKoK%2F8UF6LHpAekr7awdWYp%2FjrF6jxZNUdVUg6PuwZfYlzdSj8Sotxmg4NjMUi24whX%2F89WGciFM%2F75pa3jVTZBrSqNQi8U6Ba8RkTyrq1iRzd0HX6GdFtPm17lwPiEa5UxMOXGOQNOSOG5hDFAYyT2byNVRCbxi89qm3vl1yWMuduzWiHrCc9V%2Fag2cDZnMILUgp%2BbHC4pSSOHiZYfsOpDPzIOKRxoYwadOJnnWQYol9i6nbWi%2FmOOxxSEY%2BSvYmFz33GXo9z11mxZJwCs6Ops540HwsyLcxBABDS3cXD8beg2VFc0Ut7MzILxfu2hapl%2FqP37HiDcdgh%2FSnwwcSkNkLpARrd3NVEPAikC%2FpDJDL8XoLwz7jGBugBxlh1PhTXV7uCLMRaMK3chnrSipsPXANiqc3URLTZ%2FGxY%2FJN0DNIHukSBfGrhYkFIyNbi4LBHdO611zNgzh2PAPHHdRgDXzqwV6NJHAskMKOh1MkGOqUBH1SUVP4f2PVIln5bLZfWqZ1ty4CmC0S%2BhJdBMumYCXU%2BKac72eAOJMdRQY5vyuMjitqrLS0OkaF%2F2k3E%2Fx%2Fj6SOfoGbOPsWwHFhVCu9NX9Q4h%2B233kbmAIZnfnNJ2DIRRzG5nsn2HGSmFHnnLINR9MOt%2Bg7rFjZA1UGMA%2BpM0vufQVJI4BBA%2BN2ozi%2Bz2D5y%2BxKYTQBvNhAAAc7YzsUNG%2B9qyNON&X-Amz-Signature=1ac8d5222c53214a5024e79f6ca85f1528fe2675ed1c3933424bb064d9a79ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM33QCVO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr1CSdulJn4KC05Bkl7BvPfhT6yda5Ly%2FJhzX8FTryuwIgcvn%2FO1m3%2B6q2GXiLqUcXDFdh8uxtkVIuVXIy9NSME%2FAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHCUiDH9cCx3jDm8CrcA5kOXEYtBFzvOOH9TfdHX%2FG3KXHlcvL93%2FhTKuK8314WJfmZSwMydvc6%2BEmt%2B4nbOgNLSF0zp5fQGqDIG%2B%2B3OUEADN3jxTJVScYQiGBzgU9b9ANkU9fbyW9xTr2y8nifp8lT2jztCsKsHGcgdRKji2C%2Fkadbv359DQ%2BKh8sRdOJzSASqwq6VLgf%2FmbtVCZT3o0TCV2MYWaEQZKk7j1deY8GdyOkIMT57HPM8BMLjvsnHjpYz88Qbe7B8IYHHYDM1p11H2k0Z%2FzhXlDSGUZGN5g3gxHy9DvhVAITZt09yQ7TL%2FlG9Bbc9UVVdq9ZUDqU8le%2BjK1J2yc83xnr7dpSnNKveRgcApzYMv7T4XizlRq0Wzu3X%2BNDYrovJZ1oPr9HB8JAkhZRfquPR3jbJDVLMWIuPDvJZdwctZRRuODEGto2dgw%2FO9xLIs8cQ2qa5cd5pxAkjWdiEe0V%2FXScMY4fCNzm3ccTT668HNaItDocK2ZjiFVVNiuwfzYwQUDtNcY3ctt7efv38%2B8zhhdQ1tAKhoTAL7%2B2zBi%2B85eFMvJ5NixQNLCMvr9o3D0oN0H%2Bu%2BVQrqVh4796ZGk6YzbsBwsQQIdDNwJnIxZERiInqRoVxcUeNgrd6iAuvd97cug%2F%2FMNKd1MkGOqUB1Wsu8WnQpQz0YXe4zrQn79zbVbyly%2B8SbNEIxSpzvUT9D2pRoE5s2ewstQnFJ%2FzzQrLF9Zek4aIDhrzpnuzGTrhh8ilEvW7px4hXGYZ1A0%2F34l3bCFugDtOSrAA2D51M0M4%2F50vdg%2B7IMghIssLrs1FOlOekxHJF%2FeZFTocG7HCUkJEmCwbN6ng3j%2FWqRaCbe8qt%2F%2FCxBITZqighNcGQ3QycDNpe&X-Amz-Signature=1c4faa4d786583f0426affa253d053b89e1e4590fc8f4ddef3395c2326c0c120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

