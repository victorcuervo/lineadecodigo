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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUIWNHVY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm5qrvSuW3eT90pyKxMMrqjxf4%2F6tXi%2BT1t92quHr%2FUAiEAwARaUQIeLrCU2uv8DEAlLQnX8SUhAg%2BfjaD%2BbILbGuYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCMi%2FgvGFBaDnXDNircAzGYqPm25CR%2FbbJ%2BI7ASqJGihhMNkSLbBz9tNJxWCboItARyP8LM34IkbL%2F4ZCPQ%2Fpo8Qb606BzqaMyThBtUBzU0NCXgIzuSqQwQzTWiBbt%2FuC7zeRX4KMj%2BzSzA%2FaJXGOLvQ87O6pzpMzLIhIG1OgcRe0TKTKdl97ZlrQ4CVcQWGF23%2BiDJXWA5Nd1%2FupDXcjJYARc%2F9AB0dBKDUMm1aO3koEd6iGb7EpXA4oCbPo%2FCDXmilF6EKf2inef43FAFdFOrNJnsndo9nDQUlyzx37mGPbnDQEhyOe2z7TBpwVqMdwSKnqzGNjBdhnX0BlmvXxOEYcsKGU%2FGfDhGhugBsfTVlZrJvLz7BM%2FSbENK9eafu18jTfjrAqax9RiuHXwGKae2WpfI3q7yMFmHbhNdv%2FLvyhiut6niEuPII%2F3IIyIsRRfg33H2cLdOOEqcavfUgTF77J5ZPgW2VUj4kkk8rwQw0tUboQPvddXsX1h2xj2HPcZ2ykdDfpjq4BajM4yRXuJDuxTydc3qT0hN3cBqEa5CeWu9zGDTWO0avc91qvraxE1A7Do6AmBGz0eZgYVUcw8OzSKKlCtj8JFPNhxcV58WmUR0etMYnCnSUrh9aYhcDjOK5%2BU%2Ft4tfdyoOMIa03MkGOqUBSlWbFHsUBeG8yuApKfeFqGk%2BG%2F6N5nI1BHCLW%2F5tMD%2B65gzOiU6JozONhosyl1%2BPRHtBEYiay74g8vhi7nptwXzHGTjFpNVmXbhKHtvETZJxmMOdZ9sMkOxg9Wlhxndim4vL2t627W8NQlbyBwNKgWrVh62UvgQn9j00Ok%2B9WlgKSYDAispwiuHH9ctEL%2BiLewZfBfAvKEP0PzwiQGV%2B%2F%2Btuq49j&X-Amz-Signature=17b4a52135e0367195a9a98edcb35bfb3733526cb748160a80b1f00cbdc35c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N64MD4P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUQ9w2pruhAjKJRovTvZSDEy6R2bIW4GQvDc%2BS8UT1iAiAv4RhJ2VUZZ%2B%2FM5eAr7Vwcg2mZFnx%2FDpBqIbSJZQ3DZCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BNkoeXuW4hRcTiHiKtwDwkZE7PmqlYVdIHe6JO%2BcQ6WsqQ5cK8XBUf8ATvZo6Gkti3vJ2OCC9URVR24nOiB8T%2B8PWIA%2BGqgPvp3zh8br0T2Jq07TKbMZypPr9Ww75O4mihrcWHqfInapYeCXMHKkto8gfiuK8RFE88RZov2D%2FeP1%2FcDV7NzYBwc%2FCgqz2K0u2X09LtmMT2DqVooPZluo6HZgMvVA21UNwlh2GdSt1fbHtqvCbPxPzHH9DOGcZbyaG0LLX08Yaj3MDGrSfO%2BR697AehA2Zde9l0kPbhxvTqLO9HoImjyFcP4iJMJl0h98B8oHk0PXPvR%2BaudRgZqYUGrEJpIJnjQ2Pnp%2FZxPB6S%2Bz5DnHWDX7Sp3bWrsvKfdF6XLOPZKxKJrZRY7J%2BhhWQ%2BAorsHw6bq9ZlPC22qiyY6sSeJJeiKxvmljG4fL4h%2BonDIfZTHPZrG7gPTh%2BK7AkXv6bRbySqqI8dyJyudDC1qLM59FVoyoo5WzOIB4B4ZyEdPZbZ1VatXpK10wVHXFNpQ2Ix2qqGwlYB10nsjLY2O6KYB%2BJeHqsZJmXGDD1a0qMF07Nm2TjB%2FyTpIe86DBkbu0VybrEfgkLPqcBOQ4yxL%2BlM5sACIgLHjWKSsw7NCA7PH7vmAdpNF0fIUwlbTcyQY6pgEG0xJBxs0CdYGnnxEpzAx1EY2QD%2BkazZt2v6fLOyst1TcwTPlrfoFrbTzzvBlT4vrOtAMwC8jYYHceXH0awiJmFFdgY9Y341j9YE8mAIlN%2B%2BWfTjX3HcnWxFv2glUWfkn5gPzIsVOD%2BPTkUcvpdUK38bJC%2BQHMxmPwqAh77iuWMzf%2BTSONc65qfq2wgX%2BSOguGwd51XWdYCi3CwsRICzvHYyo5U5%2FT&X-Amz-Signature=0afd8bc9e3e42d766ab2c368b99b8e1c008d9d53259086ae3dfa77b1cf62af4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

