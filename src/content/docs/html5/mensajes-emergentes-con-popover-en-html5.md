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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BAZ4NI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETHXdF0j2RFI6VlmajGuryj%2FvLcbD6PT7H%2FFt%2BycOpwAiEA4yrBoSaxK60X2PxHCaHxZ2xthXS4S4TPAaWSc%2F2j3f4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxJhr7hPK3AeakHICrcAwO2616mgSVfs2e02MxAw8xk7ctLs2qMsSJi2Y0qWLLMT4MQJUBhkDdjjbUhZI7%2Fl41sWsTRFNk4mys9Ftz0aQTKKVLSr2PXiw7AtgGiN8ayD5dwg8IXL32fa1jBA9l2cNGKbjsucr1GdbL0mb4xRBAE%2FJwagme53kC9zoKvCBjKL5OsiG2IsoAiEM1JuXR8qO1FnA2jWjx8H%2F1fxsTQqQpUsBWrrLGzl5Th4IieBc6%2FH16tREzRP9LhWio8sO6HAjfMPZ%2FcYFYwioHvMrrRxOkIQDaopLR6M0billj0%2FOF%2BtiBGM6N%2B1JXKeYlxsKs3xQTqZXibGxJaiHjwcyFeM7cEACAhgCo0EbuZ0MkOZpO49JUyLYBEBPaWfupXo7q8DQjbL3CtDqIv4SfI8ZngJauaAxwVrz0bQxIj8R1Su8HHwYz9FjjRkk2tthBcc5R0xOxIxzIDJKdoJtRaJwcJcYnlZRotOe%2FbhK0Mts5RqbGpmWIL5VuzYX6GNmGrPRZYqM%2B%2Ff906viFp5%2FaYVqqB3qLHxHpcIPIdMJ0T%2FelBysxACEr9lf8zg89mNEAjzfUyiIYaNW23patC7GUTGM4Dh0VBrbIoX2pMVFxcLrqneoJSz6MTyAHboVN3Yob6MJWH3MkGOqUBbj0hYux4BE1gWQybwKgmou4VFHpj0G8%2FqnoeAUAiOASPTDBeyyUzd%2FOvxxg9xMkLoCKT1VTgfKHEy2oJ9rJvIaqcezLrd%2FlRWAFoYY4UQbCudJsmA%2Fjh6eouMdLbX%2FCk6xdoCl84EWAK5xLlDz31P%2B6bfqYbNJqwXbT0StiI2f7pjYDetxFoj2DoXlICmVKN%2BQaQODY8ZVlF18v6K3RHLSSMHuIt&X-Amz-Signature=e77c8133bc83090f3b8eef500a1297198cbfdef2b357e580afa42ae76d8d3680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP662LEG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGNhrTnnuCGbB9DRI6MkHX7c%2BVXJmmW0MMTwL%2BPNqmrAiBS7qBw%2FgaCRL%2FS5mv8lz1uERIl7YMTT1gDhtjtaB7V9SqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPoCFl08pUh2IBnEiKtwD3Dk8rrHCdm4YvejpTvQvhlISnlAYWUEGpzhAhhtm3xmBOPghfu4iao7SQs%2FvfgAVh99m6JZV3%2BqjIC0fQCpAmlvcnmhu%2FV1SIg%2F8XwX3KBVCk81STm1j26428tseRqKBTZsr6V5cWvJ0M9pdIXMZoMVcea4DHBlsNOybY%2FEjVe0M57Ge1N1eXOsVi5S3qkHZvYCz1MeusPRzVtIwCAXyti%2BwSX2Ayr41ukyOhrqIxR7a4SQVLUn0th38Ym3ONabU%2FfmL7UYYamTo0y%2Bc4owTZr8U5M%2FqxRWad9bPI7bp9C%2F58CLhCMGl0XskCG1uP%2BIi3OkBKpTZvP9xogmAo%2Fd7tor2oZuGf%2BP1rzzyt2AdL3T7QNJvlkVHU51AYpKtiPV7WoF6gMCjPLhSNYcFporr8AS%2BhEhH954%2By8kYrQ5UB2dg5TdS%2BGXdjR43LmmOuxV3Xg5ZpEoXfFGpIh%2BxzO6dY%2BE0j%2FAKVibeeyBVwcnDq2SSWd%2Fhwrw%2BhNtHmNw933YkHi%2FR4rdaVdGWjqoQbC5YQUeky8X1E5UtGEdJaGU6yrPEmnHcPky8CQe6AwhA%2F9jUSEXQdXGyK29AtJk8hTZaKNbjqAuvjVI27xr2rAuDfhcdr35VrIkGYlDvgzUw9obcyQY6pgG0WsVfyDynDl%2BjfEF3BxuUguYst8rroq26eIIVx2hH8KU6yJD2s%2BE8qt186zc0fGHLld8p3qpXeBfjYtaHS4w8o5OOg9w1ZXrGOcnTgp9hcve49glFu3BMcJhVYWgUdpGc7aGIHWEdc1yWYLiw%2FbWSjLKo8d6rgNuX8BqHvAPgBUDl6%2B98ldneO8%2BPKz20EJmaxzNmTo4VgjHg0H7uJtuZZdsx4qvI&X-Amz-Signature=a34aaa53ab3453d2fd8db75af610fc81b885ad6444b2e363afae04c5cc1cbff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

