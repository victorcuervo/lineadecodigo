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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPP7OK2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAq5ykwHuqo0W65VOHFMFJJvJRnZxWIFXJQI2uqbOs3cAiAGT5pR4gyO80YTA7Q793BLL%2FSkYiPUtfc0LlT8i%2FBKZSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Ye8h9QXSE6nvuS2KtwDnLo%2FqGT67CUXldQiJaUdM%2BjJQKTDx3lpco3CdhT%2BCQbneA%2Fmz%2FUjKu6vQBzUQNG8GHGBXO1%2BhFBKwAQS84nBBjGMI9647czRAMCH5J7V5WMl6bi5BxZJRtUYXkPZEZtw%2B15rN5Ug8QxmzCIfycWS7QqcVNVpsOsLdfPjAYNbDGgyOqRkEV8PhUje0qpWhC6G3LgFKJf9B5qjYfSqlvFbsEXvgnfGVEqCHBatHgHcUyiT5fK2n3adSPvHxa%2FfBk56Ft5YmJqd1aOeRVWgWDrL7QiB%2BHQ5GnZLVPTvkKw73nYmFgbiD4TGxSDaQDSC3CrxuuN%2Fnp6NBM5V%2BGWOtehcjUGuK%2B7u8p3l89tc6aFWRZrLwKoZcoanlRq2OE6IMipO0uCFweq8tcvFowJ7v6moS1vbG1xV2z55YgXP1YJ3SejSUx21dSGnuN9RQbmPf1bHx7Jmz7RUeYhqvOmJSrEsAkC%2FJr%2FXxyA7xPfAhxg%2BBFCDLeUmht1%2FduALdzkimgz80PuKCPfEY0Q%2FntppbI9VcRM6WjmsNB6YjFvImipdsXkPPJiW3EZt4GSENqH%2BdnX4Xa7nnXD50Zn%2BerFnW77XgxTxYW%2Bh4kZyxJUNto0EGkJ6oD3%2B5LlqCxlBFzww%2FJnVyQY6pgHEenwazgSJbdgq0rD6n4%2BDdEF2ags5IiG3S53fRnfJfor0EzsZsLvDo%2FYVmo7GPqVAKduRmrF1zUyXpTqZQvrq5fud%2Bt72bSU3EJ9IxtAVOSKLRiFLirysw5h35rUNqloCR3m6rP%2F3uKCYZxNCiYQsKB6Eif288hqKiW9G6Oysj%2BvufZGpDtGa8kETEZGYpMi0bRTXhzJBzovEXrvE2PV4f4zOEZuv&X-Amz-Signature=648f7ef878b28eb5e661280e5ef9cca14dfa5c2084c664cbb94ed093714941fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IIHXAEG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWJ1oo%2F8XYZjylehdUkaXqDmE%2BvylLEEos6BBWZwSgvwIhAPeCG2KCBIwPl2U11P08KmNQ2RWx7gcD33XecSPHsgRpKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzs0RS4WcFh%2FI75e6oq3APin82sQqOZOEaosZq1jcxmABeg%2B9fSGgkD%2BCnhhHm7yEQHlmRVrIS3WRj0sWsRrfr8E6tejiplSm984k7TJETqOLE04dx1ln%2BOuF%2Bguxg%2Fp%2FnnNVVtweVHpwtCKru1XXTh0fkS9tV9Jg08SII0RhoEZxV5NFjq%2FH24AsCEk4WJlFV%2F4kW0GpdZl%2Bf6ZI2oIYKsYEpKcVBBDIsxXpaG6%2FpyFeiD4TLlzOJ%2BuOEGAqILCyOq%2F1%2F9Gm2FuEuE58ELAmn6MSnvxCNKfarAHyfVKivvCW4Kw6FaH23sCksbUSLIVEAtkgsTD0l4LZrTjtOwrtzTZfmhb4fGii155kEZfaVXn6gNPd2Rd98MieXMUcvFXJIO3zMZ2gaI9mIZqCfuLocYza3RvABDXhDDs8ySY0ZwjZ%2FFkxVRnYLNcWvztvDx7cwkxEoy3YPcdSTUKDkNT4hPMP7%2F4lSanMJoC2ls5XhPKx0HY0G%2BVmy7KYS1p3zJgO6hrepv%2FKdotGAoNmyj4524oTcpDMJLR7EYH6Lx4EfZASx1HlzYxu15G5hDvpey78sJrE4uC6O8S3AhDuSvKbkFogiq37%2FPylGynD0PO%2BXC45ZbOjsFZom8crvg4IqzWYlopfbYleDCPzlU9TD8mdXJBjqkAfQAZHUHV%2FVsVw9YwsUxZNpBRxw6D8wyEmBz0zbBF4OslEGxGHuZkESuZlgilz6w1Kqu29OzfwTX2ZujqnWN4s5JoOC7098G1dxEUsfQkDlUqDosKUaij0fZAvXtS17JTK%2F6Bz9jwgNpRl9xC7wgN4VYonk1coXt3GimizaeEaZjSqbK1ttAengX%2FbkBGSTCHFDolAqX3VIhA6Y1%2FIGyhWPICjy6&X-Amz-Signature=512e8f93a76ae02c78f0d7a2866dd62a2d81cbbf64e82f25a584a4a82ba9ae91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

