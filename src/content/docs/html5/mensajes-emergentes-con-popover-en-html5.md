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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46KFSTD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGO7XI8xblILi2i2jGYikMm5BqkpUMr4rVnIF%2BX8wy1gAiB2XAflNxpUYn1uRIbXpQo67zL45t3ORd1vGcbXrfysnyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMXWFFpK0r6QdtETygKtwDKLRTH83cze5HUhbTFL7EZMtP0UGqPvwEg%2FRZY8CNoJDQCcJjm6zb%2BuhphLKxdKl7Pep7XRh%2BHp0%2F3F%2BjQynvzXyWg3dPYt8HveJPT3P7Tq3Hr0AA1DWtXezGdelIXMCpVh9Qm68A1C6P%2Bb3by3R9%2FMXgN3%2BobBxWhDzJ3GRPzqjB9tGKeWYKrmAX%2Fb%2Fhmi9cRe5F177Pb7MHa%2ByKsxaldC0IMjF7iaU%2F3AnmFoXAK6c0PJKhGji1gcXQKbiI3zSJHNlfxAhYqT%2FqZXSHmb4mYad6K550eSllTOII9k%2B0xanRzyGIY6%2FrR4OKzJPmnWbcYRCgpzCWhRTvW34W7IyhCgvF2qZNrBSzOv88%2FFaUa5z5SzfdGhL3Z%2BAC%2BY3aN6Db6oWcBpKOrNmGtZ2PVKK0xl25mawhrcEgeQ7Cj90hgGmB11LjjPw%2Bk949IvZZWvcZDQ4liOQWl7RI1Z8Rx8gL0JrKLafXOpC0Y1DTlISTSQB%2FpqaPG6wk9jHhy3Q%2FLolKQSSFwbzDyeMuSMyx8Z5uIG4QeGwoRjzn28W2ibdKt59UJSvl8LFBP0HRI3inUe44mB4TAhjkqK7rMRsIlUPpoqUlUwivrvj%2B%2BJS4OnM6iEDaQKgWyHf7AhFr1BkwicvKyQY6pgG78sf5XBoCuwFU7yfjsQsb8DqcvNXISYXEsQTp5UdaZnPP%2FF%2FYOnqcZ59HdM0fEJcmJhrFc8qRbx0SJ2kY6vWE50D6K4D4AvYsaqZ0TI3Dm9WIc%2BGKu64B5dqsQiXskcWogYpKAbaL3tBp0oUcMTjfjo3d1nfH%2BjBRv9iSXEkDg738qpLeYeqkJqTCEFUjt7lbz9H3QozBd2Y2FAp5TtHOedtC0NEW&X-Amz-Signature=a652c4b64851f912a461319c401ca28190af950823daea8630a9ce13e4280924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCLKG6DH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL7DNTeS8pqv%2FjQC5gqJrbdwkpYOAtNJ2eoeobHwbD2wIgEvniUQDngrV5gBjWyfXUbPoZuytrPHNSM4bz16YoXi4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGEh%2BGmIxfkNR%2B%2FrxyrcA2UDqUX%2BWHk9D6dVr1FwfTSSVKsA33%2Bz3TvypS41sUafQ0cIOA7vNhAj4zGcgf4ROhDyBVmWd9zg3jSTMgxbyyINBpPt%2F4tJMw74kn0Tn%2FIBkEs5UD1n5Qw81LJg6xFdg%2B0rYCvA%2BkblgfSy8v7mPFXZSMGk%2FO%2FzqLaAz7HFb4wSZ70iyZM3z3O%2B6mqa6PDo55aMddCAte%2BCgck9DRdywIhuETkZYfOf%2BuITp9B8%2F05NpFffuueFyN99XBiFq9eTow%2FFX6QO%2BFzeINmsZsrsiAR4gXztw3MDG7T9yWI4UV6Ets2fHwHgrQc9ssR%2F3bcmK4M5NhU4COByAXic8cc6S31mbmcDJWxS6GB1ZiHGj4SB7k1v3PtBI8YvjeR9XanKFYpBdqQZ3SVKRGFQZ0TQeUpV1zLdKt%2BLNE91EfqL2z7p0BpjhUKgjDU2bHaLSJGv184ZvSju0uKi2to3%2BMZZDlWnyVJqUDa7%2BaS4lehOflx058iuK%2F7j93Bs1y6m3cgG8eAXS70jCVsSB%2BqT6yvNpyNfzIxb0h%2FkPGJjIKZKpyVRlHo%2Blg%2BjQloOMP06YGJkyNLUJHMpK5sRKbZtz%2BANB6IyqbQdp%2B45jbaoVEm8ovkCUAO74v1eGegzpvJgMIrLyskGOqUBbVeUzn8Fui%2B5nb1%2FZ4R6rrOVldMw3rvECgJQzOI3ypr6TBKUsycMh7XnZmRKk5Fvi8m6OHn7jZapA0vy2k6K68KHEnvwgSg8KlbgW7j72CEPAjqFzj%2BVaDVUKeHlEsF884EmtJUk58EJ77AuK1Byb5RXunQgjQobqwJk3hc9GQ4iOiWcuMw63xjtxyBks%2BX6axJp8c%2F4wIEfqIrRPuh%2BRP7ugi4F&X-Amz-Signature=8c600094e157a60db9bc8a1dcd7f2eafa4e71a9ce69925d254554f356449fc13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

