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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDF5CZB3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxu9pDRUuruNkX8CfFYvnUBwjAQvWKVdc0hRYEjK%2BHqwIhAL54CpUfwSPyO2mwlqHhvHCvwvVQkW2pmcDnQqtzMNAMKv8DCFoQABoMNjM3NDIzMTgzODA1IgwIlKt34P9c%2BOaij8gq3AO603tBoNTw54%2BDoYJ3BNDkCqT02cO1IqEMUyRRKcBsSVM0MVIy9%2FpkWCLUGowj%2FJLdoFA2YNT8vp59%2B9Yyr0Xqu5QTpoPDJCIX07M7TZQmDG4kgpruOuozkjvMYl8%2BZ5GPcf7tnW7QMXxSGL5cCHc4xvGSJqyLfJSJJEmbjSJ4Dn9NN0bS7wLMT2Av%2FkGp3pmGwq%2B7XWHnlRxLTq%2FeHUOvx%2F4X04tw8zZrvo52JdTcEnVqI66ED3a8H8Slo62Sk8h5RShO3KFuRJbWFire1vteaHrMtppFlfb6n2CAo0h7xgCkxY7Ee4eyD8ZQBrj9sSg5SYVcrRI3RPzGyKWM%2BIEznX18jAPCnCjq16VizjJ1Wk39J37%2BDh3tIj6M9zjiHmfG2S0%2BqlCv2DYMmnGz1vBgXzpVavw5hsDUyS2HZONWX2UVklr%2BNlajcVMSq7Yp5P1QuoXE%2FQATCOlDmVzT7pWxI9Is8xY4rQ%2FkRXp1QcuxxlWmRpsDrNbO0TLQHlI4HGLmscBv7PzpeVY9qulnJQH7KE%2BwmFyct9WUhIBd5tJY1JjMgrLiOM0eaLSwoPj2PUTDD41f5MqBRSZ%2BmwFsMshF4GP%2BqE%2Bgevwc8c4ZaSERV2yLhC7%2FLzGaWFglezDaycrJBjqkAWZLEA1s9SIZFUMABzNOikZLOxZXlu1jyztDQMWqRCF2ML1ReepYP%2BW7M0KV8eQGpe%2FNyfLJKJ6bHwzByVPgFMJF60aITvIYOOVXIt3UohNy4OVc71qqCN8jIhIW5VZa9etVXUxO1TtyvmJ2%2BgVXIwIoPvLwyngzHmtWWLXaexzhDggu0FtITnDn2nSqh5BHduhoSWF6kb3%2Fa8sZPVX1U6NBY3tP&X-Amz-Signature=473b6cd3436a6a936201ab15c356e6831911923a36bd4b40bd5dc96638b5f6c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF6AGWHI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T101846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD82Tx6wVxTfeSQFIStY%2BU0eqqdOktEemOKRi%2B9FdAR7AIhAJIjTn56TvV5MB9ubDHE846tO33XVkGlLj4DVSM9Wv5XKv8DCFsQABoMNjM3NDIzMTgzODA1Igw7zi1w%2BVKI08ekMA8q3AMJ3jVEz22PeFXawjrZUNWCTIjz5vuszfiN9aRFu%2BzirIL2F%2FA1oVpNAWhaQhAcObYn6e9VfzAgOmmEZksTRlwCahhdIKgAwq8%2FPK4RGRmYmYq4Il2i2a%2F5z0YjXqk8i5%2FiUBAz1epkLNFxqeJqlRQZD4jYG1ia0OlqKesvSRtP2vgHv4vUptSFri1WX5iCdcjp8Q%2BZvWA%2BnvyTsIZ8B8u2oSqrb73ICwdygWq6dRt%2FC9zBRbz7ZHxhbDvCEjE%2BCklhnYNU3c9%2Bxl%2B%2FTEXs6BDSI%2Biaxor988Ds2yD1cG5k2YxZjKk0rDdDmkjuO0biLUaUq2a6dST41AxckrAZz6mzm6Ntl05vjqzgdVwYXDZr845qgsgzcJhobnFPOOFztcZzO9op%2FG1MNfH8bfOh5jN5wRrTNN%2BVLEt2AOQUafTFSLRlCsP8%2BZ%2BZzNl%2FpEikIdYU2iHIoBPctEIZOzh5Tb1yHFnpJ%2B3rn5Uiilvqv6tcwaPp7xE7hqVGEhZyLqvAwBBZAa%2FoH8a5%2BoFkDF8nyq45uuMUV5o2pmR1fRPFFkzRuPTlqoxPOcQwUbgl7eyOpH%2BnsnQQKw8mIYrB3r7pR187Mi9fdkWcLbv6gS7xHeDwlJPbfX8FXEbjHuFxmjCnzsrJBjqkAYNlSHlrSG8j6YjlNfk4QZIqlUJN315HKNo1gnicD5QevQfxaDufkLzM3EBbmGNKHtGG9YP9NV2OSNdXVX55IqGf%2FQR7bpN3F1vrciUEGEKJs0MODjtcYSCfRH8%2B%2FM04tdUd%2BFVNjXgQlDHV71acxPZpT5DCX3cUbpfllqUDpjmztuJOVLhQVUiSlJgvAUkgEAu985SD0NWpYKYWZ%2FCnREH5xWUk&X-Amz-Signature=d19848a0dd0a5c6ff9c3ef7235fda0a3bc6f1bf39a28e27faabbef52c3e81880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

