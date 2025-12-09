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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVSJ7J4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzf5lJ8tLACJBcyOb5PQixQLlPxwT2irXhyX6i9AuB4wIhANFzIBgtyZ0wMM3G8brWhfUfmcwYj5Ulr7bWZ212NfbWKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDTW8Zc%2B1iq6hAvkIq3AMBZkk8VBY8s2SnCLZpo3xM1xT%2Fu%2B%2B8BMDB%2BOD4LGWFAtR1cWVTL4r8yh6NdB1JB5XVx%2FkXPdjkZ8r%2BHoxUB4L%2BwCNr2lqte1sa2AnDyh1saL0YRIekWERm1j3GQs5rPpZkuIfahSyYno5ccM782mygvYm5ERobBdLAa%2F%2BFek3mDZ8DM6Tmo05xaa2p8VWj4wJEc5KU9nMistF%2FtJvPRJvkfmCHLoNJJylgIP3nONoskfyf9dYROiq1%2BqXLAlCXG2J9JoedFBDHRtlf8WI0DofXyQcjcuGLob6vs%2BwlkLJGS7DoyGg0KhLFzY1w1Z4pebQR90wSL82vWxK1JvrA18UgpIUZFkKE%2B8iplHpg4MLkXnqs2PreKQdw%2FaDmfg2GZiNisIieSAvyLIXd0hoExAZ6%2FIzIUVZgmw0IvcHExew8%2FsNJVPJ%2BzXwRGWWBdOFRA2%2F%2BzNowKc2aRLd1BtuicnKgITUYlDntlzOOnn1nhjVNuCijMeYiYggssIlw0v8We2LWiI8SKDMqKu6PCpZs0EWU8gCJqj9aCjeGEAXUdb3gFCn%2FnbO3RECFCUxKevgzOOkdfQUESWJ7YK0oYoOi59TT22K6o0GHgr8BZ7yNyjkOYt0awjBZyPHCJWKXaDDVh9%2FJBjqkAZNSPzx8%2B7EHjCWjEPInKXw96fw%2F71PjnoWahFmvhigUyBbzlXOx%2FZ0R1qMjLSfB7ZEcgBAYM4FIHnocbwsvd7nm5eu5W9GXBA831LHTmIWfkvagZtKj3wGx3lT28wxREPNE03VDc9YJU0AxSoR%2FEoptSwdY5lXD895yQUjYmRZqv99%2BPKdmqMMIVGm6oulUEvSYbDFSHWxOHXm0XBcZpLNrI34w&X-Amz-Signature=bd644aa86df3cf0ce97eff6677b5f8a11557ac058fa5a435d7f950646e12f3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCLWRQPC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC82Zc2mReRJ%2BorwmBAbJvh7uVWyV06Lw61BT72QphPywIgKU1X3HjQ4KV5sBSlEtiCJDkaXTbskXFlLhYDXi9RMLsqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPRqcNiqzeLmDRzJyrcA5jd3WIODLgDMgRQ3SC5JXUomI9Jtkf6c22BiCvQEK%2FxqqJFqH%2B2b7RD15MqceimZd20JBx6f0JnYUHvEKxC7FmKygt4q8xsGjw7iycNsHqThR2RNuUqC7ovKMrC5iRygnbxKIEHEBahK%2FjrAcK4YKDIoqBN%2B7sZJ%2BO8BPMn%2FMrZs4T0YQgCWPxwmhHPNkUQEpExx2Mmfpu3YoJGImV8nIbzJ5IUOyI30v8HL7cVO7zNfmUq3nvc4zuPLtgcP0JQYYexn3WNPaHlqbIkR9PVQsLmfXqp%2FmcSs73SPUfqtorE%2FrJTiVxI3Lt5lh4wh9P%2FMauHynE0Ly7WywsFk1dzACgk4FtUAm6Wco7e4sGL9Exg7vNq%2Bxzj2yA%2F32KjpMjOjFZTXrwRtiZ1C6jb5VUw1J4E1d4fN4DNgPBVwJqFlRpE%2FiUfwPtBZyk3a9FJwezRCLUU2yGJrRuQ1dB0ZwZdVLoe%2FFQ0396LNVYjLL01ulsfggaZFA1f8A9yVCF%2Bf81ean3HikugE8szPGNn2tsEX%2B3XtExn9Dh4cyjNQjVKaifjjyFBug9ESuKM88UMzAiAYO04Q%2F6yPXMsFE2mk7vbtzUii%2FesI6wWKS7Cm1mDJxEVOeMGG%2BteZmlRlXJuMPmH38kGOqUBtP00%2BB%2FEoP19r%2FgXlnDZrfuwIyuxsBF5PkBsZ3f5TqTejiJhTRhPR4TrituOqLOCedo7QSC8msOObwekvCYSJYtfR4EP2Nor4hxVINRX0oiXLqu4YBPJ%2Fe7XfkRIg6XvVHdO%2F6aVdq8yn2ZeFWLqXRionw9mcJC2ntAg3s8jrS9zNffuoFDplrEgwn7N%2BSIt1DL88l0txqLssIZ7E0dtjdElMPIo&X-Amz-Signature=ccba491f5fd9f542c4473fc2d528a769ca364077c77a558f7a2f4f9c3891b197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

