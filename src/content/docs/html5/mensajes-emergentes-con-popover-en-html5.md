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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VD45Y4F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX5AHVokQa1F94M9rN0np0d3rl4bWwqTkkiVNwRiv7OwIhAL%2FOxm188L5k1FPgeZUm1iF%2BR7l8XgT4QEmVexwpDTAyKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzT%2Be7Adp4TYNuVxIq3APbPnl3BqAwlY%2BSS1J%2F25Py6pwv5SZvZtgIdQaMnH69hgCV8WI8tKPX%2B5JyA8lkyXgbDKNaM4IO5D3tUvAOK0iNF5SFkZzL%2BWp6dkHeRWszGWnqlrDjFgMjQcDd1SxlaunXaW8mREmfEmo017DEFTD5Z%2BdsZTbvTexsSDdvOGDpkuE95GlP5ApH%2FxG1ifl5tSbUr0LBmQLiPATxkunwHkbfbnPqaK7Fz9kWFImt5yP1YcVdFqPlBTwIVW5wMU5W58b0Yz9TUNG8%2FHw%2FY3RHfr2Vzsm1%2BjyW0D%2Bp%2F6dl1IJbRBUXa6I0kLiG1V%2BFoUPnHUQ%2BRZHRnf6zaiHRSIZYXcZPGDE95QSCWDQSwC%2F12%2BtdYR9LL1r7jqeRCz5iXKiCzk%2BhsyEWXrU3wsxK5m0Hec5o%2BzVbc22JYTNBfIC3EwVMF7%2FpI8U%2Fke8a7V2NoqLSxPzKvnpzdCmkbgiv9oJGDaQiodO15celpbyOBenotRB8588YfW6QH7tJlyw4Js9ZAs9e3SUDVo4jnJHvFJ4pPho9k%2FZC04wqTt%2F9NibSjr7lnyHyQFWfIWsPvP%2FQHakkG%2FbNLEcCAv15kq%2BjFRPykyjNH3G9GMsG6mW4v6lKN37Q%2FMWObZhB5P1LY14tBDDqtdbJBjqkAZRZH6Z4mG9kXuN%2FiQmRcu0Fu5aJ6eHICg59qiiR%2FBbD0%2BtkENfFO7euTTPfokMZkl2kPL7VbygWi%2BYjA9JHvB9o%2FKZa1uWhH7yRt7B8O%2FMvbpDLPwv9mNiraARheoOZwTPXJaDmXsQV4JcgpvF1ia3KO84Dozj%2Brd3Uub3LdQsZhJn3E9CjFpaYpHjI8%2FAGAxD470BbY8X4CK3cHJFcszOrXNBZ&X-Amz-Signature=caef11c67f7bcbf3178da8c11928ca12f0ee10ff8ff460fd58917779a294a6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7X53252%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwOcfcj8TU%2Fi5tmkmwPy3UbhnceWL39yt1lkW22zDzLwIgfQ7Y0bFva51VAjk7VK2K6eWRhO0%2FBRBwyJ0m%2B51duKUqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZdKuhqDM7abiTzrSrcA4vhbK6UCh%2FFcqC3NMZmeTzlykbNL4sxbpluShQzV8gd%2F1p0M7V1TX0wJ3pacQ5BWO9WgV8puG0vEPASVpr8w4Qn4TjaqzM%2FxGviBEto7SQltUqn0z1fpO%2Bf5JS%2F7qTSbi63srgtK7zc%2B6r7nmFvnfdmdj0ak3wNkrgP0jZE0AB7tY4oKO9rQMPlDZ%2FFVnIFWd0RUAyqsnk3IlJd0FO1KSMMmplFndhwrXJBclIuyfQxL1k7as25BcU2Y447iLcHnL0FBew5Myq%2BoxtV2d3WXk%2FTaXz8Sm9llcWPhwBVkJ%2FhnSlk3RhWmI7z9GN5yibc3ja79Gi3ZT2CUOda2XGUK0CcdCvzMZQGDpB6QT1uG0MlDBVe9e7EcnM3mkfot4%2B2a5gZIuOcpht1Y6u1WpBv6mBTklfYURUqIePobluz3%2Fvl0irVLIK91e91C15Oa%2FsKImtkkoAsyxuCVXKnV1ujG%2FmglT143kkKW23xu7JahooK8D2v0MAyXqZUPqgg%2BvzMVKKNzDoThLR614d%2B980egxA4vJKv%2F0SSWTeKYILp29s9IKvB%2BF45yJXHJowLo749NZwWz%2F0Y7ZXwlE4lHWBPif59G6o697M%2FUhiO1sb6OXHMmqoiF9uw9Xs3YoDZMJO61skGOqUBbtQFxd%2BoSTRsHUQDSmKmMupsfDdS3YeVsQ1mC0To8Qx%2Fy5Y0srXFJor6yfpX0yxP5KZxmgwKPlN0%2FBEmuPjunDbdaJ2uYLkntEM6xZ%2B97s0ZCE2iClec8nPNgJldc%2F81r73UvCEbgGUXLm10yH2C1kgEKLntjU65V1Zhm77D1oLaAGXkKNyDRImUvxhHZ7hM8O18PLs1nns0R08VUWWrduVpNc3B&X-Amz-Signature=d5ed28658e05eb8770d5bbfa6845862e30234d61b711f5b2502f995dc50338a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

