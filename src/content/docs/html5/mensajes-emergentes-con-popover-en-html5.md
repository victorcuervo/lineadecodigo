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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HSFA5UB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMJbUbYUiLBbPRYQIwbdtBAA2l4FYiXPT2pSFzGrGuVgIgGBjBLc6ElC2hFZ2bH3K%2Fm469xDcMhhRq5waqYbsk7W8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGUsq954H6I5EVXpKCrcA%2B1jD1ddhQZ%2FWh6iYd%2FHsFxJl1c19vhVpblxZyUWJMegz%2Bdi23VZu9zG%2BkTnoPkrUIJqpqZobVR4k1RjPslkej5%2BENw4d3DbVvPIvhAFH6C%2FpfpojxasDwTFspP2fm2b6UvDUz7zdjncqtnv6R86ege2NeSVvdsjZ6a%2BqP%2BSofynX1%2Bahfr1vQ8rPC13kIQnL59jXMWK4Ihu7OWJ1rvrDe7zoI12ogFq5I49uoXol2VTOQq%2BzG2gb8bPrx20CJ3bZDQUpZWZaBzD361xRiKwEfFln5q8%2BXR01MrbOJkyo1hQNkHTfl0%2BWMvOyQjaEO%2FUzcv6DOBpnDi4%2FGZyWZxyG3pTqmTPZemvucRnXUJTopnEFy0m4Srjir70HSN09z02Zfvj9Z%2FD3Fn0IrGI5nFWENxjZmjfmTfJoQwXSy3L5G3k%2B7M%2Fjn4%2FA4wXFgccEn4B3K0VrJxvJdsqFBXA85mZ%2FlDSg%2BSZ7nu%2BmgwP4ogmPHIfrn335UI2S6bdXqX5hyUvmbZoA6Qa1jM3Y5uNYE1E430%2FAmWl7JIRud%2FFQ2%2FDQq8gb2T3%2FGkJYIM7gIGcmGqUXguQEsSYqi1VTcQuFHfcO8Cymild%2FdMoROdZHM%2Fk16xk4ls9waIxjxgW3N4EMK7vy8kGOqUBhv5Pd%2Bf72wrArsnWEx2V6vBHZ2RmTfph8oL37av%2FTSMnEdaOxJXiDIXGBoWZKvIbf%2FyR9hiHcIaOJplJrGB1BZMINr0TpNgSSYoswPDFYIfITz%2BRpbSyIBijwxFvoCcAAqUjB2CH9KlR1%2FIFsdPMgMiCIwHDv%2FPUM7nK73hx%2Fz%2FW0%2BeSD%2B7lcUa%2BebPokII1%2FDhaZuRaexcesoyRl0jkOBCZvQv9&X-Amz-Signature=3cc758cf5883775efb782ba25be7538710d777887b11a872d88dd71cc9d8306f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWX4K5Y2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwqWIDy%2FdmfGfBksY5OFXYNb3Ll217%2FkqxD4T0FiOMkwIgPHdHumBRdeQFb9QQbJxZ9Jc2w60sf9Yusc32drwYG9Uq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGd9k8NWcXmTiRCHMSrcAynrcGnifNG4n3PpsMcj3HULeoZ5NNvQfsb6aWyz7VIbyPlRnTD3Zg3bRvaycOZ%2BpEB3pBpMwVknGtLeGV4RdpSh5CXJ2ohzIB0Gvs0CJpnJlDHV3jisnGtB4VZsW%2Bn522QSrCffoCQ%2FW7uzHD0srNsQteTjcUtbdv3kXU6OXwhQO7ghdA6PRjk9f%2BeioN6ClEDTN9WnAjs4ib%2BcSGeOlk94PylCqd%2F9XYWDWafRsjiNu4K9Eve%2FPK5f7czmP%2B%2Blbb%2BAN9eQl5tut8Qy2Z1fzOSZCnleUhm%2B5n4Hy3PziFL0nELu0Aavu63CeqWCE4ujJXHpZZwW%2BRkL37pORgeld5dtB2nfzT14oniTspkNuWnQGe1DaOAyLyyTniegBosApENhC%2FAgDzisKdMiWCh3O6GNVttVQfw0PhkpR7xYSMLsPTYAhjqTY69Zy5Z4DGOMH6XlqiGLK4NVUQH48%2FZC2pcC0cfpcxVIhyxn%2FJNXEJmLJrJ5ARi7Lb1RC3qKx1sPPaOylzQS1DO1KM%2BGi8gXcdHBL5HdiqmUTO22xox8a0v%2B%2Fw94xsFYMiZhbJTYEc%2FiPo2B0W9sN4mcb6SHPO003TFBWotbmNxKegPz8i%2BjpTMdt4l9WIT8TUnUP%2FxhMMLmy8kGOqUBrtiv2kNHykSr27FNVkzA4OLehqQYSk%2B0STdtTc0Wj%2FIg4WvcGJDNxZi%2Fu0fi2cKaBUmNWXL9LLEIhJ2c366MqjlLo%2BkM0p8HPV7VqjYHVVsbpaE6ZBVfVNk7sJqxLeJH%2FDTRuvYbsneLB84D5pUsqXMLGy9WAGAEIGnFvEOQj2SMd0BirrBGck83gTnutpzpP46Tol0cu0wJDJRNeYmS%2Fi31L6tx&X-Amz-Signature=9a5749959200b426ec4afbd041ba4aaaa4765f6e7cfaa7fa304e70b79654b68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

