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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIPPSUAI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNW66LyGPDNsM10xVr7bkPAg1BhXHCMBvt9wG9uc1T4AiEA1UwJTnQzL62oXr7jQx7zjErMmVGNSH99Ywc2miSDLLUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNjQw42knWoVKZbCfircAxhksWAfrEyKstX0xSDHSu5zKRxkF8n%2F9jtbA44toH3oNfP%2BgPOfO9CW8RMaCWGDnRwihoq77fWJO6O6mOpvYJ%2BGN3elp0%2F%2FTAVXNwNZJ%2BvyUq7l7ZwW9uwyFPeMPx8Ai4EWToAnClZYUbwsyD4WTV09RZLFcKrkJEh6EWmvcXv4YFQuhcSo3WTWt1%2FJy7heIEbBEnF4cRweehQB5P1ny3WyToALf1uqVB2Uy51XqtYuchNOumFTx%2BKMI8nhv8piA%2BuhGnLoyFCdgSj%2BC60RrlH6aaw%2B6xYP%2FmV64bWd3LFtKPo%2BpbOi6Yijr1MZCfuUjOUduUZ5z28GjhzLqG2ednhyk9ArAtqaNldQlFh4YQOSdIVQlPZSAmMOKm6Ac22Y4SA5wqtESdYfSIgPzD%2BCGVRhWivp4Po%2BaKB6GgnKYqmlRJP9ZxKi%2Fkoua9J4OjUvn8z%2FQWsDttD0Ib02zQLmKUDyrpfB5qoneLji6EMsUltmuVB%2FA1HPml1h6vPfsA12yfzlyESLmc4qV6GTNbeFzC3ATGxNP4IKBcq0j%2Fkhu10%2BFPAXkrChbjHs9YVSZMcEhq2niKnkeEstJhWOvv5TRgRWE4bdHR%2FoXFvzgPFqXsPJd7dX7KJGaujGCWKZMIX9zskGOqUBLMi0j0z5fvpmeCOPz0Az%2FUyERJy0OQL9FZM7Gw%2FSjHS0pxBvQcDcJhSgpOu9foKnEGPTLLE474ATz9G5JvDVrJozaoDae45MXoMjXT8al4%2For7U3E6B4GkNn5NWFav6NeOebAhJIXEXeUh8ofnktTygF5qhCf%2BqaiI6h6Mk6OKSO8mqkqAVXVJo4k7lX7%2F9UVXARnhtKVzNcZVaNZuUTGqN%2Fo6gW&X-Amz-Signature=2f6f9327f5639cb022c121e41248439f6792ebb4b8fa0b59b95d60289a737f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EX53FL6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSY9gcIvzDq3tmksU7fa2aA%2BPcr7CRmTKbZ6l2moQAfAIhAMi8hX7GwSZ6BhGCVkhT7D8Sb0NgNAY9uIBY0zQJqhRIKv8DCG8QABoMNjM3NDIzMTgzODA1IgwM%2FuWO2CcXHtgJx2Iq3APQCxId89ggEIu8gcdk8xdeQXPPtpIaEtyApVFZ9Q1NTlcHKe9GyaG70AStoSsM3QBz4euFKGffJb2fZ9huI6tsC4JiRoYvIGtsbzoy%2Fzj9gZhhN6%2F89seUp1qUGxX9SoYdKH6Kr5s31Dk7xCjJ3luMHngZpgYxc9%2F8L9zvwJEKZEfMhGZEvSM3ZXvIMXjN1EXZYKaQNLcRswdBPQjMEyOf%2BjWaGqASNKbfzOxmXu4ri43%2Fr8EC3B7lPyC4UXaaBm28BXJ6G6pTaZkVHnGzADyWZia%2Bbic6K4yzvWNqe9FPRZaWbCekkDum0N1DlcyrkiZFgcTKdgzAxfuFBVVZPbwM5PDUQjiZvY56WasuAVawyM3fUVU%2BaIo%2BL0Nwc6ftUtn6A5PgCU8XExKGOfgkxBuPRJSfTAL2b6yqQ7OIsMPk3Pri5IsZ%2BP3kIa3Zj08OsGaVN5pbxS9CVdY%2B0pSFoBVpScBsFQNS3pXdSYS7f%2Bpzodq%2FGHxYtATdyyY1YcC95hO1wEZO3mmx9DB6OI83DoQwYbbB1wbVAzN0S11lV3qnpwXDN80kuqzJhYX2p7K9h98pqqd8jplW8RxIzp%2Bdky0FRDsONJYi7oB2JnI%2BBUHDAztNH1BVMS0fM5EotzCo%2Fc7JBjqkAepaUhiYCB0QOxZBpgkolm7SPx7X64hfmO1g%2FerOZZ8kyicPOwiFKtZEMvX0DFMr1NrAreA5FkDe2I0HULta84JS%2FeLNepnr0nAmZoW94r0Rx2B7DwQcHSvlnj9lQon%2BHf4imdgXvZi2nP%2FBfM3hBA8jtf5kz28YVA29JCK%2FR75YhFJHNAbrnf3ExsJZ3yEJKflOZ3IzLLAKwxgqtGmnNy00Yqxl&X-Amz-Signature=3a328bf3b2a89af876092fc4c51973a6ac31027896c5fc24185bdb06f61a74b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

