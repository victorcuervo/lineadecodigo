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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DUE56P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzJznvapq7G0BIiVyzMS0xYE2yCW82ZpxMh897Feb%2FtgIhAIq5yx%2FhzIRX4iOF11QjAIZ1mHt9P2%2FsVRPYwFttD7q%2BKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXYjQkVM0WwrmIfEQq3AOz4gfenuAbkeFDMrNfUhnGwz2Xo4G%2Bl0jF8oXuQ5sNHRpPJKYSOybcs2Wgf0vrYc%2BKUgEnQgDfvlsYd0xZ8kEbfVMS%2FAdH1q1BU9L%2BY4NofR35N8GlF09%2BlbrUOX90%2F6OxAOq8WSUGPB8d9GVS7uqRYRtu7IkgJQprTDN2cq4puWeahSvjAQW6bs75JyEXN2dUXVK6NqsJrzpVayQBU%2FVEDwgaiE9kiOetFUGpwng0XMqrRLvEK%2BAd49h2TpDjBCqlXu%2BhyGPMBcAWmT1zjGMMMh6zNFd6Z2jbQj460ds3i8Kowg9OTRuNpsm6SrlZlkyesSFw%2FFkwY2AL7N0Oautsg27g3E4aN71msKnpO9FDpCq3Cu%2F%2FUkcjTtw0I0eXTMxBtzhTdfaF29%2FgfVCG0e1EQNvmyDqlgQvdEhP69yDlQCrSaxydBSHgZVU%2BUy%2B6xk4YbNwS8OgFh7HjVQFQedMJgC3t63ea1fLUEGYHVN79mLY%2BTpCLV7qAvlQgG%2BoIAgNxkkKGXFR5pvkS3kbHtST%2FfLI6uSYIjXDUFdzY3EUMAAZAtQp2SiV9gvTntsgM7IUw0%2FU3VpSa7VsbnCGt3eW0IAIbTYK5wYPt7pULnul73tGjJMW6vm04OxKCGDCDqNfJBjqkAYr9yKhuyxctNhhGoKkU72zmJM4BiLT2%2BAzac6SjKBDJMfCdTlHwExySJ5XK0NNumxqtnfffqy3NMoNHC8hUlqJPIcKxz4dUuOJoA%2F45pYoBXlwvRV3qUFFIztXYocTvABCKm4YvzuPQ%2BcROd1t9pukYPBuarSTrk6Tbq99X1Cy5yRrRIbC9qcPw43Q3SRShh4kI2%2FXK8R56Zd5UIBfr8xMM5HhF&X-Amz-Signature=19b32f655db164e9d4b93650289e96f0e549516a2bac47d0983f27d390d76196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5RUIZB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrnOBfyjATFKPzFUvfUyeD9L7fECFUp3DnHUJxHER6DAiEArMMrN2aMvjN5pBf6QNiCd%2FggWXRkr%2FtWb%2FUh1%2F5epDQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJo9AO5Fi%2BKPRad%2F4SrcA%2BRqJ29JYmFd3yt45YQSI3rJuOum1GBF3fVqoyfzIrvmLs%2B9a0ppPJZOUZdXc1iL2RLPwuxtGv0fXwnY7Gc%2F2uY%2FZ9cXqhEg7PFpxDXnM6CiMWg%2FGBDxIF4KQQi%2Bcuea%2Fe5Q1xEmSWIzTn4i8WjHhrMdLOMs2gyfQifAsBQ1vHctWwihvuWGVl89MmSriWO%2BUZbTsVYUE7rwSSTDA9EJaoNrZPwKE35Yyoy1BNuk1wETawhy8zjrJDitKkb5JQ78WSMUXrl%2F3FGuy5v%2FZ7f%2FrSDDO7%2FShBDMqXlfGznoL3FFNgSRSIbbq0amkXW8Lvp9kryL7xRQ7ffCErnuY4CxYVLabiSu54FBRigc7o5Z3WHRnzAr10eM0GzR6bfdUUt5LY5LorWuMdrmjLyuqavZy2%2BedQkTTrOonftlYRLKbDzZEVMeVEEjz5%2FjlrV%2FHn%2B7WeeV7N%2B0Mw5w%2BWlpAaTrDsc24EdYqbObIioHvtDonHIJTsJtt29rAwkXgTIYm1V14qkDCLgCjc89xEdNafOdrO0QfacXY3hlD%2FmiXTMbztrjvfzGGvW4abHUYAvCCoG7YMGKS1z43%2Bmzb01messTmCL1zkg49hqaT%2FFZyPjUeiynkmckZDfpVxVPkIVvMMmo18kGOqUBttqw3Nv2d4zGxK5jVPh6TxaMs4PPH7%2F6nMuiLks3jJf709R8VAGUy6RPwRy7Q%2BWlgexBL38OyqgpYxxsbjGkEGimOCSfaSlFBGwsuF1Mmxsg6cqTb%2BKookIe124AWT5vt9lQ4V71jilsCdgwdOoSZ7DXdGX%2FKfL0FTMct6vy15oNtL0K8bmdrUH8u0j2BFUC%2F26nxRF0E4VnrUxlmZIWnNxPAE7V&X-Amz-Signature=be7381ce9dde477889aa2117acbab1f56d3862dfff13fcea1e311a7cdc7a4e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

