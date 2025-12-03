---
layout: post
title: Mensajes emergentes con popover en HTML5
excerpt: "Uso del atributo popover para poder generar mensajes emergentes con popover en HTML5 en los que se pueda incluir cualquier contenido."
categories: HTML5
tags: [html5 popover]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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

	![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ec9ef579-d9f5-4ea8-a75b-6b13cf2e3710/elementos-popover.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZGVQNU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCmJWwN%2FYU%2FDWoirRZOZpwP6IROi9joHcRHxBIPyabD%2BwIhAJtNd%2BKJ8ayP1oLxxCvAKQ21NxYXsWVfUWZa5TTJawe7Kv8DCC0QABoMNjM3NDIzMTgzODA1IgyCqJWNRPiNnS20Zv8q3APzA4sxrU9L82j1KexsQhca9otlAq4yJeXy7p5BAVUBwOb4Bj7%2F1H63zS512%2FcDsNVDf%2FbqIS9wRfd6k6EzzC33bc4Gb14VAhHchf40YwfbdvqJC2C0sOodkTLcnlQPMnMaaD52FeSA%2B4LCOlaDIhaDs3bKlC%2F2dHtbTfqWnSlA86D%2Fnx%2Bs8gv%2BwYdiXs0Fr6FxoLFWjaE0%2FVKI8sqeQHsPBKBSyNltYTi0QJ8FTfCP8mS0Yh9R4eL5r1T%2F%2BmTHQQ%2B%2FjLHtZ3lA1a0lJJvYLdcqaa0oiQCdl2YCKpbhelyckTFP2IFgvkBqHXM5nWQ0nlqYjTqke1n4hbY6DmoxvUt23L2z4LgK2fb2K0FuUjDcuoTEGVBsp%2BG1rQnezYsKGUFj2Lf5a6c3iGUY95LzirKZKboHPnMf5vMOmlmPaI0eU0SvP4q%2Bk%2FmW%2BqMFr0XPzKa5k5kcr%2Ffi7xNeVqBx4BTd3cKkBPPVVU5cxesHLckrgcpB%2Bl9KNqWp3wOZnCQiSZtSk48Sd%2FxglxR%2FqzDXz4lYkFYErH6EVP9tXSvtfAen0tJ7hBLqzkuguvsycHpVoeuXvUUHJ7%2F6bujXbrnH6rD9NduKocFD9H%2FnCgcf7fuGR%2FjjfdjgWI71PmAktDCmzMDJBjqkAbqd32TLNcl3l3PwhUXJiev8qPrCSLTku0zJ9l7qsW7YGjnyDq%2FZTwR1egmqiARcqzX4Jo%2BEgX1AtVMrGqeEnwEa7E178G%2B6fJZYhQAd6kS1MWZQLm2gpyIej35laaNAc4evdzn9KpvCml3s9Qn5DkmDu5IKC20kuhfdKSk1jyXNgVul06wDP0fRvSbAGyRBEM70QaEzP%2B57QZIBmZnji0H7KvpI&X-Amz-Signature=3baad8302d998cd2e1ee9a2f9dc0dd8a4e2975218e40ce3800ac52512bc6f61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/f18a9272-f838-4767-8262-4a8f1c4971e3/dialog-vs-popover.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KWQB4H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCOQlSisOYrDzcDaGgauCQfBZfvmoIRwANuXB8s6ZDMSQIgUHGs%2F9SLoOJ2WxgEkQjqOaJs%2BuOjMjFlpUZ2r4Fm46Aq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPpqFa1bCEGqviHxmCrcA91QoDwRc9TgxfZyWOcAszTxP4b8KJQRFjstIPxM6zSuU3CjfMiZiwQWspvIMRZgGygujrdvew0wA1tANyZkf%2FoGC4yl5e8CVEkEcafjyVymlaLtDoJMG7lXdsD2Et2ZewP%2F9WaTqZrFsLl4gpBt3cLJdLoy31vJJvjj9vuG%2Bktu39zNRONmwmJ6KNUd3brKAilCC7vNXGamD5Uqi7WBE2arGQw1hz6o7fM8QNmNi%2FYDh4Ma1W%2FfwbDHAfA5%2BVbkurdH9kwSkkTB8Bqfa1%2FwE%2BntQBw7SgvBKkfR9v%2Fnv%2F069qDmFRQdAbe6QXRD1tgX3GbhPX5ERIWSg%2FTE8C8B9TOP2H%2FFIGPIxzelADaWgaABOCIqt0s0XrE7KIRYoIaOOdcxlUc5T7Z01aizQhcHdTlss%2FUt3vC5rPxb%2BcfPhQgihy6Vl44oVeNCbPmAFHMhqXRHVFWGbyD3DIXrBZrGTiK49B0AUjmj2bXQUA9PMg25ZnxdVUJNNJ1PU4E1mAPgv6pKIhuuXAa2XKRxlIg0NTIhVqoFkxN98EvuXvSvuxoduoccuksw2Bqk2C53yk7NxtwgHLOjEsK8MpmHywm5UC3sPvSo%2FucZkloqyMQuVd2eBEG99b6RP%2FpoGaqsMLrNwMkGOqUBtF59WkwJ1e53VKQ360a8uqqQxFeLZR6KvWN0rUPMEEXLpHrIbTw5d8zy3U73wX1zf4Y1qDiNPh1%2Bzmbx5YBe5F3uUldHnVBpuJf%2BjjelYEjRwKsux1yBkmzXP9PCeGrJOWZbhpqmGgjtzLaVhGV7seXImoGcGbrHp10l8buHy94kFt%2B8vbYXaIW%2BmFTtJ7cRQbpuQBz%2FH5cK1JoFfhoEpb2dH2dQ&X-Amz-Signature=4bf823fdef619fb65aad4d8d186200382b0a0bf9fbeefabeb8b79a804bbc82f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos visto cómo podemos crear mensajes emergentes con popover en [HTML5](https://www.manualweb.net/html5/), en qué casos utilizarlo y cuales son las diferencias entre los elementos [`dialog`](https://w3api.com/HTML/dialog/) y [`popover`](https://w3api.com/HTML/popover/).

