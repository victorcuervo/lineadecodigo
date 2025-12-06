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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KCDCJQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTafPo8rwhUhisELl87LxKc7H1hlunLbf9OTSx1pMBzQIgZL71SCPv2y3hFnx2Aogg%2FgBmAOOj%2B9krtp3oJlqtC0Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDG8AgHkbhqQMXvjPiSrcA%2BmdyDyU5KYZ9ig647GfJxYGvy%2BQ9j6yVe87cf6OzcQsKwKKchY9Utt7Jonqz8g64rBuF3rIijgp52g3ie1ASIdGO3eRXnSX%2FUIwIsiDy9lV%2BSeh10hGfqBRlRYY%2BUIE%2B0jsVQqmBMT7KZHWSdBbwcrtNOLXjqnPP6D4VrC7PGUyYwKAo5%2F63AtxpctNZu3uq5XmhUgoVYRPv2x3RvN6kFZ3kBIEPYfsOMmp%2Btp40J7jYf6jnJrZfteBwmV6rxWxgemfkYJ1NKP0kdPdGoB%2BGsCdfKK6TrK%2Ban5sz4pJdzsq5FJhF%2FeIJsKui1veIyy9uc8EPT4qsPOJl%2BZ8%2BIBXjydXD%2FiHeVN8RbFytNhU2lbwedJFHPTmBHPqS2YajSrgX9xjQ9LQpOVP%2F2E7Hoz5brDPxu9VzIee4A88F%2BAT%2BZxHHPcNP9IspshTcXS7UqSCjppjd0rpuZ9kntyUwB2xMm5XCmJQurLutj7Qi6IPDOWsvxxa5OvW49pG3k%2Bd3EZz2Nm0RMmx3JV32zxUaQ8Q3dMR1DkXzEdi3QOBsxyzkTomO5v%2F9gTPm0oICkH%2FkVrXBXrOIZzBv%2BL8CgYn7o4mxG%2F1aMlEgbA015YGWrN6jhri6GZYUtzZG8LzbCAaMPuez8kGOqUB6NmrcgsWxn780MAtbcSZKxLr2xnlpMGC3EVXvm%2BKjgf3WVw4ZIBbfdrRDPQ1BReKIZP83Kbc7K9O77txgnH8M680G6H3XuNKR12dL7t5c9oR3iNIKiv%2BLcU1x25P6fC%2FAiIP79wwcpyijbkTOju7Tb%2BUAQqnJkPni4KlT4nI7yfZ95ncrGxt2CfFYYf2CewOn3raGQwQoJSGpE%2BoNnWm%2BOw3gOu6&X-Amz-Signature=6e4455953fa1b7ef7984c0098ec61575f339b6b29eaf106553c10bc8d6aa8d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWM645KR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGeLZdP8dyd%2BaKoN6oPP8AQQLPja2h0fBuPIapvnMh0AiEAh%2F98t0Eocmbi3YrEcY7xfeX39SKe3Qe%2FHcUuNZj3wNoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBzQyxLzDGonMTb14ircA8Jl%2BjwnB%2BsAfAJUVTSkdQEGzciWS%2BjAmb%2BEUImPsT5ksL4q49G0MVlEbVf564pvezazxa4BnrTUAcU5%2ByGFLLnzDAiy5kdanzRvTeztnmf4yYVxPo%2BZBcXHipx2kY4hEFyyzaMII44vC7d697pQbi2sZKHPHlvo9VX255TNn%2BHUui7OIp2XWw3PKk%2FDBmdAUXBAOQmyBzCTZwXF9NeQ%2BHOfPK%2BXNK76sMNcuqaW5vR9r24L1LnoAu9PR1xacJDF8HWFszX85ohGvZ5wzmg4JnevrLDAwSfMd7cPvrUUy%2F0UaWYeUvWDTgjSfut2mT7Mu85xE%2BSIe3MSeAj%2Fs6ygocKTb5P%2BAsyBd4BLHsdG1k%2FLb6t8jjJ1IZXH%2BwIcRinDjwzXTChcstQ%2BbsK9ZvIz2Re5t4Xrm8qlWU70Tu0S6ZtWOo6UvXV8MYI5XHWbm2zcXFtGOGEyyFOnHpcLG8LStjMDmGKAHWHH68Q5HmsLM2ySoksdZCJkRbecIUdfwu7Yp1hz5WDzhhX8JRfz3N67eXk1J6UPonV%2FvFwnlcMAsdt97204gfyAGzTtwuzWQHrSf4IFqhNR0Hv%2BGGP927xeFenZERJlGuhg4gL%2BGd%2BbrgML3GLNK90Jqu2aBTKHMMeez8kGOqUBRpHLxThKa6Be2JRXl9c3wzVRayAFQVE13vRvKYS8w5hFSKqgwusoT7JRuTiYqenKxcR7uDAsqjYpG%2FMbYEy4MH4oL0ZPNQe9s9uSo142wgg1SmFsGouls4cwgT9VZ6xxE%2BD5daA0YnwR7%2BeWs%2FrPfHdOnMDQcZvQfXBlw34CjO4AaktdYj8hbLbWsZX67wjAedWIKWicq2Ahj2xmyXhvkvLZbG7z&X-Amz-Signature=ac49d0310d3ba29770962ddc9b3c89b3591ed7a977e9115e1fc6bb9407c47fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

