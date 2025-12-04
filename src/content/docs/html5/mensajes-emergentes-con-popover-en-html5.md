---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTELIZIF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIC6WO3nNsA%2FjeLW9EplwV%2Fi%2Fm5NZY8UQ5ki2RGp%2BJt%2FfAiB5MlDeznA5bs58mDrC478txaHJJTHz0Oq9JBcwhwHP5ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMt4KJ2wcZ6mdBv%2BL1KtwD7pBiG84fnzr4CmnMaGf6U01deuamtTSOobdWGrDJ539JcEfHhsT%2BHfhCZOx6G0gUe2M%2BcJW9%2BIvYFyjJqtL4raaAkJ5sIj%2FqBJwFBvieyViLHfyxNT%2BW5k2gCo4gio%2FyV3jgbH2ptSaumqoY4OyiSlrqqM6C61un27kIHlTW7SlhFUCXA8F%2FxfVFu2y8FXHyKzVLNQRUdtw0%2F5nhG5pwAKWCU22EA%2BgvFpRinpieIA%2Bgvn%2BXnyiMMNO0D143aOWgpufb2FuX2HQbo0Dj3B6w0iitSd3OfO1s5cBBGSGbwYKFtkqc9Ly2WNpITtc5jTR8nzNzac1xsp7uCOx2wIaaxHc5qqg6m11XjqBeNI6y8wy%2Bl3IvfOrkxQBP297xvU4pqA9%2BkynwTv5FPTRM6MDbAlO%2F%2FtwSLqtROdCK3AN4FqQFJYp4Fw8l0T8aOM3qWm4Zfg1i1d2zDcAp9%2FCZfkAlfZwG34O1IQgFoAK9FTgtAWHw0BEnkuj4sW5horXmvrgt9DbWzCzGKXG3u2LbWCGB8aXb5aoxqRdLWxco28ZeCCizDb7YgQkG%2BqAstAzT4hpi8qVRjgSFh7FTH4vi8LNISr4ChP5IjQn%2F6Po1QLc3hrXARz9plZDBbhpkGcswxr%2FGyQY6pgEOKzuOq2DfEozaGXYimCBpO24EZFVaaRefy7osmBIIcJ%2BlOTW3Z1cTAy6FT0Kp%2BWNY6ukwQ%2FHIu%2B0rmCDu22jiUt7pfYRYMtsTS8DD%2B7QS7ReE7qkZ9SBCOAPYQ8crKCG05c1mw%2BE7BgRi7qKyDfJ4n4frRXNKzrjb7rOvC2UsG2KVVFysNEn7ObnEY%2FQLHjqHWW2ygVdw9339EhN42LNW5xd%2BXm%2Bq&X-Amz-Signature=b3d6977031ad64f2a4029afab020573914eca73722587b01f754fb9edc31dc3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI4XDB36%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIGlkNOuyB69BySVOudlErsDx6irtQ5InvfGnHr4H2vFnAiAzkO1JxZJJD8TpKdIT%2BOHG4go91Mt5LNXeZ%2ByIHo2YPSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMkELYPX3Rvh4gLnzGKtwDGOZbSAvhPEW%2Fraw13M0RBGZsSQsty1mVkL7XDZbtjIzHEoMg%2F3U0GHZ3Iwv31l45CRXhP8hxE6kBI9CwF91dEzOaCSWqcj6PHrIunIECB4VslEyfTWMyY5ge1%2BWoP1rNOe7gzIla2No79mCsQjcV%2F0ufDlgCCOTS9XPHGSYt49OpUJ4LncMW1Xvf39LgDAcbMhOWtdEfT6uwJjqC0F8LJjKjfQv%2F5XJsDQI0phMLPngQ1ekq55J3ghx%2FP7%2Bs8C0xnGq28zFJLUaK5WgM3UgDDWeBSj0LdTlUKXMLJSUDPGlHFdGliA9Yb5pNzJQcBS%2BQVCfSKZmT9B2lXjfJ62Pi5AWND%2BGRMy15HkscU%2FdFCVezR3gwEN%2BHIwfOefCuLaJ1ueROQKShMyfvQQQYZBPQNOWzj787OTJcYaIFExWlGskmBpujIOlpBDdZUtJ%2FRxLBs5uv0G6923Q29Ok0aozJwR2APaWEp6%2F5oA006fWug2k6E%2Fwlmx4JU8RGi3y%2FUIsTpwrgkDHkrpdRpxmwb94WUzkwpbeP4l%2F%2F3Hwg3knCU8S9uhlDSlsJWOjBGhxq9ibgincqAdWxf0kULStB66JLh1gKGnuo0XfGpbKX9XKXpDKAUKPUEBgGc5Kebjgwr77GyQY6pgHRfEoVBlIU%2FMTlZwN25ZSpq8foMAfT%2BiAv9UBHKhwo9mXRCSECjEwdETx099DeVnBTafHT8Jpj5z%2B5pr9%2F6Rh7SOdlOkKrLV7fYowtAg3tK6%2F88CMVI3WhZQWlk%2F8SGBOshLiyngUZvHLbaVjbXjdPXO5ukX080qIwci5I5TLr3tlqLMunQ17mSKdHnd3GW5ZRhHc6MAu0%2FYgKh%2Bm6%2BA9PQERWKNSh&X-Amz-Signature=f5310634087086ab89087945d19fbf37a0df8500832045fac3fb46a178686ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

