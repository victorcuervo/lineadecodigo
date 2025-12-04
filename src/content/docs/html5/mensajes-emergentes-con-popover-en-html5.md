---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastUpdated: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625O6MSJP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGpI33W8Abgp3OHD1becErRga4f8wn%2BZYDbEaFg52G3RAiBGa2UDhZ2J9aYfonOTQYbGJSWafxQVqEmVs%2BKCooDN6yr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMWGFG2JJlJGL0By3DKtwDnYmHMiz4ZWdWFK%2FU0JICLLQbQNAsxOyLyA8fYYVrl0v07Qgqr3%2BbXh%2FdOyn%2BUGQN4dYcz%2FOHKw2d0pqYc9GGm4dpQM4vYt4wYETwlYTvG8cGpVcBK9n4Q%2Fx03PozEUikQRv%2F6wt%2FDmUAUAFm4XNI8%2FZlUdOiTj2ovlJlLnYcOEvwHeHeQUnjNPi49b0X2qA0OkIzoeAFKeInhd7tFmu8tMC72QxgmcJIBr9BW248T4LA959II7OB2iofg8yWlLrGvyYMgK%2Biem2tvDo2Q%2FZE4H4961bYZ%2BxK6D%2Bn2fi%2FesSC8wCyG%2FEMR5%2FGbqvowqfY2dwF0XYTHqLGdanusvBe6%2BHTJlwJvknCYNigVZma3EEg%2FSZnGosWV0fgVDrOa6osyuPxyt2%2F5udJB4fOL76h4bLBaFcpmYqVgD6X%2BS4vykB5gny06YoxtQOr7%2F%2FCdq7gtP7rgQu9VwEjusuVNS9U051USrVu01iibQiO7G2g4v%2FFaqOMgon3btNoJ%2Ff4dvVPnS7uPDydh%2FFr5dkwbBSrtSICLGin1DmzpED7vQiNAmDD81%2BAfNe%2FCXI36RsbWZIO0SEo0jNfObSNvuOZT1nhH%2B1Fwo0ujuTleARU6x7nBRSTlTVetgu4K4jMHHIwgOfFyQY6pgHNRgWrc25QzthS1Zp9wwYpAYlpdNHe10nyRbtnzYvP6k8mMP8UYUFLaxMq2YMw5ncjC4ilKfixp3C9wYX6Cqx0IjXZ%2B14R1FUMkxHJ0MO2ZT6W7E5B6yQWggaGdvhL4DTK8EJZS4Q%2B0FvsQ1CIKEXCucL2CswD8OfXx%2Bvk0PrBX0OHLNnTvkkDoWVPoA9ogsUrRdf0rO1tiuQcM9V7cNNC%2B8Ymy3ad&X-Amz-Signature=2cd2bbaa93314d8f86d4d61b52e9180ddcd948d8654e0d3132544f642d27e685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJOAQ3W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCP3W%2BefK3omIxN8yCdqOqI%2FftMK%2FPyxkoUaLZcDWOByAIhAMFhFpF0SWmtIn17iV8b%2F0dIwEE2uzAll67LOoyxxWwqKv8DCEUQABoMNjM3NDIzMTgzODA1IgzFUYD0u%2B5ORgboPI4q3AN5WEzLoAxTNoIjceOF8IJnge6dpZ21O0%2FYlZ9YVnbIynmjDPjp5ybe3AAYfUOw04Yp0vYnsKS8hUemcgaP4rLy75M7rUIOiRUxH%2BMXiJjinAehhlPIw3ofJTzjgMe%2BLw%2FaqLLVZYXtpGdJNTOne8Lgv3xpkCa9N%2B6SYyAbID59RGZTIrI%2BfZAG%2Fj7NBNJn%2BtR62cxO01v9rHLBhF3o4OtyCMewIHwDMvh0976ZMLqn7NorG71oLwFuWQiR4lOwWR1usKH6dfcnIY4GxYvLV3fikVaxLAAtRh9MOBMZlhKqJcoPEPcOqpioHJ94jEvxBLmBUdjZ5HWOQYuvF%2BfIgba367YEZYwlO21%2Bz6BRADk1O%2BhBmBZPGxbZPRTV4Cmznm19myF0N8xrelN%2FUFW8V07CvXZUjJ7WTu6JLYcEmJ9yoZKwDqjZBXb5mF8U6Eyx1%2F8fFI4UL2LQvewVeJEG96ruVfckL3DwAmjNDVnNrAiFJ%2B7fTy9tVK%2BNGlVpnnGlU4isT0IeCPug9%2BbNiigKbqqOYoODSi1YimKJqLBYxz2EkKeiYUHfRlb9ylOw8L7sz5RC5d%2Bp4kADEyzGEzPPMb6ROUUfKumDICek2pZm9BBMpaD1WvqeLpZsZ2kOKjDZ5sXJBjqkAfJKZ%2BTmuLQMqBZYOFmqw7B7COQc%2FFv%2BwzbVHXH6qfMB6wZEw0P0okdVoRaJvaU12GvTiB2q%2BNwwiJ3X7jxHt4R3Z8fqDRtR4gyOlnebKe2jO7a%2FPbxOBGFyHeS1JN4gQNv%2Fc00%2FogVlx2t9c35coviWKR4t3%2FIVPKZmru6b4qzcxlLnj3DKOgzU%2FkxWL5wlTNIiSw09MHmjuDxXbkEczgiNIfsA&X-Amz-Signature=e050d691cf9dd8f0bb336b583d3a530352e4dc259a898bb9a090931cb9d02040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

