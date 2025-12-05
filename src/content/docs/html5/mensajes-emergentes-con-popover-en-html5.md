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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZB3SO7V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxwkJyO4IbfyQsSjq1AQ3RXqQ6BneiiGTpq7ENKp5o3gIhAMsidVeqxJI9VOkzCeoZ8W2gEuWvTFLJgeh88Lnb3to9Kv8DCFUQABoMNjM3NDIzMTgzODA1Igx2yKGuXEnhsTfnnZcq3ANQImz3udvV0IFjGLU%2BfFeQJpgK1%2FW7Zs8CQXolBP%2FjrqP5wIRFcoCVonyo%2F76rPmdzcRNpy976IXP33tmACSrsyITHz7RBNpRgPUbm%2FDTDjpyBouimthsQqplu4I8NCIiY5PBzk5fGolQZxHL%2Fq4O1WyD3u0zRPlwq8SN3%2BMo4S2X3VALnD6NJiZUYwCS4U6A86hxW%2FSKwMJ2FJYrGV%2FmqwnRycAHAwPgw5o0qxhj18nD7NKpiyhO2hRq8SqowsuXCpPAib0UO9KqDQEGDWLatqBV3O669fwrEN0zaRAjNVjAmjXL77DC%2BlgiXCKtQjIARZzZHmcBW5Di6lVBgCn%2BGeMGklEbC64n7Of1kxYkCQMaoAhqSDn2jgEJT1mIhBpXWjE%2Fsu%2BB2nuQWsyijYeTChSR0CWU285z1J9dby6FoDOz2KXvfv9U1o8TH5MpV37VaijeokvGZYQqN6XSjx1x4CTwjUE26O4xT8M30J%2B7tLft5I414D7oOvpv4%2FxCDB4W0r6OIBCz3gW7Y4K3SqSuZ6yFbLXgK%2Fi2b3z33rh65F%2Bk5EomKK40%2BX9ghPI2WMu0gFO93PU17SHN00jbS%2B4dFRUM1iGqCYTS9dKm1EDrUWa9tj0N40hqW86yaxDCxscnJBjqkAQcROo397%2FPihPGyuvkY8DZtsxzy5hu%2F7ua7isrV%2FfoHoERv3hkIOlcGPSRoUwGmGO0npJ0Q2wyolSDikpcvukJxSHKAfWeW7IUTkkMNt8CGnmBZoZVXztY3SzzBrMkKLezVLVuvBQ0wghTmILY4%2B1i653i9ni1iTZCGplWkDP4S5cmL0%2F%2B3JbiZemm7slglW3RUblcsdinJXftcWBt%2B3dKEwzbU&X-Amz-Signature=d79973e148df18f07e27e0dfc634f3990e5852a3495d3ece9f0d1c8c7209e283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWFGRDD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwXtriqmoNfW6btwnIja5Ss%2FsAU0PVRZKVG0JAQoziTgIgHdtrV4AfcZS6mnbga5sBdGTVY%2FNzB93Cajcv74c61X8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDF4xyZk17nggcWzAGyrcA85gloLgXjX4Cj5L3%2F3676xXVoHpqfsFUFOTrOhbR5MjNCUSihccw4kptyXN7oCyyB2P5ZXAoioD1zx1mUBxjIBfYxVYfefSM2Y3VUYfm%2FEN3fIf0z1rXKoAbyvPo%2FO4rMhzI29VkMNRxNWFb2N0Wj6MvrVyrp4VJgy9el%2BBjd8OfWrOOXilE4vf6Cy2vYGpcmAdE4rPo380Hc97S3b5hC%2F626L4HHth%2F90I2gliRRGdMvm%2Fq0geNsPwRobY%2BNNCYV9D0piCviwIv%2FTpejhITG06ZLboZ2s4jCggYASsHfbfliRcJUl6dN3UBNNc%2FxHL61GoZmNP%2FWQJgqxYs6V%2FsGOPLEaqgqN83cL%2BJOAbKEGLERQ7nhkjqig3QMX4V2cedbhuKL2H1xoe3Wwvryf2j5juBPe68Gl4bILf5lbzbujnHAz1BrCZTK2a4Gk463bpun8%2FSTmPcgbbssnFw%2B6ON4I8BhaZlwb8f6ZW5uM52OOsDx%2BRsPDb0u9PGoW40KoA%2Fs4pYFhTPiYkAT4tPuNlCnvvOFWETXw9bXmBa6Nlo%2BHmd0P3kelYcJKzXai4%2B2jE4hYFb8%2BTs88JmPLwUh2nbD7sdNYZWYmc%2BLSHfPN2gjxiw9lVG6SWEaAdBv%2FWMJuuyckGOqUBzLGhtRjLDASSoP5oXtIBk6Lcc%2FpyDw5DlA8Cjo84wP5NO3PPMQk9e0zbbwjpegXjUCP%2FMFm25gP16JFqlgS5f0YktaD9yywQ20inf%2BJv1mSHMCKD7%2BDdRb1CFisZKIBqW1%2Fkn6VB6dY9unXKYmuJog8O%2FR31zu2Ho%2Baa5Zef4K%2BLMWQalEJLCC0Sow3suG0EpQM9qheXh517jBRvTJU4M9zfiXsM&X-Amz-Signature=444ecf6fddefda6595ab1c8bcf0400272a7432fa5dce1be3d1030d17d33bcf7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

