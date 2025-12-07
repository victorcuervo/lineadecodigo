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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZP6EVRR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFunT%2BpQD2cDbakFnGOJK6fwB9rMCi5Uactyt4BnwSiCAiEAg%2Fo6%2F3Jhp4fa9hpfr3AZjK8YDmgCkRYFGEKUshUkVrIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2vsrN2UOjhGPkBeCrcA%2FEzSjQZIMoLnTf2iWBblNhN3ZlXRegcx3JllAJNwbY6%2BnZSTqm0aEaUw%2B04MQWwUAqPS06qDU2zovk%2FSC4Cn6PVU4IIuXGljG2sjPUIGiQYAahOInjqapjrrLqFPBgOLVfEzbyqVAQfwLtRLGIAHu%2BjxWMLPe6g8V9MjX7wegUxjIJ91mcD7xitc7LfjQH6fHFAbcB6tcLx8CDSI5xwmbXHUKluc%2F%2Fe%2BIt1REsdy5D6vZYDSuzBOz7SjbFCKbQqrPuzPOCyQoRTSnYhRO1OLXPwZUvvxEXuCo%2Bd8b5KV6Yf3Kk2BSzwz%2FAKgnokFmYz21LGGC8Vw276Q60C5n3e8I9J%2FjtxBIEqqW0G2SxDYG%2FJqeCeqSFtL7u%2Ffs7DgxTRCcZULPVBk%2B%2FVtFivdtqapcEY4ZVcCVuspXIOgbJ%2F37XIeBE9XcpE4nsmBmETfcgwBK7Z0mwQhFogojymabYBDC7a5fAfKeh9RHDjXXOXaaJVCIqAifhPAEeJg%2FNDuhDFN9Aj6A7RkIjn%2BOytllh87zr5FDF8i698l2PpEmhDWl0xAHtNPtXWYcq9ISSPGQ1Y%2FNIu9nR2y8kWa6FWQaS9Pk71jA6XMUdOHz0XmJwSHdYUGR6b1hMNaW%2Bl2hM5MNW11skGOqUBzA519YgEIdMjrNRhRDtAs6IvAZRgGd5f4q1rhzAXQ7YsQdAH%2FqSrbT8VcxpFhnd5XBsPGsVywWpuC1IP5vYxXHIZoMCgsmzco1AQSfT7t2eMBu9SBsFQFPZ1joUkjIOI3GNpjkMO8OdQ2mYw8vcIKifhN1BrFvYJTzY6hngbgSEBO%2B1B%2FI0sAvpB4hl1dGJEPuw26jto0haGA%2FDSxbFkO5uQSaQm&X-Amz-Signature=68e09919c7c2778390112fc0aa562f0b3aec6299be8b0b39e38688baccd6ba97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHOVNJ23%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2B7sPWtXiHSSzdEHchEZY%2FGbaoLpKm3hDvbVQi3GYhXAiEAsLOXUpznuX5NCQ9dxGSVuOVNSBWOwWEwU3BUksKo0TQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvy8BMkxjVUxjEbeCrcAw%2BZy2j%2FnkQ6FM%2B2vjgwqcFA5yO%2BMbWFO71NdiE%2FYeqx5kdtWo6xT52yRTt6Wb4nU%2FddIPv0MWxkxeKWxhdgBUl8%2FwZlrGQlmTQjKrvkIhHD9tBGitKxL46fG992p5ZUf2zvIs4r3mAeZYl9gmTteeFxmchpKBZ3ZwMcI2iVUVIeHliLKpvsbKLH5yQAwaIFUEcpnbLz3fKRKk14sGRAeVqKSWJPsHFbl7a%2BMN289OaN7T7l2n%2FugVcn9tDE3nI5Ja1iCMR0tCTwdW2%2FEf13qS3bC7yIV6vSEzMTOe3%2BHhQN%2BYBmIDjaPtWgQ71mLJgwmX1MD5ROCJNDdNHlWIGX2iJ691YiWLoeJinyPnRVFhDA3XOPdxavRB15OoPnvK%2Fz4wnNqOw181YfdzJI6eKdfP68MfbEgK5a98jQupFy1UfLmHl8UXD6Eblk62AVvjQln7qaKvfxnZiSZRBhMmNz4m1SFEUZ12ZY7zQhs5HO9Do37k80Norg%2BBRDyt9Qb7tE%2BJffsLMz18JX7hu1NJLPRJs9ja4szezsXuTfhG2EnWYhpVs9CO2FzIs9ieg%2BBdQTpUMcPbqSmldSVQHOk2PMy%2BDv1fqXaRLyrcimknFXpkT0nN8wy0kz4B3Wk%2BVQMI211skGOqUBz9kzK10bkvhngKvabO6cTQUoaC%2BIX2%2B1uKZ9ztD3qTz07cHq%2FbA%2BcFvYabUehgyKypRkfohGVujJOYq903O57CEOAU8bpJKhmuKkOgL002ahUxfv6ela1bIdFvIdPAIKtUDaMlPOiVL5or565CfL9j5tnPm2DzT4ln6BvLfn6kleCvedhvns3G6TpVcQt7Zt4%2BXYtzhn6kmAcP4de7VDZY0CMnsQ&X-Amz-Signature=78eeec677ff62e1778b258270b9c119305a506f862a6c198fc89cdb077561bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

