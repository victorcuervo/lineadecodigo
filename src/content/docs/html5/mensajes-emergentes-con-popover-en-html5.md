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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4PKUFC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMC7Uv4UofwgKV5zNQjmnUlwdcyjHsUBsrNp%2F5Bsm0TAiAcGHQ9qVboP%2BcNq75K6eM1Y7lSj5XmKC3dsnJ3Rn9UOCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyqzFO3YfEGx49uDiKtwD6JM%2F7y1GxhaWZhId%2FF3Tp1ZahzGhzMSj2%2BHFRQUA22q8xPFEsIFbY3slv5vm1%2FH0mQlnXd27ZqdTixUeqnBhVE7M1Z%2FQXcxBx9%2BnCX2USv2daRtI97cjhxPFezpte5hcT0nV6pRl7t1qjXBouWGidlTVdRDh216s8ViXk2rghfuEO3ZhO4usI%2FmVAf2HRGLBmqhNXw5F9DxmR6%2B8y5dL%2BH9DdQ7nFwAAPDAzwgm2F4tlNpE%2F0euXfbgVCyHln4TfPpGcxC5HFTMKO0jZM%2Bg5mACJL%2Biw5fU%2B5n2hcZLQ0L2MeXeh1AcxFQkoGsc4lrqc%2FKCcbzpVuapaHrxv755A9qFZjf9ZBVtE22WqyohGbGwOiOkaVeIcVQn93IYWpHAtHui1Py1VR%2FM1D30zJZ4O5Lqp3iZ1xGChKYE8b0RKfTr3sqlt58z274yDwLapSZcbKA2asdqwGmSn%2Bk68iHjKeNE22OmzdN%2BgMALXtCjqj9SNynma2V%2BJGS6I5F4iYXt%2BLRKT3qAR1bXQmDGWM4F%2FRV5X4G3M3Eb%2BfPKGvObzGpkf6KR6Pc49ouHxlPViTXKrhJidnKWgeAz7%2BD12V4MDCAE%2FEZ2WK%2Bec3eTL%2Buw00%2B2VE25TjiKauFra%2B%2FEwrqLdyQY6pgFKmWdYR9aZ0gXUQZdBT6zrxwvRqd%2B6ZsfAapBv6OB53jFAS2DNHVxgMEs6Avc3U0UfERB9nJsunEZpDoxsDOFHiZfwVDbTXZGxD7Apunf%2F7h%2Bb7ZbCALd8sBVDQG%2Fm%2F5SKRYwf4IbtG99Lp1jrmOg6RJBpEpoE9U%2BkHW14IQy5R8LeydZxFNVA6khFaDuRBLuCClXScC1ySxz6nIvYd45yy8VyzeCi&X-Amz-Signature=bdd30f7b60d2442e6c9bd836e99a6b1e94cbd0a027dfdca4da867e060f57450c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJX3OJSN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAmDiYcSJHBkDKqc%2FUZ34%2BIeCqqMB%2BxCdjixOrgL%2BLLAiAClb7NNUYi73WhZjA5KuEgjUyQGfYbFLjjhtBxKXO90CqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRlCcXxEtrccAzMZoKtwDASZfekFciUuRS63y7aWp8vIoHVHLLIz1FHK6GVpy3Qt6%2BqT2PbQ5U5ZC3lPsozQ4GkEOn4Zu4BABE4Rbp%2BdHNYd02vuI9itjC%2FdJ5NKgBvPAaWH0dO9dD2Fn1uM1OeXx6Ve8IbK5KETt1Wrd7dzBOkzfER7viy3jWvqQnAxrTYWd%2FZkgleIs8EnSIzjDX2MgIA4tXmAC%2FeGcwCskmYF91UyZoYHTolgwx3dWTnLVJsF0CHyXMWaGw1epJV0TDm5O0NfAGOjCqAB52hjHAm8LU8NznkaG3remgc2qWxUlRgittIzHgiNvGLX2fB8OR1iH86opJrmP7AmErmesTCwSblgOjGB0W8k%2B9nlwsddfzN0W5W5kPh1%2Fa1%2F5eIOkCcPYJ%2B8bKmUZg%2BV7PGgbj8hwHPy8NC6adBIMrdasxT4uCq8fcwipoLlO1T97lnXkORTmy%2F39YylX9kUqbMJGcG6mdf%2ByT7PwV3MYHNKIIk6iSN%2BbzceTEgX2ieKSoqpzxGZ8z4B2VFyHAMzGW7xAXPgeFMnHZgjK%2FKFBsoS1XXYGtd%2FV2u3Z9Wx9xhSBm8o1AgsIlt55cB%2FrjmWSENUH5MgVKle3fRGUzwhOfQtriFPefWxBiF8r5NooGwmYzmAw5KHdyQY6pgGXSDzH85VAFpZkkjRxPS1mbovyzc%2FavZiJyguMitWHp%2F2oL5bv2hLDXpBRNyG7X%2BWGVEsmPogCiZZmFjktVAEGy8siKHVMqUBNPP%2BDNENGqSHN5sUYE2f9um42BKFLOSjhWtsNv03ldg9zI0H6wZEvdJE%2BTWOCi7M6FJAunsMuNEAXJMTwoH7jNL0GMEUrkjkL1tFKIUenD7RsV7bOVGhRG2usZw%2FP&X-Amz-Signature=8d3715dbf16371e18c1547a8489f528ff6c70de30757259b2e88882b252fba7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

