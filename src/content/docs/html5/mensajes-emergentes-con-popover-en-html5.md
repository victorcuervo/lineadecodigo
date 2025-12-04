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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJUDE4KT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFjfZ%2F195mZa4b33Dcd5DCjmNiYxEP4v8aYQYlH20reKAiEAoWEGT3mT2mDZYxSF5HXoCWoWeZdDE2dP6Dx%2FirmOhVkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHHKByX9Ov7f8ZhO7CrcA0UKpXgc2lvfYZiioPtU0RYz8Jsdpj%2BxEPPL2ejhm72KA1MTBL6XPK0BmRRm5vWmRd7KHX5Fz9ljAFJS1NqiCmR2aMP%2FH72HyZcnSKmQ7nHn3j3pryL0UuktwLJSjOPb5NthebOdp%2FqCX5otlL2YmJIDHcPPkAuytGeO8d23g99BTaV3R6IVXqfRUYvTUnVj3SZ41ujoIu6dB0Wxvdgle4EqoqSSmu7LFZrhU88btyp4AuDcv77EMnLRHfo5NcGQt2VCWte0A7fj5rwaJL4s1%2FeVIUbOBxvv5oQV6iJ9f3RzKrIwhpy1dUSHJ0XZxc7rY3kPyfI7JgT%2FYiqk7Zim%2FGppj9DCSsilfetejQ1phaAXzFgnnKgUf4xK2ppxHgoZJP9%2FPanMbdtNjD1BZjnly950Ho58zONYHRbp4o5gggdJoWYbooNqhBHSGflpm%2F60wsJg856LY2o25BdQy9fk1Uj8ITDGkfjAw%2BSziPEtfm1pn6w95nQmIpfF81kC3qiJ8RRlJgWhngX0iybzbFpa4hAXWZfWFVmvQ9KYvcv76X0H4X40u3ZdlYa1nMVTkJJFMVsPNKRBbytEtZc%2BCHs50hi3BB4BD%2Fi3DPvyLCOwsHM3NUJvE6XdffD1WKhKMOSuxMkGOqUBAq2WeIj1%2BZye5sKwHHllgdXRm33GVxvMJ9BKl9X0dTrmXf9nAjNG5hknx9CUHoTvy6uKuUDVlEAo86wPv5VNSbCUuZW1HM3MZZwNtuE37ZQFXhe17ic1%2B33zvDFvlu9OVoJC%2F6G523pTizBt2qn7MOX8kBqMH1uqGRUxPXYOLzLoTyluSuYKbPO0c4BHQms2qn34QwOTARBR7Dbe%2BdYwG1ZAHgP4&X-Amz-Signature=af220b66694dee4847565818d823e6670c72a6c300fcffeb4b542bb4767bbef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QITP7ZQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDYcS2EBFMHLvppncNbu5JVN9rD9sVruO1IX%2FEdmr8QoQIgZEfwgobxvBHX3LJdzNi%2BRXPDiTIcQ%2B5s7IDbSmHCzKwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDK3OcWW8RUkcVhkYDSrcA9nqC6T8aNqZpAUhufb5j3tLJVYfqpapEBR29kbPARQQl9%2BigyeRavTiTM4T5NtHPKDLbBlmEfPu4Yd2iMIdh3BCg2AbWDf8WcvowVeTN%2FO48J5h%2BeS%2B4iGylPO3emAkHfusvZAw%2BGGGCSUn8guIOZzRjKSNliARvl7Zo3di1gxRCb%2FuLthFzk%2Fvuq7DZOdFDMRN5yhHvuucAYgHFajccFjGJ87xQ6hqsjjqTHLAdiw2HzkhAUVpLW7TYel7%2FUJu%2Ffe4YGw59MAycBRAEbKHP%2Fpix22OaSiLKAAWig%2FlS9fg3GmbSim9HPZIcUVJAgIJk9yvPqaDfBL5CvjahugV449t7gws6C064orU7pnKHYCZKJNepHqgHu2rOtk%2BeV4hOVwmyNh8dcH3rTWU%2BeEfdKQ59guYxapvtoUfYIoXsX1RPPvL6ZhP6U6y8xtrhSkKI1K0drEDNDQMLKyVBBe3MZu%2B0zYEYCkPs44vtogl1DQRDRfdxdkXhyODW5eNntzeu8ZKNCJb93RCpuyO6tir4yfR0%2FgbRAupp3Xpqj9ZvpMjnF7cGY5C1u4gN6kY%2Bsc545Moc1%2Fc2GzVDetjOK2i0VePg%2FuE61nx91X8nYzn0SFT%2BJMN8O%2FdyYa%2F40jeMMOwxMkGOqUBa4CahLDMKunEYV3fM5X8%2FeLy29XJsNStTnagBFJS%2BoZvBakUdJM7oI4qS%2B3Jrwe7h6lQbdqZekrBZwpyXAE1XQXjqwr96oiUlD9rctTyNDqoQ3znPYs7r7Yz%2FtLiF6I5%2FA6bbgbrj3AQd7MjV7S4yp1yW%2FiqB3zuBCJUprl9xFUoOS0ItQ%2B%2FYvbz7BrM2oNeG3nsNqcXuPC1UNwDzZ%2FNWVak02sD&X-Amz-Signature=bd2174257affc04bc03ab76b401a2b430a7cf06534a93ab5c5c350e160c4fbe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

