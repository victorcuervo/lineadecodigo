---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAVCNIQ7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDtyHMRELBe0OfPKdWYoa27iDVQlIOmv8fsTUKaBwPE%2BAIgXKUcS%2BGix4EfNBWaQ3ruAhB23SIw6qNvR%2B%2Fffp%2BvDvkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDK7WiSR3g0jOf0K9AircA58pMVAkg5Nahwfd%2F8QMqxiGj5KewS3%2BltWfrYG63bNT4BYiCRAD6V3hIIIda0sFzVJN3aRc8z0%2BiLryJypA7SlZRDQFMGCkwSIW3nXBH1V2iPSH1fxEej%2BNry3E4a0TOKtCeYkL6V1XfbGLSWsQcsqfPPzwY3DufMEvCxdX2hvGd0%2Bwmb1%2FsRmITe8WTBgmMs5%2FxPPteRQR%2BZBY6vXBsok8VW5Wod48o7Id0F%2FGFrcinFkNMElitAKXSuek3H6ZFn5CKjRrj7ke4oI89NEcN%2Fo6FYUsAFtP%2FESC27wDn%2F4qF0u3xU5lVpdIFc8JNwQQuVGBngsg4HFsanDhTbZh0hLduikvdvtUwDcKpP2jFasnDPoAkNef33lHOW2UCieQOGYBtmYN5Lp2ADRSIbv6sLvYJv6rjhKagaZSuHWv6DptRReEpKzxaPFOoVYciww4xbLo3Qk8WJAEmfmFPho3%2FU8wEPd8lVw%2FmI88Q9AMpmUZ1linn5D7lWuQhRoXlilZeKkl4BbWREiEQad8y6Uay1%2Ft8npYs3PVJtJbx%2BYwIxkctp%2FqCFL8%2FQ7g5H9Of1f5GYHZhICXhFuqC8WnJV14UkakE%2Fspg5rgVxH10oe0tm0ecqxYErJKR32LoErWMIncwskGOqUBjV8Jq2YH3usNrz3cPGyH6GJtnSspjBduZkbjj0ZlgAdOvWLlSalwoFzsDTZTZpyiKW9bLuDx7RtE%2FuaR988o5u8vfUWFYPm%2F80YGH55L7CNHxxwZlJtaN0TQzJVjBMI0rARfpIyINzvJbiDarFdq7QqaMiVTTcoWR8pqCZYbpB1JaARQ%2BsbaIz6Bf%2ByW5hudp1c6nQIEAGz8z8tQPd8j3aN49xp5&X-Amz-Signature=6b4da7b1f5eb1f473f545c89596f7798cd82ae48af46d6ca02ebd453eb4a31ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466575L7N4D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDO%2FcvSVfKrkC4LRDPeESZaicf1agoUoRMh0pbVKZLSUwIgCpCD3l1pu9Jkb2wWeRe2Rsfh5eyvnnrxRg%2BUsuXCJjAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKUI%2BIz13nmKTbNOnircA38Y3XDK%2FziVQqB9W7jYOms%2FkUZHJascww4Vfm7DhTaAccpIzWnx3f%2BB9UgA2H8aSkS5IjsAuoIfmUVf%2BshFxXupDR%2BfOtDGegX5V4Xdh6MM90vF%2F7JIIXbbvq8pvt8Ggb9jdDoGj7uhMzOgVVb7rkkdwr6JybfMrQebS81gWJ224wiBo4svTeJg10mkCYALQ5ONjF9%2FvLIC3ipTo25TOIIAt624lc9rOoC7VHj2WulMbjCtS3tY%2FFWxnUAynPOUiaLzT17klHCBvBgTfZVOCFAD%2BnWF8PvPHa1bLMpEpvV7mRyrrOuA2xK3ndxMRkKWC%2FofU%2BOBPWJz0qGn2be7nCpf8x%2BREFr4J7tBHbT6AgL4ezf71yqHmGCjkZYczeN99quU6RYkP%2B1HWhBoyRek89OMm1aND4XDVnyxYhA5rEFnKJOUsaRCg5uaWtJvFmt3AF0AzoTZ00wRRrAHgmiE%2FVSt6j5DKgh2UKcs2xRTjFX6yOAz9B8tbRSXcEHt9F%2FJtkIWKEE9R155vDDN8dSsXnzjof%2FBjRfyR3f7DpdTYmatOgZIVEJKk5rncTxmzmFp3XqT6V0ibWwW8BWwMdN0fnfPKorxkS6UES9RspXrS3XQal0PSwOlDD32jL2PMK3cwskGOqUBLcWmFz%2BmlQwUhqFOi9oO84MlXQKvMNuk3rzDuoEs1DcdoYQl%2BT2G3nXUW5w%2B68FxpmTdw7%2F7MpobL%2FVrYY9LlHHoIRFhV5KB%2BAIL%2BY6EytO1xo2HX%2FzIfZ%2FvSiAgQOda6XZWbDNYR33Yvo%2F68eHy2Pe3LZymi%2B8ipAYaD3T69fwQMfGSZ2%2F7hK%2FcwlFc7V8x9AWnytBIk7aqXpz6bmdVwCLlxT5C&X-Amz-Signature=d8b89f0f159a58c81871b0b7acb0fac13c62e6e8e8724abde0e475eba2d72711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

