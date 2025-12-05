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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDXKLIOB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrUM%2F7ID0PyZM4eV5ec7QeDeASwoZBFrc%2Bd%2FMNOzDV6AiAzJiPpX4hsf1VXC68Yx%2FFrbJh8nHO9rQdmJ86bwh%2Fy%2BCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMGSzHxizA%2BKo2OJUDKtwD9j%2BBAEwufNpifViU8b2Smbt1NQ1KACXb4PqyrCH5rHaa4jM7J2Itqk1IB%2FKHiiPdzOMFYwXvSODd5E4rSDd6lKZSsimFKmX3WUD939w7wd%2FcWHaiv4mkOjcLws54bRE14Iz1YsDLGjpPyDCqg6VxuXcKs9xYYPyYHnkmawDcQ5K%2FJhh8qHcYcBrZCfnKNC9kYHRkBfknZete7FHb8Z2L5yhwTu8Kmu8zuDM%2BT2Q%2FDheVULkcrFxc4x6QTRGtVFRZb26DuUWQQQa7Dk8TobFrkbwzB0iJNpRYkcLKBM%2Fy%2BgeF0cdrh6ujTS5X%2B3BNjUxQxvQWfw9rhmtYGAZWpMC%2FFQz1ZBJaN5i3VAKYQNm%2BAhp%2BPo1AdjspL%2BLL0rbPsTh0v7WytEJAS%2BHdH0JTkNJFwHKCKoubdEYJpSaoyYxWSW9%2FpZuS1SV%2BYj9CBoPz53GObbCNEu1uljV%2Fhn1a8RUSMdrfL6%2B0fTcEhoJXaODFHQXgBmvvvfD6KH8ILQUE0DImjV60zyuC5%2BvI72w6A3dS6XJTKGj%2BqfbMMbvN3HZJw8w%2B0%2F8pYwlKemS6bY0UConqsuT19VCbqWpjtlVOhZahhBv7myVIYW3LXaS%2B8o3Ss%2BKzE2Y4CVO8cwyF3dcw5q%2FJyQY6pgGAAAGjOYmyYx4WePHi1D9GMv3ZA9pgINPa0PlhcFuqu2ZMVarkg6gQ%2BbR6c%2B1qWESJ6vqmHw2iwJlk0ig49HM7IrTVqxBlMUgo32p4WCOpGuLouynG3iXjnyBhkMTRjSR0KaZUGOT%2FwJvz9Q3xLWYI3N34Dxc94Tqj6erWY6gYfwqv0n7uBDVjlIZeuRAnQOBXviYEDERzanEOoypj9J3PYurY%2FCL%2B&X-Amz-Signature=aae7655cd82f5949c412ceb702f908884b97d33342e84358df48e9c493dc973d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNDZFM3M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnlT8Ri0Xgq0IS2kBNyS2k%2Bi9ao5WsdJfHVkKEBgREfgIgHJM71nrqZ8Mcems2waQEwLxlApYvb%2BuG4u9o7DvqSBsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAxmICNR4QxrfOcaHSrcA55%2BSxKJ0yE52T%2FHJwd%2BysBoP5KOsa%2BTc4LxTH5g0MlVKUGYRNY2P6XDT%2B9aOF3zHMFGIwMp4wW2uh%2BbwVeEXZem4%2B50mXs%2FZO567159xqAqJwSqpPJ1SyvoRCTFDcr8xlRdTu7CdlYTym0cgJp4dw%2BCVSqw5bV%2BfTcOERIhpOrHCjHMQ6aOdwa7NpXbWHJi%2By17%2BRETF9n4uIHVA9YOLbL4qNqU3fF9c%2FQF8F%2BvJhggIBYjXtD2Mgx48h1twxoOiI0Es4aHcqtvuM1PdVy%2FynpkRNGgqYInvqnIHBnorfAEcCoXjHUL3S60%2BgAyUjFX%2FvWHtUcKzLWrYb3ZB4XAej2IP58w6tRc6VdbwbRZsHxc7X37oprdJDrYe%2FGJd88cDGRSCIT0UfxC9D%2FVgNOFLXLNHFmjCsLVAMajB7zi9iY%2BQAt7M4x63ePti2EaUTG16hPnZpRweHwKgbt9CelwtUBvn1odhOeifOUS4me7QJAGtI3%2FMmyzSpF%2FP9fkcmnlyZTpGwRS6T6mZSfScfOooyscLgLCmZLGluyUw4PBJyQ5pUH%2FnIDWmfW7E6YMZdT3s8OB5wsr%2BjVC4ltaEeu3zeiGKDQD9oK%2F8vh%2FqmIHNTsvhlkXawoR9pGxTZ%2B8MJ%2BxyckGOqUBAGq6fgLtGU6FY5el4EYitrjlNgJww8G8P9Oa7VTcRBjPeMD6c26Omgd2poHgy3XOg2wDUYl64H%2FAoAk8sLJqbKNzZT9Pct67NdqLu2rcnEz66Fw22hS9qnPjHgamBqm2aipRiyYwZ%2F0a4T5TQfF7xONmXHVL%2Bu9SyH97ARJKUKAwqBcuj3U75cQ9YSzHuuXXlauztkX7lhauixZDUq2HDnD%2FUEg6&X-Amz-Signature=f5f0181e71e0f2a4aceeedd8fdd7d980d221150b9b8828997f6f8732f3a0dd99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

