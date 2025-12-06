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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBWGIMO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmkf%2B1coBxGXcwh7%2FoSz17QwZqPMKEogENTUng3G3zqgIhANy9y7TQls6le6b2SZhPovfjsgm5t%2BZeFeLnDQqKlvE4Kv8DCH8QABoMNjM3NDIzMTgzODA1IgzOr7W0pbB7ZhUngrsq3AMXa9ofPnM%2BOp1lz5rGa8FLqRqkq0vTUK2J8yXPeuYeolj3IgfQc%2FzKScV9JRAr%2FPQod%2FS9FLiW%2BOd%2Fly%2B1l5Qo%2FYHWtslmucIZTHMXJln4BhmB7EMAFsf8h4bPrDcCdkkfQRhhIzTPOaPAToBMRMjuGYtXfBbYWICs5R2Az71EzODOcJM5sSZREll2wnyaBN8NwgELcN1CbjwC%2F1zvCUmDO8Oyrh%2FbUtRVZsxsFh0ctRZo%2BtkW9iP2%2BgoQ0rF89x%2B6hdcbW4z%2BotqQz1zbwWaLWxQWE7TBqJtH7P5UqrH8t7VXP3R2vCwtPUTlm0tnjF38kWvuIxlACpFlZBjG%2B7xOc3e9AEltMgusqsyVH2CA12d7tKF1ZXI%2FWt%2FhhZR1Jbpb8Oaa210MrkaNNlI8%2FiKb45l5ottMQHx53UUBeutlIA1ugECvYl2WnxcFZRuLpcIilqTWYvHlg4o77rnSM5yL%2F1IjQCMFKJ0Z%2Bv%2B4VIhlc6O1GoIh2%2Bfy4VwqCWpmetMgcH4Sa2r%2FnP3bZbURAx7pVRso0bgh20kwcb13sYIB4nHjAy%2Ban27utI7WAlUTtWXz5NR8fKTpPFf9LZJvotzgGDY4fGphQdXgHuHiH3jA3vtg1HPr35PVNl16hzDI09LJBjqkAfKEBBaO1afaLSDrgdnhHQpevKf7%2Fg4l1nL7Xf7HiWwk%2BpjNgjl3UjuHBg%2BMdVaPmwNgFTGZZFCA7oV6A0wvMJD0Sub%2BMkHLiz3nbsPtKeqjn%2Fydbr4huyGQR65MJIFQprka1NdjRylbfyz8QgqE8pKXuuqPojIXTUYPjRQfUVRzNfubTPCIaZXDngNOf2ae58u0witH8CcvKANLDzpwQbo2V9fJ&X-Amz-Signature=986241f7535cc0d20caadcd90331f88406cd569f6f9b02cb7e95e54e37c1c207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLO4VKDO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXEKzMUJApnkRBuuq1av5f5motgYrP8VqAFAuwOfOxHwIhAIfENWscApDnotOTl7toonqBKhbKUA%2F%2FrPUPR9zStfrjKv8DCH8QABoMNjM3NDIzMTgzODA1IgwzCccM6hbQhEfPylgq3APiu%2BrFb%2BNyqSulKS%2FHcWC6LK0uMfqPog5P6PBg9NxROH%2Fh05rhg6XybLWnJZGWMoZnqbGNoFHbiRhXrkLY9pDbh0Jfz3E1%2B%2BBinUZeyK68H07Oz7scwAalpfqKd%2FA36rJ1Yrp%2FmEv%2BdNJZa31V899cDkpkIELlIi1r%2FCzKiAQggluNl74%2Bwi%2BFkwBRo6TgpInigzcHk4bD8YAJ2165EM%2FeTX0xwtAOJa2D755qbkwI8A4AOmchGMDiZjN2Wj2v22INZ%2BXHQkHXy9YQN7mMzytsQzrOv5PdqdoeX1mXDi5tI%2FTnJGMJeknXLEzed8XlEGyB1OR5uv9XBsvQ5mB4y2c2myKiri%2BuvNPitcgyc97DFECsfoi2a7O8rMUpkQNCXKV9PDFLNgZ7MPu0MW3SF85psPm3e%2FXlacQBxrIw0hbdACQLadjOi1t%2F4DbWRAiOTLFEq0JLoKkLl2oU8P3ByY91yxMI0nsQmFVPRnmHJkstXvBw93oHiLbUfRTmKGhO4QPcczmiYx%2FhkWRBadjuMC8IrDNWY5ItrmaYXiRCd%2F96R78O3csxy7NCyqVuCENAg9wk1CANKexKPUXrDodoNK8qa7fz%2B1%2FUVK8oP8XijfCgpxtRbjWQ0jWhep7RDTDM09LJBjqkAfr4vxSU4a7XbPoQ2JEsVUV5aTMO%2BAaSpngQWa7TTHbj0GfxBxh0hDff70i1R%2BTabSNLYjiq14HX3McyaE5H0y5asbT1D28fkRNYAcx9gLcBqk5%2FqboW0hOOE8ITyWGXt3QFmf%2BVvc5UiLj8Ckgrdz83cN4Js0%2FPfdjiZH3hGjxI%2Blw9CnLHMHKtsSZWcTbKBh1tAh8rprWXnakvgRk5Gsxb4FDw&X-Amz-Signature=51c09b24f4ad79f197611249382e4207d1b00ddb72585b23f5110fc51ccc49c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

