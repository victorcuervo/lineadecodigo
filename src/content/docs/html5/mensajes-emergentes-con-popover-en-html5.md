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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJHYNCO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt1qwLX29YZYqklqBTZhWiStYE34XXn4cvPquJotZ%2BIQIgQTeg%2BNQs5DWNrF5CINkaTSUOJEg5SAsjj1jVBepxP2EqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHNbZSa7JY%2BNSAn3CrcA%2Bw40j7FiPXSGnteSgrklYEM8g6xn8IHG8W7Lswp%2BLfjAPkRvArpI5yi90tLW3825qxs5kFHDGT3wMVfMHuFRMIQelFJ97OX%2FAfrrMGvvzjVAXUsXIPWRGhYPbMl2n92j345I4nwcK6CSaeg3gAMEz3GwQIA0%2F%2BknARp0fW7hM9LsCbyBflE0Zo4wMa%2Fyts%2FsfbhBcvqSJgvu2mk2hH1tpVPu97b2SxyF2bFTsjBC1v%2BDuRN%2Bq4%2FlWkIrsuOipOGjNfULmt2jC40jjPrRMJnl6C4fvoGupFUPiXaAFHYqkAd12RtHXnD0NhqnbSN3oIVdpW7ASfjhAF8m%2B3mcTWc9L0G3XZH3007isQZozcQuBEcLqSJuQNf5o3oq7bFhJb2b3ICNxCSoXZXcLkB2V3088xJRxEFFj5FHZM8uDJl3m%2BS1rGhMUVT%2BzRbnNNTdyUEJMaTUajDyqetlWp9T1k%2BOJ1Y3ef8CXKzq%2FYRjebYT7Dmog1iOSIPMPzS35GFW%2F5Rhfz3vgN4fAchkt0cEb4TuC1zU4XlEjXOlhi39rFW5GN30I0Fg3DLcDwLK%2FA5XRnYqFS2j7zOwlH7pPVCSbZGQvaD8%2FAa8xyZlGPLlKBFiYXsgaN05%2Fvra30hZ7ZdMMrc3MkGOqUBKdwwq8t7Ulsa4EtKHQMMwL8Zkucbg7F2snkJqjIHaUWlf6RDc3KMGTrAby5KYPDt6Ae1c4Y5I7Uf3iofLrfBYSU9GJ0McprS2CyYXQndbnQ0j%2FxLRvLz%2BA3soliPCuZVUb1gziJ48wshV1JBgoHbfkoJnSd5u6sv7HIxi7ZY%2B%2FuA%2BIglab1rHaI%2Ft%2FOX1IzxdzZLgQsDi9WSm8UiEJFobICLcYu7&X-Amz-Signature=bed51157a07fc739e19f74e76296b40523f04192aecf1099707e138c86b55379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W77BCO5R%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMLA6Kd63j%2FQMad95v2CxuUvkKZh4gTjIp374BEIjXMQIhAJaVWBumvemGLPaOJXvEiNEyLqB6%2B2BIMXhW1s0EoFSaKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUiH0vqLm3cW6pb%2FIq3ANxeG%2FfXokH8Zh%2Bor6yBuj6u6JhpFblauH9dUTneDv45lliYklu2CXv9YNOnfUOTehk2abV1myhQPxzlybYKNO5TkC9HmehSWL5YlJ7sT9ar5sOb5EAbAq0eek42%2BT5M4juph9eIuv7dEG0lXFoAk6b8ra9Nsxg8LUsmgGYCYf9yty35pPXJhN5cd30r%2BqgBb%2BDiTH6WV7bt6s4T44ljxItpvg60xUL7Ux6%2Bm%2FCrtZLokRBsC0QdzS%2FaIoPhOW8yHdkzuuBnU8uRYQEhWUqbUh7SeK%2FiwwkhOHHZ%2BBoQVl%2BX63I611xlL5MKbKMxRa9Dj0ogC1o0e4BbcM9itBsLEYJWMFX0%2BtZ7cetiUiCPyZarVzKzgSu57BXD4WeW5to7cuYkmdnX7hHedzR3kHiVfKioIPte%2FpCYB%2FXz1WcUV7Bk9a1JIfRUWi%2F%2FhbK5nvPIbqMUIyf%2Fjx5MR2kjcO8d6QN2y%2BTQ%2BbqG%2FqTsocIV%2B67pdOrcEDnr5lcW9KTvhokdIJj8eqLmPjz7B0picTMc7f0FLdcmOLGteV66uhEn3DljSbiS1x6F0fZ0k6NH2t4%2F4cuQ%2BMbibPxN%2FtTDWleSEHzarHXTEQu9y0pDDGbyGDBU6NeqfuzPfLPLf4KLDDI3NzJBjqkAVUb2%2FrGnWIftndWT1LyDRBaa0Rw521pa8RLWxHTFQu0LLV58HQ6c3QYE8nD4uD%2B9ugzReQeLKrR3b1d2pxIKau%2Fx0Iv1pDJyH6OmU2yc64pNaoGk9nmVzDqFAK%2FXj%2Fe6jQpzw0vqmjknjjXqsv%2FvHvh%2FvhVZO4nIMAVB5jqcldbMIkdqUfzWPPQX6c8%2B%2FDU9oRBNyKzHvPa%2FT2BFimrWH5EGmLi&X-Amz-Signature=9cf84344f7ba6f9fbc2648233e77466dd2d0a6b6e12ce32c420b89c449df9b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

