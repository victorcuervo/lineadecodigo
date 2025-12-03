---
title: Mensajes emergentes con popover en HTML5
description: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
lastupdates: 2024-01-30
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46DUPFR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIH%2BBsyG0SFJ8VYbMW0%2BQ8eGNaKJq3BeJB7S2JwdJkPABAiBeRNrigQ7cywLkLkQrD5xjuCzpHkoa9uw3ycaZ%2B39Tlyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM2Td5DDHZnOtGFhqRKtwDclcjyzc2Qw3H1tKMJyhjV4K%2BuFkxdwXaEoakp%2BR1sdka0KpolwFnlJz1g4DVyRcNpfiu7JCuSSKtKiIO4WPlCaPstwJ1gk3z6SPNcUqU88K5NLJ1APQnbLuo7gjQrApFtupM1tUZsvkwMSaRGeWCx9AAfkYJ%2B7h95tiSOD8e3wBNL52bKhWssOwdlU1ALtd3NKN79rx5qrGGW1oji6fb6Jk14EGPzw4RoIVgaa6uBEFzDrvKyP5IJSgiUMyonyj0ig8mxwAUCD62G34GsjBWxj%2BU1GD3ROfwlc634x1rWH0fV3FRpH4jLcXwRZ%2FGzYzvCb%2BV1l4dsB45Q7TyrQ7Dl4573OzzAF86UQR%2FAvEC3riVqN5s0D7schuR7haxNrFYBy4w20pqbN%2FwjRJxw1dnqxv7yG0zrQQG4Z5zVQ4VMJF%2F1dPaV5AvAQw%2Fsho5Rx1q1aF4OD0BKIETY0aF%2BqV4nm0wK4Bij8MilvkvnC8EjCYA88kcbd3t2GXxaC7NdMRel2vtEWVpSDfoYJiCpp2qgtGNMJgTlB575WufmDCEqgab0v86hWvpVBSq7WyuifOxAHJV0B62J0SYuiJLXINW2rHlxqv6fMPGV8WMbc8n%2BS7GqgR4RAR%2FOeo%2F0H0w6L3CyQY6pgEpprIqi3%2BEcbP6abMhKK5nVmuQEfCgrkKuFT7Xl3k5Jk2vN5pHaRsj8lpRozpnbEpNJhbMpp5tG0olfKDtIQipquZtnXClgh8b1GwbHKd0WvRcEmv6QwgM50RhNcQt7JUk1kz%2Bc8e3h2tO3WIj9sKUlzEfKqTmztxcDVfi27ezEVQ9m5AAKWNslFOz%2BUrWe%2FDdqXi6ljk9nDUR2mucihuNZ0ISlnYc&X-Amz-Signature=cec7cae9deeb23539b86688365c9bd7a15fb0b406fba2c80a2ba69a5110149d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXPJC6C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfj7sag0i%2FAl%2FnQ%2BYsxknJ8ziBKJCThcUV6BP4i07XigIgMH7%2B0k9f5bSr50NjiKAieW52h16d3pecbfFl7Xi8HjMq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDBPhiNufTQ%2F2qSEDCSrcA718hXNihZ61aJ4qtfSG%2BQ9jglHj6zv%2B5H0gJLzkIQ3jwfzhEASfzeCw9flaXFXHDoXgyx4ggbENXICHJjkks5jq5f4s4%2FpG3ww50z2i1bxJhXdH2dB4tDoNd7pEbDL6FhdfrPodfqdyeMcSIPpyjTsEdPAEHZGga7PpEHMMtCVe9yaI0IjH9%2BUkFa2a1JKOYE6GKiz3hv6WMOqir%2B4ksFccx8aBjE288utcr1e0fXVhNp0aSxuGyZDtpxq1DEGvsUe8mLhHyirHJSUmjpPba8odRwUgt%2BL8H0vJbFKWhuGLlV8VpwruU4mG9tedmTQKaRyuufAfy12eTt%2FkwVTfidjwrszf1lnxy1i58qWwGvl%2BBWxFthLPMlR5JM5VJlop3FMSgQ%2BwEeW%2FXWoxOfobC28GegxX%2BYc4teJQeqUGjIHu9X4MSri69MboKyk8xp2wW%2F8KGqRHbGB4b19xkaB5KuyFNt79Vevc2544MvtiMdbk6CZxrsO7nrkqjrM%2BtK3ed3SISP77ZG2gRWKbRVA2VR0Fw%2FGhS9inZT30M5nvCpexsKr55kh0qAOe52JRUKUXjfDhsvQRRQzS90UYk0EW8fJmIu96oNZ04RE1RR9qMZK3y25RgXVmw74h0CziMLK%2BwskGOqUB6d7eMxqHMkkznoUz9g7kbqEAv0TFBs96hwKhdv%2B3EcCpzv7Pb62UjQm0ZQiW8Snbi10HfnXUR4M%2FtRtCzg06vdS%2FZ4GjD6PZwvUnxXV1XzKat4PIPr%2FTkuh02v9PViiCWO0HOSY%2FDh3CKC%2BDCZZFcZTcoRWVuRVdsnrcru3QFEy6B6oZ9dGbao%2Bt17Tqil%2FROg%2BMQgl0j4JxA4lUlEHfl2eNNzwT&X-Amz-Signature=36e20f2aa91ca2ca25e4287eaceaab448974d393a5a6ce0645703b23d138b8e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

