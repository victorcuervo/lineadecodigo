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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NEAEZLL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLuTc%2BQzPfFir4nZ4wuXhXXwDoV4%2BpBRpeLKJ52i0Y%2FAiA3g60rrVdzoFygSBiLkRSrMrxAdC%2BTKw6UmzU02is0giqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCkuZlgVkjfgN7g84KtwD7WodWKZIirB98TumTPqJ4GNhwPaYC8Tp7yYI6qb3zISZCo7PTfIwP4iDRElM6BnvKrcjhvM1dAqdBuVl%2FjcNv4QZxUEEskINCOpugmsItWhkw%2BU1oem%2FiutMIUBwxmgwfIIqnWFqjmXW%2BJxxVM2I1KU%2BcaEoLn0R8yW13GGdYj77VJAGbO%2BUtujSiYoSoL7tYoDPSN1weOM0HeTmGvFF9BdYIVv%2B63Y9%2FIU4FicDu90dCnHIGHyhw9ofrh4x%2FiVmSJBpL5O%2F3Au3aALJ%2Buyalah96akzwaOeVIpuFxvN1Q53d%2FGoEAIhbad7jzo0DpJsjYuYCOYtVJ4rKDqSRhCsXy4bdmu1k76r%2BbjGWtVRfuE7U9x9lSOVWothyqD615RV%2B4nHO3YCYlt6dvzCFnbbw8wREJz6F15kYX6R6%2FmK26IbMd%2BoT%2B32K5QlEqD9Hlhlw2n%2F19Ocl41Lu2GqpCIWwcN6Z4v1A8dYZp1zzAs6BaCDHoYLALhhXcAbeKjPhFdaDsa6m4zP58kk%2FgijjM%2B8%2B%2Bh7WXEy%2FoHkWgTyOa2dgZPKPKKbbCbE5f8nsxcgca5cjWQ6%2BTYYM5iXPXx1eub%2F6FfOAmrcQIM3phutv1hwApli4jw0d33Y6Xv7%2FR8wwNHYyQY6pgGQHpcQoIYdtjGlAN66zXDG1edDhRCPuQ4ZVaLDYSQQ1YEB8RcMRcTS3AnqzzmCp%2BbCceVtuUJmNKz5XrYPe%2BRpwyl94ctVDmZCFge6YENlfEZoI%2F8EKybDNB%2BwKTPJbc%2FGKsrT5PlFLRKurmCRmjUeH%2FaMfl8LVB2CknQlfxZdyrcJukP634cLdl2VHbasGQfBTyc7RSy2ygdHSonh1nv%2FaNFx0eGM&X-Amz-Signature=02b81ac051a2295e7d42d1224098fcd7d677d67ece5bba0fcff238416d90f29a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3K4MJAM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDY5Z6hPc%2BUYKTzKZ7Pb9X7NfAF%2Fhf5dDqdZQxlagvHyAiEAib3%2BrCO0pdHwsTnwIby2a%2B4geBBS9dATfcHo9Qe8RnwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQZqcV1bBJDEP%2BneSrcA0elgB%2BWCabU7Mh3xTZc%2FivkF1%2FwzbKvm1hthp4AapqC3Y2whWr3JHVvfgpd3Gb6NJhU4X5ZgwxSYEsAItI7dW%2F%2FrpzizAc8Zwd3N0ZqX6Qn25zPzxOJi%2FPKz9UMcPKpbDopKPUytaxW2UwjXopb9imb1NfCAsMgOYOz0gVtzfSs5pP6xxee3XWrlAfSx2nt73kPoLd3V4yzZsrV6YE9mgTfviqpHP7xiBBhO486oHods%2BHiKnyT0LLB6MewqtBkKXx8AvL5LNc9XbljDic1LXkfI8wGlSWhfxX86FUW%2BOQA0CZk2RtmDKrYM0Mdg0sbW1yWVdKwSdfQv%2BRTyuG7q40Nv4yfJwCU%2F8ewJEOEClIn9uphGkAkTMBLkfgzc91C5ryKMqXyg4wD7LApbPv%2FKToIcyBjTW0trxLJsxlzY3ieAyNmo70nAT5ijAnKHwFYE3eefnaVzA43YIv%2FUcBoW9W%2F3kPwZ%2F3ohLnz9uIv7P7b%2F81t05oKeg4ApBtL2TlFsASscDj0h4OQAZGQPLsz9hcEAW%2BG8s3ufrAABksebmfy9Yyv0L96jt9WMjk9gb1Z0bJBydt0CjQxL7jaaKH4GBpGcEY605nXZlzirtg%2Fxm3m6GbWMh%2Bl93f0QAoHMLPR2MkGOqUBM%2FmXFdQpv5SxlODDpNbdh2KUEQmCXl%2FhWjQi9JKjrDqBdqx9nzH5AczSs3MK53hsKiwRekMGLrDt05zf4EoFokVVzMAyZwrA1BEk8ua65mrCsWR1sLSfje6bGsSaJTtf4nDKgrZJJCdaPk247CiE3s9KZ7mrmOfGe0LP6hFyxZZ5QCyX6WTZT%2Btq8aIe%2Fz6fwMOXk%2FXhdLv%2BztJ%2F4k6RcQLuCjyv&X-Amz-Signature=79b8621e54350cad9ac37a5e7a25ab495acd6322d78f403e3a683ae1909583b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

