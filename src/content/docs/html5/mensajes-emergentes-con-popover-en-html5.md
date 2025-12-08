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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVHX7FN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBq1dspq5n7a4B%2FUCEdeplgOinbiIfmMn9ec7ukFYE9IAiAiPj4rvnbbhyExapoiRzDNnTxHoBfxJwBCS49WkjeMkyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyJ1iJ7Ivj1i5I1pRKtwDMptrIHdeEQF%2FFJ6vRRZ4Cyd%2FI1TuerVhcK%2FOGxs%2FjEU0j8CX6cyj2QnR%2BH7vJhceYfbihU3QOaO9kK6JDI64vubVS397Q%2FmFcvJfNGnYHTMCq49aFvs1Fx5k5iKtOW7653zK5nqvnFvrNM%2Bo%2FlUImMI3tzWvACnvnB1xJPqYaMrIjOQMP9Slfq37xc5EA%2FuNbM%2BGO4f7ovo6KYKAnzhPY8tyMJ%2B0YNaoEZ2BnkZE53JoJEuAuEZ4Yn13EKekukv0t2rE5w7pQymBzoO%2BSex9U21M%2BfN0mb2o9L4hQ5T2RP8RBeZaLwni0cB8IqWighLkjG9OONSfWItepnKVmHqg7swnXjv8JKZAXgvSMUVHDDpBn%2BwpNT%2BlOS3Xx%2FbkkyITjAxM1nPSU1m6Dj4%2BGk41VvrweuDtmCcVdzGfM67QiNlfdqKSeo4K4qvopFy4bK6ozgutg33GrsyfdlKU8CvD%2FD6ERuoYkT3J9MfuInQk%2BmDHdS6%2F%2Fz4oreGtCQXW7FmhG%2F6dFwiZt7bnpQb8XjJq4mtGiEt0uVuF%2BaD8ThV67bo6r6n9gLhs4EzygA29uTtI0Z4wOA5J2u%2FJoPb8JDqqcGTX3B26MONlX2BVMscQKFbb%2B6%2FhLKNcwl4iSM8wgfPayQY6pgG%2BnMf4q12yZEnSLJUwGWMM33AOZyk5nHP6bfQlHlikWqEAfLO61Lad6hxNVAjc8X7cDfsiKtpbR%2F4NTtWVDTeDx3%2BdKIbJCZrMWPB8OzwnmmxCMvR5OUYlfcbhE4IlQXgZ4XnuQdtnp3H8pfjPWSx8LLAHxTxgunUQOTYAMMB9MUOFVDgYnCiDm9Zvh49O7Ks4vmIZ3WDQdBTr%2FhqkIy0w7mseBEPM&X-Amz-Signature=2ff9462885f602cb4c317e181307aa14134ef65a717c003c1867e20b02080736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YHWLFCA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOnxWT6ljTNUh3yNYE90MlkKrKE5Q1HKdacY4Tr3QM%2BwIhAPsMNmVJTPTtwrrwcvNblQ2dRtCXxwu34eEcD1ctAYzrKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXvyqSL2s1vd6cmy8q3AOyqCQRWVP6QqAKFttaA%2Fk%2FedJXRZEdpDDAcsj5w%2FM0Rt8HN2%2FIP8sRtKUFzRZjj5bTIemd5kWyC3B7y568so0uUUuJ9EoGGQb4naZZ1jj8jEtNb11JLz32B6Bgw%2BEYxw5RYWl7x9BKx5iB6JK1cHkNz4ZSR1UR8HIDgbaTYz%2FzwUmvpOvdv1Z2mLOJPjM3kVoJ9DQnQVRPJJ3eckct0Rd2l307KNhDCNABSkuY10B4uxpnnX05eanAkfLrFG%2BVOH7g94P3Jp0pphEUjUNJT3NAWCqksyESMIXgeSXb9qzr%2BcvRFRW7NI6K1my31NaS7gazspAvjmHpAkgCgrwmZKjZUDtlT%2BXAvBhIArgZ4njYYkvUKDAdSH0WKFKNghAsCo5Au7f3b%2F5SkT%2Fd84ZVf8v4hxapLBtbLHaSoeHKexmVJjtijz21s4kg%2F2zwlyiZAeppNWkzF6%2FYMcP00OJP0Gam62%2BxQn36mhDdO6ejTJgJzGUf5DAY76urfgBfX%2FE4TTDVueo0ANYRSOMsSkI7Oy%2FPRNL7cX05ILl%2BnUmWJvRg%2FsfPVgsTsnX1R1VkbZjLoxwMnF6Me6yqoT4dGUJ6%2BR1Po036aHzAhYa9gbmEmPc4IHcmwcG4W0YluJrcbTCl89rJBjqkAXRkVjGIUwfMY1rqWNVDNMenQppL67ExTQbszdHDhWtQv7l89YvjRkssjJPmYYbpotiu0Te20MEE1AHj3NE5SvMJIb6SDKU0oAsTLrtMiO3syxf%2B3mEFXz0Zy5j7Uj0oHHX0e0uY0XXh4Q%2F6Rh%2F3YCqjQBFH2Kcr%2F1OIsZ0YBUY5i6zL0Gsd4%2F5aaw9QTteFKoYF4wXuqtdPtp0SWrKdU%2FvmxWCO&X-Amz-Signature=504b2d667ba33f615ebe6edebd25050570b2634f31e725a8b64d8ae1833f0569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

