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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBTEFRE2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoqKBVKA23Xqk%2FOwwoMVgCckSTH5bxhp0WzIcsH0gLTQIgYgnALnc506480VOvNTTmiaTPwFF6dCcsijP2NH0GQ98q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLbbUQmLVY3sYAKumSrcA3d0va%2F4hr2nGeHyyARsNrENJ8ubvbuyOnAQFrqx6SCfCnPnyZc9LAYmD9e5kR80YvhuHXCYbiIdgHmRLULcigBQkHmy%2B1E6qOU04Jhnrb2SiTsxe0heZArHQ2nr1Vd9uaNl8C0YOU9iOeemnJIanWyguEOosEE6jpYQnPvsjrC5pgQNEBz8U4J3PA9q0hXcnfZvNxIxGyCQYrM5dR6obyJr%2Fh5sSYjR7rDHSBFpdk24bL9dC2Qs3iQmeBbC2RlXAuNIeW7uWng2z22LOAYlATNZCYiu%2FAhv%2BcV58uJeKnLzywAIkV9qgfRlxHR%2BlgjKdQviqQ4s%2BXCN9AY4AZ06AOYgzwV1L6dzeXw%2B2UETCxfr44k86pVA%2BAfdtEyn1N3%2B8P23FgjGNp%2BtPAJTO%2B5dUoJKKFMuvQG2QUB264Or1cPIqBOJXJGblI3T2LOH9n23Mb89nLbkV8%2BiVsXuvgI%2Bv2MHImDNhpF6yzoFa9YTVGflZ4ynzW28ZRMGX7Fyfl4d%2FCuJQJYZF34yVXoOrkqyNYfyp732s3CYESFk9D86KcuF2FFrwqYH5an9VBYAv44V47eFRuXDTyxAgzHhk7B6fAti3V1B0ffPqrHL39wxIDKV%2F3UU1DcweYrNkfP4MKWm0MkGOqUB0TXZt6mV7sxQzBkaZU3BdJckM49Apbilsw%2FYBU3lVD3zECBq9%2FQibi2YauNjUV6Usl1aUApVBfnmxCMALKJbmPgKDY49Sd%2BmTuOlZSAsEFXaBmXLwGrcfowEAXyju%2FPHpYyGa3fwczo%2Fzy4yas91UDYRWXjWt2aIG2iIaizXFyGm0WNPHC62vYBnBTfrAUGmOjFf89JDEA4YRbVJWJQ0a3gc1jVa&X-Amz-Signature=56479c6cb5056621b733bb4bc18f587f35a0d6bc2f5dd999f71fa77e9e4876dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5YZORFI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCG1HaPb1univb9PnsVZSzzGjYi%2FDl%2BjlWngXmTALjeFwIhAP9jkieecwSi6otMCxDMqGaXKcpoFHfNj4AvLa6bwx5jKv8DCHUQABoMNjM3NDIzMTgzODA1IgypVayKkC4l7LYhtx4q3AOzyGsg6u3vrx8lLtxp1TQSjA8d8Z6ypHEakNdzUqeSyBxmyB6i8XOIEOTXoIuS5iBtmx7UlKmNxdPmWtVUaBpmg6oV4Hi6mD919nbs4NLKy2O7AMDG4KXMvRuntkTX6LoYc0jOm7WNr2WRPl8euS5MtNhKd15hMTkbEw5r7Su3n6z9NbSoz0QnRintNKMTggFXVJuMEUDOdO5%2BQVYEYi4%2FmVLBdh6Oc41b8YhvZY%2F6RoutmWNfytZQ1nm%2FqcjO8Jsht9BXfZVtpWpX8FlBYjmBFdQgkJLYv4WbhLt1vAwUXdXtr%2FH%2FHbJBB3X6%2FFnv12rzT4qwjw837Kg4%2BNDy4BLs9mrQQ%2FbEmFo7zIedPDyGlt31dQsgaLLiCGB9ojqEJYHcpbRU4kBGmTW7zBzcCjFXZxNnfs80sVVp8lwadcSX35WgTpWGv9wNmxYntNIf49oo6tv4BGoSIwle5nIeqrQQFyAnN2rxqTdcvGpm52aDrqb2C0Rm%2BEWAYpjkjaIfqgAiOU5s9NjVCwq8mDWyvmeU5UpXdJuxKNENSbENo504ONFLGkj8QMkgWDgcwsCMQcksim9wv%2BU3jOtXms8qxaeiWpj4tRhVdswNXYL9NwWTy%2Bu2w0NgDsrnjSM6%2FzCRp9DJBjqkAdmbYVWUUOni1MBC4MXDZabHg%2Bpdbl3kKFgRSKgpqekjRQMtT9BPVNVstPM4%2BiHsp3Y%2FNONfW1vNW2CaE3QKCD9qDt3AiUNWhq%2BzBdCdlcylM2qxTukfrxe%2BPT5wrnx4%2F0D02JqUyazDo%2FTW%2FNU7V5BD8aMUIdndOfXw4P2STOpUw0yI50pYOntSYTcDmZWfHnKRjGP%2Bp8nAlUQQ7ZdHY2AHzVjp&X-Amz-Signature=005254ff1295bcd4e590ec57b0a95cd30e06a8b02c710778c63b12bf2762ecfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

