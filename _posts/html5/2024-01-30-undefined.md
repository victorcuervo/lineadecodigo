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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHUULU6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHv8k7LdNdzoQz%2BjGwa4zzZf9VAbPqN9HLD75%2BxiKoBJAiEAyf5iOvX4nWJY7wKEA40bakCx1zW6W1yEZ5SuMzVmazgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDANjqqQRh8jToNAD6SrcA4eDu64yGVuwitkQe%2BBN%2FNinRPZYjA9nfzQwzOw6iEvTz1SC2uts0OgclDhqiK5akDfc3%2Fw9A6idFDrzJv37YPamgmnf52SRpvmw3sa%2BlpBeljOQfacH6HAG4nD2fFXzToxEhqYL9W4kZyj%2B0wGB7bH3Al0T9FIoeXmrtK9JREzjircoslSVGE%2FNrTHJ9o7fpl5A6C3Z5mSrumYLd%2BEH2dZO5%2F4hnNxyeHUMPuXMeEosSAVdN4EkOi55%2F3oipnQqcDdjpInt1wP73DQTHdTilgE6DtFZAtYjTKAFnA4tOgs6KpFaHezkTdMxUDZ9Xd4IZD9OHPTdZ1h4CRIH2UT7bgy%2F0CmA%2BN%2F6SMoRW6LyDyvDun0wGHZs72qFCnBC7V4stHb0yQ0KAqVc2sPi27ZYWc5ouxSUa8TNjjQj8v4nx5UZsznFXQOHfZojmh34APgD9MCMMeNYxjize4btOaJiRBhe6Mqv3npTVzGK%2FCEFdz3huDi80JjIy87L042kzgwYMkopItKGiMaQdtFC%2FEfM7N6XKOX7KdmvcJGpUmHdo7SEwtIF2Cc2T1DBPafXGe9nTtS0ijtBW1uupqenPzhW141PAIOuIF59a3NOWXy1FwuEYov17Qw8G5mS70xtMO3pwMkGOqUBAxCHzkS3svpdBiRwoTZuQKH7%2Bm4wCmdXvbZZH28bbcCp9iKsKmUOrcLEGrrAO59BWfucDUIqL2yaksDxkHsSlFPgU3P83dY9EnsPprsJq%2Bc7%2FEujGXR4ii27gBcWD8wMkFZM7xfs3%2B3xwZTLMJwnq8B4FCnnIYWmxrZ3JrpXnbQAZpGUg8jEqWFSxfwhARtPEq5gIeJ6XumpTPOQYQvp3oBbZCZ8&X-Amz-Signature=c5d44e3285aa3920ca44c91b38043d44e6f8fd183f7d89e0eb87fee10e11c2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSEVG7F2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDcVrxu9q8T9nVh2PeGJITeUo%2BmPPnz5DUFd6rbYdS%2FpgIhAMtT760B%2FQD%2BX0Z4q3dukklHyP8qtOYLuBVQUZeRgTeMKv8DCC4QABoMNjM3NDIzMTgzODA1Igzaeum6%2F4bVBSjnYBQq3ANMwzUtWEstK1jpwYQgw2fe0MFSQj%2FszfeN5k%2B%2BlBGTtdm0qKmI763pHmDTZVdEIeP9J5r%2FZj9CmSXT3FfxVrCXcxg0h7qyDHVc2001iLA5rb0kdStkqn%2BVES7fpovo%2BmOKvd%2B6LF1dSM8Bgc%2BnXWSPItI1dStlNiSKklr32u7rUmmT1O1w8IlG2Pk4%2Bd2lV9Vw0DkRCwh2nSV%2F%2Bd2Y2iE6YGQy6ptII%2FUiQc1YgcVGnNhkuqfD%2FRWhbrfplJuBgJqDvrcp2dlZKji8kElxaFLnnQho6gfn8s3qLKzSlufKJ0mov3lFFOBoqqKb10wa7T3oxk8w6I6UkwWKIsuo0omKhA0NXiG2p4eoxl7lGWj5LtyzzsM0oMTDk8n1g9FFqIEP3WKN4MRH4ZYz%2FVeDrzMz%2BTXPAWSKH3jrped4oGj5MVnwCqgikc3grKJsyEF6BjgXxM9fX%2FsoyJNYXb0cI6psysdF7CTOVTZOvpx5jdhzleLYiI8rbeXMxlk4Q4lYXD3eDCD54gYHNIoltXBItpgBfQHGDfXCLRgcZhwk0fW%2BUexEFh0Upt27QjOOvuBIrKNgu8O6WyjbUHWKVnvIxU%2FxgKCN7zIwgUc4qMa3qp5o%2F57%2BLX8kk6xy1xL6xTDv6MDJBjqkARu1lqLTJsYFmn%2BW6HdFmBpy3xTMYQg%2FmJ9%2Ftv5CAo83fUokFusCbML5g8CwxRdby9vDKMXEZe3%2Fl5ScHNJP%2B74BMeDz%2BU5HFfO1253F%2FQbDxC%2FMZWndOhBpw%2BiEDrk8THq%2FdgPlupSry6PtZBLp54FR9by620l%2BCI4rFnUjnGaCCkj%2B9v6rw5NtMimU0vPFkbcsSzNI18CdIvhBAApZAYGV3Dj5&X-Amz-Signature=74cfd4a653301041f97b9ce17671b79e11a65a0bc773a7cddfe23e4f5834e164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

