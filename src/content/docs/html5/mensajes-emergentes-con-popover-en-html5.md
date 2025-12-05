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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRFA7EC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYfNVpvI2jTVyq9VjLy1MSYZEHRDxkZtB6GF1mm%2FVKqAiBlu6Vrx7GH%2FyQ5KO678ybU6LycfOY0NmfNufZnUWyV2Cr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM2rUIUm%2BQMu1fJCvFKtwDmjx5G3c7ZkSR9gC8gMT5GcHxXKciG%2FaSGuXLRtdKa5eR%2BzVXgpBS1aVj7SZ3vmibW5kC0nlABbhafy0MeCHKtt%2BgI1nE1Ycuj4KHKYG0B4IkdPmIvwjA4pmHkDFFW2HEz1bk6FHLi2CorIuJPlGLvdOsD2wJjWkSOpcaCKvUOnowtha7jp%2F7HPGDb%2FcezWfUb62VWAdwYJFmsQCnTpUMxEbeY38kqaJWHmvYisjK%2B7LITJLf9Jgs5sRtuXIGcx1h%2FCGimkvROu%2BpPCWTdwKm5gb1SdhyYfD8asn5J8iy89eTbIE0wIgfb9iP9EilSAUEIWRTDtIQEhYbHZPa83T2fI4egC4Ni0lCTKMbsAhO5QprUxsrADKTvKhpVVSB0hS6ej4BzGERrBNaE1Dmnc2mQTmRKqvkssOGIU%2Bvq7gNYehET1esXko4oeBJaG04fWO7wX5jseKQuz9o1vUO2mXl76%2FDY8e6kKswwsncZgkV1%2FHM2UXAmy%2FqWQHni0Vv7ahQ1fI5IY9lpR23YWsnREZiT6p6Jx46BFAQTp8LOuKrjzlUnLHn7B5nqKHy7p1ShBZWa3CSMBmF3g8C73dVj3je0kAcyhV31qU0w6krsDlHcD2%2Br8vcsytQrFLZfhgwr9DKyQY6pgHdv%2BDWUv2ul1AV5%2BTD8fkYdxMwbCW4t7FEXUFP5U23JaSoTqJAECySq7Sql8pC%2B88qERoBfMlQ5886JUm8K5%2F008aUgSo9zz%2BBgCTP0OKRCwrqxymx3Z8qIUEXf8JA3dfp8zFK61%2BW8fCe8VJ2p4H0LPFkHGhA%2F%2FAtTs87iC1xXpcqBi1Pvye78%2FY47kTS43ipsMMhe6qTQRJ22bft%2BGsojYDX0thy&X-Amz-Signature=ac3d37ad6229e7935cc4b1a5486b4b2e2a966d3874832dfc2622d3dd3105315e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPU2KURS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRpPyVE7AmSY9DBpiDvkvJBnLEz1iqBsCW1lC9nttVwAiAVWipViX4nzoM7wbZBfBJpV9LObx2iXlA0xhTLVkMatyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM%2B%2FKcizaTZ7Qpcm4pKtwD5WsdhstIUSY5iJT8ZlSD347YmmFcQC%2BEB4I0btXS3PgRxDmD5f8mI4oXP%2FfsKK4iPyuZ611NkjwiJ%2BRFehv4q8FCT91otskF%2FyZvu0%2BhrciDM1QhSJEZa637lJ2UvIUEZHON1msIHpURCRNfHzkjrtpdTzUqoXXWq5mdUjt3y0XkzWMhrgaaGUJnM5hlmcA6Wz6zU%2BL935WwlXw%2BphkIX6R7jIc%2B5hsYmXo2GvpWKSv7%2BD4AWCOuJ2CiQccToVkkQpSmuQKMcft%2By%2FcTfLsobqwJJLwAx9WtHFamD7n4ukJB%2FBCC5EESqI9SUFWNXrElK6Mi2pXqY96QNuIaXN8M4k4cP5qCGzovaLk24AWPs5Z547T8cS3RTII2Krpsgh1nnVQ2nXyUTuR%2BG%2FZJHY%2BIDlOvcoaDqnrTcw6XCNQbhQ0%2F5%2Fvbh8yS3pJWz3Efx%2B%2Bnp6JsNy%2Fn1KlZag4jHNI3UfdYnGZFWyztWkj7t2Pp3Y8VIkxrt4kUehG8Qxqu0Adzi7pUxwMSOZXd71ujktdBddbSK2iHBJ5V%2FzLLxVxZaMTMbIfMzy7OfWMSPtuGKkiMBxtRuRALtx9zwf0W7W9ob0xa2L1g9E9ATwq5mlHy5ku45pqT6MFLq4nBKNow3dTKyQY6pgFniWrXTw2n%2BbCdd1OXSQqgXWoV%2BGZyUun2%2B0%2FPPpINmrDe8TvWSbMgg872FCCVb15qVrKfceo0iqiUorJb%2BUrFoHwYLr%2BmE25Sy33YL2o6Ds4jImvCfLPdBcWyo%2Bx1zTMh29dteaFFMwTR3u3uSG4Qx%2B0wAb9QU2YnkmbY7Rwt1IP7ATSAfhTUgjWRw1AxsADQFDOkahUJMFLf7vND%2FGNPDqiKt2Oz&X-Amz-Signature=19eafb194a3a46790cb1c663577cccf6e43b4e32c3d546148f312248dd15b75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

