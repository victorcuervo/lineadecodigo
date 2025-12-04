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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDK25L6C%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDB4DSbGIg4Hhjk47XzkjEEQ9CTYYvWRNfNbwUsAMGkjwIgV0BlI%2BD26zJ3zlxy7vrbmxGiTOgsCnyNI4kbdkaekPUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCneQpueh6HxmpK5yircAx%2BZPRg%2BuUOoVpzE1fVCjNpKJjtUDnTBG%2FQJAzl7gWfPLKx%2FSPHbOlPsiFH0sZWos%2FmpmG%2B%2FlsB4ijj05HOU%2Bvcik%2FcraNPOnzliCU%2FeKnyfd9WUzo%2Bd9GtKOiT6QO%2BpaTljXdzpfotHeFCCrfjjmhNi5Pd%2F5NRfctdkh%2BKDgrJh15wXRsGGNu2jM5%2BMl3uELoZN80Mtcew91%2B3Fhbyyv1okWvrscXR6FstzVSMja1E3FMwsQlqz8eY9%2FG9wLASSiKKF6yYdMRTtTum%2BEXB0bUjnUOM3nswiW2Q0CXib4Xj1kZRGg49s5i6x%2FWk2Inm4KbBjeY7vzI6mJsjXw8iDhU4XTvbzB%2BkC8XJQTYuzkMP3mG0hIF%2BHkiidt9fyDcFxwa04fudfN4L7lgd0R6t4HvD5aDxc94XunPjXVWpwikRdYBqQUcGFKl9YO0fj%2BXEnT7bK9tEczOGyO%2Bx4g9Xr1iRBem2yFLpOaR3kUgghWdjwR0Hie4%2BSVqpnSC2QIuwHyaBZGW0SWrrKy2S3JRhk4w1zq2iB%2F1jo1hnkfD7OX0uPXqAVrhnSWLrCXtTfcq9pZCiNvO%2B2YhMiJNSQIwwHNN3zN0SY8f1nXQcQ1zSGmEkWstYCWkmfWw6rGnqeMIGGxckGOqUB1B%2BG4tMy8y9uehJsAsMu7MYPr2dSUeIi7dfUt2xlAFm6PaJvARtRMVgWLH2lZbWY7Bir%2Bg5V969NmOBYVsMm%2Fnc21bIgxVEIhfrhoS5dhhAEJOjRiVOfwSg7pVcJ3PnSUPS3hUCC0WenCf8XXafujnyufS%2B2UqoCLaUP%2FtdFSJv2vAp0hETv2hlwR29kzXkxMxul5KLJjaTlrAuX6lGS2tdHE68J&X-Amz-Signature=a459dec2fadc4b3e42ff954bfb706087934b254d9c126de10788de653131253f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWRGMML%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC%2FpQSbgRdSz4xN5%2F38b7AbtgPP1hEk%2F0o%2B%2FqPkUWYmRAIhAKiAHgbcr74iVMBJb6agb5gTP5HsFQ25L5dn9qAf9VCBKv8DCEEQABoMNjM3NDIzMTgzODA1Igyt8AeECg3m7jsSa38q3ANiJdQ%2BrMY1foyDE6JLgP6hSnqYIC59mgAprrDKTvmTUNtXs664vhCesXvPjKXlUX2IE5NJgtVq5a8AV9hIFi1t5qUea5SKn2YsYNGD1S47F4AOgJLKny0MLxAAXBKHJPyYZFjPNuUzueoGOV0DCcgtiObx15Ix%2BrMfv7mHhras1r39P5IpsieCuurY6htuZIUUYQGy6R279p7hsuyonxr8xCOqci0a1I%2BrS706OOa9deDbgIoGB4cOxuZclecVsKtMOvsFmTXmWH6rc6DJB1VPR8i%2Bu83qxDJZr28oUN0UDoMveuJ4WH%2FWo2bdSuPfkKw5CXbk9yR%2B48CKfQbHM2LQvm2qeU1rQFi0wOA4gOmWX2SdBRG3lWpKrpX4b1THr0rTnGxJBPGfl57Wx4ZDgwuQBj8u1qNyUdEeOrDv6Bx4wCot8xYntKG40%2BzBxc04B4NvjCC0R8S2OHSIFg4t1LlcoyGAONUtNV4FD3R2RD7O8fw%2BRfRve0ZANVQNz696fiB6GAHmWXQHn89kRhf6UpDQFj45iZ%2BP0T9vQoBOf4GpRcJ39wb93m%2FSZp6uoW6A6nFII8%2FnJdnpIbVl7bW6DLopBF0iqYyFAEGRCRezZuduCb2E9EL6WRUNt1m1UzDhh8XJBjqkASdRO1JH%2F1FQLrMcEAuwNwDh6KsWZfXS2bqwDuFvShgpKjepQmTF26ggGADB0gK17hE%2FxWpR9DHEm4g0v6iNbI5AknOJz6sJ093eAHLSRmOn1RrCohA0uRqhh3HxCIzPZ%2BEIoOfC74q1duPQp3X%2FP0NChwi7J15MWP8EnZNaLEoIE8F51FhydZzQieKUiZjAQttYID8YXRff%2BEKL0jeJtCO650UV&X-Amz-Signature=088e479de9e58c1c04001eb00b9dc5a7d595f64f4b02872bf3b330ded40fa3b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

