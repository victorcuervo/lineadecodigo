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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UUJ4RSV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElW6FwCaYkAYD%2FTsW%2FscEGX1BNXP7GJy7B5yTouOhzOAiEAuizSJmeqKhj11QFNiRoi4BXWKQ2Vo8FOzckcvjOjLo8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLIRbAGa4Yo5gklS1yrcA4zFTbyfmagetJLbkLY0aVNAQxQZy8M38x3jJFo0x04Y4B9%2ByoYyOL7FgLnmG655QQPoyo28KmnHxsMD9qNJqQQ%2BvZ0WOrXSU%2BD3ya%2B7fZ1h17OgAbS3Wsbj0kr5l%2FFdddNWzkfIKttBZk6%2BuPCmXxjBHYKDDYmy1Sok%2BQgVZzDp3UQ9bL3boWHOS5AxoIXMBflt6udUVsou9wU34UoIwWP1KYf%2FTobWIqwJ5A2jeHizmTTig5m9V1NH5atFnKLIlee9UJIdOgkk6QuvhA9Lme6lsBgXRwYDoOZKmJWx64uTaphNZMFWwS3EfLkY96MH1b649TmD6XpHHUoz0NuJBpbZF%2FaOsDHu80PJrt8P7wDH%2Feq9%2FmC27zzydhLLKlluAmQHYB3gz0D9eyHB3zlpoOD897zqz%2F0SUmR3Xic1LsxWOn0s91NhOdUF%2Bvz8sBgYdtadnj7ux2AFUkasCUqzOqmFd5N6ErQ5LhwxnTeRfjgAmFe8tjJ9tq%2Ff2jOdPT491fhN3gX6PJmt9zhNHZYfLFQHtSrlmaai25jG5tKpGWjBfA%2F5hJPnolGdSbuTa9Zpe4Cqf5fse%2BjgD9g3l%2F2PYiA0a%2Bs4SThgM5BEoT9b1fr3oIr0OhZG4SWmfwUwMLOMyMkGOqUBsewf7PXCq8eitCcNnJEd4nbW6r2mn9OfaGjbla9SD780NaMQv4NSpv%2F2%2BsqGBtbxiEQjqfd51O7D%2FvWUKfLE5bKm5oA0ixiNuij%2BGokidQZT41OJXsDQiCjF98p%2F9L7OnIWYmP3ymktcDR76iCOUh6379vszkA5xgjewzwEnXgwCe3knNWxk2UBFekrXn4slQCS%2BTjTqpAnURMc0J3PteP1RyWQb&X-Amz-Signature=c0fb0eabe54d1ba20f0e12422524d58596ea6c0fb7e05ad6972e63513399e05b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4U3KS2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcp3HHgmssMtYM1PgjV%2BW8anMXI0oqsISjrpyqYB6b2QIgUwll8pikp8%2Fn81cGcuo0oEXqjsYErdZS1%2FUoBla7mgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJyv7LNS8riXV40W5yrcA603HeDYGZ872ZuHtch8WYEXafcF5AS6cqdIrXD0Wn8FKsojrEHdhTIHW8cVPMTdC3kOj8OsjipRb9IEXq5aiA5SxdxfeC8u9B89nEhzLNfh%2B5%2Feaa1MUzEBN2VnuOQl%2Fyf3YlgOSYrUTuxvg02%2BZLP9fN8P86T2J1aIIezJEoalYf4avTBwpI6R16KVcoYWoOOFgo6Ad2boi6Xvsxmm7Q62jp2r%2B%2FsiSUkOCFZcXYjL70ECvwGMFgojm%2FPkNoLlXyWCNARqW5KMWEMbDudaP8zCEYYyubgDVEdhrwg7nPZkFzs0N8E%2B5gevTJ%2FoDQ3%2FzXE7CBqHmq%2Fx1xVLnyVlhq2mgZbpU9utZ1iH42UhdsXqhVZIG4IE4FlgkmPNVjFvQTxRhdca78W5AFhBTIPgj8UUODne9aVeSn49LMjcEdwLJq0IgHmJu%2BYD%2Fzt9pPhNVZOzS7B46FSYk0Sy%2BoIDtPzXbtbw91oMgZknUEyQa9MHbTbRl8yf1DSPl%2B1C5utRiq0d5MFlGXgq6qkyBRtlDBjah%2FktAZMuOVkKHLSDcbc5ddaOA%2Fhx8qePdh5Qc2S3LeXXhEa4%2FkHJ77byYaYUH09eexzdcYkBnw0aqLQ8mpRcYn9JRO5mwVOlsRWQMI6MyMkGOqUBoB2cen%2BZiuLYSISxZ3TWkemfJN8arWTxJXF0yNABNCdWSB%2BDXC21hNGFYyBu7fl0affC2Tac3LU7HIqfePcXiPb%2FU8xSe4XR9W%2BFDBQyD3yaCnQJpV8xw7hYqwshh9ufxGmM4m3917fY8PEkwh8TXY19zx%2BfridLxqVRvgsAL0PoTVuo%2B9FvmekIyeCtC2toyjFt%2BGklAoaIzltht0DYJFM9E4Hb&X-Amz-Signature=a4c5b547789dea41f586c24e93e65874dbcfacbffad0e896d6918fe126faa366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

