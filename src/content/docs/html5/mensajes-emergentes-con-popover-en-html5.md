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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFXTD6IG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4DYVRT63Bj5cP3JVC2V5wr0BGANJ5KhWJRAdTxhYO2gIhAM7BfQ%2B5WW%2FefoM%2FqcvvqPhmi5AUb3CIf7jV%2F5YHuKoAKv8DCE8QABoMNjM3NDIzMTgzODA1IgyOi%2BeiwNszhCP0ZdMq3AOUKJBxwklCPouOZNZWNiySUOgaUx1L5%2Bjww5JYnkfEue4ObkT7v5P0KAswNRB4wPnghcF3%2B%2FGfM8Krc9jJSlKpMD2yiYmbko9JlCXB9Eq5hgxEY5tTp8EgOVG3vAKtMQoxx1PQvlSsvtO5Uh6KJ3vqqFjJWBkjDYSn7P2ptfXQZ%2Bfh%2F0VvFOsT6Z6HjpW6eZkI%2F6FLpYFlrfZF4hv1SemvbiLHqK0Ypx8RPrgtH%2FXmbvJK%2B0ZwiO%2B14teW%2FAYFWbOichnppnKZwONk8roqwPGusZDNBFeZotBCNwcrJMx6TdfmIMzJkV6ty7yWnKX8PhFRSu5jTPKfHtfmViu3Tq7JtB3ZSwYy0wjYN00knNe8R%2B4iYltZiaqUJ93vRtUbg9uEqpn%2B5QOvidBE8jaYXNpcP%2BG76ic5ur9I8VU0xzCBn9tvMoGinTlrBejdqWibvMzBVtc9cthV8FII%2BUcD7CzWfOuPHPds9ea%2Fu4lWTRcO3tZXF70LJ3PBqJedtueIYBWFyG6vFs6qrJo%2BzmNq5qzHRglleQWDYr1hCmUb9ZO6PCKzIRY2xqAtBcvfF4YflYB5KRRosrQxRDBPT%2Fg3FIxqBdkjqP438U0LNhiz%2Bbu6T97F%2FyJu1i2wxQ7idDDujMjJBjqkAfFy%2BVQXHLHOWzzhyksLu%2BarwH2PrFvO%2FGTRBHQgQIfylDM7niesDY64eWnDUszBeB5Lv5e%2BD2wTEGeYee%2BtO8G%2FiulcYaJPpYcdqY60fcu4%2FntExZtwkUqgN963b1J1N4RckdeTc4P2yufQ4jil53pthRSZbargGwJEPbGssg0serzg8ldT%2F8gt9OXRCHO%2FDmIdeXII5LCci2EBPhZ6kInbvUhP&X-Amz-Signature=50d63f4becf4f46b0d9ac3466ade0935ec0894218da05880d418c005a396cdce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JSGL6RT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICswru14ADTtxoCnZ9cVAXncx4xT4fotCll1bGxlA73zAiEAo0MsmhWG2tMHMsxeEwCEDWwBBxyudQiK%2FthtHESjhNEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDA%2FwPj4ZTpIMNczn1CrcA1tLYUggvgBDuEuw70YJEGNjqr44tVLEzl6RYxgfMwzVhtlGzmAcbvr8rbIz3xNK%2B%2BduZ3YlsB%2F6VoiHwJdGyf794tzMfQtySCYmo5B0nwM3rfwJu0ZgDYlOP%2B5%2Fje3T67Km98nUVudRLAJ1C%2Bcido%2FhDzudgz5Nbl2sQ9hQm5YW2SM8B2SFWdMEQx2wcLTBgJxzIjQg%2BemW9SiAU9a3EvTLMVMPbPzk%2FmhljLLZ277vIY1zFlMbGTI1IZkKdxDqV1QKi4HTXoaM6yOoj%2BYP8l2NnwyVpuI1MiBgEepjVMKK9zCxlzD3X%2FmjQAppT%2FGCNvQ%2FZ%2BULefyMejCnzre8hNVbLrtkZiE8oGUKHPar3D1tAV%2BRSopjUKOJ5zHRHKbekOVSsruDAt%2F9C6p%2BdwnaqKI%2FdFS9Q6%2BR1sdV9jger97QU2nsfoMlEyP0on0Ndm7fWRGsjVX0inlvkvpLghZTDbHXJmjV24jE4RlbBXjsvtX4XtRdy71Oj%2BoT1PiLSOpldvb9hz4bojkY1yAJ32HnVgrC3ip%2FxucWqYNh2zH3evygID%2F2VAcB9YA2ROwVrdrwoxbHgRV5pYqJpFCKvsDfk%2BvRwuJfAar4lV6y2VKoo%2B9sE34RJqENpNDlplFkMNaMyMkGOqUBtdyzhE6NWA01K9OPQ5qRBerkFojMjaJ%2BXHWksKIRp0nyeuVYblJOe2kx6lOSsy2MEK1sO06qyQSu%2Fs7pty9Zmaxg1lkL6BckvNl9H7eXbfZW7qTwx3zwbPMt30jqUUHgxbn42Hoqv72RFhbTxd5K6frIdIZEOMZRzj7OxLRznHGVEn8lusnJlH%2FU%2FqXtLCrWaVcnDflsCm%2Fri7OGMzL3f5ZNnP1p&X-Amz-Signature=532e610767a6b5f4adf27b127837e4f8d8dde971c9c07ce0345a91d93b47d878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

