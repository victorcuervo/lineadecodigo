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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGOZEQU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEWJuWXdLqi%2FUt5QZvsxXpCO8LjLxnw5JPylW8gQvedAiEAtyqv7OHBL%2FWG4I1lqpSsoE2WnaHMCal5sI9%2BW%2Fif8FQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS9UW2Bf68pmZia%2BircA1NT1zMhDRFIrLKGk5V7QUbqXpbKYeXmTIbLXG58L45kW6QchZ3zXBsNIttB5sfWsgf60uvDZHVIJYaOe5tmpQE%2BTrCbKpeHkRqu2y3S6rzUs6qgy2fcu8%2FOihl%2FTFfhHaVdgWNvnCrYwtZph0bNta5ykqq3Rr%2BQtbw0cdmA%2FXtmCkc4zJhnz0mZv0soLrLlKSoB3SDpaonVYVCzOt1Az06EBx4v8WBCEfq5BrKWiOdJq%2BapCEOXH6ZJpXkfZjQiJkc92%2FTS510oC30JydyovVieuAJkq4ZtQz71APYrJCp3lWdPQ0sNZXDoq8bG0PCvI6FilbBAcpAw%2BT6dG9jO03o09e3AkkSYaXQbrI3U7GKFAEoAu4jc7IrAiRTm%2FPCnIqCWHxC8Vfomu5siTkaD2QKE6HeV8ToETlwySbooi0xH1EFKI7ImLH%2FqTqSq2TepRcA2sR5Bz1F4DlY9wWCRmxFBzpvqffqc%2FzS0JV9Q9YtdHVjjrJ3JyX%2F54u86MAu%2BAT6%2FTbc9vbLHzY%2B4eeZbSKNLO5DX083muj5cxu%2BTJlaaxU2pMmVF%2BH7l8kyBpUsBnLtljyVdjKAshX2X8M3A%2By9itqPtzcxJCNAf9GU3IqIkDPh8OUfm0tNfLCfGMK%2FB28kGOqUBR7Zy5a6fNhLa0JtWDApeiWyWHkJxxns7bc3xxDplmfoQyY3BD%2FSGL4ZJTWy3Uv9kmj34GyCCYEn5WaYJz8Y3Tm5cOz6%2FGBRfhOg2EOTLxw0rBxIG2BYFL4lkzwFiKdwaKMmGVcq%2BW3rodkawOFqg7Api5cC02zB%2FGX%2B7nhA8kjezzS4Q1aptESSHH0oG2Lq7ORSe80Onsk8RX4A96fEDpXToBHgX&X-Amz-Signature=4d2c0e6ac1a0c7cdd6aaf90e58555e0e5a8d252cea5aeb1d9de6af48e6b02427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2OKK4ID%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2JynGfYYQBrwRZ07DYCFDA%2BYANx6lPE%2BpC5CycaS1uAiAFHGnGkairbHatsiH1zfrQz1ae7Y6WdkJbPH3D2csgzSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFfd7FlS0aVdUwAcQKtwDyot45ftk00a1SEjInYsrWaQJ2qrNEcdTmDy%2BHklm0lesZJPc2qok2Aggi7qDs11o9QzxC3%2BpUgkroj7IYy1%2BUvssmqNPI53nb2NnO6rNwRD3m7y14zwHH3mIbZ%2FU7IdW80rQJ06yf42tKFMnNtSl9JggemSvU781Li0uUtMo2LjkCbawGax1smaIx1Rt4ykfJEZwyebX7Nr3p9eIJoDKpKZ%2Fr6MaA411h0tJrTdGqb9EIFvCD%2B583NWZ1TKjHZpQ%2BqnI5cHIXtGXysaQ0neZigwYEY6WLVYz5%2Bqqzm8pcSYpVfkUw4jphVxFqNhFMsEbk67HUSKrcXda4%2BY1Gj9JERBRj1vDtJFFJhp2oa8PCqCoaPWkHUG%2BEqA6Xikvoo5h7iXpZkWRUu%2FZzYUPgKmuRUpvTTN4WxP%2BhMmambnu0NktnDvS0XJLMmJ%2Fib5BM%2FrBlKbWzN0lecYCyVjBQMhq%2B5G7i4%2Fg3QTsqqGANoQ3gJwJ%2B11qgOd9s5zGFi69tdh0BN%2FwS4gdXDwspEMFho4RGUpvdH96xOAgbGTBxYbru99VuVGNymK1wMeCStIPYuMuRuJoS31%2Fsjv18qeVaTmUwanDed3ZbG4SuLPIkKPJlOQ5NzxIk70VL5lDICMwqsHbyQY6pgHxGjiCAlFZoRilnskvOfnToeUtK8XXwJKxCDnnElktGg0t18wTjrw5itZUFMVeeE%2F0UUHI0wWeiD481ws%2FIoDv7ytYdbCFTohrzcwTGSaeOK6XtbgiBaikKx8ZEJXbBfCLZxGZDG2g6LWedZrFnXS4X4yPrWw5UdUulBw7Dvx8Cw89fZFtRv2g%2FA3pj40%2F821xQswejuTousvqCVWgATCc%2FQAzg166&X-Amz-Signature=7b941f65db110e60544e5a4fe210be206768aaeb82b3df97b1df00cb6f17e08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

