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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFVSEI3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8qI%2FH5XD5cipWYiJ9WCvkunbX12lFtHm8GIhxDnmFqAiAztwhVlIiQX4qxMM30kJPIw6G0q6e%2B5qBOGJVJ%2FjJ3aiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJA1ELXtUANyh5Q4xKtwDONd%2FVg21k01ej%2FdvhRyHe%2FJ%2B6Oq1FV47BYdi69Jax%2FpZ2SvKN4Eo%2BARb4PdOo6L%2BVki393IhZVGKfasew6QDFCnzXyW90tfLNIrXw4bzugluR3tBQEztGT00X%2FoFJMEIkoHU1kCl0TyzjUUt9Ll3IfPJzi3SJG%2FwVsKNrJzMRIW1JyYjdzneb6elSGeLDyVWWQn1pLB8BThm3j8WXO38s09BQ2oyzWnpFgXLiPPMjpzQ5%2B6AdulPaJ9O%2B5dD2fezbwT3esmZ0xzaa5hfrlEyRO0pATxc48w27YBdyKVPuBvClXEvF5PXQRrvgOKj2eBmv0gTQSJ2eXI%2F1g%2FQcqsh2HBvdUdav0W2e%2F0t4Dw7b%2Bi7u7bOigCrHCvwYQm7bCFq9672PGmXwU1Ijd9w2dzlYvsJAASMWNPrAAiTB%2B6OgXMQUgddwxxvwwG2gXusvOcSKhDmquk48S4Am4U8o7YaPZQ7amb5fDs9u0uRSKABOft9uRvuwloOhWo5Lb8HOeCMy0KIW6lCMgTyBhdiDmlGRFYu53zPgyMlCpNOvY9jf%2FuukPT4DkeqJUnjQjQm%2Flh1Wc2dJvyJ7IAMMYcrWhHFoPvel2ujZNNzcZRM3VTXPp75R5Siyj7JbFEtWmUwmpnVyQY6pgFDrvrYiY3EC2cXpMRU7ZxJN%2BPrs9hWlLHoMAhyJ%2F3D5vRiAsIaNWJYaZ5Bq4zOWw%2FggLo0TaHA0nAHo4Vf065O5eHTB7bGh3AJL45PApyafI3%2Fr1QkeBEDUsFU82UpIOSqWRuO0sCiuBR%2BFz%2B6qR8PwdKgeTGFgFxOUOFU7vW7gfj1YdGcWlWfnR6xn5NvKjGNQXPtuOivcCI%2B9yySiRFO%2FzRA8bZE&X-Amz-Signature=fbf541b97b4e36b1c0c7c9a48a2736047d29505b5f944a687af21093f4f786d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWVW5R5G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1FHPjwtPRldO6RRshPWccajUkEvFmPZsKJU7ooOmioQIgJ2G05ILswTj5ek8eZknK3GIJaDL%2F9jKvn31tbiljGqIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4F1jr8siy8JXa%2FLircAz7hi2VMulkX3bVtgvcxEcO2uet3J6WvG%2Fd9iRj8XTvr1fBflXPUMHTraY1toO%2FM67V7V2BUigW4oVLEBRI8aW7w4EbkRvMn78%2FM30RsiYz2oJ8rbqeLuqZqxyM5kFaLVofKXuCtOFJ8CDARQpBeMaiVUVpEgGQ3zslulO2vjknwtC9dTFL3m25DEQJBIpQz4fIY8wtaHVenpv8FLKshZyl24HxvvORGKOpHUDXLNjMrW0RCHoE5YRg06enSVaHwFsDOB6m8U2rGdUrE9yDXbEcHO%2FwWu7PzhQ0r%2BhufJ5yTmXW43DrfBRl%2Fg27qEs8F%2BAouSRTjL%2B7U%2FxrvrJnSxkycsQ2e16ZLZ4V6rEWPtT7saZ3oVBYmb0AwfSZjzWbZ0xeF6u6x%2FXBqIT2hHsRbGuRgHt5%2F45LTXOb%2FqukvtKLeX%2FN%2BRYITZpxvnaLHjvV70h67POO9R4%2FbO%2F7f%2BTTyO4xjSh8dqftQNMNWO2ycSzjozbKGPM%2B4f15J6nlRT%2Bwg6UHLx2x0%2F3WxGkLRyttJ2tw0HvVGZH2d7JpZU4nESFd7niX1rzKADbCTWFEn%2F4ZucCzC4ynQusxyQKrNNpHMFEUkxGybWhCLU1N6%2FgVE%2BKQZjYigt4I%2FGyuUto36ML6a1ckGOqUBrmo9W%2BhM6btyoy6SFchPhvAOqp22hbyeIVj7RvHTKa2Z7IyJZzMEctlJth18cmU8%2FmysJ%2BKGt0k1EijKxCkLMLNvJSEi0R1LD3%2FOV3s70u5FiJyFtufzEWZFisa5VdYPZqVSxsGR3%2BQwY8a%2FiMuhDqiz4Pc4omrlxXiiSzyPjjh%2FNVVRzO6NTw4TMDYCObK1j5PFK1%2FLD0tY%2FjNG6tbOrsauEZ6t&X-Amz-Signature=db50c525a892cd6b292669b2c6a2aaaed4ac1d8881acd8abc897f5d4cc6ab79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

