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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2Y7EUSD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICq0j7cZE9349AdQ3M8fF0n9DaG9oxB7RgIKL6LMvA5iAiEA18bma7eSD03LeakowEpI6H38oabtsHsR4JzIklOi%2FK0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIjdgE8ClzHn5M%2FIRSrcAxPq17qezAk4cMQaZA3CY5fOYfQeK9SnuYEpkixNwOTf%2ByYAXmsF%2FA7v9ARoeh1Kz66QK9hYgurMiLBI61sypbUSRYh1aAvFcOHI8iNDx6NNe9zpuxJ6X2MP7XquNPqdLvtJK%2FmgIntoovc1Ls%2BHK1UWLV8aiq18oMDL62g9Ii8atGxeRqNtcpBAbR0EL5%2F0bPrGrNcFyRWI2ut4JicFhVb2U4mO81Y7%2FZWr78Dzy6npRa1xUA8LxDpBtd2R%2FfRUenQL0W%2BS%2BXK%2FlJFjBmwo44PBmzxwLRHtoX7TuOd74eu4px2FfhQfiXU6H2UGzo%2F2eUkpdsGNDEcKZXXeoqP48LHM6ompjaPPy8upV57PzkG73hPXicnHG6fsOl%2FU9mKK3lsA4uH7Ug8vWSC94fqaVbHF2dh4uxere6EbK7mEMlM4f%2FP0DIt7Z9OgWP5zqpjORZIoiplgX2uEp%2FGmC3XYD1dkbD0S%2FfZeT%2FgF7Z42890JE%2FriWI1C5CS1e5r%2FzdlPpQHtcItKzvUUo30RlEX3Dmf7uUGhoihDzn0ED%2By%2FFgYid9XKjTgN9oQlCvZLXgllBoA8XKIfs2NpzO4FRdPxVQxdrm70gGP1KEdP4sUO%2B6%2BCJoREf3nGlSstLWc4MMTMwMkGOqUBX7AA5u0HSsxo%2BmEnXaRtznmdpaTsbkeJfn4TDzbkGW28xoIkXaTfwHu8EOgYDuDeRcLKXNduVhKDmTj2DdyPXZX5oWWUjs7iZI5oiDO9DGRL4emKE7MLmGPAihv4xAbQKyKrqcmrb885pLNUGy9uQWqOZRaDkkHdl33%2Fmv68WWU8nPP60n%2Bf1cUeseDtKP9%2FpBILksgYLCih2M1ccdgUbkn9s7Uo&X-Amz-Signature=f7a379b8e5be3013d9cd1b3ddbbc4fb8a7d869055933fd0448b3cfe429b22337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGORMWYK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCkVghik1T0taR%2FTmkPt8MW81xwD9OwQIDOZLYaMHPoLwIgH%2B6igez0N3P7VUPQwVc2BGZ7m4N5mLmBowg7uw0okm0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFbp8d1SRAsRDi1vmircA3pb2sUajRTmOicGMB%2BMho%2BJNcaY9yt5zpQlPbEOYArw5%2BnOWGNwrc1T%2Fc55Cv1v3zDhWWj9JapmO35xslmB6dWcJqUKrFIqZRyRW4WNjvyJnlHijmtBhSnNACapDIECh9ISWbLZIIFFwvN5l33OTNBM14Ke6eGzomVxp9ZQBh3Qlx%2BTPyA13x2uBhUoYlUZtbggbxT1q%2B7u4sj%2BnThE1%2BQ8POUcWKgtaF0mZ%2FRhPGDE4dJgmDWVeH0o7lJFqctlj4GeAYOcP7AWWTVnFHrAraPgzqi0BJzB%2BIgaxfuccNaXPAXYERCsYxuPOS92PXHbo5YZSi7oyeoShgJ6KUSnjhki98usSHAbMYdmp5OCTHPS5biFb8rrzRp46SEGLddyd4McRRARBQfBoXNPkqbl2YnvBETdDaJGuBEeJ6c9D%2Fq9bC8RClHiSYEg5mdI0aakmgciuldBrGM1AEerobeGWJoXOkRE1MY0LqFEQfR%2BWsKHxbNSDlPpEhlp4ZoUlQ2HscLFqnkXZX1ezCTtva4xvmdPl9dfOyITWuf56Lh63QRTOwv7DaSKfiH04qVIibsBalaLhhslXXr7sSzPsWmYEa7iu%2BxAEPqIgHVUAFqyG8oGHf71nqe3LZAP0xnKMJLNwMkGOqUB8FPyoKHwBJRzdIQD2IoQ%2FaxGYXOdJ0%2FuFslQu3nBTyYCVwFoQ9M6orSxENmJLY80n4loDG0h1iMB79uAaTGvB%2Biigrx0HBtPGOrWFbC9%2BYewraVpaeWiqmYJrDBvWBsx%2FX2ERWk9NVHrYQdeGkz4Dt3OuYpLewfdLQQWHS%2FTFiusuuHljy0AsLxuFZvnnLc5ubdpf69G8g8Xm7jbZFi6kkJ7GpZR&X-Amz-Signature=10de55eadf63b9a249223cfb9c58a4af33dda154d76f43a878d22149d9688a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

