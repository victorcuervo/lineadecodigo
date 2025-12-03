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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC34HFS3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD1PFMgtu05H9AWu8p%2Fnj%2BgLxTqIyCq%2BYJ5Zp4H4NI6dwIhALPqpJhYJuUMK6eFYTSzSxYSDKdLU9xejC5BrA62d2i%2FKv8DCCkQABoMNjM3NDIzMTgzODA1IgwBOD%2Fhn0wnN3Nh3bwq3ANeB%2FC%2Broq0hhMLngEOyBEL7eN%2FarOR6NQHR3Wzjd5Qt3ly3XuiVQ0hve1%2B9y%2FpIePonK02qNcW9PcPbxISwMjONwnxQjrDt8MNOS0glUmzdbh8p1YAupWTdY1lJ%2BwQiWR5OhCAikXr1Yn5KZh%2F5veKKAw%2B4ulvViUNaoS6bG%2FewKUs7am0Wd7lyHJWZ9CyqtqJxZKMpjq%2Fno5gdd5EhE0tVy1n4PX1dGe8uQg6n5PURmgYDhTFPyQjRacYomwiAM9rGQIHgTzFwbAtaO7%2BZS0%2BF8wo9PoWnnIS6fWKD192vKM3LXxCJQIt0bgKdsHGr6J3VlHXnTm4%2FTuT0AznUjQ6yoILv7%2BFSaFJRuURLkWEd3IHMw5RGgeyBp19R82HS2SulLZjpGw1I8oRnkSrUrOJIdiYAau0HDLhmTXPiiEYlfzL8alfZtdG759EqQItEfXNlxnTXUFUqpPL4PIaogkCSt2%2BlkbavpRvBZrmGZ1r8YcLrGCFf0eRRLq3gJkL%2BvWl58hWaIN%2FonO1HmjDEppby%2FQ1X2wJ%2BfPKOxZZaqLIZCszVWDj3ZTN5RHW0nDsmIFn4i18H5Yo3JX9K36f%2BgsNIVr019unEOvU%2FgJhsMR6E1pXg6DX%2BELpYhUBKDD51b%2FJBjqkAW2JeR4WF%2Fid2xFIfvfijrwvdCjeOWqEUbKnsm%2FCDX2Vlfw%2BP8Kfiu3LGgXwyEAm4Tx%2FxuiSwlxzzQ%2FcoXhf4x2%2FT6gvZ2NhGPWneZbOh1kRwvkk7mZbkDCM8UBwR%2BeVoYSvADzVCj5Hr1S04ojLCDSs2tKlLDxaDfIvFgbV5txNCzNbZlldn6uptNwUYaOU49GM5rw6ftkpSrRX0rLMmTqzpgN6&X-Amz-Signature=223d2936aa80d513088237ccf941f6024c122d32636cac18b0f5c2edc7bec5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRCAG6H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIBfhN7UBnxI41GFfsXIXSz04rocXBw93OibsE5vo5rAoAiEArXpjoyM0E1wIh9KzrT%2BvR6jwQdlroPAoLnJL1lACy24q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKaStk4L29J5bHYRIircA%2FpJws%2BESkwoB41GWeDTgsEfKSk7UI%2FQubyFZeZOKIRQJRbVu5yp4ktBoAwX1YZ33fLAuUgwkWE3gmRRQLqx20SwLTsQxskY9COzMRqeKBzIWEBg8k2M3m5KVTRg8j8B6%2FkgbZuYuN9i3vwgsAjad4A46HJ47N10pu7OlXLam0FZAiW2utbF9zSswKHWvXZKlKBXTTAlt1lXn8%2BFRR33l1WzPaBWJXB%2Bd2GLIqbiPjzHDZkesaAatrpizh%2BW9GBclK4hgH47nfNPFy98DS9AqofnkOentDP6hpw4fJDVeDIV3WPcNLTnJ9jM0sdzj%2FNVUQMJQUXTfW6s2HE%2FuAU3m4o2iDYhCevS1ymyWU0QyKdY5P7IOegtpVS6n6n1rqEgwwLKyur%2BEEpEoo0%2FgqbZMCudbdtUu8OXH7Je2ZirKtzpMKuh8cRSC0nmT4jQ2bYbjg%2FY1ddj6Wv9LD0w3oS3CFjRTw4BwWwGIUZegornccRolRaMrTZccvnDMrK4AzX7er9lw4L6VQUHjR8wbODnAwVczfn4soNOXIBlNus2QJop05lWjukamrXQefrq6%2F1CXrdalEt5SVUoBWj26lmb1n%2BAUCruspOT7qMw0RRXG5CXCgeErflGfsGtcxhkMN%2FUv8kGOqUBdHve9RR9STrHVv%2Bt7rkxhW438HYcy3cqGi2uBTAmhVLU%2Few%2BIid244M1ktfKFIVJlWgoTszcbs1OCcqzf%2BaUv6HVBew5kbXTFbYpPSEneCKIa9EHWY9kx8A%2BJGctqWCQyRLexmQDrca3Xg9AjRZ4zGIlnCxEsOe5gVlV5720BfekW7s3P4fgo6yV%2FIpo49uS64ZwikZx34ShW2WRRjbjh8l9wpU5&X-Amz-Signature=c618987ceac52f7dba7281fe45589b4db1406243e49a9cc0036c1d41eec3b776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

