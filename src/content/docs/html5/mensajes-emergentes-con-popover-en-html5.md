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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFJCMLG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEk6SttyHgW1iFvKP7yxi7slDoyaYPKUN8A2rwn7hn3%2FAiAqH9XpdKlWVvbUxJmNgEcLfmYcitMUo%2BCGE6gLvTSeXSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMdJQeFEqw%2Ftlpnz7DKtwD1TBE9fmYAwlTbL82fc0Dwe9%2B0EmFWMJKBd49A27ZseL1O%2FcyRIKovEaVWcwDC6aH7iV1Z7kGSBZisKK8BBuM%2FLkm8apNibM1XYTKU1CYSCOPjkqB0RQ%2BhlKh6GFQ7dBJtMHFslMYYAdogmBCQqHcjMzJm5zx%2B1WoAn4z%2FXijVin%2Fb5jBCpwnmujKOVJH4IF62%2F43Ee0XiTP0jglLPgsSyqTYls64QUOQlQllKWtvdUgCSw6J9xiXaBIyFMdYXOhPkXP7Lo6xTduEBb5ZNBJ8Q0hj1Tf%2BGzZNBSyB0xe6haXbQcX7XBbslveWet36ZhgzDPP07IYvpauO2wkfC%2BLsbLLKGCp1%2FGbO1mNDUDAh8J1Lwb%2BjU1h9u4ApvKWvqyM2H7ZSmETA5bpcR2r1DB%2F5V5FXdbZ9QtM%2F8yqgI4xDhXHQJiLcCnnVnUfBvsmkEG23bOMDc1ulA1jagyte7nu7Ln7pLbBg2vxh8ymm%2Bwl5SqoyG0AmMIAqmzBtdP83fC30DM6r6xViIyPDIyW7txZBi9hlabqxRfMzWW9vMSvmehymwC8mSo1QPQrgab8jpLKhUPOoyTE8z3RF4gI134FPt%2BSCl%2Fr4xNvF2DI%2BV0H%2Fubsu%2F%2BySm%2FZxEsXfJHcw56rJyQY6pgFDO1RWNFXoLvvYJDv67mP8b974PmAlwGKmH%2BvHVn1OBNDL8gu4XrqwX0vvNCLHMZmoGLV4vxJ4N%2BysmKCjqQWtjm6nxIF5I6vjCsKMn%2BHXvB947zKnmGgvepbpDj5jLr2wCF2tQF84MaFy2tMov3op5w8ieH1IiRxF42mZobR%2FjtOux7xkbHEDDCZzl70gmGNXLi%2BFyoc7CDYR48crD0VRDPo8mYwE&X-Amz-Signature=d9240db550915cf31d8e6ad875242b9360cc3d743cf4f947d99ce6e1b5e1bab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DJ6KZWL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATxKZ7U22Ch20J00QSh9VL6KN2VSKG84kIOG%2Fi0GJskAiA2iB2GIhLoHUS6DP%2BRtlU0A53mfoD3%2FnGbeT96qvg6Fyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIML0LFNruzbuSa00X%2FKtwD8X1%2B1DIBxySqxwfz7xp42uOPVXaqOu70edYpHbTfy6EqsQg90H0LUKPsfP7ObnqCLD19%2FSpMXmIydb%2F%2BQ9T25l%2Fore%2F2x5JsHAV3047sU1FBYbyO%2BnFYhLBJ%2F67Yx6sdmzmGkIvFrGBvExCUPD1LEC1sMG5Te4sGl7c%2BttWN8B7VfmLvGxkMRXXt38YYyOlLaJByK7QV%2B63NoXW3a6a04k3AUNlIqFJEN47xQj%2BR1pICEaVqXWUGhaRnZbK3wWIi7BZEvMBwvXkSKiAG4QBvrQ7sYybRYoR0JNNYUXOhYmQs1zFjvbOfRLar1fJvKpw4Tmj8B5faspr8ytSIazgtfuS0UD8beBBSRyxpFHWaYHAXgfbnDRggyrbLIBX5II5vEAMEGPI8NXzeJV%2B4km48Z05Is3%2B0SnUYGbbATw5F8QHcHF6ad50Kuer294LheueUvrzl2hn6ZFCV43iI4YXaHax%2FPD4OnWZaDNTw8ZbU%2FJ%2Fhv%2BuCff%2FfpkYCkaGGW%2FvvZYzKo%2FM6GL80tbEkXFrCY8R9NYkbXDX8jN40DhxPDJNKUe2IPAbAZT3Qyx9%2FmT4LRCmKSfT%2FNmQzHxZIM%2Fpg%2Fz3gGHuuxMeRpqMVXTKjAYPBk3CM3grTRdru3IIwurDJyQY6pgH5ngQcy%2BUB5tNddQoRiHB0PmLaHNzIZGUeODj4%2Bpso2mnIeE1j9qJ6zha9n0fljWCSLN7Xn9aZwCmpPP2QCAhqwsPLowAGF9CJGAFwVQ%2FHNMPUYuF6I50FuiaaABtAqK49Fxv5gz8UmOVP9JqN8HLynJEIokqBRdt2FIBaiT3cv%2Bxc5cq%2BzbpdS7NzKfWwjEoNUTs2Byk%2FUtbM%2BVzHJLmZv0F7C3gk&X-Amz-Signature=b411c820630504f61ef105ed69ece26bccf2ad187a95ce8e863c510cf17bf419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

