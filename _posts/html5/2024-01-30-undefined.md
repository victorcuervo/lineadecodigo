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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KOODAGZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDDoelDyTDJzhYaSHZDu6ptCy5AodWTNQ8TU5BATi3fQAiEA2x9M0mXAKtlL3kiNNOq%2FoK5ikssuUoca%2FfxOw5Zb04cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIy7hxnsFzynatuMoircAymcjTht3Itv5CPD5%2Bzo5ypQschacipeQ6hLTevqM%2BxSFu6vXTYKhtaEmpFoeF3AvrYWeRsNZW5WpefmIkASI5%2FXe4O8MPof8eTytsqeHAcpxP9LAwFA7fEkVDtFL21i2r9R8gfLLUbjlMqR2HzIQbqULZ40%2FO5rEu%2B%2BX3FwaXhM5%2FA4cfIvPJl948P3N0TxpIvOio9rz2zRM66WBMAlvedpL7zoYNRj692r%2FrsQzEzDhmKLAlGv8YLf6B0JszLni2GKJVIAFC6TzmG0%2FR1GZU8YQwuYIsf7AOFsKWo0J2gK%2FOv1LEiYifGoFpI8brDGfvekf4MCP%2B%2Flq7sMiydKuMMKbHdNE9bpNJHEJO1pIgIYFUn2vZtc%2F0nySZAdO%2B4nExf2OL9lroV8xd%2Buq0kJX5khM%2BNwbgtPBDLm9gM9Xf2CjdS5TZuIGV4r2AkuqGlboQBLoBgnR0h34DYw%2FkkzcRFPiZi00APhj33iLgtla8A7N9R6Xl73ho9M8GUqu0g%2BzOEc7im1MICMnFGhkVAhlKvmzMHzoXGtLxV%2BvwNlsSR%2F6xTTwdQR%2FEKa%2Ffg9NmFlheVEOHk1USb2dI8ry0MJDgKJo38wUxl1QCm0TctEcVmwvy9z9%2BV8pZbyX%2B54MN7pwMkGOqUBy0uzjbaPCG6lsitpPDRd3zQffH8HEf7rAUlxT9FpHciHYTdfGo7vEID9uSKd7lg40lIOjP%2FcMmvyzIELloAiH9ibhAezs%2Bktdkx8IUbq3RU8L09VosWIXrIyBlZDoMY2g%2BaTJxJC9yP%2FqZkyI8jL9rQuG2Tso0ANn4REPyceIRHnmxJfORFm98T%2FnBNkNbGk7WtTOLwnScZT8cvjWA0RX%2BkC9cuA&X-Amz-Signature=1682459af88a617753229bd58570344b4a8c0616b17ec7825ee7dc9880ab965a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXFOHDAT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAl4fFY37NWJ54HdcmuE9wGmly%2B1HEK6dLfUtoFp%2F8OlAiEAnTZVAGFVdd62A2nF80YLQhF5DWqSu0PBX0XXFqV0ctQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGzC3WTlZxRwx%2Fjj0SrcAz%2FhPh4xOTPZp2wIOp57BRdp3Mmu45knczQKjoQ1rqBgHtSmtqXowBWL6YMRXT8Y0Ixw%2Fu5gSTDQmx95mbBgDb6b7rrQo6ctNOaW%2F4T0qBTNWZlqCfRf7LIqWYR7jTOoZ%2B7naO1jB0pzygnEOI7S2GD3u5ED%2F9onxifjtHGsStMzmkAExU2lzpmh%2FnVZRRvf2Rw2jpW57oMECDezYRIe5KYT9MOatS4wT47q5A6HZ9AhTsedg3ZbOI0BxkSANzYteAuZQfjRxNg6raeT28p6Yv4EhRrJeo3%2BrC1qDKeo%2BMnDS2oqubKkDbViW4VKESQkmhiaiFJBtrh4%2F7cxG59HlExkTi4R%2BU7vQRjj%2F6SvXAjW0K0GR6p2PXHCTM6lnabYqM5KFMYMKNFlJv7TfBSVhAaM5g8lUac58iME%2FkD8aUsHWGofLgLZsU91viTbvu%2FATmNGB9OtW062OFIZrTTQKBjSSOPhtE7CWBoUfMRx1GvAAjd2ykcLiR1ZIgHy4cI3VVNbCgMVp8pOshH%2BaYCln45mr7%2Bvth3srSrgW0r31n2%2F%2Fak%2BN0yHL7%2BHn7A1U1GXSZPovdChHwPkO6f2%2BSo688wFM2clPiQ1WwRTFihRaWc26uqPQQZaJfToJ3vEMOvowMkGOqUBnRJ8QXW2WKLQvCC%2BWdHPmnC9s2ZbALhoHdlQ5hIPIjoJiEwt%2BzPDhN%2BHkzBErGfixYyGtfyB4WW0BUrcR2L18XF62URN8Kj4I909hWeVDhUrC5sWsh4sasVy3wR1N6BnVI6RlrtiTdAsBT9PRgPamJwEYbtSdSIitJ7OjLAprh7WDOYqD2vf0ytoDEKA79Un3duPBYXRVjXeF5zRE3SkeOiMzzEH&X-Amz-Signature=c9bf1598538e7e66fba77ddfa6441b5723c1dc85b728a3e1c5520ccfb95bb602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

