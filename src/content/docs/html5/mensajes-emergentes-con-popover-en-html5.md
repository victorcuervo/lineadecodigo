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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUGVMKG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy865WdF%2F7rUJ3UNo2wkPaNJ44eno%2FBS7dm874sSLwoQIgGlGlgdq4GlStbmMn4LsigQqKTXASOmE7Inu0AdYu9TcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJa5%2FRb6S1EgnEcebCrcA6BWWVbL75fLcMwQ2P7KQuPR5MGiugHcQXqv%2BqCyid2uFxPaJexvHSk2nT0bAKpUQbHXBSF%2BbSBCz1XYng6QVcQcC9k7Ym6zsUUIZK9fOo%2FJxf2FZ6HoE3dm9%2Bohg2oj9zwaqrE9V%2B4Z6Cmm7twFK1q2KevZa6H5JrR1zF%2FlklNyIhtEvJ4tSmAxhKs6Bt%2BWXQ3tl8lOF8kO1bHCTCdCgJhyFbSFE8kvLEVW%2FXSbNK7oJ7giDXdlVGROsRJ1FPVzwKI7bbmUEVx%2BR9zLUjE3X20LmvfFHzYLdTRmx%2FfjD8RxwQ45oeStW%2F%2BwB9B8c2MkI0dZ20MqKm20e1vhjil4kV6bo4mdKXgXpBSmMHNTDFMj%2FL77r8yZcpCXAf0xYSeFItRGOualEmMBjoq8ATY3qCUpMNPpR%2FLRM72CCua0E7A1CrDT6rSIYQ%2B2DYLIFpTjpPiFc28GuLt6DMI7XHNMoWJCSZzkE3FMFwl8JdCR7tDps%2Fy%2BximuCWMnMI2bihToIkYWL4y50pm%2BA61aJEwaxhnKM%2B4tB2hlJRDV2ApldpF0RNYnBqE%2B4TlVQ9fp79zAtc0dmj1Cp5OnPCdPxmkp4pVnUO0V7rM53K6Vms0aLnR5gKv25dto9dJVRhbOMIKc1MkGOqUBGx0lGfcDRBxcHJbKETcNupgTTPmTo3hSXhuyTELOYEL4%2Bap%2Bru8ItZ9LggaS39mdhARseBPscrEplrsfspMavCNRi3vpSJH0QSs64zp3RKoJm8sn2nfCNiVb1oOHeEDnZqRZXFkZLDepgBTqr0Yg650%2BbXom7XmYGYi5dwq9Dv6fzEkND%2FdHJe6ruf4fScEGkk5U7Qthk3mrAhmoY1j870ql46ZE&X-Amz-Signature=92ce27cea9fdb843827fad829fa47094abdfeb17348fee7cdbbb86478c56cda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABBRLUS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrv0nPK4WdxtJs%2FVIKVXwjj0XJo3Q%2B9GA9Jcoh9ZbQFAIgY2EmakMXWivBeUoek0yecJ%2B%2BwDGZhmCZqqZl1Qt7elUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLklBKN%2BXipSOx0NFSrcAxk%2FY3teVd3oJ78haIzRfsfUWjJsiNMSv4fiIHBNKGowGaUNTnL%2FW4DVb337HP%2Fz3RyUCryWkAzG6MUh0533ftUiW82EAkAaGKbsz3L%2FGct7STTLjgEZNSwfbykEBAbF4hiAp8aBhkaMFJrvZv8O2MdJr1lBJYvlg3FysOLaTlQN3sgKegmz7uQg26fsIyl2T2Fkdc4heuSSucOKbOrECYEyaKISKIDXrrb14c4jWQQw6jis9W1gu7HQULsL1kb0hywEMHcHoO5GwDKmB%2FBVjOPn%2F%2FicWdoKfTewRiJH%2Fa8l0JMukH7f2HYfEDPtNANwnt%2BRwDjELl9SMc%2FbA4Jo00TA6bvJ1WWYo426aEjMSSX7v3GoMDTISx8%2BXtu3kcgoDgQKmBTsw3edXvA8%2FtzAbOwKTS6vPsmu46QPjMF1c3yCbIn2IZjdfJ8LaO7tDbtBvxq%2FUQsKSxdt%2F40TZNp%2FZ%2BaSkf7HACxNvu%2FJJLGttztDlnXw9tPYlDpYhliw3qa4IZxZpYmkYq0y69JlHdrCxx4kqj%2BfbaRaiR9yPL26kdOUZ3IM5IhPWtfPyyBj4TDz1JMHU0CDegp0IyLN9vPJ04XbW%2BkJ9jNy9pAwZveBceHcbk51brA%2BU%2BfOOFjSMOui1MkGOqUBrDfrOO%2FMkPQRyrIlFXXQLT8ysw3%2FfODyJ%2B5I20d7FT%2FP9cjDDiyPCdmvM5T6x5gFmy4WtStVdzBUgfiKAT%2BeC2%2B9uvMdWM08sfNUjhymWQbOTmsONa3vLLFxTDhEMCMxN5gdpeOEorXq589O3IFHc4tTBG8wzw3hq3gBA74p8g8xQRf%2FPbBz%2BKdiAZgUit%2BRpWOHqmIjdBwKt5VwGIUZDeMlEztg&X-Amz-Signature=d46da624234bef7c84977fef7db6f031453a369b45f956504e9bafbd8bad4bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

