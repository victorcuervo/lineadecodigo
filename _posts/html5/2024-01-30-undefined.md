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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKE37D2S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCPRGGqJ2q5dylL7AsnktQWWCTMF%2FeHD1QcP4mtC1%2BMcQIgRV8yRR03swQiyFkSz0olOJATQQ5tW5PGmyrdMrHMRngq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDUwcoW5kDEBzSUqRircA1%2BUtu8KhMUz3mAjRBHOTI6MML%2FpTyBSAbl8SN91RhHoCggGA2Qh7iihAKOwTAG08qn1aZRcImvRixKS4jp%2BbYfwqgiUbST2k0gWVOigVC6r6AvdobaPzixNIkfL5erbe9JrCdqwAAB4YmTv4dARdqeGL6xRrBLbNawxVUwHZjxa173ew6voC1%2BG7m5gQcCbnhAeGhZv4V8dEqPvOEIWyfvEVtV%2BZGvqyQdn9O78KBd6YBJ4WhpU6wNM%2FcVaIR7bPWvt%2FAIe8f5waVGTaVFIz9n%2F395lo8Y5Ghfut6vrKGosk4xR1etI0HFM2SSYU0GdkKnntBwcDfLUUZ5mtR7y1DxLTVpEIV3G3ilTzOV5vNVmU0sRqunVzxKtWmouEImWvH3IIhI9OAri4sUCBEqDX0YjGWm2TXWQ%2BhLoMEoAmuw69cNJlBNMmx9x%2BQ5TGar%2FyaJEpYtUTHKgnUlD%2BYZX0bHhPir1mjxX%2F2Ehc3Kj1iAjTZwxUrgQpWw3xo1ejKW%2FcoIMvF1r9ryQgp%2B3M80Htf68kB9IPIKC7wHcX41Cxor0gVUDtLsNGNA48nJ%2FYhsUhUf1ixOD3IeLfra0yERzZKl7dnjGB4xF8dOl02V0XiJVcJ3bi6n5OnsitZ79MPnAwckGOqUB8OJbcdnHJI%2FathuG3MdX8NPgJYkpxNvTCbIJdt1sh69gfcLOMHQD6tx7l5q9D7wWil5214TKuFrBtJQUoaJT0LWKoZZojLG7uheRLxbamgWBBcMsap22s5kFUfDwUg5KSRcfM5gKPh0ljmDdd%2FXCiEtlqKk%2FxvsN6YaDXsrIFGUojdS7PUYz%2BfloC%2FHznI%2Be%2FDK63PtBzapGuoX2oYMGP%2Fy26uYg&X-Amz-Signature=f404b4ce6bb183940fff5f4c82ac3401e3cc3c4ecd5c17ba19293af856e565bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRHP44X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBQ44XNgQTIWyGIxuFHdDCI3j5s3I%2F6aATT0fEom%2BidKAiBSyZZ3A2zwmdk0PgaWMqy2qScuBJQ8Xf7vCqayoBv7ISr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMxUx2BFepM7CvehuLKtwD9B6%2BxfkCnVvbkrxfVUqw3R7LHM6fsIbCUQeFq231LN2MioV%2BGnAGfzezJ55FMkIirOyYKtFnfYzVoUj6E5YJ5aeADVVYApdf3Z8VVhqJ7i2qUAkxz%2BntKD%2BWHsvPqs2VHNzl3NNBey23ugN%2FOFZHUSUm%2FTrAgNX8faCyveqp%2ByhnJCEbqitK%2BlkqLOpzYwvQxQJ20Q7U5pWsDg1pjg586LaGa3vThlFccyYO2MvTnI5KLrReHTwxpl7NHGqD02DDBMK46wahdQnrvTqL83ABHTNV45JLV4wGMy0gtD%2BUhkw%2BeUnw3VvV25lVy08rRXyCmUEgUzwSkWfS%2BKMYaizonRqZ%2BRIy8LdRIytRdfNuk7OT8C%2BfWLXxY11EMzFlaZubnm%2BXNeZD4xsSLqCdFcomRvG94uX%2FcvXW2gOdmACYMMU%2BVoM2LVQCozZd1%2F6wzqDBGZdNz7wHw8VD3ZbvjR4i1Ky1qPKrJV98k82NXGim09534NnPOrQc4CQ2FsrbunLq2rRHjn8QDZWEQA3%2FEL44hm1iNG1sulC3%2BoY9iza895KiEG%2F0Q96X49epf9aXKv02pny%2B7FO1tVsjoo9DlFHZhsGwO3KXoj03yX8%2FI%2B7MXXg%2BJ%2F%2Fmyk3qNbXVDxAwpMHByQY6pgGQ5FHMeBGCRf65KHOHJAOkDks0WkErDKZ1EEYdf2jpBQFzJk1o67bMf7ParYWYFqOZUCY7g5jUFTLwnwQSjtsGdoAPz%2F2ys08AU3cFOzOFH1%2FnP82pgA%2FWd0OZefNojsBmUPTINItPnGn7tsHWbPls1YPvJ9z3xG%2FmN54Z0OQfWsqYwNpuM%2B7vLCjRrYVUWrFL1K5orcdkMadxRptmPo3Jat2DS4fc&X-Amz-Signature=0b64d7c2750fc997241ec44533c92d75e1ac8a713123344385ee54a0a2a83428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

