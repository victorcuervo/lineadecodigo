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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CCVQ2BS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSe747q%2FOrhOBjSvumq52wZbbAJ6%2BrgTyxEuG3rFweOAiEAs6pul3dVGQxUCY8vMPWzNTNAJgJ261fC9YW9HVpJiu0q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIYFBZnh%2Bsqy9RBx7yrcA%2FKIvNVB9J87sSjQPg75V0XUKYJataVoL%2BepfBGNH21cI1eqxNpDx5TIHBYGn21PuogjzK5RVer846l6eGyNUY84mdvJOXAwZPxJ11eRNQBWA2GrLu1Zgr6moSxtc7sCtK9rM3Qz6AEIabLnCeWqsYhdgukIDEfvd6Yz8nAtobkd9%2BIEqb5GX5Gx3QbBbWGGZefvM%2F2pWPK6Q2OJOdjaDM%2BSGo9v8k24Hq6qY93KLeeYUG7rcPxy3e5RkLexhT%2Blfqn4yOhjdMJ%2FwypyUSfIycmfOWWVx3l%2BTQM%2B8S%2BpggeF%2FGNO58ban%2BcdI25xH8dbraCQ2XqnrpAUukglGqljyTaHjAvuJ8RL%2BP9u%2FdR4uGxylKFrRmn%2FaDMPuGsO3x9eqzdDHL5ateCTYSbowadC0VdnsT2c%2B9cdRkJY631P2oC%2BBRKjhzPR3OcUw6EnXSmpc%2FAKLXAywch5WbdahNFUq%2BGBwynRe58n0d7%2Fl1ZK9QWu%2FXW%2BPyIz5Yy0q%2Bof9D0YYxhkpxKP7efJsRV%2F%2F2y4Jad1%2FZCPE%2Bz6eTpHyTAqWmdZ3CkGsOR2u1IGTuj1UCXH2vOc0%2F2EHkJ2ayF5RZL5PBjL7hi8epD9v5Np9zY%2B07nLNc%2F%2BXDi9g1DUcOs0MJ7iy8kGOqUBnw0Zcz2PMtvqsXtRmQxwJmF72w933Z15DdNUyGjmEdldEh%2BMLs6qWTM8J6sdJNPEAy67UR%2BzQqZSnf1dn9Mh5oP6aelx8KJtmXEQ7KW%2F9lTZRbWYh%2FCXpy2DUoF%2Fxm44zVn0pYwf%2BMr1X3Hb8JCzU3nH4AW8vj3MGSg2O6PkArBX7leAfiyKTG0k9Ai2UORDhFB2h7H8kRUJqzS49ujqBY2opkQ1&X-Amz-Signature=5aeae8f460b643cd4557a58c4e67fac06e1ab38b36bf7896619e19379166b966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYM7M7WB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD21NOWykzbmbhEvPVgc5cEOzUR%2ByKuYfdr7RnrBjOPKwIgcoyr25TqGha%2FFtVcEkv3iaAEhYV1NKtJtVIomnttookq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNPFUVzWfHgJxzTs7SrcA2mh%2BTWmMqgc4xgNkZmpk%2B7gLAZChgd47bIybLFGEem7NnP65Y0%2BB%2BKqGbap48dIEmhMc9FJGp419XgeIIh2Qqjd%2BUqpDC%2B6%2B427wkwoZC0WlcrC4VOrUXv%2BjRCP9HD41MlvajO7ZDRyCBDqB8L2cd%2F5KfTZ027NaTubP6dm0SB5l0%2FW4kzBTawK%2BSLwZyEZKCQuIznQoxiIcctNFdP4%2FsDdCsU9jIj0OSaJcvxA%2BnrSvqcP3JVKngo1C%2F9Oi0YNUdxUi0jl83KFDHpDDU23GtSbC7O%2FzI7lQi%2FrzgQ3AXxb%2FF%2FoYssbk%2BGhUKSZdEXyXCClr1uinaqJSveA3kw%2Bwo7yDJJEPVNVLewoHT06FBFG9KewivHZ4cJ6bR334bY9ALR%2FVc0uEd1CbFGoDUJ5%2B38Z%2FeY04AX3tzHIsc8CkPyAn0F9EWUdQOqRfUAN7l1j6qgPWX0wks1%2BTh9U0c0KxCr1NGk48kvqxrcwFdcE46ddOHnxAz%2F3av1h03ZWCQWu83MwEPtjf%2Fl134Il3MDkWTM%2BlgDq8HfoJUl5Yi3R6IQVYEsCvJzNJ4f33gXwazezsqb1JozRQ3ok1hDTrGwphvRGFylh7NBIwN1QEmzPvzVDREFZzgCwfwt%2F5amVMIjQyskGOqUB6%2Bxv9MxakjblzBpgSvwIBwRhMT65EQgUk5e2DNSUtpwHGgb52XvTXdCUr8yAboKsZ6Ai4qXIyWKUVnfoEUbuhr9JQXNAz17C4ZGZq%2FGKPQWvu8ocupXVa8o8rHawn3g9yGMGyu64USFMSqfQt6yxRXMzmVeVuHOIoOOQrDOhM879QPFs0esVG9yidaJC8PqnMGtSGYjMM3tn90pT7%2Ba6zK8EsGH3&X-Amz-Signature=fe0fd5b1a4b727cec79c409e553f77f7565c9287a62f227e51e43de055bb5bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

