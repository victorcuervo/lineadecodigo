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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZNOLLB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGYvbwv%2BAnfEWWdFyxkaKf5NuXEqyzq3pbwjwa%2F%2BwVNAiEA7%2FOHJIHcqvO%2FO%2BFqZJUllR2ZX1K%2BtbCod%2FheAGZunEwqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7kGXQg6g9HsbtJmircA5zMdFhAzBTk1T9aS59MXyNj3FY7JPgHXgyxc9WVA8lPVfCOi%2FDZVyOBk6tiH6att3XB95Ziep4%2FDAKGSTyF0pWQyDap4mn2koN4MBaGn7l3mLeEFKVlAhBG6TU7sNI2YEpt2jaWnzS%2FlhZ3t6JHNGxHq9cYG%2FZQA9E%2B6Ru2PUVeKTXNALMcVrmCNIXZ1AK%2BPOWXz0TPURQntF2n0HhYOjFwnpXpVPHADm4Gd7d0hh4HCsP9z7ZHmyGRZP82oQMwGKxzbXpz%2FAa4EsaVCVTo3tpOzD4%2BwNAlJ3PpUKXiLU8Xc4weJ7Y5ExreJMt9dglIqtJhERrYOMy3joUS39eLfZncZTaVlUhWxlwRhSxThcoqDCx97JhtbxycAdL9HbTcHwjSw3wndWsM4QBo90Eir8C8lOXv3XkGHduABD3wtavnQhfOxr9GqwORlLDypeh%2FiYrYvCmayuLt9FmrZhp14a%2BCYV0M6RQpFWQ%2B8oktsUeu9xQD%2FPp0SDhOeRxKdlmedVO291Re%2FpRco%2F5GEa3Totu5MR2E%2B%2FyjuhkPJ%2FVBbaaC9CCuUs%2ByLIhhM3U4%2Fvs6U9x8Sz8LlmnYD8uvjYCXp9Afk3ncVfZjfdbKQm9wrAQ8fvK4vITXZ9Fbwc%2FZMP%2BE2MkGOqUBdolZgM%2BSe9AG%2FpfEg58GsgqxnUX3%2FQDsaMYG8JFLqtxRgQPRk3cvJaFvrnOlEw9zUP35Ag8ZlIrtXP2VnM%2FJ6bF8Lxa%2BFFFZ0aRZ0naWr8B6qbtwJmdVUwqnlNQOGax2yAJLDO188CIyOOh5jqnT9LGlvqiW1c0wO6LwcB5ATBDvIadONekKnPE8wxayFFKOgNFaG1dM5IqQv3%2BdrxDXVvo31CYM&X-Amz-Signature=21b66b2463a63fb698aaf2c4e6ae9a74b56d6e39e74debf70fc01335365f3b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDHWWXUD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4Ozoe62OmcPpbALwidyGVXM9lGKjxY50HBmjHVKo%2FcAiEAizvL0u6Tcntn7MtJgMOaTAX6%2BqPBpT9dZfW3D8gAr%2BUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9zvodVFLhsJ6ypdyrcA00Dv0YZA%2Fecl%2BBnt%2BP8MonijhvAYVm0IRU2SWcaFaAu8%2F5%2BzN0gbHePmPWcat43qQj%2FWN2BKqSz2sdhzUeqpug4M0kJrY8WHGM6PjF2BrPyzFQRQgChPMJyrApZr1Bp7fw3SzpfD5no914i9HrcJQunGzI3Mmugaaz20%2FRvbSNJ1P4gfpWAAA3eStOdTMcmkzZBmCzPzpbbbFHQmMMp1za1EsPmnNLAQikxHbL4TeHgK%2FekS2WgH1h%2B26Xt84an2B%2F9%2FR6QnlnM%2Fq417MBXzUTCeADc%2FFT%2F%2FbcRdsq%2F8yqvzJhczR1TVYsYwB4awECZH0M1Aqrl3yUGV%2BaibN4Yhot0ciWpWJNROG8D%2FVsLm8scJVJK4xq9hESd%2FK%2Ba2j2%2FAWlZ11%2BhNVVnddEAMEUTi6LVJVXl5cCSvzvsEnfADo%2BwWPacdtHtUskbuXWsW2fOCUEbKf5D7FAuDmbUg0EXTLrOcoxWDjJQTJ461pFsaYCyZ0W7wQqaFzJKGyDJlIyoIVcAuI9ZVs06qqArzJD3vL5G5sVC2RBDFrG%2B0wQxvLmmV8hW7qgviG21o29B4giZSUkSycUM4F1LeEpkrSTtD4SWuWrJe6Wg61zDfGzyKQpi9Snw6wtGXNq3w0ndMNiE2MkGOqUBHRKVeU6S1FgWvwhfKdY5POYGM9wkndvOmomLI39U38OOtLl5MvuXqOhYOXrjrT%2F943qWSCTcGuwoz1KthcRLUF68KZEgeVkWGj6FiRX9KZm%2FHA%2FFd8GpAuKFVpujYRAmLtiGxBUYd%2B6RjvxaJ0uk1caAqnANuhsS22m977Fechcc%2FTGSAk2aXTBxys4YkJ0IgGHuoj1Q3RXcndopzDAa29LiJPqF&X-Amz-Signature=769c6065bfbe32b7b7627117597d617ac7e0fd00d077095e517312087b3cb6ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

