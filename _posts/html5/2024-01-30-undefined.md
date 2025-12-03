---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654IE56FF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDXwNsKZWb8ME5uSfcSzbN%2BUs5lS4DvyhccWG2bEUJEgAIgHkjIG8rIRb7Q0LzCBzwuD3SKieq1CX4eyU8Mqgusp5Mq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFIlf4%2BHX5KgpCUv%2BircA%2BGSiT9idvwTeWAxihPy6JF3oqhKpq94W7jJpzoXl1%2BCL8kaqRPTRIWmk4wX5E1csmNDLfFej97kch4kydIBRuTjedAtITstnJX%2FNkZDVAf10vE7lPCw%2F2h2CJ9pIlFwOmWcLnMZYwvp2wY08talWfY%2FzXdlVUmccCPpD31SFqUaNUbwGhAh8Hcn7UHajR%2BU115%2Fdo%2FymeQJMLYTEL0kD4aEyxSuTjyF86Nz%2BIGa8uWqqNd7c9gJ9pSJOv9OTr38XwhN2Ccx4XGH%2FK13c8GGOSm%2FXegmQgA8FvTvqFt2e2Q8nbpBFF2FwJQeMWoHZun08cPnaROlJkS7FmTsUIkL26bC9XTK5Xf%2Bw9vgHKB0lRh%2F0g9uf%2FXQ3w%2BfWE1IrWkhsBEUauJ%2FCWUel1rkAMTas62kfCYrYjjoXr4A%2F%2FWFTzenPnrJ84oqOVYhfy%2B5zdAcKm0Qq0TY87sxoGrNJjxWCDwdCoUC1ZH4qXXwL7itA7eqS5GV6tZcozk6Ho6BORqoQfq8V8sHnbjRXT7IbLvwmgEe5gM2IUHNOkpXLHCGhvs3zfVaY58Vnf5V2dDcr8UeDyaKJ1BNTBViAQg9tKKPltIViiXqx495s2VN7yC2vQfpYBqkq5uVwoV1%2FC5eMNSUvskGOqUBI9awJfOmBy19KzvHHhRgA6KfocDwKWpBO6VvE5aQulOrt7IyslnEdWuMs0ID8UExPVuwEpSgZLcx0AHWHCkfexF8tm0zM3c4bVED30Kp8qB8JXLqTFPuxkymg0mcp%2BM%2FLu9N0hPA%2Bq6nOuJl%2BqaGw%2Bd%2FYlN2%2BZYrtxCjO69gezOEGYh2PTwAQQK6GuSigbrQnzZnDZG2kbuAuvOcI1yxxlz7hDCO&X-Amz-Signature=75338e9a04abbc9ed2593040795dafbb654ec01011c4fb3b2a5cf3a3e0f050fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM3V5WLT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCdO9EbNrK1%2F7wROgVkfxLdqmWnGUDU2fNA%2BUrY2gxXZAIgWeqOv0QfEwDUedgG%2F%2BrlpbLCp6tAKoi%2Fr%2F5WscUgp1Iq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHvolBm3YoS5TooWWyrcA%2FvzDqmjeB6LqDdkDck18BDNCykgNVClKU4BzjtWrYcrbIuE%2Ba8V6xTvtA6EnqD0jMXIUFUdiuigGMMoMy%2FT5bGCLDi8MhUZZKol7HzECkINl49PCLZ%2BzzUg5z%2FpzZHfZpC%2FQXhUa7NXkjKqM%2FKdzVzj%2BBR%2BbG5jZCvnG%2FEX4JVsg97NzYJlfMqjjITaPH5i4fGDMcY3I%2BwUQWXLaMqalQ0DLj1rNVG1InNH9KZjQLiHZCLfqsnU4TZdpWLOHEkcWLB0XHU%2BsMz2MDI9OjP7vdPxPRH4TzAzVOji5J6S3aKk25F8IqQvmStUxdrniBA5UWgWCYtApfu6ZldvZYIwpFkGqSiNvck3k7Zt2eM2MWkBwjugVxr3FC1sxcilVzDKb8QGQdtCv1eSxRBekSntC9shZxdaly8seV5GjlDtmWnIw%2BMsOM77%2BN5cTS9qMPFxc96haYhABJ38%2BvtERmv17Uu8KAc0xhvQzammcsbss9%2Ff%2BnrQqE0QOk4GMspOs%2B0GNHZptwvirMzSiMB8l%2F2W9WeMlvHIsFxcoCSQH%2B%2F0iZ0HjMEh%2BCIFg29seHTlGLO0dERhYj0ks%2FBsbjQjk%2FiI6mgwI5bUkqTu2VXxs3Ik1MCn2PyY%2BiobmuGGyMT4MMaUvskGOqUBQWOKf%2FHoXF7d0Muv3ISzlUpA19M5TOB3nEe0Hy2YbvtcTmegvaLjmev%2B9Tv%2B1EtKvxE9nFpER%2Bel3SafyI777FlaWK4LuH%2FPgQq7PybI72aIDTM6BLkA6puNyVOlolDIR1U2NgZO2oenN9Iq4LGRUD0nemkjPTOcFQd59H2BSw2%2FfGdpMl47kMyxyRO%2FjkRnoBjR0fndoDNFZ9sfwE9nuzRkTUlG&X-Amz-Signature=cf8f2b0e1b69258e5d8227e5b5dba2b44db3d6663b544471edfc7bc6889844c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

