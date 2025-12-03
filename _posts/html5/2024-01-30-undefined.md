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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UKAWI3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIH%2Fo1RgejcRLhj3ffhCEmlL3uc1wzvZxiOclm%2FkglcinAiEA1vvbC4MmOjZeuiPvhviaweQVqEKP7OoW0MTVzoI%2Fz3wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMH0qpG0ZA2a2lzdkCrcA%2FIXArAG51q77ZhRt24ZrybpECyV2B67jE4sxuIyhCWRnpuqEtXCgTIHNl09bflaNgzNCgWNoB7n%2B9LW50V0soCYcD%2FTfCOJNDX%2FPLihUFq54LK8biRG3fauKRs3H4SABkIUoNLYrnVAUoxYfk3biMCLsmqlWykr0m71JhTz7ny5W8JizrqjnJgTQraXdSBidKIgzuUilAp4RHgxCWeLzoBRkrIcdaP3SVEe4bc7Xf2iGGh9MEyEPmBqonikxR%2FlEvwN9l3sINWDePTfpFf5zsZKI0UFzzfK%2F8Kx0WpxeWC470k319WLjVl%2FFH%2F%2BBbm0BAAOx73mdXikrSbBknyBZpfEJNjjnCGyKHZlVvvjTKaxUmN6Yw1KOjSpJ5LijQ5EGqe9VlrCqmWq%2BQ%2FkrJNpEHSDE2ITDTY%2Fizfx6Lot2ARRfogYjuMx7ZW34SfqndOIR4wTJTHNniQErUAZ%2BJGs4a7JZ4SMsnMJwAIeLvuysQnu35b4BgCQJW3Ko7OOp8Se3fxBR2279%2FmsEz2Xpz8xvBYkpOmzmP3h%2FFgXeRSf0lABRtJGD%2Fp%2BQhkdEikwbA5%2BqOFXr3HJ5tGeF5aEXAMkVnFwCE3qPanC09NOdoWbbpEI0lcH%2FhwdvXsDH1tVMKr1v8kGOqUBn6B2dP592I8W3Xl51oWupNBJpwZwg1CkvaqSVbBJv6WARWF%2Fgdjrc5y9%2BIT1%2FI4Fl1VcBJ1u9VBbj58yDBC%2FFaRi%2BtRplRbg%2B5xFliqQ%2F1S7GdK%2FdRRQtoKAulxEWVZpUeOphB6H%2BPIMqvej8Q3EiiYnOdWvezKlnhMvq%2BythoPdL%2F8%2BHBpWlZjpMJdkHcFX3JVaxUDO3kOobWoRE3TCzI7JCfp5&X-Amz-Signature=ba46f966b1c8fcb5a06f303e4b7f854e41a2a2a6c8a049186d780f06babeb255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2H3OKTH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCVefz%2FcsRn0OE0iFBaL2hnTblSst8FROnWUEilEq6pwwIgKE%2Brt%2FWv6tkVTrNVDr0icwzHVBoYcKUPPEbxu5fzRjAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHvaPS5N4VhtSpRsayrcA6WLADqVvWxK4f3i7Koas1VgA21HpaYOmsS0uFh%2F%2BfApjt0NTp%2B3vUZj71SyQQ7BVmu9Z3QTFRoXqo8Ra0QEskhIcDvCCGTOHGZzSn9JeMA4Rw7acbbdsfBTJ6MSzkQGcljWvINijjRxI2E9thWacEkm6bkeSmlXYscWZ%2BJMBt%2F8iYHV22fCpRGB22a%2FacpzmzNFLlrGzi0zUhoEIagA1z4c6q4PiQQMOZoi6KuIIun1doxhQv8qSy0z4RjccNS2QDy0ZHAuU6Usnde7JnDfFBc2SjO6lIj9FbrJ3lP%2FkmJmuJNXYpOcDDTnmf5X6QkeSBqivtXG6teNm%2FGBTkP34aEkci5yNIp0d5DkrcunHN69a9zCpQmVAyTD31ku5tkiFr33uzK9FDm0dIjERLLZOcQOB4nh47X0qAuuUhiD1RTECjo5EUYxnGJgGBvUXg1JA27bzsD7x5PLMni%2BzyiaVKSXvoy33U0hOouve1fb80FWs3zLfX4cm%2BzzUc7MVVmt7WJNdFm2ldL0agE8vi4I1oY26wQ7H9I49PgHlrvzctuUdB5PM4pFufJGm7Bigbow%2Fr6QJWtsjoTfmhANN9LXWvT%2Bijn3cUOhYEh6zK5qCozgwtANQ2d2crYzVla%2FMOX2v8kGOqUB30gQPl6IX6dA0LJ8SxD8Z171S8EeodU%2BMNAFqYioo1nKAnmpmHaoEfH%2B4PjBGDU9EBTfVRXLXqDMXcmk4P7Xld7XFx3nv4OmoZ%2BBF4h6WJQaGUM65trzfhT4DOrCgRZtwHYeCTXimmsAyXWofVXch9fPVs0gLw8e%2BEeysYUgO0eEIYQXYb1FEf1BV3oDJpQKccbHMZUZXMXjO2sJMgHOzLwWZ8sm&X-Amz-Signature=404271752d4080b631ffbae0abe0bf8fd563eab6b828856f339f4b2899ad0383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

